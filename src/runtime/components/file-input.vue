<template>
    <Button variant="outline" class="justify-between" @click="input?.click()">
        <span class="px-2 font-normal">
            <input
                ref="input"
                type="file"
                class="absolute w-px opacity-0"
                :required="required"
                :accept="accept"
                :multiple="Array.isArray(modelValue)"
                @change="handleChange"
            />

            <span v-if="name">
                {{ name }}
            </span>
            <span class="text-slate-400" v-else>
                {{ placeholder }}
            </span>
        </span>

        <IconFile width="18" height="18" />
    </Button>
</template>

<script setup lang="ts">
import { IconFile } from "@tabler/icons-vue";
import { computed, ref } from "vue";
import Button from "./button.vue";

defineProps<{
    placeholder?: string;
    accept?: string;
    required?: boolean;
}>();

const input = ref<HTMLInputElement>();
const modelValue = defineModel<Blob | Array<Blob>>();

const name = computed(() => {
    if (modelValue.value) {
        return Array.isArray(modelValue.value)
            ? // @ts-ignore
              modelValue.value.map((x) => x.name).join(", ")
            : // @ts-ignore
              modelValue.value.name;
    }
});

function handleChange() {
    const files = input.value?.files;

    if (files) {
        const fileArray = Array.from(files);

        modelValue.value = Array.isArray(modelValue.value) ? fileArray : fileArray[0];
    }
}
</script>
