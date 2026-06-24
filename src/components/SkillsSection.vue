<script setup lang="ts">
import SkillCard from './SkillCard.vue'
import { SKILLS_DATA } from '@/constants'
</script>

<template>
  <section
    class="relative flex min-h-fit flex-col items-center justify-center py-22 md:min-h-screen md:py-0 md:pt-24 2xl:gap-6"
  >
    <div class="mx-auto flex max-w-2xl flex-col items-center p-4 text-center md:gap-2 2xl:gap-6">
      <h2 class="text-3xl font-black md:text-5xl lg:text-4xl 2xl:text-5xl">Skills</h2>
      <p class="mt-2 p-4 text-sm leading-relaxed text-neutral-400 md:p-0">
        Building scalable web applications through frontend engineering, product thinking,
        quality-focused development, and AI-assisted workflows.
      </p>
    </div>

    <div
      class="mx-auto grid w-full max-w-6xl grid-cols-1 flex-wrap justify-items-center gap-6 p-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <SkillCard v-for="category in SKILLS_DATA" :key="category.category" v-bind="category" />
    </div>

    <div
      class="m-4 flex max-w-2xl items-center justify-center gap-1 rounded-lg border border-neutral-800/40 bg-neutral-900/60 px-3 py-2 text-center text-sm text-neutral-400 shadow-sm"
    >
      <p class="text-left leading-relaxed sm:text-center">
        Always learning, always building. Exploring new technologies to solve real-world problems
      </p>
    </div>
  </section>
</template>
