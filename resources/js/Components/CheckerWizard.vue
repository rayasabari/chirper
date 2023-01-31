<script setup>
import { computed, ref } from "vue";
import { useCheckerStore } from "@/store/CheckerStore";

const checker = useCheckerStore();
checker.init();
const { step, questions, prev, next, active } = checker;
const startKey = ref('basic-type');


</script>

<template>
  <div class="flex rounded-lg p-2 gap-4 items-center justify-center">
    <template v-for="(item, index) in 4" :key="index">
      <div class="font-extrabold text-xl" :class="active(item).text">Step {{ item }}</div>
      <div v-if="item < 4" class="w-10 border-2" :class=" active(item).line"></div>
    </template>
  </div>
  <div class="flex justify-center w-full my-8">
    <div class="w-5/12">
      <div class="mb-4">
        {{ questions[startKey].title }}
      </div>
      <div v-for="item in questions[startKey].options">
        <div class="flex items-center py-1">
          <input :id="`default-radio-${item.value}`" type="radio" :value="item.value" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2">
          <label :for="`default-radio-${item.value}`" class="ml-2 text-sm font-medium text-gray-900">{{ item.title }}</label>
        </div>
      </div>
      <div class="flex justify-center items-center w-full mt-8 gap-4">
        <button type="button" @click="prev()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Prev</button>
        <button type="button" @click="next()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Next</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
