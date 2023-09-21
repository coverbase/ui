<template>
    <Input type="search" placeholder="Search..." v-model="modelValue">
        <template #after>
            <Button variant="text" @click="modelValue = ''" v-if="modelValue">
                <IconX width="18" height="18" />
            </Button>
        </template>
    </Input>
</template>

<script setup lang="ts">
import { IconX } from "@tabler/icons-vue";
import Button from "./button.vue";
import Input from "./input.vue";

const modelValue = defineModel<string>();
</script>
