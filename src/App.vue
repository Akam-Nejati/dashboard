<script setup lang="ts">
</script>

<template>
    <RouterView />
</template>

<style>
@font-face {
    font-family: 'Nunito-VariableFont_wght';
    src: url(./assets/fonts/Nunito/Nunito-VariableFont_wght.woff2) format('woff2');
}

* {
    font-family: 'Nunito-VariableFont_wght';
}

body {
    margin: 0;
}

.shadow-xl {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.shadow-sm {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.fit-cover {
    object-fit: cover;
}

.w-50rem{
    width: 50rem !important;
}
</style>
