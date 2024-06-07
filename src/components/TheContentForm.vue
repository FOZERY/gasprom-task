<script setup>
import ButtonRating from '@/components/ButtonRating.vue';
</script>

<template>
    <div class="content__form section">
        <h1 class="content__header"><slot name="header"></slot></h1>
        <slot name="body"></slot>
    </div>
</template>

<style scoped></style>
