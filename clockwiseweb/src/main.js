import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CompanyOverview from './components/CompanyOverview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/company/:companyId',
      name: 'CompanyOverview',
      component: CompanyOverview,
      props: true,
    },
  ],
});

createApp(App).use(router).mount('#app');