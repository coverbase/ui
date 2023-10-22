<template>
    <div ref="element" class="relative">
        <Button variant="outline" class="justify-between w-full" @click="handleToggle">
            <span class="font-normal px-2">
                {{ current?.name }}
            </span>

            <IconChevronDown width="20" height="20" />
        </Button>

        <Transition
            enter-active-class="transition duration-50 ease-in"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-50 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <Box class="absolute shadow mt-1 w-full flex flex-col p-1 gap-1 z-10" v-if="isOpen">
                <Button
                    variant="text"
                    class="justify-between"
                    @click="handleChange(option.value)"
                    v-for="option in options"
                >
                    <span class="font-normal px-2">
                        {{ option.name }}
                    </span>

                    <IconCheck width="18" height="18" v-if="option.value === modelValue" />
                </Button>
            </Box>
        </Transition>
    </div>
</template>

<script setup generic="T" lang="ts">
import { IconCheck, IconChevronDown } from "@tabler/icons-vue";
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { computed, ref, type FunctionalComponent } from "vue";
import Box from "./box.vue";
import Button from "./button.vue";

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<{
    options: Array<{
        name: string;
        value: T;
        icon?: FunctionalComponent;
    }>;
}>();

const emit = defineEmits<{
    "open": [];
    "close": [];
}>();

const modelValue = defineModel<T>();

const element = ref<HTMLDivElement>();
const isOpen = ref(false);

const current = computed(() => props.options.find((option) => option.value === modelValue.value));

function handleChange(value: T) {
    modelValue.value = value;

    handleClose();
}

function handleOpen() {
    isOpen.value = true;

    emit("open");
}

function handleClose() {
    isOpen.value = false;

    emit("close");
}

function handleToggle() {
    isOpen.value ? handleClose() : handleOpen();
}

onClickOutside(element, handleClose);
onKeyStroke("Escape", handleClose);

defineExpose({
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle,
});
</script>
