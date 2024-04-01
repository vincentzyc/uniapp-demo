<template>
  <div class="flex align-middle form-item border-bnone">
    <div class="form-label">详细地址</div>
    <div class="form-input flex-auto flex align-middle">
      <input
        @blur="checkAddress(model)"
        :maxlength="50"
        placeholder="街道/镇+村/小区/楼+门牌号"
        type="text"
        v-model.trim="model"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'FormAddress',
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    checkAddress(value: string) {
      if (!value) return '请输入详细地址';
      let roadReg = /^[\u4E00-\u9FA5A-Za-z0-9/\\_—()（）-\s]+$/gi;
      if (!roadReg.test(value)) return '地址信息不得含特殊字符哟';
      let roadReg2 = /^[A-Za-z0-9]+$/gi;
      if (roadReg2.test(value)) return '地址信息不得纯为英文字母或数字哟';
      if (value.length < 4) return '地址不能太短哟';
      return true;
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
