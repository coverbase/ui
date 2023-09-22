<template>
    <component
        class="relative inline-flex cursor-pointer items-center justify-center select-none gap-2 whitespace-nowrap rounded border p-2 font-semibold outline-none ring-gray focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
        :class="[variants[variant], { 'text-opacity-0': loading }]"
        :type="type"
        :is="as"
    >
        <IconLoader width="20" height="20" class="absolute animate-spin" v-if="loading" />

        <slot />
    </component>
</template>

<script setup lang="ts">
import { IconLoader } from "@tabler/icons-vue";
import type { Component } from "vue";

type Variant = "primary" | "secondary" | "gradient" | "outline" | "danger" | "text";

withDefaults(
    defineProps<{
        as?: string | Component;
        type?: string;
        variant?: Variant;
        loading?: boolean;
    }>(),
    {
        as: "button",
        type: "button",
        variant: "primary",
        loading: false,
    }
);

const variants: Record<Variant, string> = {
    "primary":
        "text-white bg-primary-500 border-primary-500 hover:border-primary-600 hover:bg-primary-600 active:border-primary-700 active:bg-primary-700",
    "secondary":
        "bg-gray-100 border-gray-100 hover:border-gray-200 hover:bg-gray-200 active:border-gray-300 active:bg-gray-300",
    "gradient":
        "text-white bg-gradient-to-rt from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 active:from-primary-600 active:to-primary-800",
    "danger":
        "text-white bg-red-500 border-red-500 hover:border-red-600 hover:bg-red-600 active:border-red-600 active:bg-red-700",
    "outline": "bg-white border-gray-200 hover:bg-gray-50 active:bg-gray-100",
    "text": "bg-transparent border-transparent hover:border-gray-100 hover:bg-gray-100 active:border-gray-200 active:bg-gray-200",
};
</script>
