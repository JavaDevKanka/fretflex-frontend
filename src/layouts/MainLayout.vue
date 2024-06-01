<template>
  <div class="MainLayout">
    <Header />
    <div class="SlotContainer">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";

</script>

<style scoped>
.MainLayout {
  margin: 0 auto; /* Центрируем содержимое */
  max-width: 1920px; /* Устанавливаем максимальную ширину */
  width: 100%; /* Содержимое занимает всю доступную ширину */
  padding: 0 20px; /* Добавляем внутренние отступы для контента */
}

.SlotContainer {
  max-width: 1760px; /* Устанавливаем максимальную ширину для слота */
  width: 100%; /* Содержимое слота занимает всю доступную ширину */
}

@media screen and (max-width: 1200px) {
  .MainLayout {
    max-width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .MainLayout {
    padding: 0 10px;
  }
}
</style>
