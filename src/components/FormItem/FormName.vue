<template>
  <view class="flex align-middle form-item">
    <view class="form-label">领卡姓名</view>
    <view class="form-input flex flex-auto align-middle">
      <input
        @blur="checkName(model)"
        :maxlength="15"
        placeholder="输入办理人姓名（已加密）"
        type="text"
        v-model.trim="model"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

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
    checkedName(v: string) {
      const checkRes = this.checkName(v);
      if (checkRes === true) return true;
      uni.showToast({ title: checkRes });
    },
    checkName(value: string) {
      if (!value) return '请输入领卡姓名';
      if (/^[\u4e00-\u9fa5\\·]{2,20}$/.test(value)) return true;
      if (value.length < 2 || value.length > 20) return '姓名长度不能小于2或超过20';
      return '姓名必须为汉字';
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
