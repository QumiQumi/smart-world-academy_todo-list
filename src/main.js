import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase";
import { firestorePlugin } from "vuefire";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//- Icons
library.add(faTrash, faBolt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//- DB
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
