<script lang="ts">
    import type { Guild } from "$lib/types/guild";

    let { guild }: {
        guild: Guild,
    } = $props();
</script>

<button class="guild-icon">
    <img src={guild.iconUri} alt={guild.name}>
</button>

<style>

</style>