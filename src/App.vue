<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheDivider from '@/components/TheDivider.vue';
import TheContent from '@/components/TheContent.vue';
</script>

<template>
    <TheHeader />
    <TheDivider />
    <router-view />
</template>
