<script setup lang="ts">
import type { SkillCategory } from '@/types'

defineProps<SkillCategory>()
</script>

<template>
  <article
    class="group flex w-full max-w-sm flex-col gap-2 rounded-xl bg-neutral-900/60 p-4 shadow-xl shadow-black/20 transition-all duration-300 ease-out"
    :class="[categoryStyles]"
  >
    <h3 class="text-md font-black tracking-wide text-white">{{ category }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-neutral-400">
      {{ description }}
    </p>
    <div
      class="flex flex-1 flex-wrap content-start items-center gap-2 border-t border-neutral-800/60 pt-3 text-xs font-semibold tracking-wide"
    >
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-md border px-2.5 py-1.5 transition-transform duration-200 hover:scale-105"
        :class="[skillStyles]"
        >{{ skill }}</span
      >
    </div>
  </article>
</template>
