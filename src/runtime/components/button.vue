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

type Variant = "primary" | "gray" | "outline" | "danger" | "text";

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
        "text-white bg-primary-500 border-primary-500 hover:border-primary-400 active:border-primary-300 hover:bg-primary-400 active:bg-primary-300 svg:text-white",
    "gray": "text-primary-500 bg-gray-100 border-gray-100 hover:border-gray-200 active:border-gray-200 hover:bg-gray-200 active:bg-gray-200 svg:text-primary-500",
    "danger":
        "text-white bg-red-500 border-red-500 hover:border-red-600 active:border-red-600 hover:bg-red-600 active:bg-red-700 svg:text-white",
    "outline":
        "text-primary-500 border-gray-200 bg-white hover:bg-slate-50 active:bg-slate-100 svg:text-primary-500",
    "text": "text-primary-500 bg-transparent border-transparent hover:border-slate-100 active:border-gray-200 hover:bg-slate-100 active:bg-gray-200 svg:text-primary-500",
};
</script>
