<script setup></script>

<template>
    <div class="content-quiz__question-block">
        <h3 class="h3 content-quiz__question">
            <slot name="header"></slot>
        </h3>
        <div class="content-quiz__rating rating">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<style scoped></style>
