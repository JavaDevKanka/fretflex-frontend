<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import BestSongs from "@/components/BestSongs.vue";
import '@/assets/global-styles.css'
import NewSongs from "@/components/NewSongs.vue";
import PopularGenres from "@/components/PopularGenres.vue";
</script>

<template>
  <MainLayout>
    <BestSongs/>
    <NewSongs/>
    <PopularGenres/>
  </MainLayout>
</template>

<style scoped>
</style>
