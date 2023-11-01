<template>
    <UInput type="number" placeholder="0" v-model="modelValue" />
</template>

<script setup lang="ts">
const modelValue = defineModel<number>();
</script>
