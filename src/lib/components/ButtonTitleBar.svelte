<script lang="ts">
    import type { Snippet } from 'svelte';
    type ButtonVariant = "default" | "danger"

    let { children, iconOnly = false, variant = "default", onClick }: {
        children: Snippet,
        iconOnly?: boolean,
        variant?: ButtonVariant,
        onclick?: () => void
    } = $props();

    function iconOnlyClass(): string {
        if (iconOnly) {
            return "icon-only";
        }
        return ""
    }
</script>

<button class="{iconOnlyClass()} {variant}" onclick="{onClick}">{@render children()}</button>

<style>
    button {
        display: flex;
        background: transparent;
        border-radius: 100%;
        padding: 0;
        border: none;
        justify-content: center;
        align-items: center;
        height: 24px;
        color: rgb(255 255 255 / 0.87);
    }

    button.icon-only {
        width: 24px;
    }

    button.default:hover {
        border: 1px solid rgb(255 255 255 / 0.2);
        background: rgb(255 255 255 / 0.1)
    }

    button.danger:hover {
        border: 1px solid rgb(255 0 0 / 0.2);
        background: rgb(255 0 0 / 0.3)
    }

    button:active {
        background: rgb(255 255 255 / 0.2)
    }
</style>