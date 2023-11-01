<template>
    <UInput type="search" placeholder="Search..." v-model="modelValue">
        <template #after>
            <UButton variant="text" @click="modelValue = ''" v-if="modelValue">
                <IconX width="18" height="18" />
            </UButton>
        </template>
    </UInput>
</template>

<script setup lang="ts">
import { IconX } from "@tabler/icons-vue";

const modelValue = defineModel<string>();
</script>
