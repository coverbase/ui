<template>
    <UInput type="email" placeholder="example@domain.com" v-model="modelValue">
        <template #after>
            <span class="p-2 flex items-center justify-center">
                <IconMail width="18" height="18" />
            </span>
        </template>
    </UInput>
</template>

<script setup lang="ts">
import { IconMail } from "@tabler/icons-vue";

const modelValue = defineModel<string>();
</script>
