<script setup lang="ts">
import { ref } from "vue";
import type { Notfications } from "../../types/Notfications.interface"
import sideBarState from "./../../states/navbar.ts"
import Search from "./search.vue";
import windowSizeState from '../../states/windowSize';


const props = defineProps<{
  disable_search?: Boolean
}>()
const windowSize = windowSizeState.windowSize
const op = ref<any>()
const sidebar = sideBarState.sideBar
const toggle = (event: any) => {
  op.value.toggle(event);
};
const notfications: Notfications[] = [
  {
    id: 1,
    name: "Laur",
    title: "You have a new message from",
    time: "13 minutes ago",
  },
  {
    id: 2,
    name: "Folany",
    title: "You have a new message from",
    time: "2 day ago",
  },
  {
    id: 3,
    name: "Ahmad",
    title: "You have a new message from",
    time: "now",
  },
];
</script>

<template>
  <div class="navbar flex justify-content-between md:justify-content-end align-items-center mb-4 md:mb-0 w-full">
    <div class="search mr-4">
      <Search v-if="!props.disable_search" />
    </div>
    <div class="flex">
      <div class="cursor-pointer mr-3">
        <i class="pi pi-bell text-xl text-gray-200" style="font-size: 2.5rem" @click="toggle"></i>
        <OverlayPanel class="mt-4" appendTo=".home" ref="op">
          <div v-for="item in notfications" :key="item.id" class="flex align-items-center cursor-pointer" :class="{
            'mb-4': item.id !== notfications[notfications.length - 1].id,
          }">
            <Avatar class="p-overlay-badge" icon="pi pi-user" size="large" />
            <div class="ml-3">
              <span class="font-bold">{{ item.title }}{{ item.name }}</span>
              <div class="mt-2 flex align-items-center">
                <i class="pi pi-clock mr-2 text-sm"></i>
                <span class="text-sm">{{ item.time }}</span>
              </div>
            </div>
          </div>
        </OverlayPanel>
      </div>
      <div class="cursor-pointer">
        <i :class="{ 'hidden': windowSize > 1400}" class="pi pi-align-justify text-xl mr-3 text-gray-200" @click="sidebar = true"></i>
      </div>
      <div class="cursor-pointer">
        <i class="pi pi-user text-xl mr-2 text-gray-200" style="font-size: 2.5rem"></i>
      </div>
    </div>
  </div>
</template>
