<script setup>
defineProps({
    image: { type: String, default: '' },
    isSmaller: { type: Boolean, default: false },
});
</script>

<template>
    <div class="content__image">
        <img
            :src="image"
            alt=""
            class="content__image-img"
            :class="{ 'content__image-img--smaller': isSmaller }"
            loading="lazy"
        />
    </div>
</template>

<style scoped></style>
