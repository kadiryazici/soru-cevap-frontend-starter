<script setup lang="ts">
import Question from '@/components/Question.vue'
import Separator from '@/components/Separator.vue'
</script>

<template>
  <template
    v-for="num in 5"
    :key="num"
  >
    <Question
      title="How can I log a text to console ?"
      body="Pellentesque eleifend erat nec odio convallis viverra. Phasellus fermentum maximus augue, eget tempus enim ultricies eget. Cras porttitor dapibus metus elementum aliquam. Praesent vel turpis lobortis, ultrices sem faucibus, hendrerit nibh. Curabitur volutpat dictum sagittis. Morbi at fringilla elit. Maecenas commodo sollicitudin aliquet. Nullam interdum commodo odio. Curabitur dapibus elementum ex, et pretium ipsum lacinia eu. Etiam sodales, quam ac posuere sagittis, lacus turpis ullamcorper felis, et blandit justo diam ac erat..."
      :tags="['javascript', 'html']"
      :created-at="Date.now() - 100000"
      :user="{ id: '111', username: 'vierone' }"
    />
    <Separator
      v-if="num !== 5"
      :space-y="5"
    />
  </template>
</template>
