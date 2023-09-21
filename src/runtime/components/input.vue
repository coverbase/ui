<template>
    <label
        class="not-focus-within:hover:border-tertiary rounded border border-tertiary overflow-hidden flex w-full bg-white focus-within:border-primary cursor-text"
    >
        <slot name="before" />

        <input
            class="w-full outline-none py-2 px-4 appearance-none placeholder:text-secondary"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            v-bind="attributes"
            v-model="modelValue"
        />

        <slot name="after" />
    </label>
</template>

<script setup generic="T" lang="ts">
import { useAttrs } from "vue";

withDefaults(
    defineProps<{
        type?: string;
        placeholder?: string;
        readonly?: boolean;
    }>(),
    {
        type: "text",
        readonly: false,
    }
);

const modelValue = defineModel<T>();
const attributes = useAttrs();
</script>
