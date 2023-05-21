<script setup lang="ts">
const props = defineProps<{
    input_class?: string,
    span_class?: string,
}>()
</script>

<template>
    <span class="p-input-icon-left grid" :class="props.span_class">
        <i class="pi pi-search" />
        <InputText placeholder="Search" class="col-12"  :iclass="props.input_class"/>
    </span>
</template>
