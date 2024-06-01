import { createApp } from 'vue';
import App from './FretFlex.vue';
import router from "@/router/index.js";

const app = createApp(App)

// Передаем маршрутизатор в приложение
app.use(router)

app.mount('#fretflex');
