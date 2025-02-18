<script setup>
import { PlayIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section id="our-services" class="relative bg-base">
    <span class="bg-mask-left" />
    <div class="container relative mx-auto py-section px-4">
      <div class="md:w-1/2 text-center mx-auto py-block">
        <span class="text-sm text-rose font-semibold tracking-widest"
          >SERVICES</span
        >
        <h2 class="text-5xl font-bold mt-6">
          Enough talk, let's grow <span class="italic">together</span>.
        </h2>
        <div class="flex justify-center">
          <NuxtLink
            to="/contact"
            class="group mt-12 inline-block bg-linear-to-r from-rose to-foam text-text px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-200 cursor-pointer active:scale-95"
          >
            Get in touch
            <PlayIcon
              class="size-3 -mt-0.5 inline-block group-hover:rotate-360 transition duration-200 text-text"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
