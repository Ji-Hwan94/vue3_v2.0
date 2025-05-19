import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
import router from './router';
import { useUserInfo } from './stores/loginInfoState';

const app = createApp(App);

app.use(createPinia());

const userStore = useUserInfo();
userStore.initializeFromSession();

app.use(router);
app.use(VueQueryPlugin);

app.mount('#app');
