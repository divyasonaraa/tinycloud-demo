import Vue from "vue";
import App from "./App.vue";
import Editor from "vue-editor-js/src/index";

Vue.config.productionTip = false;
Vue.use(Editor);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
