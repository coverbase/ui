<template>
    <div class="flex flex-col gap-1">
        <p v-if="text">
            {{ text }}
        </p>

        <slot />

        <p class="text-slate-400" v-if="help">
            {{ help }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text?: string;
    help?: string;
}>();
</script>
