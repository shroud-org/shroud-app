<script>
    import { openTabs } from "$lib/stores/tabs";
    import ButtonTitleBar from "$lib/components/ButtonTitleBar.svelte";
    import Plus from '@lucide/svelte/icons/plus'
</script>

<ul data-tauri-drag-region class="tabs">
    {#each $openTabs as openTab}
        <li class="tab">{openTab.title}</li>
    {/each}
    <li>
        <ButtonTitleBar iconOnly><Plus size={16} color="white"/></ButtonTitleBar>
    </li>
</ul>

<style>
    .tabs {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
        overflow-x: auto;
        white-space: nowrap;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        mask-image: linear-gradient(to right,
        black 0%,
        black calc(100% - 20px),
        transparent 100%
        );
        -webkit-mask-image: linear-gradient(to right,
        black 0%,
        black calc(100% - 50px),
        transparent 100%
        );
    }
</style>