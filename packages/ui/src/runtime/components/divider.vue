<template>
    <hr class="shrink-0 self-stretch rounded border-none bg-slate-200" :class="variants[variant]" />
</template>

<script setup lang="ts">
type Variant = "horizontal" | "vertical";

withDefaults(
    defineProps<{
        variant?: Variant;
    }>(),
    {
        variant: "horizontal",
    }
);

const variants: Record<Variant, string> = {
    "horizontal": "flex h-px",
    "vertical": "inline-flex w-px my-auto h-6",
};
</script>
