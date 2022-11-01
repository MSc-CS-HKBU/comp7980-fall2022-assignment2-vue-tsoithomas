import { createApp } from 'vue'
import { router } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(router).use(VueApexCharts).mount('#app')