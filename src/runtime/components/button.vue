<template>
    <component
        class="relative inline-flex cursor-pointer items-center justify-center select-none gap-2 whitespace-nowrap rounded border p-2 font-semibold outline-none ring-slate-200 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
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
import type { ButtonVariant } from "../types";

withDefaults(
    defineProps<{
        as?: string | Component;
        type?: string;
        variant?: ButtonVariant;
        loading?: boolean;
    }>(),
    {
        as: "button",
        type: "button",
        variant: "primary",
        loading: false,
    }
);

const variants: Record<ButtonVariant, string> = {
    "primary":
        "text-white bg-slate-900 border-slate-900 hover:border-slate-800 hover:bg-slate-800 active:border-slate-700 active:bg-slate-700",
    "secondary":
        "bg-slate-100 border-slate-100 hover:border-slate-200 hover:bg-slate-200 active:border-slate-300 active:bg-slate-300",
    "danger":
        "text-white bg-red-500 border-red-500 hover:border-red-600 hover:bg-red-600 active:border-red-600 active:bg-red-700",
    "outline": "bg-white border-slate-200 hover:bg-slate-50 active:bg-slate-100",
    "text": "bg-transparent border-transparent hover:border-slate-100 hover:bg-slate-100 active:border-slate-200 active:bg-slate-200",
};
</script>
