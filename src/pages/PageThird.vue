<script setup>
import TheContentImage from '@/components/TheContentImage.vue';
import TheContentForm from '@/components/TheContentForm.vue';
</script>

<template>
    <main class="content">
        <div class="content__inner container">
            <TheContentImage :image="'/images/background_image_third.png'" />
            <TheContentForm>
                <template #header>Спасибо за обратную связь!</template>
                <template #body>
                    <p class="content__paragraph paragraph">
                        Это поможет нам улучшить сервис
                    </p>
                    <a href="https://rutube.ru/" class="content__button button"
                        >Перейти на платформу</a
                    >
                </template>
            </TheContentForm>
        </div>
    </main>
</template>

<style scoped></style>
