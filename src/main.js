import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFish, faLink, faTrashAlt, faCheese, faCarrot, faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from "vue-router";
import ProductList from "@/components/ProductList";

library.add(faFish)
library.add(faCheese)
library.add(faCarrot)
library.add(faPizzaSlice)
library.add(faTrashAlt)
library.add(faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: ProductList
  },
  {
    path: "/:id"
    component:
  }
]

new Vue({
  render: h => h(App),
}).$mount('#app')
