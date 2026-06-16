<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-zinc-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200"
  >
    <AppNavbar />

    <main class="grow">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>

    <AppFooter />
  </div>
</template>
