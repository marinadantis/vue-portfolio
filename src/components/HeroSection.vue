<script setup lang="ts">
import heroBg from '@/assets/images/hero-bg.jpg'
</script>

<template>
  <section
    class="min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroBg})` }"
  ></section>
</template>
