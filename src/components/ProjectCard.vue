<script setup lang="ts">
import type { Project } from '@/types'

defineProps<Project>()
</script>

<template>
  <article
    class="group flex max-w-sm flex-col gap-5 rounded-xl border border-cyan-500/40 bg-neutral-900/60 p-4 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/20"
  >
    <div class="aspect-video w-full overflow-hidden rounded-lg">
      <img
        :src="imageSrc"
        :alt="`Preview interface of ${title}`"
        class="h-full w-full rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-102"
      />
    </div>

    <div class="flex flex-1 flex-col gap-4">
      <div class="space-y-2">
        <h3
          class="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-500"
        >
          {{ title }}
        </h3>
        <p class="text-sm leading-relaxed text-neutral-400">
          {{ description }}
        </p>
      </div>

      <div
        class="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-neutral-400"
      >
        <span
          v-for="tech in technologies"
          :key="tech"
          class="rounded-md border border-cyan-500/10 bg-cyan-500/10 px-2.5 py-1 text-cyan-300"
          >{{ tech }}</span
        >
      </div>

      <footer class="mt-auto flex items-center justify-between border-t border-neutral-800/60 pt-4">
        <a
          :href="liveDemoLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex transform items-center justify-center gap-1 text-sm font-bold text-neutral-200 transition-all duration-150 ease-out hover:scale-105 hover:text-cyan-500 active:scale-95"
          >Live Demo
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="h-3 w-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>

        <a
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="transform text-neutral-200 transition-all duration-150 ease-out hover:scale-105 hover:text-cyan-500 active:scale-95"
          aria-label="GitHub repository link for Hellochef Signature Builder"
        >
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.06.069-.06 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </footer>
    </div>
  </article>
</template>
