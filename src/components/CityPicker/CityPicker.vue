<template>
  <uni-popup ref="popup" mask-background-color="rgba(0,0,0,0.6)" type="bottom" @maskClick="close"
    background-color="#fff">
    <view class="contentBox">
      <view class="titleBox">
        <view class="cancel" @click="close">取消</view>
        <view class="confirm" @click="handleSelect">确定</view>
      </view>
      <picker-view :value="pickIndexArr" class="picker-view" @change="pickerChange">
        <picker-view-column>
          <view class="item" v-for="(item, index) in provinceList" :key="index">{{ item }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in cityList" :key="index">{{ item }}</view>
        </picker-view-column>
        <picker-view-column v-if="column == 3">
          <view class="item" v-for="(item, index) in areaList" :key="index">{{ item }}</view>
        </picker-view-column>
      </picker-view>
    </view>
  </uni-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CITY from './city.js';

const props = defineProps({
  // provinceList: {
  //   type: Array as any,
  //   default: () => [],
  // },
  // cityInfo: {
  //   type: Object as any,
  //   default: () => ({}),
  // },
  column: {
    type: Number,
    default: 3,
  },
});


const emit = defineEmits(['change', 'close']);

const provinceList = ref<string[]>([]);

const cityList = ref<any>([]);

const areaList = ref<any>([]);

const pickIndexArr = ref([0, 0, 0]);

const popup = ref();

function open() {
  popup.value.open();
  // // 判断有没有传默认省市进来 有则筛选出对应省市区,没有则默认第一个省市区
  // if (props.cityInfo && props.cityInfo.province && props.provinceList && props.provinceList.length) {
  //   const provinceIndex = props.provinceList.findIndex((item: any) => item.cityName === props.cityInfo.province);
  //   if (provinceIndex !== -1 && props.provinceList[provinceIndex].cityInfo) {
  //     const cityIndex = props.provinceList[provinceIndex].cityInfo.findIndex(
  //       (item: any) => item.cityName === props.cityInfo.city
  //     );
  //     if (cityIndex !== -1) {
  //       // 2列
  //       if (props.column === 2) {
  //         value.value = [provinceIndex, cityIndex];
  //         cityList.value = props.provinceList[provinceIndex].cityInfo;
  //         return;
  //       }
  //       // 3列
  //       if (props.provinceList[provinceIndex].cityInfo[cityIndex].cityInfo) {
  //         const areaIndex = props.provinceList[provinceIndex].cityInfo[cityIndex].cityInfo.findIndex(
  //           (item: any) => item.cityName === props.cityInfo.district
  //         );
  //         if (areaIndex !== -1) {
  //           value.value = [provinceIndex, cityIndex, areaIndex];
  //           cityList.value = props.provinceList[provinceIndex].cityInfo;
  //           areaList.value = props.provinceList[provinceIndex].cityInfo[cityIndex].cityInfo;
  //         }
  //       }
  //     }
  //   }
  // } else if (props.provinceList && props.provinceList.length && props.provinceList[0].cityInfo) {
  //   cityList.value = props.provinceList[0].cityInfo;
  //   if (props.column === 3 && props.provinceList[0].cityInfo[0].cityInfo) {
  //     areaList.value = props.provinceList[0].cityInfo[0].cityInfo;
  //   }
  // }
};

function close() {
  popup.value.close();
  emit('close');
};

function handleSelect() {
  const province = provinceList.value[pickIndexArr.value[0]];
  const city = cityList.value[pickIndexArr.value[1]];
  let district = '';

  if (props.column === 3) {
    district = areaList.value[pickIndexArr.value[2]];
  }
  emit('change', [province, city, district]);
  close();
};

function pickerChange(e:Record<string, any>) {
  pickIndexArr.value = e.detail.value
  setCityData(pickIndexArr.value)
};

function setCityData(pickIndexArr:number[]){
  const provinceIndex = pickIndexArr[0]
  const cityIndex = pickIndexArr[1]
  // const areaIndex = pickIndexArr[2]
  cityList.value = CITY[provinceIndex].c?.map((item) => item.n)
  areaList.value = CITY[provinceIndex].c?.[cityIndex].c?.map((item) => item.n)
}

function initData() { 
  provinceList.value = CITY.map((item) => item.n)
  setCityData([0, 0, 0])
}

initData()

defineExpose({
  open,
});
</script>

<style scoped>
@import './css/index.css';
</style>
