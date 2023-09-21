<template>
    <label
        class="not-focus-within:hover:border-slate-300 rounded border border-slate-200 overflow-hidden flex w-full bg-white focus-within:border-slate-900 cursor-text"
    >
        <slot name="before" />

        <input
            class="w-full outline-none py-2 px-4 appearance-none placeholder:text-slate-400"
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
