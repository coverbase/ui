<template>
    <div
        class="flex flex-col items-center text-center rounded border border-dashed border-slate-50 bg-slate-50 p-4"
    >
        <IconError404 width="30" height="30" />

        <p>
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
import { IconError404 } from "@tabler/icons-vue";
</script>
