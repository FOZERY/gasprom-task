<script setup>
import TheContent from '@/components/TheContent.vue';
import TheContentImage from '@/components/TheContentImage.vue';
import ButtonRating from '@/components/ButtonRating.vue';
import TheContentForm from '@/components/TheContentForm.vue';

import { ref } from 'vue';

const activeId = ref(null);
</script>

<template>
    <main class="content">
        <div class="content__inner container">
            <TheContentImage
                :isSmaller="true"
                :image="'/images/background_image_fourth.png'"
            />
            <TheContentForm>
                <template #header>Вы уже прошли этот опрос</template>
                <template #body>
                    <p class="content__paragraph paragraph">
                        Спасибо, что делитесь мнением
                        <br />
                        и помогаете нам быть лучше
                    </p>
                    <a href="https://rutube.ru/" class="content__button button"
                        >Перейти на RUTUBE</a
                    >
                </template>
            </TheContentForm>
        </div>
    </main>
</template>

<style scoped></style>
