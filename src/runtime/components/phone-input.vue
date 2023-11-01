<template>
    <UInput type="phone" placeholder="(000) 000-0000" v-model="modelValue">
        <template #after>
            <span class="flex items-center px-2">
                <IconPhone width="20" height="20" />
            </span>
        </template>
    </UInput>
</template>

<script setup lang="ts">
import { IconPhone } from "@tabler/icons-vue";

const modelValue = defineModel<string>();
</script>
