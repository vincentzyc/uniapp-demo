<template>
  <view class="flex align-middle form-item">
    <view class="form-label">联系电话</view>
    <view class="form-input flex-auto flex align-middle">
      <input
        @blur="checkPhone(model)"
        :maxlength="11"
        placeholder="输入联系电话"
        type="tel"
        v-model.trim="model"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { checkPhone } from "@/composition/business/useVerifyData"

export default defineComponent({
  name: 'FormPhone',
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const model = computed<string>({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit('update:modelValue', val);
      },
    });
    function isMobile(value: string): boolean {
      value = value.replace(/[^-|\d]/g, '');
      return /^((\+86)|(86))?1[3-9]\d{9}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
    }
    function checkPhone(value: string) {
      if (!value) return '请输入联系电话';
      if (isMobile(value)) return true;
      return '请输入正确的手机号码';
    }
    return {
      model,
      checkPhone,
    };
  },
});
</script>
