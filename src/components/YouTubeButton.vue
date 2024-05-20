<script setup lang="ts">
    defineProps<{
        href: string
    }>();
</script>

<template>
    <a :href="href" 
        target="_blank" 
        class="px-3 py-2 rounded border-2 text-white bg-red-500 border-red-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
    >
        <slot v-if="$slots.default"></slot>
        <span v-else>YouTube</span>
    </a>
</template>