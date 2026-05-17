<script lang="ts">
    import GuildIcon from "$lib/components/guild/GuildIcon.svelte";
    import GuildFolder from "$lib/components/guild/GuildFolder.svelte"

    let guild = {
        id: "1",
        name: "Hi",
        iconUri: ""
    }

    let guilds = [guild]
</script>

<div class="guild-list">
    {#each guilds as g}
        <GuildIcon guild={g}/>
    {/each}
</div>

<style>
    .guild-list {
        display: flex;
    }
</style>