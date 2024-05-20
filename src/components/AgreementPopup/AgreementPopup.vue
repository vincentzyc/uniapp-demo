<template>
  <uni-popup ref="popup" mask-background-color="rgba(0,0,0,0.6)" type="center" borderRadius="20px 20px 20px 20px"
    @maskClick="close" background-color="#fff">
    <view class="agreement-popup">
      <view class="agreement-wrap">
        <iframe :src="text" frameborder="0" style="width: 100%; height: 100%"></iframe>
      </view>
      <text class="agreement-confirm" @click="close()">我知道了</text>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import './style.scss';

defineProps<{
  text: string;
}>();

const popup = ref();

function open() {
  popup.value.open();
}
function close() {
  popup.value.close();
}
defineExpose({
  open,
});
</script>
