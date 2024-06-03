<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import BestSongs from "@/components/BestSongs.vue";
import '@/assets/global-styles.css'
import NewSongs from "@/components/NewSongs.vue";
import PopularGenres from "@/components/PopularGenres.vue";
import PopularMusicians from "@/components/PopularMusicians.vue";

</script>

<template>
  <MainLayout>
    <p>ЛУЧШЕЕ</p>
    <BestSongs/>
    <p>НОВОЕ</p>
    <NewSongs/>
    <p>ПОПУЛЯРНЫЕ ЖАНРЫ</p>
    <PopularGenres/>
    <p>ПОПУЛЯРНЫЕ ИСПОЛНИТЕЛИ</p>
    <PopularMusicians/>
  </MainLayout>
</template>

<style scoped>
</style>
