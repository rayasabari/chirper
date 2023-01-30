<script setup>
import { ref, onMounted } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { useCounterStore } from '@/store/CounterStore';

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({});

onMounted(() => {
  console.log(locale.value);
})

let counter = useCounterStore();

const showingNavigationDropdown = ref(false);
</script>

<template>
  <div>
    <div class="min-h-screen bg-gray-100 flex ">

      <!-- Aside  -->
      <div class="hidden min-h-screen  md:block w-72 bg-indigo-700 text-white">
        <div class="sticky top-0">
          <div class="p-6">
            <span class="text-2xl font-bold">
              Brand
            </span>
          </div>
          <nav class="p-6">
            <div class="flex flex-col gap-2">
              <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                {{ t('navigation.dashboard') }}
              </NavLink>
              <NavLink :href="route('chirps.index')" :active="route().current('chirps.index')">
                {{ t('navigation.chirps') }}
              </NavLink>
              <NavLink :href="route('checker.index')" :active="route().current('checker.index')">
                {{ t('navigation.checker') }}
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      <!-- Page Content -->
      <div class="w-full">
        <header class="bg-white sticky top-0 z-50  w-full  h-20 flex px-10 items-center justify-between">
          <div>
            <slot name="header" />
          </div>

          <div class="flex items-center">
            <div>
              Counter: {{ counter.count }}
            </div>

            <!-- Settings Dropdown -->
            <div class="relative ml-3">
              <Dropdown align="right" width="48">
                <template #trigger>
                  <span class="inline-flex rounded-md">
                    <button type="button"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
                      {{ $page.props.auth.user.name }}

                      <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                </template>

                <template #content>
                  <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                  <DropdownLink :href="route('logout')" method="post" as="button">
                    Log Out
                  </DropdownLink>
                </template>
              </Dropdown>
            </div>

            <div>
              <button @click="locale = 'ja'" class="p-1" :class="locale == 'ja' ? 'bg-gray-100' : ''">JA</button>
              <button @click="locale = 'en'" class="p-1" :class="locale.includes('en') ? 'bg-gray-100' : ''">EN</button>
            </div>
          </div>
        </header>
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
