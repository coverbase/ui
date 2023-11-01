<template>
    <div ref="element" class="relative">
        <slot :is-open="isOpen" :open="handleOpen" :close="handleClose" :toggle="handleToggle" />

        <Transition
            enter-active-class="transition duration-50 ease-in"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-50 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <UBox class="absolute flex flex-col gap-1 shadow" v-bind="attributes" v-if="isOpen">
                <slot
                    name="content"
                    :is-open="isOpen"
                    :open="handleOpen"
                    :close="handleClose"
                    :toggle="handleToggle"
                />
            </UBox>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { ref, useAttrs } from "vue";

defineOptions({
    inheritAttrs: false,
});

const emit = defineEmits<{
    "open": [];
    "close": [];
}>();

const attributes = useAttrs();

const element = ref<HTMLDivElement>();
const isOpen = ref(false);

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
