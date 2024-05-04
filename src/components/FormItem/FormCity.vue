<template>
  <div class="flex align-middle form-item">
    <div class="form-label">收货城市</div>
    <!-- <div class="form-input flex-auto flex align-middle">
      <input
        @click="openCityPicker()"
        placeholder="请选择收货城市"
        type="text"
        v-model.trim="model"
      />
    </div> -->
    <!-- <div @click="openCityPicker()" class="form-input flex-auto flex align-middle disabled-input"> -->
    <div @click="openCityPicker()" class="form-input flex flex-auto align-middle disabled-input">
      <div class="wg-input" :class="{ placeholder: !showValue }">{{ showValue ? showValue : "请选择收货城市" }}</div>
    </div>
    <!-- <CityPicker @selected="closePicker" :locationCity="locationCity" ref="domCityPicker" v-model:show="showPicker" /> -->
    <CityPicker ref="domCityPicker" @change="pickCity"/>
  </div>
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
      console.log(val)
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
