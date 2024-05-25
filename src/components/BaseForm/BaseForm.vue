<template>
  <div class="form-wrap">
    <FormName id="custName" v-model="formData.custName"></FormName>
    <FormIDCard id="idCardNo" v-model="formData.idCardNo"></FormIDCard>
    <FormCity id="cityArr" v-model="formData.cityArr"></FormCity>
    <FormAddress id="address" v-model="formData.address"></FormAddress>
    <img src="@/assets/img/home/button.png" alt="提交按钮" class="breathlamp widthfull" @click="submitOrder()" />
    <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" v-model:checked="checked" />
  </div>
</template>

<script lang="ts" setup>
import FormName from '@/components/FormItem/FormName.vue';
import FormAddress from '@/components/FormItem/FormAddress.vue';
import FormIDCard from '@/components/FormItem/FormIDCard.vue';
import FormCity from '@/components/FormItem/FormCity.vue';
import Check from '@/utils/business/form-check';
import { closeLoading, openLoading } from '@/utils/loading';
import { reactive, ref, watch } from 'vue';
import './style.scss';

// const FormCity = defineAsyncComponent(() => import('@/components/FormItem/FormCity.vue'));

// const toutiaoDefaultLink = 'https://h5.lipush.com/h5/index.html?id=2021080216415100047'; // M001

// const gdtDefaultLink = 'https://h5.lipush.com/h5/index.html?id=3804505262428528861'; // M002

// defineProps<{
//   animteBtn?: boolean;
// }>();

const emits = defineEmits<{
  (e: 'submit'): void;
}>();

// const mainStore = useMainStore();

const formData = reactive({
  cityArr: [],
  showForm: false,
  custName: '',
  city: '',
  district: '',
  province: '',
  address: '',
  contactNumber: '',
  idCardNo: '',
});

let checked = ref(true),
  agrList = ref([
    {
      title: '《个人信息保护政策》',
      text: 'https://h5.lipush.com/h5/index.html?id=5523261663728019648',
    },
    {
      title: '《入网许可协议》',
      text: 'https://h5.lipush.com/h5/index.html?id=4554931263728179465',
    },
    {
      title: '《单独同意书》',
      text: 'https://h5.lipush.com/h5/index.html?id=7883210563728253535',
    },
  ]);

watch(
  () => formData.cityArr,
  newValue => {
    if (Array.isArray(newValue) && newValue.length === 3) {
      formData.city = newValue[1];
      formData.district = newValue[2];
      formData.province = newValue[0];
    }
  }
);

function checkForm(formData: Record<string, any>): true | string {
  const checkName = Check.checkName(formData.custName);
  if (checkName!== true) return checkName;
  // const checkPhone = Check.checkPhone(formData.phone);
  // if (checkPhone !== true) return checkPhone;
  const checkIDCard = Check.checkIDCard(formData.idCardNo);
  if (checkIDCard !== true) return checkIDCard;
  const checkAddress = Check.checkAddress(formData.address);
  if (checkAddress !== true) return checkAddress;
  return true;
}
const submitOrder = async () => {
  var tip = checkForm(formData); //校验页面信息
  if (tip !== true) {
    uni.showToast({ title: tip, icon: 'none' });
    return false;
  }
  checked.value = true;

  openLoading('正在提交');
  const params = {
    url: window.location.href || '',
    ...formData,
  };
  emits('submit');
  console.log('提交参数', params);
  setTimeout(() => {
    closeLoading();
    successCallback();
  }, 2000);
};
function successCallback() {
  uni.showModal({
    title: '提示',
    content: '提交成功',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定');
      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    },
  });
}
</script>
