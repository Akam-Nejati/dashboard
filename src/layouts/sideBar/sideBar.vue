<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import windowSizeState from '../../states/windowSize';
import sideBarState from '../../states/sideBar';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const windowSize = windowSizeState.windowSize
const sidebar = sideBarState.sideBar
const route = useRoute()
const pageNow = route.name

const sideBarItems = ref<MenuItem[]>([
    { label: 'Home', icon: 'pi pi-home', class: pageNow === "index" ? "p-focus" : " " },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
const routeItems = ref<MenuItem[]>([]);
routeItems.value.push({
    label: route.name as string
})
</script>

<template>
    <div class="card flex justify-content-center">
        <div @click.self="sidebar = false"
            :class="{ 'p-sidebar-visible ': windowSize < 1400 && sidebar, 'p-component-overlay-leave': !sidebar, 'p-sidebar-mask p-component-overlay': windowSize < 1400 }"
            class="p-sidebar-left p-component-overlay-enter z-2">
            <div :class="{ 'p-sidebar-leave-active ': !sidebar, 'p-sidebar-leave-to': windowSize < 1400 && !sidebar }"
                class="bg-transparent border-none shadow-none p-sidebar p-component">
                <div
                    class="side-bar bg-gray-800 w-full h-full px-4 py-6 flex flex-column justify-content-between align-item-center">
                    <div>
                        <div class="flex justify-content-between px-4 align-items-center text-gray-100">
                            <span class="pi pi-th-large text-2xl"></span>
                            <span class="ml-3 font-bold text-lg">
                                dashboard app
                            </span>
                        </div>
                        <Divider />
                        <div>
                            <Menu :model="sideBarItems" class="w-full" />
                        </div>
                    </div>
                    <div>
                        <div class="github-box p-4 border-round-xl">
                            <div class="mb-2">
                                <span class="pi pi-eye text-2xl text-gray-200"></span>
                            </div>
                            <div>
                                <span class="text-xl text-gray-200">
                                    See repository in github
                                </span>
                            </div>
                            <Button
                                class="w-full flex justify-content-center mt-3 border-round-xl bg-gray-100 surface-border">
                                Go
                                to repository </Button>
                        </div>
                        <div class="mt-5">
                            <Button class="bg-green-500 text-green-50 w-full flex justify-content-center border-round-xl"
                                severity="success"> Log out </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 1400px) {
    .side-bar {
        background-color: transparent !important;
    }
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


.side-bar ::v-deep(.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus>.p-menuitem-content) {
    background-color: transparent;
}

.side-bar ::v-deep(.p-menuitem-content:hover) {
    background-color: transparent !important;
}

.side-bar ::v-deep(.p-link-active) {
    animation: none !important;
}

.github-box {
    background-image: url('../../assets/Images/white-curved.4dc196db.png');
}

.github-box div:nth-of-type(1) span {
    filter: drop-shadow(1px 1px 5px #a7a7a8);
}
</style>