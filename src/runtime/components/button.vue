<template>
    <component
        class="relative inline-flex cursor-pointer items-center justify-center select-none gap-2 whitespace-nowrap rounded border p-2 font-semibold outline-none ring-tertiary focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
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

type Variant = "primary" | "secondary" | "outline" | "danger" | "text";

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
        "text-white bg-primary border-primary hover:border-slate-800 active:border-slate-700 hover:bg-slate-800 active:bg-slate-700 svg:text-white",
    "secondary":
        "text-primary bg-slate-100 border-slate-100 hover:border-tertiary active:border-tertiary hover:bg-tertiary active:bg-tertiary svg:text-primary",
    "danger":
        "text-white bg-red-500 border-red-500 hover:border-red-600 active:border-red-600 hover:bg-red-600 active:bg-red-700 svg:text-white",
    "outline":
        "text-primary border-tertiary bg-white hover:bg-slate-50 active:bg-slate-100 svg:text-primary",
    "text": "text-primary bg-transparent border-transparent hover:border-slate-100 active:border-tertiary hover:bg-slate-100 active:bg-tertiary svg:text-primary",
};
</script>
