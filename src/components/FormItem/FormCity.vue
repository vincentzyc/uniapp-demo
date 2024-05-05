<template>
  <view class="flex align-middle form-item">
    <view class="form-label">收货城市</view>
    <view @click="openCityPicker()" class="form-input flex flex-auto align-middle disabled-input">
      <view class="wg-input" :class="{ placeholder: !showValue }">{{ showValue ? showValue : "请选择收货城市" }}</view>
    </view>
    <CityPicker ref="domCityPicker" @change="pickCity"/>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormCity",
  props: {
    modelValue: {
      required: true,
      type: Array,
    },
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
    return {
      model,
      showPicker,
      showValue,
      domCityPicker,
      pickCity,
      openCityPicker,
    };
  },
});
</script>
