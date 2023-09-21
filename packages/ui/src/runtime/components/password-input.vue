<template>
    <Input :type="hidden ? 'password' : 'text'">
        <template #after>
            <Button variant="text" @click="hidden = !hidden">
                <component width="18" height="18" :is="hidden ? IconEye : IconEyeOff" />
            </Button>
        </template>
    </Input>
</template>

<script setup lang="ts">
import { IconEye, IconEyeOff } from "@tabler/icons-vue";
import { ref } from "vue";
import Button from "./button.vue";
import Input from "./input.vue";

const hidden = ref(false);
</script>
