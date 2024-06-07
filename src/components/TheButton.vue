<script setup>
defineProps({
    disabled: { type: Boolean, default: false },
    url: { type: String, default: null },
    isLink: { type: Boolean, default: false },
});
</script>

<template>
    <component
        :is="isLink ? 'a' : 'button'"
        type="button"
        :href="url"
        class="button"
        :disabled="disabled"
        :class="{ 'button--disabled': disabled }"
    >
        <slot></slot>
    </component>
</template>

<style scoped></style>
