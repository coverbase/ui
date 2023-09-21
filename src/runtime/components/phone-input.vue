<template>
    <Input type="phone" placeholder="(000) 000-0000" v-model="modelValue">
        <template #after>
            <span class="p-2">
                <IconPhone width="18" height="18" />
            </span>
        </template>
    </Input>
</template>

<script setup lang="ts">
import { IconPhone } from "@tabler/icons-vue";
import Input from "./input.vue";

const modelValue = defineModel<string>();
</script>
