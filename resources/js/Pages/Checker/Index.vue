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
            <CheckerWizard />
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import CheckerWizard from "@/Components/CheckerWizard.vue";
import { Head } from "@inertiajs/inertia-vue3";

</script>

<style lang="scss" scoped>

</style>
