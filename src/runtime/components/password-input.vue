<template>
    <UInput :type="hidden ? 'password' : 'text'">
        <template #after>
            <UButton variant="text" @click="hidden = !hidden">
                <component width="18" height="18" :is="hidden ? IconEye : IconEyeOff" />
            </UButton>
        </template>
    </UInput>
</template>

<script setup lang="ts">
import { IconEye, IconEyeOff } from "@tabler/icons-vue";
import { ref } from "vue";

const hidden = ref(false);
</script>
