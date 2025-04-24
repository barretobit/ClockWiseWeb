import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createBootstrap} from 'bootstrap-vue-next'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);

// could also be using the local path here:
axios.defaults.baseURL = 'https://clockwise.runasp.net/api';

app.use(createBootstrap());
app.use(router);

app.mount('#app');