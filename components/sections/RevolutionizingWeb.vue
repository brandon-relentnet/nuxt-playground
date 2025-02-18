<script setup>
import {
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/vue/24/solid";

const servicesProvided = [
  {
    name: "Website & App Development",
    icon: CodeBracketIcon,
    link: "/services/website-development",
    description:
      "Custom-built websites and applications designed for performance, scalability, and seamless user experience.",
  },
  {
    name: "SEO & Digital Marketing",
    icon: ChartBarIcon,
    link: "/services/seo",
    description:
      "Boost your visibility, drive traffic, and turn clicks into loyal customers with proven SEO and marketing strategies.",
  },
  {
    name: "Graphic Design & Branding",
    icon: PaintBrushIcon,
    link: "/services/graphic-design",
    description:
      "Stand out with professional branding, eye-catching visuals, and a design identity that speaks to your audience.",
  },
  {
    name: "Social Media Growth",
    icon: MegaphoneIcon,
    link: "/services/social-media",
    description:
      "Engage, grow, and connect with your audience through targeted strategies that amplify your brand's voice.",
  },
  {
    name: "Hosting & Self-Hosting Solutions",
    icon: ServerStackIcon,
    link: "/services/hosting",
    description:
      "Reliable, secure hosting options—whether you need managed hosting or prefer full control with self-hosting.",
  },
  {
    name: "Support & Maintenance",
    icon: WrenchScrewdriverIcon,
    link: "/services/support-packages",
    description:
      "Peace of mind with expert support, ongoing maintenance, and proactive solutions to keep your business running smoothly.",
  },
];
</script>

<template>
  <section
    id="your-success"
    class="relative scroll-m-26 overflow-hidden bg-base">
    <span
      class="bg-mask-left"
    ></span>
    <div class="container relative mx-auto py-42">
      <div class="w-1/2 text-center mx-auto mb-16">
        <span class="text-sm text-rose font-semibold tracking-widest"
          >SERVICES</span
        >
        <h2 class="text-5xl font-bold mt-6">Your Success, Our Commitment</h2>
        <p class="text-subtle text-lg mt-4">
          We bring ideas to life with stunning websites, powerful apps, and
          strategic online growth. Whether you need a new digital home,
          marketing that converts, or reliable hosting and support, we’re here
          to make it happen.
        </p>
      </div>

      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="service in servicesProvided"
          :key="service.name"
          :to="service.link"
          class="flex group items-center shadow-md hover:shadow-foam/30 hover:shadow-lg justify-between space-x-4 bg-overlay p-6 rounded-xl border-2 border-transparent hover:border-foam/30 active:border-foam transition duration-200 cursor-pointer"
        >
          <div class="flex items-center space-x-4">
            <component :is="service.icon" class="size-8 text-rose" />
            <div>
              <h3 class="text-2xl font-semibold mb-2">{{ service.name }}</h3>
              <p class="text-subtle max-w-[30ch]">
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
        <NuxtLink
          to="/services"
          class="group mt-12 inline-block bg-linear-to-r from-rose to-foam text-text px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-200 cursor-pointer active:scale-95"
        >
          Explore All Services
          <PlayIcon
            class="size-3 -mt-0.5 inline-block group-hover:rotate-360 transition duration-200 text-text"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
