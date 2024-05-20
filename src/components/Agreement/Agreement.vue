<template>
  <view>
    <checkbox :checked="isChecked" />
    <text class="agreement-text">
      <text>{{ title }}</text>
      <text v-for="(agr, key) in agrList">
        <text v-if="key > 0">和</text>
        <text class="agreement-title" @click="openAgreement(agr.title, agr.text)">{{ agr.title }}</text>
      </text>
    </text>
  </view>
  <AgreementPopup ref="refPopup" :text="curText" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  title: string;
  checked: boolean;
  agrList: {
    title: string;
    text: string;
  }[];
}>();

const emits = defineEmits<{
  (e: 'update:checked', bool: boolean): void;
}>();

const isChecked = computed({
  get: () => props.checked,
  set: v => emits('update:checked', v),
});

let refPopup = ref(),
  curText = ref('');

function openAgreement(title: string, text: string) {
  curText.value = text;
  if(refPopup.value) refPopup.value.open();
}
</script>
