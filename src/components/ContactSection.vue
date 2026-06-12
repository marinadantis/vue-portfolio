<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formRef = ref<HTMLFormElement | null>(null)

const statusMessage = ref('')
const isSubmitting = ref(false)

const handleFormSubmit = async () => {
  if (!formRef.value) return

  isSubmitting.value = true
  statusMessage.value = ''

  try {
    // Send form data directly to EmailJS using your dashboard IDs
    await emailjs.sendForm(
      'service_d0ckd7c', // Get YOUR_SERVICE_ID from "Email Services" page
      'template_bksl7o8', // Get YOUR_TEMPLATE_ID from "Email Templates" page
      formRef.value,
      {
        publicKey: 'ES3b-8p9MU4tg-mBT', // Get YOUR_PUBLIC_KEY from "Account" settings page
      },
    )

    statusMessage.value = 'success'
    formRef.value.reset() // Clears inputs on successful send
  } catch (error) {
    console.error('EmailJS Error:', error)
    statusMessage.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    class="relative mb-4 flex min-h-fit flex-col items-center justify-center p-4 gap-4 py-22 md:min-h-screen md:py-0 md:pt-24 2xl:gap-6 2xl:pt-0"
  >
    <div class="mx-auto flex max-w-4xl flex-col items-center p-4 text-center md:gap-2 2xl:gap-6">
      <h2 class="text-3xl font-black md:text-5xl lg:text-4xl 2xl:text-5xl">Get in touch</h2>
      <p class="mt-2 text-sm leading-relaxed text-neutral-400">
        Let's discuss your next project or just say hello!
      </p>
    </div>

    <form
      ref="formRef"
      @submit.prevent="handleFormSubmit"
      class="group flex w-full max-w-md flex-col gap-5 rounded-xl border border-cyan-500/40 bg-neutral-900/60 p-6 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/20"
    >
      <h3
        class="text-center text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-500"
      >
        Send a message
      </h3>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm font-semibold tracking-wide text-neutral-200"
            >Name</label
          >
          <input
            required
            name="from_name"
            id="name"
            type="text"
            placeholder="Your name"
            class="rounded-lg border border-neutral-700 bg-neutral-800/40 p-2.5 text-sm text-white focus-within:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-hidden"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm font-semibold tracking-wide text-neutral-200"
            >Email</label
          >
          <input
            required
            name="from_email"
            id="email"
            type="email"
            placeholder="example@email.com"
            class="rounded-lg border border-neutral-700 bg-neutral-800/40 p-2.5 text-sm text-white focus-within:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-hidden"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="message" class="text-sm font-semibold tracking-wide text-neutral-200"
            >Message</label
          >
          <textarea
            required
            name="message"
            id="message"
            placeholder="Tell me about your project, work or just say hi!"
            rows="3"
            class="rounded-lg border border-neutral-700 bg-neutral-800/40 p-2.5 text-sm text-white focus-within:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-hidden"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="transform items-center gap-1 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 px-6 py-3 text-sm font-semibold text-white transition-all duration-100 ease-out hover:scale-105 active:scale-95"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>

      <!-- Dynamic alerts -->
      <p
        v-if="statusMessage === 'success'"
        class="mt-2 text-center text-sm font-medium text-emerald-400"
      >
        ✓ Message sent successfully! I will get back to you soon.
      </p>
      <p
        v-if="statusMessage === 'error'"
        class="mt-2 text-center text-sm font-medium text-rose-400"
      >
        ✕ Something went wrong. Please try again or email me directly.
      </p>
    </form>
  </section>
</template>
