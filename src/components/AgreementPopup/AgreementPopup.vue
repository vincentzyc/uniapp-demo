<template>
  <uni-popup ref="popup" mask-background-color="rgba(0,0,0,0.6)" type="center" borderRadius="20px 20px 20px 20px"
    @maskClick="close" background-color="#fff">
    <view class="agreement-popup">
      <text class="agreement-wrap">
        <iframe :src="text" frameborder="0" style="width: 100%; height: 100%"></iframe>
      </text>
      <text class="agreement-confirm" @click="close()">我知道了</text>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import './style.scss';

const props = defineProps<{
  // show: boolean;
  text: string;
}>();
// const emits = defineEmits<{
//   (e: 'update:show', bool: boolean): void;
// }>();

const popup = ref();

// let isShow = computed({
//   get: () => props.show,
//   set: v => emits('update:show', v),
// });
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
