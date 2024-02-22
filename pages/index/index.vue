<template>
	<view class="container">
		<uni-breadcrumb separator="/">
			<uni-breadcrumb-item v-for="(route,index) in routes" :key="index"
				:to="route.to">{{route.name}}</uni-breadcrumb-item>
		</uni-breadcrumb>
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
	const href = ref('https://uniapp.dcloud.io/component/README?id=uniui');
	const routes = ref([{
					to: '/A',
					name: 'A页面'
				}, {
					to: '/B',
					name: 'B页面'
				}, {
					to: '/C',
					name: 'C页面'
				}]);
	// export default {
	// 	data() {
	// 		return {
	// 			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				// routes: [{
				// 	to: '/A',
				// 	name: 'A页面'
				// }, {
				// 	to: '/B',
				// 	name: 'B页面'
				// }, {
				// 	to: '/C',
				// 	name: 'C页面'
				// }]
	// 		}
	// 	},
	// 	methods: {

	// 	}
	// }
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>