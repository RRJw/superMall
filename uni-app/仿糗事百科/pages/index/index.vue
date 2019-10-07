<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" v-for="(item,index) in 5" :key="index">
			<text class="title">{{title}}--{{message}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '这是一个微信小程序的app',
				message:'冉小冉'
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
