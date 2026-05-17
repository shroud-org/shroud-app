<script lang="ts">
    import { onMount } from "svelte";
    import { getCurrentWindow } from '@tauri-apps/api/window';
    import { getCurrentWebview, Webview } from "@tauri-apps/api/webview";
    import X from '@lucide/svelte/icons/x';
    import Maximize_2 from "@lucide/svelte/icons/maximize-2";
    import Minimize_2 from "@lucide/svelte/icons/minimize-2";
    import Minus from "@lucide/svelte/icons/minus";
    import Plus from "@lucide/svelte/icons/plus";
    import Button from "$lib/components/layout/titleBar/Button.svelte";
    import Brand from "$lib/components/Brand.svelte";
    import type { Tab } from "$lib/types/tab";
    import GuildList from "$lib/components/guild/GuildList.svelte";
    import { createTab } from "$lib/stores/tabs";
    import { LogicalSize, LogicalPosition} from "@tauri-apps/api/dpi";

    let isDesktopApp = $state(false);
    let appWindow = $state<any>(null);
    let isMaximized = $state(false);

    const webviews = new Map<string, Webview>();
    let tabs = $state<any[]>([])

    let isHost = $state(false);
    let container = $state<HTMLElement | null>(null);

    onMount(async () => {
        isDesktopApp = !!(window as any).__TAURI_INTERNALS__ || !!(window as any).__TAURI__;
        if (isDesktopApp) {
            appWindow = getCurrentWindow();
            isMaximized = await appWindow.isMaximized();
            const isMaximizedListener = await appWindow.onResized(async () => {
                isMaximized = await appWindow.isMaximized();
            })

            const currentWebview = getCurrentWebview();
            isHost = (currentWebview.label === 'main');

            if (isHost && container) {
                const id = `tab-${tabs.length}`
                const webview = await createTab(id, `/`, container.getBoundingClientRect());

                webviews.set(id, webview);
                tabs.push({id, title: 'New Tab', url: '/', favicon:'', active: true});

                const resizeObserver = new ResizeObserver(() => {
                    if (container == null) { return; }
                    const newContainer = container.getBoundingClientRect();
                    webview.setSize(new LogicalSize( newContainer.width, newContainer.height ));
                    webview.setPosition(new LogicalPosition( newContainer.x, newContainer.y ));
                })
                resizeObserver.observe(container);
            }
        }
    })

    let { children } = $props();
</script>

<main class="app">
    {#if isHost}
        <div data-tauri-drag-region class="title-bar">
            <a data-tauri-drag-region class="brand" href="/">
                <Brand data-tauri-drag-region style="color: #ffffff; --brand-size: 16px; padding: 10px; opacity: 87%;" />
            </a>
            <div data-tauri-drag-region class="tabs">
                {#each tabs as tab}{/each}
                <Button iconOnly><Plus size={16}/></Button>
            </div>
            <div class="window-controls">
                <Button iconOnly onClick={() => appWindow?.minimize()}>
                    <Minus size={16} />
                </Button>
                <Button iconOnly onClick={() => appWindow?.toggleMaximize()}>
                    {#if isMaximized} <Minimize_2 size={14} />
                    {:else } <Maximize_2 size={14} /> {/if}
                </Button>
                <Button iconOnly variant="danger" onClick={() => appWindow?.close()}>
                    <X size={16} />
                </Button>
            </div>
        </div>
        <div bind:this={container} class="content app-webview-container"></div>
    {:else}
        <div class="content app-web">
            <GuildList />
            {@render children()}
        </div>
    {/if}
</main>

<style>
    :global(body) {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: linear-gradient(135deg, #31074d, #021e47);
    }

    .app::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.03;
        background-image: url(data:image/png;base64,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);
        pointer-events: none;
    }

    .app::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgb(0 0 0 / 0.3);
        pointer-events: none;
    }

    .title-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 45px;
        gap: 5px;
    }

    .tabs {
        flex-grow: 1;
    }

    .window-controls {
        display: flex;
        white-space: nowrap;
        gap: 3px;
        padding-right: 5px;
    }

    .content {
        height: 100%;
        width: 100%;
    }

    .app-web {
        background: red;
        display: flex;
        flex-direction: row;
    }
</style>