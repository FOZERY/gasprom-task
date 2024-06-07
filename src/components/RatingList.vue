<script setup>
import { onMounted, ref } from 'vue';

import ButtonRating from '@/components/ButtonRating.vue';
import { useQuestionStore } from '@/store/questionStore.js';

const props = defineProps({
    questionId: { type: Number, default: null },
    ratingItems: { type: Array, default: null },
});

const questionStore = useQuestionStore();

const activeId = ref(null);

const updateResponse = (questionId, responseId) => {
    activeId.value = responseId;

    emit('setAnswer', questionId, responseId);
};

onMounted(() => {
    if (props.questionId === 0) {
        activeId.value = questionStore.rating;
        return;
    }

    const answers = questionStore.answers;
    if (answers.length > 0) {
        const answer = answers.find(
            (answer) => answer.questionID === props.questionId
        );
        if (answer !== undefined) {
            activeId.value = answer.responseID;
        }
    }
});

const emit = defineEmits(['setAnswer']);
</script>

<template>
    <ul class="rating__list">
        <li v-for="item in ratingItems" :key="item.responseId">
            <ButtonRating
                @click="updateResponse(questionId, item.responseId)"
                :response-id="item.responseId"
                :round="item.round"
                :active-id="activeId"
            >
                {{ item.text }}
            </ButtonRating>
        </li>
    </ul>
</template>

<style scoped></style>
