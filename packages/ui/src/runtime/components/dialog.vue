<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-50 ease-in"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-50 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                class="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-slate-900 bg-opacity-50 p-4"
                v-if="isOpen"
            >
                <div
                    ref="element"
                    class="bg-white p-4 sm:p-6 rounded flex w-full flex-col gap-4 shadow max-w-xl sm:mt-30"
                >
                    <slot :open="handleOpen" :close="handleClose" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { ref } from "vue";

const emit = defineEmits<{
    "open": [];
    "close": [];
}>();

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

onClickOutside(element, handleClose);
onKeyStroke("Escape", handleClose);

defineExpose({
    open: handleOpen,
    close: handleClose,
});
</script>
