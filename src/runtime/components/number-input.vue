<template>
    <Input type="number" placeholder="0" v-model="modelValue" />
</template>

<script setup lang="ts">
import Input from "./input.vue";

const modelValue = defineModel<number>();
</script>
