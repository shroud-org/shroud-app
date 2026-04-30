<script lang="ts">
    import type { Channel } from '$lib/types/channel';
    let { channel }: { channel: Channel } = $props();
</script>

<a class="channel-selector" href="/{channel.guildId}/{channel.id}">
    <div class="channel-item">
        <svg class="channel-icon"></svg>
        {channel.name}
    </div>
</a>

<style>
    .channel-selector {
        text-decoration: none;
        color: #ffffff;
    }

    .channel-selector:visited {
        color: #ffffff;
    }

    .channel-item {
        display: flex;
        flex-direction: row;
        padding: 5px;
        background: #000000;
        border-radius: 25px;
        height: 25px;
    }

    .channel-item:hover {
        background: rgb(255 255 255 / 0.2);
    }
</style>