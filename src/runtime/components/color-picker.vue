<template>
    <div class="flex flex-col gap-2">
        <div
            ref="container"
            class="h-50 rounded cursor-pointer relative"
            :style="`background: linear-gradient(0deg, black, transparent), linear-gradient(90deg, white, hsla(0, 0%, 100%, 0)), hsl(${modelValue.hue}, 100%, 50%)`"
            @pointerdown.prevent="handleStart"
        >
            <div
                ref="point"
                class="rounded w-6 h-6 shadow border-2 border-white cursor-move absolute -translate-x-3 -translate-y-3"
                :style="{
                    top: pointerY + 'px',
                    left: pointerX + 'px',
                }"
            />
        </div>

        <URange
            min="0"
            step="1"
            max="360"
            style="
                background: linear-gradient(
                    90deg,
                    hsl(0, 100%, 50%),
                    hsl(30, 100%, 50%),
                    hsl(60, 100%, 50%),
                    hsl(90, 100%, 50%),
                    hsl(120, 100%, 50%),
                    hsl(150, 100%, 50%),
                    hsl(180, 100%, 50%),
                    hsl(210, 100%, 50%),
                    hsl(240, 100%, 50%),
                    hsl(270, 100%, 50%),
                    hsl(300, 100%, 50%),
                    hsl(330, 100%, 50%),
                    hsl(360, 100%, 50%)
                );
            "
            v-model="modelValue.hue"
        />

        <URange
            min="0"
            step="0.01"
            max="1"
            :style="`background: linear-gradient(to right, white 0%, hsl(${modelValue.hue}, 100%, 50%) 100%)`"
            v-model="modelValue.alpha"
        />
    </div>
</template>

<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import { computed, ref } from "vue";
import { type Hsva } from "../types";

const modelValue = defineModel<Hsva>({
    default: {
        hue: 360,
        saturation: 100,
        value: 100,
        alpha: 1,
    },
});

const container = ref<HTMLElement>();
const point = ref<HTMLElement>();

const isMoving = ref(false);

const pointerX = computed(() => {
    if (container.value) {
        const rect = container.value.getBoundingClientRect();

        return (modelValue.value.saturation / 100) * rect.width;
    }
});

const pointerY = computed(() => {
    if (container.value) {
        const rect = container.value.getBoundingClientRect();

        return rect.height - (modelValue.value.value / 100) * rect.height;
    }
});

// Events

function handleStart(event: PointerEvent) {
    isMoving.value = true;

    handleMove(event);
}

function handleMove(event: PointerEvent) {
    if (container.value && isMoving.value) {
        let rect = container.value.getBoundingClientRect();

        let offsetX = event.clientX - rect.left;
        let offsetY = event.clientY - rect.top;

        if (offsetX < 0) {
            offsetX = 0;
        } else if (offsetX >= rect.width) {
            offsetX = rect.width;
        }

        if (offsetY < 0) {
            offsetY = 0;
        } else if (offsetY >= rect.height) {
            offsetY = rect.height;
        }

        modelValue.value.saturation = Math.round((offsetX * 100) / rect.width);
        modelValue.value.value = Math.round(100 - (offsetY * 100) / rect.height);
    }
}

function handleEnd() {
    isMoving.value = false;
}

useEventListener("pointermove", handleMove);
useEventListener("pointerup", handleEnd);
</script>
