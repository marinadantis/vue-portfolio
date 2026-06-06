<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]

const activeLink = ref()
</script>

<template>
  <nav
    class="fixed top-4 left-1/2 z-50 h-20 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-xl border border-neutral-800 bg-black/90 p-6 text-white shadow-xl shadow-black/40 backdrop-blur-md md:w-[calc(100%-20rem)]"
  >
    <div class="mx-auto flex h-full items-center justify-between gap-2">
      <!-- Logo -->
      <a
        href="#home"
        class="group text-2xl font-black tracking-tighter"
        @click="activeLink = '#home'"
      >
        <span
          class="bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80"
        >
          MD
        </span>
      </a>

      <!-- Navigation Links -->
      <div class="flex gap-4 text-sm">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="activeLink = link.href"
          :class="[
            'rounded-lg px-3 py-2 transition-all duration-200',
            activeLink === link.href
              ? 'bg-neutral-800 font-medium text-white'
              : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white',
          ]"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- CTA Button -->
      <div>
        <a
          href="#contact"
          @click="activeLink = '#contact'"
          :class="[
            'rounded-lg px-4 py-2 text-sm font-medium text-black transition-all duration-200',
            activeLink === '#contact'
              ? 'bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400'
              : 'bg-neutral-100 hover:bg-neutral-400',
          ]"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>
