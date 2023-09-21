<template>
    <Button
        class="!justify-start"
        :variant="isActive ? 'secondary' : 'text'"
        :to="to"
        :as="RouterLink"
    >
        <component width="20" height="20" :is="icon" />

        <span class="hidden sm:inline-block">
            <slot />
        </span>
    </Button>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { RouterLink, useRoute } from "vue-router";
import Button from "./button.vue";

const props = withDefaults(
    defineProps<{
        to: string;
        exact?: boolean;
        icon?: Component;
    }>(),
    {
        exact: false,
    }
);

const route = useRoute();

const isActive = computed(() => {
    if (props.exact) {
        return route.path === props.to;
    } else {
        return route.path.startsWith(props.to);
    }
});
</script>
