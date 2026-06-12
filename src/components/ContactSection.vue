<script setup lang="ts">
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <section
    class="relative mb-4 flex min-h-fit flex-col items-center justify-center gap-4 p-4 py-22 md:min-h-screen md:py-0 md:pt-24 2xl:gap-6 2xl:pt-0"
  >
    <div
      class="mx-auto flex w-full max-w-4xl flex-col items-center p-4 text-center md:gap-2 2xl:gap-6"
    >
      <h2 class="text-3xl font-black md:text-5xl lg:text-4xl 2xl:text-5xl">Get in touch</h2>
      <p class="mt-2 text-sm leading-relaxed text-neutral-400">
        Let's build something great together. I'm always open to discussing product design projects,
        frontend development work, or potential partnerships. Drop me a line, and let's make it
        happen.
      </p>
    </div>

    <div
      class="mx-auto flex w-full max-w-4xl flex-col items-start justify-center gap-12 md:flex-row px-4"
    >
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
</template>
