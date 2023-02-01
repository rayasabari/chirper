import { defineStore } from "pinia";
import questions from "@/data/questions";

export const useCheckerStore = defineStore('checker', {
  state: () => ({
    step: 1,
    startKey: 'basic-type',
    activeKey: 'basic-type',
    prevKey: '',
    current: {},
    questions: {},
    categories: [
      { value: 'basic', step: 'Step 1', name: '前提条件', moblieHidden: false },
      {
        value: 'experience',
        step: 'Step 2',
        name: '代表者の経験等',
        moblieHidden: false,
      },
      { value: 'capital', step: 'Step 3', name: '自己資金', moblieHidden: false },
      {
        value: 'plan',
        step: 'Step 4',
        name: '事業計画・事業実績',
        moblieHidden: false,
      },
      { value: 'result', step: '診断結果', name: '', moblieHidden: true },
    ]
  }),

  actions: {
    init() {
      this.questions = questions;
      this.current = {
        [this.startKey]: this.questions[this.startKey]
      }
    },
    prev() {
      // this.step--;
      this.activeKey = this.prevKey;
      // this.current = {
      //   [this.activeKey]: this.questions[this.activeKey]
      // }
    },
    next() {
      // this.step++;
      this.prevKey = this.activeKey;
      this.activeKey = this.activeQuestion.next
      // this.current = {
      //   [this.activeKey]: this.questions[this.activeKey]
      // }
    },
    activeStep(index) {
      return {
        text: index <= this.checkStep ? "text-indigo-400" : "",
        line: index <= this.checkStep - 1 ? "border-indigo-400" : "border-gray-900"
      }
    }
  },

  getters: {
    activeQuestion: (state) => state.questions[state.activeKey],
    checkStep(){
      return  this.categories.findIndex(x => x.value === this.activeQuestion.category)
    }
  }
})