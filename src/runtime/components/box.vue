<template>
    <component class="border-slate-200 bg-white" :class="variants[variant]" :is="as">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type Component } from "vue";
import { BoxVariant } from "../types";

withDefaults(
    defineProps<{
        as?: string | Component;
        variant?: BoxVariant;
    }>(),
    {
        as: "div",
        variant: "default",
    }
);

const variants: Record<BoxVariant, string> = {
    "default": "rounded border",
    "top": "border-t",
    "bottom": "border-b",
    "left": "border-l",
    "right": "border-r",
};
</script>
