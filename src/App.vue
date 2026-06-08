<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-neutral-900 text-white selection:bg-cyan-500/30 selection:text-cyan-200"
  >
    <AppNavbar />

    <main class="grow">
      <HeroSection id="home" />
    </main>

    <AppFooter />
  </div>
</template>
