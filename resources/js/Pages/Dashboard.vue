<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import html2pdf from "html2pdf.js";
import { reactive, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
const { t } = useI18n({});

const state = reactive({
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@gmail.com",
  gender: "male",
  age: 30,
  bio: {
    position: "frontend",
    skills: ["react", "tailwind"],
  },
});

const exportToPDF = () => {
  html2pdf(document.getElementById("element-to-convert"), {
    margin: 1,
    filename: "i-was-html.pdf",
  });
};

const onSUbmit = async () => {
  try {
    let response = await axios.post('/api/getpdf', {
      firstName: firstName.value,
      email: email.value
    })
    console.log(response.data.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
}

const { firstName, email, bio, ...rest } = toRefs(state);
</script>

<template>

  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">
        {{ t("dashboard.header") }}
      </h2>
    </template>

    <div class="py-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div class="p-6 text-gray-900">
            {{ $page.props.auth.user.name }}
            {{ t("dashboard.welcome") }}
            <div class="mt-4">
              <button type="button" class="px-4 py-1 text-white bg-blue-600 rounded" @click="exportToPDF">
                Export PDF
              </button>
            </div>
            <div id="element-to-convert" class="p-10 mt-10 border rounded">
              <h1 class="font-semibold text-rose-500">Example Export Content</h1>
              <div>
                {{ $page.props.auth.user.name }}
                {{ t("dashboard.welcome") }}
                {{}}
              </div>
            </div>
            <form @submit.prevent="onSUbmit">
              <div class="my-2 flex w-4/12 justify-between items-center">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="firstName">
              </div>
              <div class="my-2 flex w-4/12 justify-between items-center">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
              </div>
              <div>
                <button type="submit" class="px-5 py-2 bg-blue-500 rounded-lg text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
