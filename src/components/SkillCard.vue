<script setup lang="ts">
import type { SkillCategory } from '@/types'

defineProps<SkillCategory>()
</script>

<template>
  <article
    class="group flex w-full max-w-sm flex-col gap-2 rounded-xl bg-neutral-900/60 p-4 shadow-xl shadow-black/20 transition-all duration-300 ease-out"
    :class="[categoryStyles]"
  >
    <div class="flex items-center gap-4">
      <div
        class="items-center justify-center rounded-md p-3 transition-transform duration-200 group-hover:scale-110"
        :class="[skillStyles]"
      >
        <template v-if="category === 'Frontend Engineering'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </template>

        <template v-else-if="category === 'Product Engineering'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- Outer isometric box structure -->
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            />
            <!-- Inside corner intersection lines -->
            <path d="M3.27 6.96L12 12.01l8.73-5.05" />
            <path d="M12 22.08V12" />
          </svg>
        </template>

        <template v-else-if="category === 'Testing & Quality'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
            <path d="m9 10 2 2 4-4" />
          </svg>
        </template>

        <template v-else-if="category === 'DevOps & Cloud'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- Perfectly balanced dual-node vector loop tracking CI/CD paths -->
            <path
              d="M12 12c-2-2.67-4-4-6-4A4 4 0 1 0 6 16c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"
            />
          </svg>
        </template>

        <template v-else-if="category === 'AI-Assisted Development'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 21l8.982-11.795c.575-.756.14-1.854-.814-1.854H14l.813-5.904L5.832 13.239c-.575.756-.14 1.854.814 1.854H10Z"
            />
          </svg>
        </template>

        <template v-else-if="category === 'Tools & Collaboration'">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- Sharp mechanical tool contour path -->
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            />
          </svg>
        </template>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-md font-black tracking-wide text-white">{{ category }}</h3>
        <p class="text-xs leading-relaxed text-neutral-400">
          {{ description }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-1 flex-wrap content-start items-center gap-2 border-t border-neutral-800/60 pt-3 text-xs font-semibold tracking-wide"
    >
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-md px-2.5 py-1.5 transition-transform duration-200 hover:scale-105"
        :class="[skillStyles]"
        >{{ skill }}</span
      >
    </div>
  </article>
</template>
