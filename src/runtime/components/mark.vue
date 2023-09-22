<template>
    <mark :class="variants[variant]">
        <slot />
    </mark>
</template>

<script setup lang="ts">
type Variant = "primary" | "gradient";

withDefaults(
    defineProps<{
        variant?: Variant;
    }>(),
    {
        variant: "primary",
    }
);

const variants: Record<Variant, string> = {
    "primary": "text-primary-500",
    "gradient": "text-transparent bg-clip-text bg-gradient-to-rt from-primary-400 to-primary-600",
};
</script>
