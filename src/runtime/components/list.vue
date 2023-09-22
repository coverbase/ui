<template>
    <Box class="divide-y divide-slate-200" v-if="items && items.length > 0">
        <slot :item="item" v-for="item in items">
            {{ item }}
        </slot>
    </Box>
    <Empty v-else>
        {{ empty }}
    </Empty>
</template>

<script setup generic="T" lang="ts">
import Empty from "./empty.vue";

defineProps<{
    items?: Array<T> | null;
    empty?: string;
}>();
</script>
