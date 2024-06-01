<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import BestSongs from "@/components/BestSongs.vue";
import '@/assets/global-styles.css'
import NewSongs from "@/components/NewSongs.vue";
</script>

<template>
  <MainLayout>
    <BestSongs/>
    <NewSongs/>
  </MainLayout>
</template>

<style scoped>
</style>
