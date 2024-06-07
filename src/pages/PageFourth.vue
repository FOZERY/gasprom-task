<script setup>
import TheContentImage from '@/components/TheContentImage.vue';
import TheContentForm from '@/components/TheContentForm.vue';
import TheButton from '@/components/TheButton.vue';
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

                    <TheButton
                        class="content__button"
                        :is-link="true"
                        :url="'https://rutube.ru/'"
                        >Перейти на RUTUBE</TheButton
                    >
                </template>
            </TheContentForm>
        </div>
    </main>
</template>

<style scoped></style>
