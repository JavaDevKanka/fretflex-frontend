<template>
  <div id="FretFlex" class="fretflex">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FretFlex",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* стили для FretFlex */
</style>
