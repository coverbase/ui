<template>
    <div class="flex flex-col gap-2">
        <UColorPicker v-model="hsva" />

        <UInput v-model="modelValue" />
    </div>
</template>

<script setup lang="ts">
import { hslToHsv, hsvToHsl, parseToHsla, useConverter, type Hsva } from "../types";

const modelValue = defineModel<string>();

const hsva = useConverter<string | undefined, Hsva>(
    modelValue,
    (input) => {
        const parsedHsla = parseToHsla(input);

        if (parsedHsla) {
            return hslToHsv(parsedHsla);
        }

        return {
            hue: 0,
            saturation: 0,
            value: 0,
            alpha: 0,
        };
    },
    (output) => {
        const hsla = hsvToHsl(output);

        return `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`;
    }
);
</script>
