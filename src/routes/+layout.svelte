<script lang="ts">
    import { onMount } from "svelte";
    import { getCurrentWindow } from '@tauri-apps/api/window';
    import type { Guild } from "$lib/types/guild";
    import '$lib/stores/tabs';
    import '$lib/components/Tabs.svelte'
    import Tabs from "$lib/components/Tabs.svelte";
    import GuildItem from "$lib/components/GuildItem.svelte";

    let isDesktopApp = false;

    onMount(() => {
        isDesktopApp = !!window.__TAURI_INTERNALS__ || !!window.__TAURI__;
        if (isDesktopApp) {
            const appWindow = getCurrentWindow();
        }
    })

    const guilds: Guild[] = [
        {
            id: "1",
            name: "M M M",
            iconUri: ""
        },
        {
            id: "2",
            name: "G2",
            iconUri: "https://media.discordapp.net/attachments/1371078475145941063/1498428253004890212/Untitled989_20260427165844.png?ex=69f3c28e&is=69f2710e&hm=4f5f5c6264c51f1f3a396eb4aad6877623f60bf1f18fc4f5d7991550eca33922&=&format=webp&quality=lossless&width=2074&height=2745"
        }
    ]
</script>

<div class="app-container">
    {#if isDesktopApp}
        <div data-tauri-drag-region class="title-bar">
            <div data-tauri-drag-region class="brand" style="color: #ffffff">
                shroud.social
            </div>
            <Tabs />
            <div class="window-controls">
                <button id="titlebar-minimize" title="minimize" onclick={() => appWindow?.minimize()}>
                    mini
                </button>
                <button id="titlebar-maximize" title="maximize" onclick={() => appWindow?.toggleMaximize()}>
                    maxi
                </button>
                <button id="titlebar-close" title="close" onclick={() => appWindow?.close()}>
                    close
                </button>
            </div>
        </div>
    {/if}
    <div class="app">
        <nav class="guild-bar">
            {#each guilds as guild}
                <GuildItem {guild} />
            {/each}
        </nav>
        <div class="content-wrapper">
            <slot />
        </div>
    </div>
</div>

<style>
    :global(body) {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .title-bar {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 30px;
        gap: 5px;
    }

    .window-controls {
        white-space: nowrap;
    }

    .window-controls button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
    }

    .window-controls button:hover {
        background: #5bbec3;
    }

    .app-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #000;
    }

    .app {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    .guild-bar {
        display: flex;
        flex-direction: column;
        width: 64px;
        flex-shrink: 0;
        height: 100%;
        gap: 8px;
        align-items: center;
    }

    .content-wrapper {
        display: flex;
        flex-grow: 1;
    }
</style>