<script setup>
import TheContentImage from '@/components/TheContentImage.vue';
import TheContentForm from '@/components/TheContentForm.vue';
import RatingList from '@/components/RatingList.vue';

import router from '@/router/router.js';

import { ratingItemsZeroToNine } from '@/utils/ratingItemsTemplates.js';
import { useQuestionStore } from '@/store/questionStore.js';

const questionStore = useQuestionStore();

const goNextPage = async () => {
    await router.push({ name: 'second' });
};

const setAnswer = async (_, responseId) => {
    questionStore.rating = responseId;
    localStorage.setItem('rating', responseId);

    await goNextPage();
};

questionStore.rating = JSON.parse(localStorage.getItem('rating'));
</script>

<template>
    <main class="content">
        <div class="content__inner container">
            <TheContentImage
                :isSmaller="true"
                :image="'/images/background_image_first.png'"
            />
            <TheContentForm>
                <template #header>Уважаемый клиент!</template>
                <template #body>
                    <p class="content__paragraph">
                        Запрос закрыт. Пожалуйста, оцените качество
                        предоставленного сервиса по данному обращению, используя
                        шкалу от 0 до 9, где 0 является «Хуже некуда»
                        <span class="no-wrap">и 9 — «Отлично».</span>
                    </p>
                    <div class="content__rating rating">
                        <RatingList
                            @set-answer="
                                (questionId, responseId) =>
                                    setAnswer(questionId, responseId)
                            "
                            class="content__rating-list"
                            :rating-items="ratingItemsZeroToNine"
                            :question-id="0"
                        />
                        <div class="content__rating-caption">
                            <span>Хуже некуда</span>
                            <span>Отлично</span>
                        </div>
                    </div>
                </template>
            </TheContentForm>
        </div>
    </main>
</template>

<style scoped></style>
