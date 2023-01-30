<script setup>
import { computed } from "vue";

const props = defineProps(["step"]);

const isActive = computed(() => {
  return (currentStep) => (currentStep <= props.step ? "text-indigo-400" : "");
});

</script>

<template>
  <div class="flex rounded-lg p-2 gap-4 items-center justify-center">
    <template v-for="(item, index) in 4" :key="index">
      <div class="font-extrabold text-xl" :class="isActive(item)">Step {{ item }}</div>
      <div v-if="item < 4">-</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
