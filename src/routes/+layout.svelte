<script lang="ts">
    import { onMount } from "svelte";

    let isDesktopApp = false;

    onMount(() => {
        isDesktopApp = !!window.__TAURI_INTERNALS__ || !!window.__TAURI__;
    })
</script>

<main class="container app">
    <!-- <a href="dev">dev</a> -->
    {#if isDesktopApp}
    <div class="container title-bar">

    </div>
    {/if}
    <div class="container content">
        <div class="container guild-bar">
        </div>
    </div>
</main>

<style>
    .container {
        outline: 1px #ffffff solid;
        display: flex;
    }

    main {
        flex-direction: column;
        height: 100vh;
        background: #000;
    }

    .title-bar {
        flex-direction: row;
        width: 100%;
        height: 20px;
    }

    .content {
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    .guild-bar {
        flex-direction: column;
        width: 50px;
        height: 100%;
    }

    .chat-panel {
        flex-direction: column;
        flex-grow: 1;
        height: 100%;
    }

    .member-list {
        flex-direction: column;
        width: 200px;
        height: 100%;
    }
</style>