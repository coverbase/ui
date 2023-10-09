<template>
    <input
        type="range"
        class="appearance-none rounded p-1 cursor-pointer"
        v-model.number="modelValue"
    />
</template>

<script setup lang="ts">
const modelValue = defineModel<number>();
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
    @apply appearance-none border-2 border-solid border-white w-4 h-4 rounded shadow;
}
</style>
