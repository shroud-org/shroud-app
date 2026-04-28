<script lang="ts">
    export let variant = "primary";
    export let size = "md";
</script>

<button class="variant-{variant} size-{size}"><slot /></button>

<style>
    button {
        appearance: none;
        border: none;
        display: flex;
        font-family: Inter, sans-serif;
        font-weight: 600;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        cursor: pointer;
        filter: brightness(80%);
    }

    button:active {
        filter: brightness(60%);
    }

    .variant-primary {
        background: #660ced;
        color: #e9e9e9;
        outline: 2px rgba(5, 42, 66, 0.4) solid;
    }

    .variant-secondary {
        background: rgba(255, 255, 255, 0.2);
        color: #e9e9e9;
        outline: 2px rgba(255, 255, 255, 0.2) solid;
    }

    .variant-tertiary {
        background: #660CED;
        color: #e9e9e9;
        outline: 2px rgba(5, 42, 66, 0.4) solid;
    }

    .variant-danger {
        background: #e53434;
        color: #e9e9e9;
        outline: 2px rgb(230, 136, 136) solid;
    }

    .variant-disabled {
        background: #660CED;
        color: #e9e9e9;
        outline: 2px rgba(5, 42, 66, 0.4) solid;
    }

    .size-xs {
        height: 32px;
        min-width: 32px;
        padding: 16px 10px 16px 10px;
        border-radius: 12px;
        font-size: 12px;
    }

    .size-sm {
        height: 32px;
        min-width: 32px;
        padding: 20px 14px 20px 14px;
        border-radius: 14px;
        font-size: 16px;
    }

    .size-md {
        height: 24px;
        min-width: 24px;
        padding: 24px 18px 24px 18px;
        border-radius: 16px;
        font-size: 20px;
    }

    .size-lg {
        height: 32px;
        min-width: 32px;
        padding: 28px 22px 28px 22px;
        border-radius: 18px;
        font-size: 24px;
    }

    .size-xl {
        height: 32px;
        min-width: 32px;
        padding: 32px 26px 32px 26px;
        border-radius: 20px;
        font-size: 28px;
    }
</style>