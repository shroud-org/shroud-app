<script lang="ts">
    import Button from "$lib/components/layout/titleBar/Button.svelte";
    import type { Tab } from "$lib/types/tab";
    import X from "@lucide/svelte/icons/x";

    let { tab }: {
        tab: Tab
    } = $props();

</script>

<div class="tab">
    <Button>
        <img src="{tab.favicon}" alt="{tab.title} icon">
        {tab.title}
        <button class="close"><X /></button>
    </Button>
</div>

<style>
</style>