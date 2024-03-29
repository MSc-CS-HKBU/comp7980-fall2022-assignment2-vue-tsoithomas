import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import router from './router'

createApp(App).use(router).use(VueApexCharts).mount('#app')

