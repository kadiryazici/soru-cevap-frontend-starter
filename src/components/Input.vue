<script lang="ts">
import { computed } from 'vue'
import { Color, colorToCssVar } from '@/common'

export enum InputSize {
  Regular,
  Medium,
}
</script>

<script lang="ts" setup>
interface Props {
  size?: InputSize
  modelValue: string
  backgroundColor?: Color
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  size: InputSize.Regular,
  backgroundColor: Color.Bg3,
})
const emit = defineEmits<Emits>()

function handleInput(e: InputEvent | Event) {
  const el = e.target as HTMLInputElement

  emit('update:modelValue', el.value)
}

const inputBg = computed(() => colorToCssVar(props.backgroundColor))
</script>

<template>
  <input
    :class="{
      'input-regular': props.size === InputSize.Regular,
      'input-medium': props.size === InputSize.Medium,
    }"
    :value="props.modelValue"
    @input="handleInput"
  >
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  border-radius: var(--rounded-2);
  background-color: v-bind(inputBg);
  color: var(--light);
  border: 1px solid transparent;
  transition: border-color .2s;
  outline: none;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--light-gray);
  }

  &.input-regular {
    height: 40px;
    font-size: 14px;
    padding: 0px 12px;

    &::placeholder {
      font-size: 14px;
    }
  }

  &.input-medium {
    height: 45px;
    font-size: 16px;
    padding: 0px 15px;

    &::placeholder {
      font-size: 14px;
    }
  }
}
</style>
