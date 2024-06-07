<script setup>
import TheButton from '@/components/TheButton.vue';
import RatingList from '@/components/RatingList.vue';
import ContentQuizBlock from '@/components/ContentQuizBlock.vue';

import router from '@/router/router.js';

import {
    ratingItemsOneToFive,
    ratingItemsTimeQuestion,
    ratingItemsZeroToTen,
} from '@/utils/ratingItemsTemplates.js';
import { useQuestionStore } from '@/store/questionStore.js';

const questionStore = useQuestionStore();

const setAnswer = (questionId, responseId) => {
    const index = questionStore.answers.findIndex(
        (answer) => answer.questionID === questionId
    );
    if (index === -1) {
        const answerToSave = {
            questionID: questionId,
            responseID: responseId,
        };
        questionStore.answers.push(answerToSave);
        localStorage.setItem('answers', JSON.stringify(questionStore.answers));
    } else {
        questionStore.answers[index].responseID = responseId;
        localStorage.setItem('answers', JSON.stringify(questionStore.answers));
    }
};

const goNextPage = async () => {
    const request = {
        rating: questionStore.rating,
        answers: questionStore.answers.sort(
            (a, b) => a.questionID - b.questionID
        ),
    };

    console.log(JSON.stringify(request));

    await router.push({ name: 'third' });

    localStorage.setItem('completed', 'true');
};

questionStore.rating = JSON.parse(localStorage.getItem('rating'));
questionStore.answers = JSON.parse(localStorage.getItem('answers') || '[]');
</script>

<template>
    <main class="content-quiz">
        <div class="content-quiz__inner container relative">
            <div class="content-quiz__image absolute hidden-mobile">
                <img
                    src="/images/background_image_second.png"
                    class="content-quiz__image-img"
                    alt=""
                />
            </div>

            <p class="content-quiz__heading paragraph">
                Пожалуйста, ответьте на дополнительные вопросы.
            </p>

            <ContentQuizBlock>
                <template #header
                    >1. Как быстро вы получили ответ от клиентского сервиса
                    RUTUBE?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        class="rating__list--column"
                        :rating-items="ratingItemsTimeQuestion"
                        :question-id="1"
                    />
                </template>
            </ContentQuizBlock>
            <ContentQuizBlock>
                <template #header
                    >2. Клиентский сервис RUTUBE помог в решении
                    проблемы?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        :rating-items="ratingItemsOneToFive"
                        :question-id="2"
                    />
                </template>
            </ContentQuizBlock>
            <ContentQuizBlock>
                <template #header
                    >3. Специалист RUTUBE хорошо изъяснялся и владел
                    языком?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        :rating-items="ratingItemsOneToFive"
                        :question-id="3"
                    />
                </template>
            </ContentQuizBlock>
            <ContentQuizBlock>
                <template #header
                    >4. Специалист RUTUBE был отзывчив?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        :rating-items="ratingItemsOneToFive"
                        :question-id="4"
                    />
                </template>
            </ContentQuizBlock>
            <ContentQuizBlock>
                <template #header
                    >5. Специалист RUTUBE был компетентен?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        :rating-items="ratingItemsOneToFive"
                        :question-id="5"
                    />
                </template>
            </ContentQuizBlock>
            <ContentQuizBlock>
                <template #header
                    >6. Какова вероятность того, что вы порекомендуете RUTUBE
                    коллеге или другу?&nbsp;*
                </template>
                <template #body>
                    <RatingList
                        @set-answer="
                            (questionId, responseId) =>
                                setAnswer(questionId, responseId)
                        "
                        :rating-items="ratingItemsZeroToTen"
                        :question-id="6"
                    />
                </template>
            </ContentQuizBlock>

            <TheButton
                @click="goNextPage"
                :disabled="!questionStore.filled"
                class="content-quiz__button"
                >Отправить ответы</TheButton
            >
        </div>
    </main>
</template>

<style scoped></style>
