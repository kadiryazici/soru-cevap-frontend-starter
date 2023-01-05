<script lang="ts" setup>
import { Vote } from '@/common'
import Answer from '@/components/Answer.vue'
import Question from '@/components/Question.vue'
import Separator from '@/components/Separator.vue'
</script>

<template>
  <Question
    title="How can I log a text to console ?"
    body="Pellentesque eleifend erat nec odio convallis viverra. Phasellus fermentum maximus augue, eget tempus enim ultricies eget. Cras porttitor dapibus metus elementum aliquam. Praesent vel turpis lobortis, ultrices sem faucibus, hendrerit nibh. Curabitur volutpat dictum sagittis. Morbi at fringilla elit. Maecenas commodo sollicitudin aliquet. Nullam interdum commodo odio. Curabitur dapibus elementum ex, et pretium ipsum lacinia eu. Etiam sodales, quam ac posuere sagittis, lacus turpis ullamcorper felis, et blandit justo diam ac erat..."
    :tags="['javascript', 'html']"
    :created-at="Date.now() - 100000"
    :user="{ id: '111', username: 'vierone' }"
  />

  <Separator
    text="Answers"
    :space-y="30"
  />

  <Answer
    approved
    :created-at="Date.now() - 100000"
    body="Fusce leo dui, condimentum sit amet sollicitudin id, bibendum eget velit. Sed condimentum, diam porttitor sagittis aliquet, tortor massa placerat quam, in placerat dui turpis sagittis neque. Cras enim arcu, cursus non orci in, interdum porttitor risus. Vestibulum mattis diam et velit tempus semper. Aenean sollicitudin sapien sit amet velit facilisis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis consequat elit vel cursus laoreet. Suspendisse scelerisque eros quis mi vestibulum dictum. Morbi sagittis at nisl cursus lobortis. Donec gravida vehicula sodales. Sed a velit sollicitudin dui finibus tempus et vitae massa. Morbi nisl odio, rhoncus eget venenatis vitae, dapibus non dui. Vivamus eros massa, feugiat vel efficitur ut, congue sit amet ex. Pellentesque neque magna, fermentum eu mollis rhoncus, suscipit in eros."
    :user="{ id: '111', username: 'vierone' }"
    :vote-count="20"
  />

  <Separator :space-y="10" />

  <Answer
    :created-at="Date.now() - 100000"
    body="Fusce leo dui, condimentum sit amet sollicitudin id, bibendum eget velit."
    :user="{ id: '111', username: 'vierone' }"
    :vote-count="-20"
    :vote="Vote.Downvote"
  />

  <Separator :space-y="10" />

  <Answer
    :created-at="Date.now() - 100000"
    body="Fusce leo dui, condimentum sit amet sollicitudin id, bibendum eget velit."
    :user="{ id: '111', username: 'vierone' }"
    :vote-count="0"
    :vote="Vote.Upvote"
  />
</template>
