<script setup>
import { onMounted, ref } from 'vue';

import ButtonRating from '@/components/ButtonRating.vue';

const activeId = ref(null);

const updateResponse = (questionId, responseId) => {
    const answers = JSON.parse(localStorage.getItem('answers') || '[]');

    const index = answers.findIndex(
        (answer) => answer.questionID === questionId
    );
    if (index === -1) {
        const answerToSave = {
            questionID: questionId,
            responseID: responseId,
        };
        answers.push(answerToSave);
        localStorage.setItem('answers', JSON.stringify(answers));
    } else {
        answers[index].responseID = responseId;
        localStorage.setItem('answers', JSON.stringify(answers));
    }

    activeId.value = responseId;
};

onMounted(() => {
    const answers = JSON.parse(localStorage.getItem('answers'));
    if (answers) {
        const answer = answers.find(
            (answer) => answer.questionID === props.questionId
        );
        if (answer !== undefined) {
            activeId.value = answer.responseID;
        }
    }
});

const props = defineProps({
    questionId: { type: Number, default: null },
    ratingItems: { type: Array, default: null },
});
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
