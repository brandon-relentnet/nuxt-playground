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
      { text: "Website Development", link: "/services/website-development" },
      { text: "App Development", link: "/services/app-development" },
      { text: "SEO", link: "/services/seo" },
      { text: "Self Hosting", link: "/services/self-hosting" },
      { text: "Support Packages", link: "/services/support-packages" },
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
    class="bg-base text-text p-4 flex justify-end items-center fixed top-0 left-0 w-full space-x-2 font-semibold"
  >
    <div
      v-for="link in navLinks"
      :key="link.text"
      class="relative inline-block"
    >
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
          {{ link.text }} <PlayIcon class="size-3 inline-block -rotate-90 transition duration-200"
          :class="{
            'rotate-90': activeDropdown === link.text,
          }" />
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
    <ThemeToggle />
  </nav>
</template>
