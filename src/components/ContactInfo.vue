<script setup lang="ts"></script>

<template>
  <div class="mx-auto flex min-h-110 w-full max-w-sm flex-col justify-between py-2">
    <div class="flex w-full flex-col gap-8">
      <h3 class="text-xl font-bold tracking-tight text-white">Contact Information</h3>

      <div class="flex flex-col gap-6">
        <!-- Item Block: Email -->
        <div class="group flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div class="pt-0.5">
            <h5 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Email:</h5>
            <a
              href="mailto:marina.dantis@gmail.com"
              class="text-sm font-medium text-neutral-200 transition-colors hover:text-cyan-400"
              >marina.dantis@gmail.com</a
            >
          </div>
        </div>

        <!-- Item Block: Phone -->
        <div class="group flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <div class="pt-0.5">
            <h5 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Phone:</h5>
            <a
              href="tel:+971588813557"
              class="text-sm font-medium text-neutral-200 transition-colors hover:text-cyan-400"
              >(+971) 588813557</a
            >
          </div>
        </div>

        <!-- Item Block: Location -->
        <div class="group flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div class="pt-0.5">
            <h5 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
              Location:
            </h5>
            <p class="text-sm font-medium text-neutral-200">Dubai, UAE</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 border-t border-neutral-800/60 pt-6">
      <h4 class="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
        Connect with me
      </h4>
      <div class="flex gap-5 pl-1">
        <!-- GitHub -->
        <a
          href="https://github.com/marinadantis"
          target="_blank"
          rel="noopener noreferrer"
          class="transform text-neutral-400 transition-all duration-150 ease-out hover:scale-105 hover:text-cyan-500 active:scale-95"
          aria-label="GitHub Profile"
        >
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.06.069-.06 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/marina-dantis/"
          target="_blank"
          rel="noopener noreferrer"
          class="transform text-neutral-400 transition-all duration-150 ease-out hover:scale-105 hover:text-cyan-500 active:scale-95"
          aria-label="LinkedIn Profile"
        >
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
