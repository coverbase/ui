<template>
    <div class="flex rounded border border-slate-200">
        <Button
            variant="text"
            @click="modelValue = modelValue === index + 1 ? 0 : rating"
            v-for="(rating, index) in max"
        >
            <component
                :is="modelValue >= index + 1 ? IconStarFilled : IconStar"
                width="20"
                height="20"
                :class="{ '!text-yellow-500': index + 1 <= modelValue }"
            />
        </Button>
    </div>
</template>

<script setup lang="ts">
import { IconStar, IconStarFilled } from "@tabler/icons-vue";
import Button from "./button.vue";

defineProps<{
    max: number;
}>();

const modelValue = defineModel<number>({
    default: 0,
});
</script>
