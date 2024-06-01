<template>
  <div class="MainLayout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<style scoped>
/* стили для MainLayout */
</style>
