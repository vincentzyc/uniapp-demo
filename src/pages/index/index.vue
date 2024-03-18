<template>
  <view class="wrapper">
    <!--  #ifdef  H5 -->
    <img v-lazy="header" alt="靓号抢购" class="widthfull" />
    <uni-card :is-shadow="false" is-full>
			<text class="text-16">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
		</uni-card>
    <img v-lazy="img1" alt="产品说明" class="widthfull" />
    <img v-lazy="img2" alt="产品说明" class="widthfull" />
    <MarqueeSingle />
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>

    <img v-lazy="img3" alt="领卡流程" class="widthfull" />
    <img v-lazy="img4" alt="领卡流程" class="widthfull" />
    <img v-lazy="button" alt="领卡流程" class="widthfull" />
    <!--  #endif -->
    <!--  #ifdef  MP -->
    <image lazy-load :src="header" alt="靓号抢购" class="widthfull" />
    <image lazy-load :src="img1" alt="产品说明" class="widthfull" />
    <image lazy-load :src="img2" alt="产品说明" class="widthfull" />
    <image lazy-load :src="img3" alt="领卡流程" class="widthfull" />
    <image lazy-load :src="img4" alt="领卡流程" class="widthfull" />
    <image lazy-load :src="button" alt="领卡流程" class="widthfull" />
    <!--  #endif -->
    <!-- <CountDown class="mg-b10" /> -->
    <!-- <view class="form-wrapper">
      <BaseForm animteBtn />
    </view> -->
    <!-- <MarqueeSingle class="mg10" /> -->
    <!-- <image lazy-load src="@/assets/img/home/img1.jpg" alt="产品说明" class="widthfull" />
    <image lazy-load src="@/assets/img/home/img2.jpg" alt="产品说明" class="widthfull" /> -->
    <!-- <view class="text-center expenses-wrap">
      <span class="expenses-text" @click="showExpenses()">
        <img lazy-load src="@/assets/img/home/img4.jpg" alt="资费详情说明" class="widthfull" />
      </span>
    </view> -->
    <!-- <van-popup class="agreement-popup" v-model:show="show" round>
      <view class="agreement-wrap">{{ expensesText }}</view>
      <view class="agreement-confirm" @click="close()">我知道了</view>
    </van-popup> -->
    <!-- <image lazy-load src="@/assets/img/home/img3.jpg" alt="领卡流程" class="widthfull" />
    <image lazy-load src="@/assets/img/home/button.png" alt="领卡流程" class="widthfull" />
    <image lazy-load src="@/assets/img/home/img4.jpg" alt="领卡流程" class="widthfull" /> -->
  </view>
</template>

<script setup lang="ts">
// import { expensesText } from './static-data';
import header from '@/assets/img/home/header.jpg';
import img1 from '@/assets/img/home/img1.jpg';
import img2 from '@/assets/img/home/img2.jpg';
import img3 from '@/assets/img/home/img3.jpg';
import img4 from '@/assets/img/home/img4.jpg';
import button from '@/assets/img/home/button.png';
import { ref } from 'vue';
// import { getBaseData } from '@/composition/business/useGetPidData';

let show = ref(false);
function showExpenses() {
  show.value = true;
}
function close() {
  show.value = false;
}
// getBaseData();
</script>