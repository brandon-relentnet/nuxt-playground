<script setup>
import { PlayIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section class="relative bg-surface py-section">
    <span class="bg-mask-right"></span>
    <div class="container relative mx-auto px-4 py-block">
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:gap-x-12"
      >
        <div class="lg:w-1/3 text-left">
          <SectionTitle>Manage</SectionTitle>
          <h2 class="text-5xl font-bold mb-6">
            <span class="italic">Simplify</span> your online management.
          </h2>
          <p class="text-subtle mb-12">
            RelentNet’s all-in-one website management platform simplifies your
            digital operations, from design and development to hosting, updates,
            and ongoing support. From design and development to hosting and
            updates, we provide a seamless experience that puts everything you
            need at your fingertips.
          </p>
          <SectionTitle>Benefits</SectionTitle>
          <p class="text-subtle mb-4">
            <strong>- Centralized Control</strong><br />Manage all aspects of
            your website from a single, user-friendly dashboard, saving you time
            and effort.
          </p>
          <p class="text-subtle mb-4">
            <strong>- Comprehensive Tools</strong><br />Access a full suite of
            tools for design, content management, e-commerce, analytics, and
            more, all in one place.
          </p>
          <p class="text-subtle">
            <strong>- 24/7 Support</strong><br />Our dedicated team is always
            available to assist with any issues or questions, ensuring your site
            runs smoothly.
          </p>
          <NuxtLink
            v-motion-button
            to="https://control.relentnet.com/index.php?rp=/login"
            class="group mt-12 inline-block bg-linear-to-r from-rose to-foam text-text px-6 py-3 text-lg rounded-xl tracking-widest font-bold cursor-pointer"
            style="font-family: 'AdamBold', sans-serif"
          >
            Access your account
            <PlayIcon
              class="size-3 -mt-0.5 inline-block group-hover:rotate-360 transition duration-200 text-text"
            />
          </NuxtLink>
        </div>
        <NuxtImg
          src="/images/software-23.png"
          class="md:w-1/2 h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
