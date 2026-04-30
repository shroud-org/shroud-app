<script>
    import {openTabs} from "$lib/stores/tabs";
</script>

<ul data-tauri-drag-region class="tabs">
    {#each $openTabs as openTab}
        <li class="tab">{openTab.title}</li>
    {/each}
    <li>
        <button class="tab new-tab">+</button>
    </li>
</ul>

<style>
    .tabs {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        list-style: none;
        padding: 0 0 0 0;
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