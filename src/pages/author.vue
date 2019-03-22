<template>
	<div>授权...</div>
</template>
<script>
	import storage from '../utils/storage.js'
	import siteInfo from '../utils/config.js'
	import common from '../utils/common.js'
	export default {
		name: 'author',
		data() {
			return {
				token: ''
			}
		},
		created: function() {
			console.log('created')
			//this.token = storage.get('token');
			if (!common.getQueryString("token")) {
				console.log('登陆')
				this.mpLogin();
			} else {
				//获取url上的参数
				//存储token到本地
				console.log('授权返回')
				this.token = common.getQueryString("token");
				storage.set("token", this.token);
				//获取beforeLoginUrl，我们的前端页面
				let url = storage.get("beforeLoginUrl");
				console.log('url', url)
				//跳转
				this.$router.push(url);
				//删除本地beforeLoginUrl
				storage.remove("beforeLoginUrl");
			}
		},
		methods: {
			mpLogin() {
				var url = window.location.href; //http://wx.rowin.xin/author
				console.log('授权页面前的url', url, siteInfo.apiroot + 'mp/mpLogin?i=' + siteInfo.uniacid + '&callbackUrl=' + encodeURI(
					url));
				window.location.href = siteInfo.apiroot + 'mp/mpLogin?i=' + siteInfo.uniacid + '&callbackUrl=' + encodeURI(url);
			}
		}
	}
</script>

<style>
</style>
