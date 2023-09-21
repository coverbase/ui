<template>
    <Box class="flex w-full flex-col gap-4 p-4 sm:p-6" :as="as">
        <slot />
    </Box>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import Box from "./box.vue";

withDefaults(
    defineProps<{
        as?: string | Component;
    }>(),
    {
        as: "div",
    }
);
</script>
