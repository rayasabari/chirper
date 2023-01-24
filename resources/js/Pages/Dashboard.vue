<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import html2pdf from "html2pdf.js";
import { computed, reactive, ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { useCounterStore } from "@/store/CounterStore";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const { t } = useI18n({});

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

let selected = ref(people[0]);
let query = ref("");
let filteredPeople = computed(() =>
  query.value === ""
    ? people
    : people.filter((person) =>
      person.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.value.toLowerCase().replace(/\s+/g, ""))
    )
);
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
    let response = await axios.post("/api/getpdf", {
      firstName: firstName.value,
      email: email.value,
    });
    console.log(response.data.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

let counter = useCounterStore();

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
          <div class="p-6 w-4/12">
            <Combobox v-model="selected">
              <div class="relative mt-1">
                <div
                  class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                  <ComboboxInput class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" :displayValue="(person) => person.name"
                    @change="query = $event.target.value" />
                  <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </ComboboxButton>
                </div>
                <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
                  <ComboboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <div v-if="filteredPeople.length === 0 && query !== ''" class="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>

                    <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person" v-slot="{ selected, active }">
                      <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                        'bg-blue-600 text-white': active,
                        'text-gray-900': !active,
                      }">
                        <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                          {{ person.name }}
                        </span>
                        <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{ 'text-white': active, 'text-blue-600': !active }">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </TransitionRoot>
              </div>
            </Combobox>
          </div>
          <div class="p-6 text-gray-900">
            {{ $page.props.auth.user.name }}
            {{ t("dashboard.welcome") }}
            <div class="flex gap-6 p-8 my-8 border rounded-xl">
              <button @click="counter.decrease()" class="px-5 py-2 text-white bg-blue-500 rounded-lg">
                -
              </button>
              <div class="text-4xl font-bold">{{ counter.count }}</div>
              <button @click="counter.increase()" class="px-5 py-2 text-white bg-blue-500 rounded-lg">
                +
              </button>
            </div>
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
              </div>
            </div>
            <form @submit.prevent="onSUbmit">
              <div class="flex items-center justify-between w-4/12 my-2">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="firstName" />
              </div>
              <div class="flex items-center justify-between w-4/12 my-2">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" />
              </div>
              <div>
                <button type="submit" class="px-5 py-2 text-white bg-blue-500 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
