<template>
  <Head title="Checker" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">
        {{ "Checker" }}
      </h2>
    </template>

    <div class="py-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
          <div>
            <StepperWizard :step="step" />
            <div class="flex justify-center items-center w-full mt-8 gap-4">
              Lorem ipsum dolor sit.
            </div>
            <div class="flex justify-center items-center w-full mt-8 gap-4">
              <button type="button" @click="step--" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Prev</button>
              <button type="button" @click="step++" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import StepperWizard from "@/Components/StepperWizard.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const step = ref(1);
</script>

<style lang="scss" scoped></style>
