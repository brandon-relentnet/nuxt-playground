<script setup>
import { ref } from "vue";

const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  {
    text: "Services",
    link: "/services",
    children: [
      { text: "Website Development", link: "/services/webdesign" },
      { text: "App Development", link: "/services/app-development" },
      { text: "SEO", link: "/services/seo" },
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
        <NavbarItem
          :text="link.text"
          :link="link.link"
          :key="link.text"
          :aria-expanded="activeDropdown === link.text"
          aria-haspopup="true"
        />
        <div
          class="absolute left-0 mt-4 bg-base border border-text rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
          :class="{
            'opacity-100 translate-y-0 pointer-events-auto':
              activeDropdown === link.text,
            'opacity-0 translate-y-1 pointer-events-none':
              activeDropdown !== link.text,
          }"
        >
          <NavbarItem
            v-for="child in link.children"
            :key="child.text"
            :text="child.text"
            :link="child.link"
            class="block"
          />
        </div>
      </div>
      <NavbarItem v-else :text="link.text" :key="link.text" :link="link.link" />
    </div>
    <ThemeToggle />
  </nav>
</template>
