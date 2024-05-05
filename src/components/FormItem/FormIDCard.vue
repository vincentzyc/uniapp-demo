<template>
  <view class="flex align-middle form-item">
    <view class="form-label">身份证号</view>
    <view class="form-input flex-auto flex align-middle">
      <input
        @blur="checkIDCard(model)"
        :maxlength="18"
        placeholder="输入办理人身份证（已加密）"
        type="text"
        v-model.trim="model"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { isValidIDCard } from '@/utils/validate/idcard';

export default defineComponent({
  name: 'FormName',
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    checkIDCard(value: string) {
      if (!value) return uni.showToast({ title: '请输入身份证号' });
      const checkRes = isValidIDCard(value);
      if (checkRes === true) return true;
      return uni.showToast({ title: '请输入正确的身份证号' });
    },
  },
  setup(props, { emit }) {
    const model = computed<string>({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit('update:modelValue', val);
      },
    });
    return {
      model,
    };
  },
});
</script>
