<script setup>
import { useCheckerStore } from "@/store/CheckerStore";
import { useI18n } from "vue-i18n";
const { t } = useI18n({});

const checker = useCheckerStore();
checker.init();


</script>

<template >
  <div class="h-[70vh] flex justify-between flex-col">
    <div class="flex rounded-lg p-2 gap-4 items-center justify-center">
      <template v-for="(item, index) in checker.categories" :key="index">
        <div class="font-extrabold text-xl" :class="checker.activeStep(index).text">{{ item.step }}</div>
        <div v-if="index < checker.categories.length - 1 " class="w-10 border-2" :class="checker.activeStep(index).line"></div>
      </template>
    </div>
    <div class="flex justify-center w-full my-8">
      <div class="w-5/12">
        <div class="mb-4">
          {{ t(checker.activeQuestion.title) }}
        </div>
        <div v-for="item in checker.activeQuestion.options">
          <div class="flex items-center py-1">
            <input @input="checker.next()" :id="`default-radio-${item.value}`" type="radio" :value="item.value" name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2">
            <label :for="`default-radio-${item.value}`" class="ml-2 text-sm font-medium text-gray-900">{{ t(item.title) }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center w-full mt-8 gap-4">
      <button type="button" @click="checker.prev()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Prev</button>
      <button type="button" @click="checker.next()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
