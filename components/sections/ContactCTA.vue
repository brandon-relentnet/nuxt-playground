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
        <div class="flex justify-center pt-6">
          <MotionButton to="/contact">Get in touch </MotionButton>
        </div>
      </div>
    </div>
  </section>
</template>
