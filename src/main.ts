import { createSSRApp } from "vue";
import VueLazyload from 'vue-lazyload'  
import './assets/css/main.scss'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(VueLazyload, {
    preLoad: 1.0,
    // error: 'dist/error.png',
    // loading: 'dist/loading.gif',
    attempt: 1
  });
  return {
    app,
  };
}
