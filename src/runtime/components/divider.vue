<template>
    <hr class="shrink-0 self-stretch rounded border-none bg-slate-200" :class="variants[variant]" />
</template>

<script setup lang="ts">
import type { DividerVariant } from "../types";

withDefaults(
    defineProps<{
        variant?: DividerVariant;
    }>(),
    {
        variant: "horizontal",
    }
);

const variants: Record<DividerVariant, string> = {
    "horizontal": "flex h-px",
    "vertical": "inline-flex w-px my-auto h-6",
};
</script>
