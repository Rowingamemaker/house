import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import storage from '../utils/storage'
import 'mint-ui/lib/style.css'
// 首页
import Home from '../pages/home.vue'
// 我的
import My from '../pages/my.vue'
// 搜索界面
import Search from '../pages/Search.vue'
// 历史记录
import History from '../pages/History.vue'
// 首页
import Index from '../pages/index.vue'
// 我的门锁
import Lock from '../pages/lock.vue'
// 我的收藏
import Order from '../pages/Order.vue'
import collect from '../pages/collect.vue'
import landlord from '../pages/Landlord.vue'
import staff from '../pages/staff.vue'
import Coupon from '../pages/Coupon.vue'
import evaluate from '../pages/evaluate.vue'
import service from '../pages/service.vue'
import author from '../pages/author.vue'

// 保洁与报修
import repair from '../pages/Repair.vue'

Vue.use(MintUI)
Vue.use(Router)

const vueRouter = new Router({
	// mode: 'history',
	routes: [{
			// 首页
			path: '/',
			component: Index,
			redirect: 'home',
			children: [{
					path: 'home',
					component: Home
				},
				{
					path: 'my',
					component: My
				}
			]
		},
		{
			// 搜索
			path: '/search',
			name: 'search',
			component: Search
		},
		{
			// 保洁与报修
			path: '/repair',
			component: repair
		},
		{
			//我的门锁
			path: '/lock',
			component: Lock
		},
		{
			// 我的订单
			path: '/order',
			component: Order
		},
		{
			// 收藏页面
			path: '/collect',
			component: collect
		},
		{
			// 我是房东
			path: '/landlord',
			component: landlord
		},
		{
			// 我是员工
			path: '/staff',
			component: staff
		},
		{
			// 优惠券与红包
			path: '/Coupon',
			component: Coupon
		},
		{
			// 评价管理
			path: '/evaluate',
			component: evaluate
		},
		{
			// 在线客服
			path: '/service',
			component: service
		},
		{
			path: '/author',
			component: author
		},
		{
			// 历史记录
			path: '/my/history',
			component: History
		}

	]
})
vueRouter.beforeEach(function(to, from, next) {
	console.log(to, from, next());
	let token = storage.get("token");
	console.log('token', token)
	if (!token && to.path != '/author') {
		console.log('没有登录啊')
		storage.set("beforeLoginUrl", to.fullPath); // 保存用户进入的url
		next("/author");
		return false;
	}
	// 	if (to.path == '/author' && !token) {
	// 		// 用户使用后退返回到授权页，则默认回到首页
	// 		next('/home')
	// 		return false
	// 	}
	next()
});
export default vueRouter
