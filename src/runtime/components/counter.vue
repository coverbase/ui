<template>
    <Box class="flex items-center">
        <Button variant="text" @click="handleChange(-1)">
            <IconMinus width="20" height="20" />
        </Button>

        <span class="px-4">
            {{ modelValue }}
        </span>

        <Button variant="text" @click="handleChange(1)">
            <IconPlus width="20" height="20" />
        </Button>
    </Box>
</template>

<script setup lang="ts">
import { IconMinus, IconPlus } from "@tabler/icons-vue";
import Box from "./box.vue";
import Button from "./button.vue";

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
