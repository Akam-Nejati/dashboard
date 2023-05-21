<script setup lang="ts">

import sideBar from '../layouts/sideBar/sideBar.vue';
import Header from  '../layouts/header/header.vue'

</script>


<template>
    <div class="flex justify-content-between w-full h-screen bg-gray-900">
        <sideBar />
        <div class="pages overflow-y-scroll py-4 md:py-6 px-3 md:px-4">
            <Header />
            <div>
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 1400px) {
    .pages {
        width: calc(100% - 17rem) !important;
    }

    .side-bar {
        background-color: transparent !important;
    }
}

.pages {
    width: 100%;
}

.side-bar ::v-deep(.p-menu) {
    background-color: transparent;
    border: none;
}

.side-bar ::v-deep(.p-menuitem-icon) {
    background-color: #4caf50;
    padding: .5rem !important;
    border-radius: 10px;
    margin-right: 1rem !important;
    width: inherit;
    box-shadow: 2px 2px 6px #24272d;
}

.p-focus {
    background-color: #2e3744 !important;
    border-radius: 10px;
}

.side-bar ::v-deep(.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content) {
    background-color: transparent;
}

.side-bar ::v-deep(.p-menuitem-content:hover) {
    background-color: transparent !important;
}

.side-bar ::v-deep(.p-link-active) {
    animation: none !important;
}


.pages ::v-deep(.p-breadcrumb) {
    background-color: inherit;
    padding: 0;
    border: none;
}

@media screen and (max-width: 500px) {
    .navbar {
        flex-flow: column-reverse;
    }

    .search,
    .search input,
    .search span {
        width: 100%;
        margin: 0 !important;
    }
}
</style>