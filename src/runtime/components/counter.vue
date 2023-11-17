<template>
    <UBox class="flex items-center gap-4 justify-between w-full">
        <UButton variant="text" @click="handleChange(-step)">
            <slot name="minus">
                <IconMinus width="20" height="20" />
            </slot>
        </UButton>

        <slot>
            {{ modelValue }}
        </slot>

        <UButton variant="text" @click="handleChange(step)">
            <slot name="plus">
                <IconPlus width="20" height="20" />
            </slot>
        </UButton>
    </UBox>
</template>

<script setup lang="ts">
import { IconMinus, IconPlus } from "@tabler/icons-vue";
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        step?: number;
        min?: number;
        max?: number;
    }>(),
    {
        min: 0,
        step: 1,
    }
);

const modelValue = defineModel<number>({
    default: 0,
});

const precision = computed(() => props.step.toString().split(".").length);

function handleChange(value: number) {
    const size = Number((modelValue.value + value).toPrecision(precision.value));

    if (props.min && size < props.min) {
        return;
    }

    if (props.max && size > props.max) {
        return;
    }

    modelValue.value = size;
}
</script>
