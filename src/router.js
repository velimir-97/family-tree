import Vue from 'vue'
import Router from 'vue-router'

import AppHeader from "./common/AppHeader.vue"
import AppFooter from "./common/AppFooter.vue"
import Index from "./Index.vue"
import Login from "./common/Login.vue"
import Register from "./common/Register.vue"
import New from "./New.vue"
import MyTree from "./MyTree.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
			path: "/",
			name: "Index",
			components: {
				header: AppHeader,
				default: Index,
				footer: AppFooter
			}
		},
		{
			path: "/login",
			name: "Login",
			components: {
				header: AppHeader,
				default: Login,
				footer: AppFooter
			}
		},
		{
			path: "/register",
			name: "Register",
			components: {
				header: AppHeader,
				default: Register,
				footer: AppFooter
			}
		},
		{
			path: "/new",
			name: "New",
			components: {
				header: AppHeader,
				default: New,
				footer: AppFooter
			}
		},
		{
			path: "/my-tree",
			name: "My Tree",
			components: {
				header: AppHeader,
				default: MyTree,
				footer: AppFooter
			}
		},
  ]
})
