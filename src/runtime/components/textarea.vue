<template>
    <textarea
        class="border border-slate-200 cursor-text w-full outline-none py-2 px-4 appearance-none bg-white focus:border-slate-900 placeholder:text-slate-400 rounded"
        v-model="modelValue"
    />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();
</script>
