<template>
    <component
        class="inline-flex items-center gap-2 cursor-pointer decoration-none"
        :class="variants[variant]"
        :is="as"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { Component } from "vue";

type Variant = "primary" | "secondary";

withDefaults(
    defineProps<{
        as?: string | Component;
        variant?: Variant;
    }>(),
    {
        as: "a",
        variant: "primary",
    }
);

const variants: Record<Variant, string> = {
    "primary": "text-slate-500 hover:text-slate-900",
    "secondary": "text-slate-900 hover:text-slate-500",
};
</script>
