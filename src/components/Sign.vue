<script lang="ts" setup>
import { h, ref, watch } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import Button, { ButtonSize } from './Button.vue'
import FormItem from './FormItem.vue'
import Input from './Input.vue'
import { Color } from '@/common'

interface Props {
  errorText?: string | null
  title: string
  linkText: string
  linkTo: RouteLocationRaw
}

interface Emits {
  (e: 'input'): void
  (e: 'continue', value: { username: string; password: string }): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const username = ref('')
const password = ref('')

watch([username, password], () => emit('input'))

function handleSubmit() {
  emit('continue', {
    username: username.value,
    password: password.value,
  })
}
</script>

<template>
  <form
    class="sign"
    @submit.prevent="handleSubmit"
  >
    <h5 class="sign-title">
      {{ props.title }}
    </h5>

    <FormItem
      class="sign-form-item-1"
      title="Username"
    >
      <Input
        v-model="username"
        placeholder="input username"
        :background-color="Color.Bg3"
      />
    </FormItem>

    <FormItem title="Password">
      <Input
        v-model="password"
        placeholder="input password"
        :background-color="Color.Bg3"
      />
    </FormItem>

    <div class="sign-button-wrapper">
      <Button
        :size="ButtonSize.Small"
        type="submit"
      >
        Continue
      </Button>
    </div>

    <div class="sign-link">
      <RouterLink
        class="sign-link-item"
        :to="props.linkTo"
      >
        {{ props.linkText }}
      </RouterLink>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.sign {
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: var(--bg-2);
  border-radius: var(--rounded-2);

  &-title {
    font-size: 20px;
    font-weight: bold;
    color: var(--light);
    text-align: center;
    margin-bottom: 20px;
  }

  &-form-item-1 {
    margin-bottom: 20px;
  }

  &-button-wrapper {
    margin: 15px 0px;
    text-align: center;
  }

  &-link {
    text-align: center;

    &-item {
      text-decoration: underline;
      color: var(--light);
      outline: none;

      &:hover, &:focus-visible {
        color: var(--accent)
      }
    }
  }
}
</style>
