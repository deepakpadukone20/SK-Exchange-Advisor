import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";

import './assets/main.css'

const app = createApp(App)
app.use(store).use(router).use(HighchartsVue,{
	highcharts: Highcharts
})

app.mount('#app')
