import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/button',
		name: 'Button',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/button.vue')
	},
	{
		path: '/dialog',
		name: 'Dialog',
		component: () => import('../views/dialog.vue')
	},
	{
		path: '/toast',
		name: 'Toast',
		component: () => import('../views/Toast.vue')
	},
	{
		path: '/notify',
		name: 'Notify',
		component: () => import('../views/Notify.vue')
	},
	{
		path: '/actionsheet',
		name: 'actionsheet',
		component: () => import('../views/Actionsheet.vue')
	},
	{
		path: '/picker',
		name: 'picker',
		component: () => import('../views/picker.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
export default router