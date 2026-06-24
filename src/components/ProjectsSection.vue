<script setup lang="ts">
import { PROJECTS } from '@/constants'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section
    class="relative flex min-h-fit flex-col items-center justify-center py-22 md:min-h-screen md:py-0 md:pt-24 2xl:gap-6 2xl:pt-0"
  >
    <div class="mx-auto flex max-w-2xl flex-col items-center p-4 text-center md:gap-2 2xl:gap-6">
      <h2 class="text-3xl font-black md:text-5xl lg:text-4xl 2xl:text-5xl">Projects</h2>
      <p class="mt-2 p-4 text-sm leading-relaxed text-neutral-400 md:p-0">
        A selection of personal and learning-focused projects where I explored frontend development,
        state management and basic backend concepts.
      </p>
    </div>
    <div
      class="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-6 p-4 md:grid-cols-2 xl:grid-cols-3"
    >
      <ProjectCard
        v-for="project in PROJECTS"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </section>
</template>
