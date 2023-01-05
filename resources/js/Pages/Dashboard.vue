<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { reactive, toRefs } from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n({});

const state = reactive({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    gender: 'male',
    age: 30,
    bio: {
        position: 'frontend',
        skills: ['react', 'tailwind']
    }
})

const { firstName, bio, ...rest } = toRefs(state);


</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ t('dashboard.header') }}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        {{ state.firstName }}
                        {{ t('dashboard.welcome') }}
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
