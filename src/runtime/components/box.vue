<template>
    <component class="rounded border border-tertiary bg-white" :is="as">
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
