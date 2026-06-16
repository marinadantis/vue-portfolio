<script setup lang="ts">
import { ref } from 'vue'
import MobileMenu from './MobileMenu.vue'
import { NAV_LINKS, CONTACT_LINK } from '@/constants'
import { onMounted, onUnmounted } from 'vue'

const allLinks = [...NAV_LINKS, CONTACT_LINK]
const activeLink = ref('#home')
const isMenuOpen = ref(false)
const isScrollingClick = ref(false) // The lock flag variable

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (isScrollingClick.value) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeLink.value = `#${entry.target.id}`
        }
      })
    },
    {
      rootMargin: '-30% 0px -60% 0px', // Highlighting updates cleanly near top of viewport
    },
  )

  // Start watching every section element by its target ID string
  allLinks.forEach((link) => {
    const id = link.href.replace('#', '')
    const element = document.getElementById(id)
    if (element) observer?.observe(element)
  })
})

function handleUpdateLink(newLink: string) {
  activeLink.value = newLink
  isMenuOpen.value = false
  isScrollingClick.value = true // Activate lock

  // Turn the lock off automatically once the smooth scroll finishes
  setTimeout(() => {
    isScrollingClick.value = false
  }, 800)
}

onUnmounted(() => {
  observer?.disconnect()
})
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
        @click="handleUpdateLink('#home')"
      >
        <span
          class="bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80"
        >
          MD
        </span>
      </a>

      <!-- Navigation Links -->
      <div class="hidden gap-6 text-sm lg:flex">
        <a
          v-for="link in NAV_LINKS"
          :key="link.href"
          :href="link.href"
          @click="handleUpdateLink(link.href)"
          :class="[
            'rounded-lg px-3 py-2 transition-all duration-200',
            activeLink === link.href
              ? 'bg-neutral-800 font-medium text-white'
              : 'text-neutral-400 hover:scale-105 hover:bg-neutral-800/60 hover:text-white active:scale-95',
          ]"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- CTA Button -->
      <div class="hidden lg:block">
        <a
          :href="CONTACT_LINK.href"
          @click="activeLink = CONTACT_LINK.href"
          :class="[
            'inline-flex rounded-lg px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:scale-105 hover:bg-neutral-400 active:scale-95',
            activeLink === CONTACT_LINK.href
              ? 'bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400'
              : 'bg-neutral-100',
          ]"
          >{{ CONTACT_LINK.name }}</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="inline-flex h-10 w-10 transform items-center justify-center rounded-xl border border-neutral-800 bg-neutral-800 text-neutral-400 transition-all duration-150 ease-out hover:scale-105 hover:border-cyan-500/50 hover:text-cyan-500 active:scale-95 lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <!-- 1. HAMBURGER MENU ICON (Shows when menu is CLOSED) -->
        <svg
          v-if="!isMenuOpen"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>

        <!-- 2. CLOSE (X) ICON (Shows when menu is OPEN) -->
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <MobileMenu v-if="isMenuOpen" :active-link="activeLink" @update:active-link="handleUpdateLink" />
</template>
