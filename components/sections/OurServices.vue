<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import { servicesProvided } from "~/data/siteData";
</script>

<template>
  <section id="our-services" class="relative bg-surface py-section scroll-m-20">
    <span class="bg-mask-right" />
    <div class="container relative mx-auto px-4 py-block">
      <div class="md:w-2/3 text-center mx-auto mb-12">
        <SectionTitle>Services</SectionTitle>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Your success, our <span class="italic">commitment</span>.
        </h2>
        <p class="text-subtle max-w-[80ch] mx-auto">
          We bring ideas to life with stunning websites, powerful apps, and
          strategic online growth. Whether you need a new digital home,
          marketing that converts, or reliable hosting and support, we’re here
          to make it happen.
        </p>
      </div>

      <div class="my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-stagger-fade>
        <NuxtLink
          v-for="(service, i) in servicesProvided"
          :key="service.name"
          :to="service.link"
          class="flex grid-card group items-center shadow-md hover:shadow-foam/30 hover:shadow-lg justify-between gap-x-4 bg-overlay p-6 rounded-xl border-2 border-transparent hover:border-foam/30 active:border-foam transition duration-200 cursor-pointer"
        >
          <div class="flex items-center gap-x-4">
            <component :is="service.icon" class="size-8 text-rose" />
            <div>
              <h3 class="text-2xl font-semibold mb-2">{{ service.name }}</h3>
              <p class="text-subtle max-w-[40ch]">
                {{ service.description }}
              </p>
            </div>
          </div>
          <ArrowRightIcon
            class="size-6 text-subtle group-hover:text-rose transition duration-200"
          />
        </NuxtLink>
      </div>
      <div class="flex justify-center">
        <MotionButton to="/services">See our services </MotionButton>
      </div>
    </div>
  </section>
</template>
