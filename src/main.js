import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/css/styles.css";

createApp(App).use(store).use(router).use(VueAxios, axios,Vue).mount('#app')
