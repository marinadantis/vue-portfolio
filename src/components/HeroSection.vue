<script setup lang="ts">
import heroBg from '@/assets/images/hero-bg.jpg'
</script>

<template>
  <section
    class="relative flex min-h-screen items-center justify-center bg-cover bg-center md:pt-20 lg:pt-24 2xl:pt-0"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <div
      class="mx-auto flex max-w-4xl flex-col items-center gap-8 p-4 text-center lg:gap-6 2xl:gap-12"
    >
      <div
        class="h-64 w-64 overflow-hidden rounded-t-full border-4 border-neutral-200/20 shadow-xl shadow-cyan-500/20 md:h-72 md:w-72 lg:h-80 lg:w-80 2xl:h-96 2xl:w-96"
      >
        <img
          src="@/assets/images/profile.jpg"
          alt="Portrait of Marina Dantis"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl font-black md:text-5xl lg:text-6xl 2xl:text-7xl">Hi, I’m Marina</h1>

        <p class="text-lg font-medium text-cyan-400 lg:text-xl 2xl:text-2xl">
          Web Developer & Product Engineer
        </p>

        <p class="max-w-2xl text-sm leading-relaxed text-neutral-400 lg:text-base 2xl:text-lg">
          Transforming ideas into elegant and functional digital experiences.
        </p>

        <div class="pt-3">
          <a
            href="assets/pdfs/CV.pdf"
            download="Marina-Dantis-CV.pdf"
            class="inline-flex transform items-center gap-1 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 px-6 py-3 text-sm font-semibold text-white transition-all duration-100 ease-out hover:scale-105 active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span> Download CV </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
