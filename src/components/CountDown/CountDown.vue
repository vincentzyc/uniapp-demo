<template>
  <view class="countdown">
    <text class="flex flex-center">
      <uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
    </text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import './style.scss';

const testHour = ref(0),
  testMinute = ref(0),
  testSecond = ref(0);

// function getDayLoopEndTime() {
//   // const today = new Date().toLocaleDateString();
//   // const todayTimeStamp = new Date(today).getTime();
//   // return todayTimeStamp + 24 * 60 * 60 * 1000;
//   // return hour * 60 * 60 + minute * 60 + second;
// }

// 获取当前时间距离0点的时分秒
function getDayLoopEndTime() {
  const end = new Date();
  end.setHours(0, 0, 0, 0);
  end.setDate(end.getDate() + 1);
  const now = Date.now();
  const diff: number = end.getTime() - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  testHour.value = hours;
  testMinute.value = minutes;
  testSecond.value = seconds;
}
getDayLoopEndTime();
</script>
