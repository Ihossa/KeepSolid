import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

import Autorize from './components/Autorize.vue'
import MainTitle from './components/MainTitle.vue'



const router = new VueRouter({
	routes: [
		{path: '/autorize', component: Autorize}, 
		{path: '/mainTitle', component: MainTitle}
	]
})

new Vue({
  router
}).$mount('#app')