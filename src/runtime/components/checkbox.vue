<template>
    <label class="flex items-center gap-2 cursor-pointer select-none">
        <label class="relative flex items-center justify-center">
            <input
                type="checkbox"
                class="appearance-none rounded bg-white border not-checked:hover:border-tertiary border-tertiary select-none h-6 w-6 cursor-pointer checked:bg-primary checked:border-primary focus-visible:ring-2 ring-tertiary outline-none"
                :value="value"
                v-model="modelValue"
            />

            <IconCheck width="20" height="20" class="pointer-events-none absolute text-white" />
        </label>

        <slot />
    </label>
</template>

<script setup generic="T" lang="ts">
import { IconCheck } from "@tabler/icons-vue";

defineProps<{
    value?: T;
}>();

const modelValue = defineModel<T | Array<T>>();
</script>
