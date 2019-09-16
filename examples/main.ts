import Vue from 'vue';
import Loading from '../packages/index';
import App from './App.vue';
import { ILoadOpts } from '../types/index.d';

Vue.use(Loading);
Vue.config.productionTip = false;


declare module 'vue/types/vue' {
  interface Vue {
    $loading: Function,
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app');
