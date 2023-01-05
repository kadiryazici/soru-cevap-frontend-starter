<script lang="ts" setup>
import dayjs from 'dayjs'
import CheckMarkIcon from 'virtual:icons/carbon/checkmark'
import UserIcon from 'virtual:icons/carbon/user'
import TimeIcon from 'virtual:icons/carbon/time'
import ChevronUpIcon from 'virtual:icons/carbon/chevron-up'
import ChevronDownIcon from 'virtual:icons/carbon/chevron-down'
import { ref } from 'vue'
import Details from './Details.vue'
import Detail from './Detail.vue'
import { Color, Vote } from '@/common'
import type { ResponseUser } from '@/types'

interface Props {
  body: string
  user: ResponseUser
  createdAt: number
  voteCount: number
  approved?: boolean
  vote?: Vote
}

interface Emits {
  (e: 'upvote'): void
  (e: 'downvote'): void
  (e: 'clearVote'): void
}

const props = withDefaults(defineProps<Props>(), {
  approved: false,
  vote: Vote.None,
})

const emit = defineEmits<Emits>()

function handleClickUpvote() {
  if (props.vote === Vote.Upvote)
    emit('clearVote')
  else
    emit('upvote')
}

function handleClickDownvote() {
  if (props.vote === Vote.Downvote)
    emit('clearVote')
  else
    emit('downvote')
}

const blurIgnored = ref(false)
</script>

<template>
  <div
    class="answer"
    :class="{ 'answer-blurred': !blurIgnored && props.voteCount <= -10 && !props.approved }"
  >
    <Details
      v-if="props.approved"
      class="answer-upper-details"
    >
      <template #left>
        <Detail
          class="answer-upper-details-approved"
          :color="Color.Light"
          :background-color="Color.Accent"
        >
          <template #icon>
            <CheckMarkIcon />
          </template>
          Approved by question owner
        </Detail>
      </template>
    </Details>

    <div
      class="answer-body"
      @click="blurIgnored = true"
    >
      {{ props.body }}
    </div>

    <Details class="answer-bottom-details">
      <template #left>
        <Detail
          class="answer-detail-vote"
          :background-color="Color.Bg2"
        >
          <button
            :data-active="props.vote === Vote.Upvote ? '' : null"
            class="answer-detail-vote-button answer-detail-vote-button-upvote"
            @click="handleClickUpvote"
          >
            <ChevronUpIcon class="answer-detail-vote-icon" />
          </button>

          <span
            :class="{
              'answer-detail-vote-text-upvoted': props.voteCount > 0,
              'answer-detail-vote-text-downvoted': props.voteCount < 0,
            }"
            class="answer-detail-vote-text"
          >
            {{ props.voteCount }}
          </span>

          <button
            :data-active="props.vote === Vote.Downvote ? '' : null"
            class="answer-detail-vote-button answer-detail-vote-button-downvote"
            @click="handleClickDownvote"
          >
            <ChevronDownIcon class="answer-detail-vote-icon" />
          </button>
        </Detail>
      </template>

      <template #right>
        <Detail
          :color="Color.LightGray"
          :background-color="Color.Bg3"
        >
          <template #icon>
            <TimeIcon />
          </template>
          {{ dayjs(props.createdAt).fromNow() }}
        </Detail>

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
    </Details>
  </div>
</template>

<style lang="scss" scoped>
.answer {
  // background-color: var(--bg-4);
  // padding: 15px;
  // border-radius: var(--rounded-2);
  // box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, .25);

  &-blurred .answer-body {
    filter: blur(3px);
  }

  & + .answer {
    margin-top: 20px;
  }

  &-upper-details {
    margin-bottom: 10px;
    &-approved {
      font-weight: bold;
    }
  }

  &-body {
    line-height: 24px;
    font-size: 16px;
    word-spacing: 3px;
    white-space: pre-line;
    color: var(--light);
  }

  &-bottom-details {
    margin-top: 10px;
  }

  &-detail-vote {
    &-text {
      color: var(--light);
      font-weight: bold;
      font-size: 12px;

      &-upvoted {
        color: var(--accent);
      }

      &-downvoted {
        color: var(--danger);
      }
    }

    &-button {
      &-upvote {
        color: var(--light-gray);

        &:hover, &[data-active] {
          color: var(--accent);
        }
      }

      &-downvote {
        color: var(--light-gray);
        &:hover, &[data-active] {
          color: var(--danger);
        }
      }
    }

    &-icon {
      width: 12px;
      height: 12px;
    }

    &-text {
      margin: 0 5px;
    }
  }
}
</style>
