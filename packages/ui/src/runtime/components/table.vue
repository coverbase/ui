<template>
    <table>
        <tr>
            <th v-for="column in columns">
                {{ column }}
            </th>
        </tr>

        <tr v-for="item in items">
            <th v-for="column in columns">
                {{ column }}
            </th>
        </tr>
    </table>
</template>

<script setup generic="T" lang="ts">
defineProps<{
    items: Array<T>;
    columns: Array<string>;
}>();
</script>
