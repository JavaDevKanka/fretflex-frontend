import { createApp } from 'vue';
import App from './FretFlex.vue';
import router from "@/router/index.js"; // Adjust the path as per your actual router configuration
import vuetify from '@/plugins.vuetify/vuetify.js'; // Adjust the path as per your actual Vuetify plugin configuration

const app = createApp(App);

// Use the router in the application
app.use(router);

// Use the Vuetify plugin
app.use(vuetify);

// Mount the application to the element with id "fretflex" in your HTML
app.mount('#fretflex');
