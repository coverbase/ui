<template>
    <UBox class="flex items-center gap-4 text-sm text-center w-full">
        <UButton variant="text" @click="handleChange(-1)">
            <slot name="minus">
                <IconMinus width="20" height="20" />
            </slot>
        </UButton>

        {{ modelValue }}

        <UButton variant="text" @click="handleChange(1)">
            <slot name="plus">
                <IconPlus width="20" height="20" />
            </slot>
        </UButton>
    </UBox>
</template>

<script setup lang="ts">
import { IconMinus, IconPlus } from "@tabler/icons-vue";

const props = defineProps<{
    min?: number;
    max?: number;
}>();

const modelValue = defineModel<number>({
    default: 0,
});

function handleChange(amount: number) {
    const size = modelValue.value + amount;

    if (props.min && size < props.min) {
        return;
    }

    if (props.max && size > props.max) {
        return;
    }

    modelValue.value = size;
}
</script>
