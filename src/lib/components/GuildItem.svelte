<script lang="ts">
    import type { Guild } from '$lib/types/guild';
    let { guild }: { guild: Guild } = $props();

    function getAcronym(): string {
        return guild.name.split(' ').slice(0, 3).map(word => word[0]).join('').toUpperCase();
    }
</script>

<a class="guild-selector" href="/{guild.id}">
    {#if guild.iconUri == ""}
        <div class="icon placeholder">
            {getAcronym()}
        </div>
    {:else }
        <img src="{guild.iconUri}" width="500" height="500" alt="{guild.name}">
    {/if}
</a>

<style>
    .guild-selector {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        width: 48px;
        border-radius: 50px;
        background: grey;
        overflow: hidden;
        text-decoration: none;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.3vw;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>