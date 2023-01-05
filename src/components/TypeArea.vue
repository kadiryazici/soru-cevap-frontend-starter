<script lang="ts" setup>
interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function handleInput(e: InputEvent | Event) {
  const el = e.target as HTMLTextAreaElement
  emit('update:modelValue', el.value)
}
</script>

<template>
  <textarea
    :value="props.modelValue"
    @input="handleInput"
  />
</template>

<style lang="scss" scoped>
textarea {
  padding: 15px;
  height: 350px;
  width: 100%;
  background-color: var(--bg-2);
  outline: none;
  border: 1px solid transparent;
  display: block;
  transition-property: border-color;
  transition-duration: .20s;
  border-radius: var(--rounded-2);
  line-height: 24px;
  font-size: 16px;
  word-spacing: 3px;
  color: var(--light);
  resize: vertical;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
  }
}
</style>
