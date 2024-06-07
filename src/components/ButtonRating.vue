<script setup>
defineProps({
    questionId: { type: Number, default: null },
    responseId: { type: Number, default: null },
    activeId: { type: Number, default: null },
    round: { type: Boolean, default: false },
});
</script>

<template>
    <button
        type="button"
        class="button rating__button"
        :class="{
            'rating__button--active': activeId === responseId,
            'rating__button--round': round,
        }"
    >
        <slot></slot>
    </button>
</template>

<style scoped></style>
