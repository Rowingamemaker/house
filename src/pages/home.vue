<template>
	<div id="home">
		<!-- 图片轮播 -->
		<div class="swipe">
			<mt-swipe :auto="5000">
				<mt-swipe-item>1</mt-swipe-item>
				<mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
		</div>

		<!-- 
        说明： 搜索框
        struct：搜索框结构，目前仅支持full、simple、noRight
            full 完整显示搜索栏
            simple 取消地理位置和地图上搜索，只显示搜索框本身
            noRight 取消地理上搜索，只显示地理位置和搜索框本身
        tips: 文本框内容提示
        -->
		<search struct="noRight" tips="小区、商圈、地铁"></search>

		<!-- 分类 -->
		<genre></genre>

		<houseall></houseall>
	</div>
</template>

<script>
	// tabbar
	import TABBAR from '../components/Tabbar.vue'
	//搜索框
	import SEARCH from '../components/Search.vue'
	// 分类
	import GENRE from '../components/Genre.vue'
	// 房源信息展示
	import HOUSEALL from '../components/House.vue'

	export default {
		name: "HOME",

		components: {
			"search": SEARCH,
			"genre": GENRE,
			"houseall": HOUSEALL,
			"tabbar": TABBAR,
		},
		created: function() {
// 			this.$get('mp/checkLogin').then(res => {
// 				if (res.data.code != 10) {
// 
// 				}
// 			})
			// 			this.$get('house/index')
			// 				.then((response) => {
			// 					// console.log(response)
			// 				})
		}
	}
</script>
