<script setup>
import { ChartBarIcon, EyeIcon, HeartIcon, PlayIcon } from "@heroicons/vue/24/solid";

const theDifferences = [
  {
    title: "Results-Driven Excellence",
    subtitle: "We don’t just build—we deliver measurable success.",
    description:
      "Every project we take on is backed by strategy, innovation, and data-driven decision-making. Your growth is our mission.",
    icon: ChartBarIcon,
  },
  {
    title: "Radical Transparency",
    subtitle: "No hidden fees, no surprises—just honest collaboration.",
    description:
      "We believe in open communication, clear pricing, and keeping you informed every step of the way. Trust is at the core of everything we do.",
    icon: EyeIcon,
  },
  {
    title: "Long-Term Partnership",
    subtitle: "Beyond launch, beyond the sale—we’re here for the long run.",
    description:
      "We don’t disappear after delivering your project. We ensure your digital presence thrives with continuous support and strategic guidance.",
    icon: HeartIcon,
  },
];
</script>

<template>
  <section id="the-difference" class="relative bg-base">
    <span class="bg-mask-left" />
    <div
      class="container relative mx-auto py-section px-4 lg:px-14 xl:px-24 2xl:px-34 flex flex-col lg:flex-row items-center justify-center lg:space-x-12"
    >
      <div class="grid grid-cols-1 gap-8 w-full">
        <div
          v-for="(difference, index) in theDifferences"
          :key="index"
          class="flex items-center space-x-4 bg-overlay p-6 rounded-xl border-2 border-transparent hover:border-foam/30 active:border-foam transition duration-200 shadow-md hover:shadow-foam/30 hover:shadow-lg"
        >
          <component :is="difference.icon" class="size-8 text-rose" />
          <div>
            <h3 class="text-2xl font-semibold mb-2">{{ difference.title }}</h3>
            <p class="text-subtle italic">
              {{ difference.subtitle }}
            </p>
            <p class="text-subtle mt-2">
              {{ difference.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 py-block">
        <span class="text-sm text-rose font-semibold tracking-widest"
          >DIFFERENCE</span
        >
        <h2 class="text-5xl font-bold mt-6">
          A website agency that <span class="italic">stays</span> with you.
        </h2>
        <p class="text-subtle text-lg mt-6">
          At RelentNet, we don’t just design websites and provide hosting – we
          cultivate lasting partnerships. In a digital landscape cluttered with
          faceless corporations, we stand out as a beacon of customer-centric
          commitment.
        </p>
        <p class="text-subtle text-lg mt-4">
          Unlike the giants who hand you a product and disappear, at RelentNet,
          we build lasting partnerships. Our commitment extends beyond creating
          websites; we provide ongoing support to help your digital presence
          grow and thrive. Our journey with you extends far beyond the
          transaction; it’s a perpetual collaboration focused on your success.
        </p>
        <div class="flex justify-center pb-block">
          <NuxtLink
            to="/services"
            class="group mt-12 inline-block bg-linear-to-r from-rose to-foam text-text px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-200 cursor-pointer active:scale-95"
          >
            More about us
            <PlayIcon
              class="size-3 -mt-0.5 inline-block group-hover:rotate-360 transition duration-200 text-text"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
