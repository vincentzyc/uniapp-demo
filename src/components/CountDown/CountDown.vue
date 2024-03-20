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

const testHour = ref(1),
  testMinute = ref(0),
  testSecond = ref(0);

function getDayLoopEndTime() {
  const today = new Date().toLocaleDateString();
  const todayTimeStamp = new Date(today).getTime();
  return todayTimeStamp + 24 * 60 * 60 * 1000;
}
</script>
