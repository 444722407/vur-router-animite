import Vue from 'vue'
import index from '../view/index.vue'
import about from '../view/about.vue'
import product from '../view/product.vue'
import login from '../view/login.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(VueRouter)

const routes = [
	{path:"/",redirect:'/index'},
	{path:"/index",component:index},
	{path:"/login",component:login},
	{path:"/about",component:about},
	{path:"/product",component:product}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})
router.beforeResolve((to, from, next) => {
	next()
})

router.afterEach(() => {
    NProgress.done()
})


export default router
