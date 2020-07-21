import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Autorize from './components/Autorize.vue'
import MainTitle from './components/MainTitle.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
	routes: [
		{path: '/', component: Autorize}, 
		{path: '/mainTitle', component: MainTitle}
	]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
