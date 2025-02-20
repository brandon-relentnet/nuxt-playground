<script setup>
import { ref } from "vue";
import { PlayIcon } from "@heroicons/vue/24/solid";

const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  {
    text: "Services",
    link: "/services",
    children: [
      {
        text: "Website & App Development",
        link: "/services/website-development",
      },
      { text: "SEO & Digital Marketing", link: "/services/seo" },
      { text: "Graphic Design & Branding", link: "/services/graphic-design" },
      { text: "Social Media Growth", link: "/services/social-media" },
      { text: "Hosting & Self-Hosting Solutions", link: "/services/hosting" },
      { text: "Support & Maintenance", link: "/services/support-packages" },
    ],
  },
  { text: "Contact", link: "/contact" },
];

const activeDropdown = ref(null);
let closeTimeout = null;

const openDropdown = (linkText) => {
  if (closeTimeout) clearTimeout(closeTimeout);
  activeDropdown.value = linkText;
};

const closeDropdown = () => {
  closeTimeout = setTimeout(() => {
    activeDropdown.value = null;
  }, 150);
};
</script>

<template>
  <nav
    class="bg-base text-text h-20 flex justify-between items-center px-8 fixed top-0 left-0 w-full z-50"
  >
    <div class="flex justify-center items-center gap-x-2 w-full">
      <div class="flex justify-center items-center size-8" />
      <div v-for="link in navLinks" :key="link.text" class="relative">
        <div
          v-if="link.children"
          @mouseenter="openDropdown(link.text)"
          @mouseleave="closeDropdown"
        >
          <NuxtLink
            :to="link.link"
            class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
            activeClass="bg-surface"
            :aria-expanded="activeDropdown === link.text"
            aria-haspopup="true"
          >
            {{ link.text }}
            <PlayIcon
              class="size-3 inline-block -rotate-90 transition duration-200"
              :class="{
                'rotate-90': activeDropdown === link.text,
              }"
            />
          </NuxtLink>
          <div
            class="absolute left-0 mt-4 bg-surface rounded-xl overflow-hidden transition-all duration-200 ease-in-out"
            :class="{
              'opacity-100 translate-y-0 pointer-events-auto':
                activeDropdown === link.text,
              'opacity-0 translate-y-1 pointer-events-none':
                activeDropdown !== link.text,
            }"
          >
            <NuxtLink
              v-for="child in link.children"
              :key="child.text"
              :to="child.link"
              activeClass="bg-overlay"
              class="block px-4 py-3 hover:bg-overlay transition whitespace-nowrap"
            >
              {{ child.text }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          v-else
          :to="link.link"
          activeClass="bg-surface"
          class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center items-center size-8">
      <ThemeToggle />
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: "AdamBold", sans-serif;
}
</style>
