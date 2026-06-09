<script setup lang="ts">
import { CONTACT_LINK } from '@/constants/navigation'
</script>

<template>
  <section
    class="relative flex min-h-fit items-center justify-center py-24 md:min-h-screen md:py-0 md:pt-28 lg:pt-24 2xl:pt-0"
  >
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-6 p-4 lg:flex-row lg:gap-16 2xl:gap-20"
    >
      <div
        class="h-48 w-48 overflow-hidden rounded-t-full border-4 border-neutral-200/20 shadow-xl shadow-cyan-500/20 md:h-72 md:w-72 lg:h-80 lg:w-80 2xl:h-96 2xl:w-96"
      >
        <img
          src="@/assets/images/about.jpg"
          alt="Portrait of Marina Dantis"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-4 p-4 md:gap-6 md:text-left">
        <h2
          class="text-center text-3xl font-black md:text-left md:text-5xl lg:text-4xl 2xl:text-5xl"
        >
          About me
        </h2>

        <div class="flex flex-col gap-4">
          <p
            class="max-w-xl text-sm leading-relaxed text-neutral-400 md:max-w-2xl lg:text-base 2xl:text-lg"
          >
            I'm Marina, a web developer specializing in HTML, CSS, JavaScript, and modern frameworks
            like Vue.js and TailwindCSS. I enjoy building clean, scalable, and user-focused digital
            experiences that combine thoughtful design with reliable engineering.
          </p>

          <p
            class="max-w-xl text-sm leading-relaxed text-neutral-400 md:max-w-2xl lg:text-base 2xl:text-lg"
          >
            I work at the intersection of product and engineering - simplifying workflows, improving
            efficiency, and delivering features from ideation to production. From system design and
            implementation to iteration based on user feedback, I enjoy owning the full journey and
            building solutions that feel intuitive, purposeful, and dependable.
          </p>
        </div>

        <div class="w-full pt-3 text-center md:text-left">
          <a
            :href="CONTACT_LINK.href"
            class="inline-flex transform items-center gap-1 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 px-6 py-3 text-sm font-semibold text-white transition-all duration-100 ease-out hover:scale-105 active:scale-95"
          >
            <span> Contact me </span>
            <!-- TODO: update active link as contact to mark it as active when clicked -->
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
