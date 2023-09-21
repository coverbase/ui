<template>
    <span class="flex items-center gap-2">
        <template v-for="(route, index) in routes">
            <RouterLink class="truncate last:font-semibold hover:underline" :to="route.to">
                {{ route.name }}
            </RouterLink>

            <IconSlash
                width="20"
                height="20"
                class="text-slate-400"
                v-if="index !== routes.length - 1"
            />
        </template>
    </span>
</template>

<script setup lang="ts">
import { IconSlash } from "@tabler/icons-vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

defineProps<{
    routes: Array<{
        name?: string;
        to: RouteLocationRaw;
    }>;
}>();
</script>
