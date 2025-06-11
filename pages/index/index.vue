<template>
  <view class="container">
    <!-- 顶部 Logo 和公司名称 -->
    <view class="header">
      <image class="logo" src="/static/logo.webp" mode="aspectFit"></image>
      <text class="title">飞纺纺织</text>
    </view>

    <!-- 轮播图 -->
    <swiper class="swiper" circular autoplay interval="3000">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <image :src="item" class="banner-img" mode="aspectFill"></image>
      </swiper-item>
    </swiper>

    <!-- 公司简介 -->
    <view class="section">
      <view><text class="section-title">公司简介</text></view>
      <text class="section-text">
        飞纺是一家专注于高品质纺织面料贸易的企业，致力于为客户提供优质面料和专业服务。
      </text>
    </view>

    <!-- 产品展示 -->
    <view class="section">
      <text class="section-title">产品展示</text>
      <view class="product-grid">
        <view class="product-card" v-for="(product, index) in products" :key="index">
          <image :src="product.img" class="product-img" mode="aspectFill"></image>
          <text class="product-name">{{ product.name }}</text>
        </view>
      </view>
    </view>

    <!-- 联系我们 -->
    <view class="section">
      <view class="section-title">联系我们</view>
      <view class="section-text">电话：19951051350</view>
      <text class="section-text">地址：江苏省苏州市吴江区盛泽镇凤凰荟购物中心</text>
    </view>
  </view>
</template>

<script setup>
const banners = [
  '/static/lp1.png',
  '/static/lp2.png',
  '/static/lp3.png'
]

const products = [
  { name: '春亚纺', img: '/static/chunyafang.jpg' },
  { name: '四面弹', img: '/static/simiantan.jpg' },
  { name: '桑蚕丝', img: '/static/sangcansi.png' },
  { name: '天丝', img: '/static/tiansi.jpg' }
]
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f5f5f5;
}

.header {
  display: flex;
  align-items: center;
}

.logo {
  width: 120rpx;
  height: 120rpx;
  margin-left: 250rpx;
  margin-bottom: 20rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
}

.swiper {
  height: 300rpx;
  margin-bottom: 20rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
}

.section {
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.section-text {
  font-size: 28rpx;
  color: #555;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap:20rpx;
}

.product-card {
  width: 48%;
  background-color: #d1d1d1;
  border-radius: 16rpx;
  padding: 10rpx;
  box-sizing: border-box;
}

.product-img {
  width: 100%;
  height: 250rpx;
  border-radius: 12rpx;
}

.product-name {
  text-align: center;
  margin-top: 10rpx;
  font-size: 28rpx;
}
</style>
