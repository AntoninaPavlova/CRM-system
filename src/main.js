import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

import App from './App.vue';
import router from './router';

import './styles/reset.css';

const app = createApp(App);

app.component('VueGoodTable', VueGoodTable);

app.use(router);
app.use(createPinia());

app.mount('#app');
