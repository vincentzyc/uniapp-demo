<template>
  <uni-popup ref="popup" mask-background-color="rgba(0,0,0,0.6)" @change="changePopup" type="bottom" @maskClick="close"
    background-color="#fff">
    <view class="contentBox">
      <view class="titleBox">
        <view class="cancel" @click="close">取消</view>
        <view class="confirm" @click="handleSelect">确定</view>
      </view>
      <picker-view :value="value" class="picker-view" @change="pickerChange">
        <picker-view-column>
          <view class="item" v-for="(item, index) in provinceList" :key="index">{{ item }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in cityList" :key="index">{{ item }}</view>
        </picker-view-column>
        <picker-view-column v-if="columnsNum == 3">
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
  columnsNum: {
    type: Number,
    default: 3,
  },
});


const emit = defineEmits(['change', 'citycChange', 'close']);

const provinceList = ref<string[]>([]);

const cityList = ref<any>([]);

const areaList = ref<any>([]);

const value = ref([0, 0, 0]);

const changePopup = (e: {show: boolean, type: string}) => {
  emit('change', e);
};

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
  //       if (props.columnsNum === 2) {
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
  //   if (props.columnsNum === 3 && props.provinceList[0].cityInfo[0].cityInfo) {
  //     areaList.value = props.provinceList[0].cityInfo[0].cityInfo;
  //   }
  // }
};

function close() {
  popup.value.close();
  emit('close');
};

function handleSelect() {
  // const province = props.provinceList[value.value[0]];
  // const city = cityList.value[value.value[1]];
  // cityList.value = city.cityList;
  // let district = '';

  // if (props.columnsNum === 3) {
  //   district = areaList.value[value.value[2]];
  // }
  // console.log(province, city, district);

  // emit('citycChange', {
  //   province,
  //   city,
  //   district,
  // });
  // popup.value.close();
};

function pickerChange(e:any) {
  const pickIndexArr:number[] = e.detail.value
  setCityData(pickIndexArr)
  // if (value.value[0] !== e.detail.value[0] && props.provinceList[e.detail.value[0]]) {
  //   value.value = e.detail.value;
  //   cityList.value = props.provinceList[e.detail.value[0]].cityInfo;
  //   // 省更改 其他列默认第一个
  //   value.value = [e.detail.value[0], 0];
  //   if (props.columnsNum === 3 && props.provinceList[e.detail.value[0]].cityInfo[e.detail.value[1]]) {
  //     areaList.value = props.provinceList[e.detail.value[0]].cityInfo[e.detail.value[1]].cityInfo;
  //     // 省更改 其他列默认第一个
  //     value.value = [e.detail.value[0], 0, 0];
  //   } else {
  //     areaList.value = [];
  //   }
  // } else if (
  //   value.value[1] !== e.detail.value[1] &&
  //   props.provinceList[e.detail.value[0]] &&
  //   props.provinceList[e.detail.value[0]].cityInfo[e.detail.value[1]]
  // ) {
  //   value.value = e.detail.value;
  //   if (props.columnsNum === 3) {
  //     areaList.value = props.provinceList[e.detail.value[0]].cityInfo[e.detail.value[1]].cityInfo;
  //     // 市更改 其他列默认第一个
  //     value.value = [e.detail.value[0], e.detail.value[1], 0];
  //   } else {
  //     areaList.value = [];
  //   }
  // } else {
  //   value.value = e.detail.value;
  // }
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
