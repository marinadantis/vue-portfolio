<script setup lang="ts">
import { NAV_LINKS, CONTACT_LINK } from '@/constants'

const emits = defineEmits(['update:activeLink'])

defineProps<{
  activeLink: string
}>()

function handleLinkClick(href: string) {
  emits('update:activeLink', href)
}
</script>

<template>
  <section class="fixed inset-0 z-40 flex min-h-screen items-center justify-center bg-zinc-950">
    <div class="flex flex-col gap-4">
      <a
        v-for="link in [...NAV_LINKS, CONTACT_LINK]"
        :key="link.href"
        :href="link.href"
        @click="handleLinkClick(link.href)"
        :class="[
          'rounded-lg px-3 py-2 text-xl font-bold transition-all duration-200 hover:scale-105 hover:text-cyan-400 active:scale-95',
          activeLink === link.href ? 'text-cyan-400' : 'text-neutral-400',
        ]"
      >
        {{ link.name }}
      </a>
    </div>
  </section>
</template>
