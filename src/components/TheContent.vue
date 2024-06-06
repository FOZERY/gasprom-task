<script setup></script>

<template>
    <main class="content">
        <div class="content__inner container">
            <div class="content__image">
                <img
                    src="/images/background_image.png"
                    alt=""
                    class="content__image-img"
                    loading="lazy"
                />
            </div>
            <div class="content__form section">
                <h1 class="content__header">Уважаемый клиент!</h1>
                <p class="content__paragraph">
                    Запрос закрыт. Пожалуйста, оцените качество предоставленного
                    сервиса по данному обращению, используя шкалу от 0 до 9, где
                    0 является «Хуже некуда»
                    <span class="no-wrap">и 9 — «Отлично».</span>
                </p>
                <div class="content__rating rating">
                    <ul class="content__rating-list rating__list">
                        <li>
                            <button
                                class="rating__button rating__button--active"
                            >
                                0
                            </button>
                        </li>
                        <li>
                            <button class="rating__button">1</button>
                        </li>
                        <li>
                            <button class="rating__button">2</button>
                        </li>
                        <li>
                            <button class="rating__button">3</button>
                        </li>
                        <li>
                            <button class="rating__button">4</button>
                        </li>
                        <li>
                            <button class="rating__button">5</button>
                        </li>
                        <li>
                            <button class="rating__button">6</button>
                        </li>
                        <li>
                            <button class="rating__button">7</button>
                        </li>
                        <li>
                            <button class="rating__button">8</button>
                        </li>
                        <li>
                            <button class="rating__button">9</button>
                        </li>
                    </ul>
                    <div class="content__rating-caption">
                        <span>Хуже некуда</span>
                        <span>Отлично</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
