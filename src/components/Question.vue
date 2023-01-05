<script lang="ts" setup>
import dayjs from 'dayjs'
import TagIcon from 'virtual:icons/carbon/tag'
import UserIcon from 'virtual:icons/carbon/user'
import TimeIcon from 'virtual:icons/carbon/time'
import Details from './Details.vue'
import Detail from './Detail.vue'
import type { ResponseUser } from '@/types'
import { Color } from '@/common'

interface Props {
  title: string
  body: string
  user: ResponseUser
  tags: string[]
  createdAt: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="question">
    <a
      href="#"
      class="question-title"
    >
      {{ props.title }}
    </a>

    <div class="question-body">
      {{ props.body }}
    </div>

    <Details>
      <template #left>
        <Detail
          :color="Color.Light"
          :background-color="Color.Bg2"
        >
          <template #icon>
            <UserIcon />
          </template>
          {{ props.user.username }}
        </Detail>
      </template>

      <template #right>
        <Detail
          v-for="(tag, index) of tags"
          :key="index"
          :color="Color.LightGray"
          :background-color="Color.Bg3"
        >
          <template #icon>
            <TagIcon />
          </template>
          {{ tag }}
        </Detail>

        <Detail
          :color="Color.LightGray"
          :background-color="Color.Bg3"
        >
          <template #icon>
            <TimeIcon />
          </template>
          {{ dayjs(props.createdAt).fromNow() }}
        </Detail>
      </template>
    </Details>
  </div>
</template>

<style lang="scss" scoped>
.question {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  & + .question {
    margin-top: 30px;
  }

  &-title {
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    background-color: var(--bg-2);
    border-radius: var(--rounded-1);
    color: var(--light);
    padding: 5px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: var(--accent);
    }
  }

  &-body {
    margin: 20px 0px;
    color: var(--light);
    width: 100%;
    padding: 0px 12px;
    line-height: 24px;
    font-size: 16px;
    word-spacing: 3px;
    white-space: pre-line;
  }
}
</style>
