<script setup>
defineProps({
    disabled: { type: Boolean, default: false },
});
</script>

<template>
    <button
        type="button"
        class="button"
        :disabled="disabled"
        :class="{ 'button--disabled': disabled }"
    >
        <slot></slot>
    </button>
</template>

<style scoped></style>
