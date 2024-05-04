<template>
  <view class="flex align-middle form-item">
    <view class="form-label">收货城市</view>
    <!-- <view class="form-input flex-auto flex align-middle">
      <input
        @click="openCityPicker()"
        placeholder="请选择收货城市"
        type="text"
        v-model.trim="model"
      />
    </view> -->
    <!-- <view @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input"> -->
    <view @click="openCityPicker()" class="form-input flex flex-auto align-middle disabled-input">
      <view class="wg-input" :class="{ placeholder: !showValue }">{{ showValue ? showValue : "请选择收货城市" }}</view>
    </view>
    <!-- <CityPicker @selected="closePicker" :locationCity="locationCity" ref="domCityPicker" v-model:show="showPicker" /> -->
    <CityPicker ref="domCityPicker" @change="pickCity"/>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
// import { checkCity } from "@/composition/business/useVerifyData"

export default defineComponent({
  name: "FormCity",
  props: {
    modelValue: {
      required: true,
      type: Array,
    },
    // locationCity: {
    //   required: true,
    //   type: Array,
    // },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const domCityPicker = ref();
    const showPicker = ref(false);
    const showValue = computed<string>(() => {
      return props.modelValue.length > 0 ? props.modelValue.join(" ") : "";
    });
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit('update:modelValue', val);
      },
    });
    const openCityPicker = () => {
      domCityPicker.value.open()
    };
    const pickCity = (val: string[]) => {
      emit("update:modelValue", val);
    }
    // const closePicker = (val: string[]) => {
    //   if (Array.isArray(val) && val.length === 3) {
    //     emit("update:modelValue", val);
    //     checkCity(val);
    //   }
    // };
    return {
      model,
      showPicker,
      showValue,
      domCityPicker,
      pickCity,
      // checkCity,
      openCityPicker,
      // closePicker,
    };
  },
});
</script>
