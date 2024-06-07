import { defineStore } from 'pinia';

export const useQuestionStore = defineStore('questionStore', {
    state: () => ({
        answers: [],
    }),
});
