<template>
    <component class="rounded border border-slate-200 bg-white" :is="as">
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { Component } from "vue";

withDefaults(
    defineProps<{
        as?: string | Component;
    }>(),
    {
        as: "div",
    }
);
</script>
