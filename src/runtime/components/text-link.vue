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

type Variant = "primary" | "gray";

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
    "primary": "hover:text-gray-400",
    "gray": "text-gray-400 hover:text-primary-500",
};
</script>
