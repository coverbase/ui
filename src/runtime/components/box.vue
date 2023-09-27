<template>
    <component ref="htmlElement" class="rounded border border-slate-200 bg-white" :is="as">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { ref, type Component } from "vue";

withDefaults(
    defineProps<{
        as?: string | Component;
    }>(),
    {
        as: "div",
    }
);

const htmlElement = ref<HTMLElement>();

defineExpose({
    htmlElement: htmlElement,
});
</script>
