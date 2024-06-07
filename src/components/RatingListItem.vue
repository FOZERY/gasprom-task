<script setup>
import ButtonRating from '@/components/ButtonRating.vue';

defineProps({
    questionId: { type: Number, default: null },
    responseId: { type: Number, default: null },
    round: { type: Boolean, default: false },
    activeId: { type: Number, default: null },
});
defineEmits(['buttonRatingClick']);
</script>

<template>
    <li>
        <ButtonRating
            @click="$emit('buttonRatingClick', questionId, responseId)"
            :response-id="responseId"
            :round="round"
            :active-id="activeId"
        >
            <slot></slot>
        </ButtonRating>
    </li>
</template>

<style scoped></style>
