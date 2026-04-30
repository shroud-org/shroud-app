<script lang="ts">
    import {type Channel, ChannelType} from '$lib/types/channel'
    import ChannelItem from "$lib/components/ChannelItem.svelte";


    const channels: Channel[] = [
        { id: "1", name: "general", channelType: ChannelType.TEXT, guildId: "1", parentId: null, position: 0, },
        { id: "2", name: "lobby", channelType: ChannelType.TEXT, guildId: "1", parentId: null, position: 0, }
    ]
</script>

<div class="guild-layout">
    <div class="channel-list">
        {#each channels as channel}
            <ChannelItem {channel} />
        {/each}
    </div>
    <main class="content-area">
        <slot />
    </main>
    <div class="member-list">

    </div>
</div>

<style>
    .guild-layout {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .channel-list {
        flex-direction: column;
        width: 200px;
        height: 100%;
        padding: 10px;
        gap: 10px;
    }

    .content-area {
        flex-grow: 1;
        min-width: 20px;
        height: 100%;
    }

    .member-list {
        width: 200px;
        height: 100%;
    }
</style>