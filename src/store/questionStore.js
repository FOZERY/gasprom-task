import { defineStore } from 'pinia';

export const useQuestionStore = defineStore('questionStore', {
    state: () => ({
        answers: [],
        rating: null,
    }),
    getters: {
        filled: (state) => {
            return state.answers.length === 6 && state.rating !== null;
        },
    },
});
