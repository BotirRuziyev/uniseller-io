import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/style.scss";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
import * as VeeValidate from "vee-validate";
import Vuex from "vuex";
import store from "./store";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(Vuex).use(VeeValidate).use(router).use(store).mount("#app");
