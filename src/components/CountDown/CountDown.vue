<template>
  <div class="countdown">
    <p class="flex flex-center">
      <uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
    </p>
  </div>
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
  const now = new Date();
  const tomorrowMidnight = new Date(now);
  tomorrowMidnight.setDate(now.getDate() + 1);
  tomorrowMidnight.setHours(0, 0, 0, 0);
  const timeDiff = Number(tomorrowMidnight) - Number(now);
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  testHour.value = hours;
  testMinute.value = minutes;
  testSecond.value = seconds;
}
getDayLoopEndTime();
</script>
