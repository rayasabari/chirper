import { defineStore } from "pinia";
import questions from "@/data/questions";

export const useCheckerStore = defineStore('checker', {
  state: () => ({
    step: 1,
    questions: {}
  }),

  actions: {
     init(){
      this.questions = questions
    },
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    active(itemStep){
      return {
        text: itemStep <= this.step ? "text-indigo-400" : "", 
        line: itemStep <= this.step-1 && this.step > 1 ? "border-indigo-400" : "border-gray-900"
      }
    }
  }
})