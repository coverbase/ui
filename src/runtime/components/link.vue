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
import { type Component } from "vue";
import { type LinkVariant } from "../types";

withDefaults(
    defineProps<{
        as?: string | Component;
        variant?: LinkVariant;
    }>(),
    {
        as: "a",
        variant: "primary",
    }
);

const variants: Record<LinkVariant, string> = {
    "primary": "hover:text-slate-800",
    "secondary": "text-slate-400 hover:text-slate-900",
};
</script>
