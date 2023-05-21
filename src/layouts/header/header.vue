<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './navbar/navBar.vue';
import Search from './navbar/search.vue';
import windowSizeState from '../../states/windowSize';

const windowSize = windowSizeState.windowSize
const route = useRoute()

const home = ref<MenuItem>({
    icon: 'pi pi-home',
    to: '/',
});
const routeItems = ref<MenuItem[]>([]);
routeItems.value.push({
    label: route.name as string
})
</script>

<template>
    <div class="flex justify-content-between flex-column-reverse md:flex-row align-items-start px-2">
        <div class="w-full flex justify-content-between flex-row">
            <div>
                <Breadcrumb :home="home" :model="routeItems" />
                <p class="font-bold mt-2 mb-0 text-gray-100">{{ route.name }}</p>
            </div>
            <div>
                <NavBar :disable_search="true" v-if="windowSize < 500" />
            </div>
        </div>
        <NavBar v-if="windowSize > 500" />
        <div v-else class="w-full mb-4 flex justify-content-between">
            <Search input_class="w-ful" span_class="w-full" />
        </div>
    </div>
</template>