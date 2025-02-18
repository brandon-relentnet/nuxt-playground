<script setup>
import { PlayIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section
    class="relative bg-base"
  >
    <span class="bg-mask-left"></span>
    <div class="container relative mx-auto px-4 py-section">
      <div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 py-block">
        <NuxtImg
          src="/images/software-33.png"
          class="md:w-1/2 h-full object-cover"
        </NuxtImg>
        <div class="lg:w-1/3 text-left">
          <span class="text-sm text-rose font-semibold tracking-widest"
            >FORTE</span
          >
          <h2 class="text-5xl font-bold mt-6">Revolutionizing the web with <span class="italic">relentless</span> results.</h2>
          <p class="text-subtle text-lg mt-4">
            In a rapidly evolving digital landscape, RelentNet combines innovation, creativity, and technical expertise to deliver web solutions that drive business growth. That’s why we approach every project with relentless determination to deliver exceptional results. Our team of experts combines innovation, creativity, and technical prowess to provide you with web services that stand out in the online world. With RelentNet, you’re not just getting web services; you’re getting a partner committed to achieving relentless success for your online presence.
          </p>
          <NuxtLink
            to="/about"
            class="group mt-12 inline-block bg-linear-to-r from-rose to-foam text-text px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-200 cursor-pointer active:scale-95"
          >
            Learn about us
            <PlayIcon
              class="size-3 -mt-0.5 inline-block group-hover:rotate-360 transition duration-200 text-text"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
