<template>
  <div id="FretFlex" class="fretflex">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import '@/assets/global-styles.css'

export default {
  name: "FretFlex",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
</style>
