<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { PlayIcon } from "@heroicons/vue/24/solid";

const navItems = ref([
  {
    label: "Domains",
    dropdown: true,
    open: false,
    items: [
      { label: "Register", url: "https://control.relentnet/register" },
      { label: "Transfer", url: "https://control.relentnet/transfer" },
    ],
  },
  {
    label: "Websites",
    dropdown: true,
    open: false,
    items: [
      { label: "Website Builder", url: "#" },
      { label: "Website Templates", url: "#" },
      { label: "Online Store", url: "#" },
      { label: "Website Design Services", url: "#" },
      { label: "SEO Services", url: "#" },
      { label: "Digital Marketing Services", url: "#" },
    ],
  },
  {
    label: "Email",
    dropdown: false,
    url: "#",
  },
  {
    label: "Hosting and Security",
    dropdown: true,
    open: false,
    items: [
      { label: "Wordpress Hosting", url: "#" },
      { label: "Web Hosting", url: "#" },
      { label: "VPS Hosting", url: "#" },
      { label: "SSL Certificates", url: "#" },
      { label: "Website Security", url: "#" },
    ],
  },
  {
    label: "About",
    dropdown: false,
    url: "#",
  },
  {
    label: "Contact",
    dropdown: false,
    url: "#",
  },
]);

const dropdownRefs = ref([]);

function setDropdownRef(el, index) {
  dropdownRefs.value[index] = el;
}

onMounted(() => {
  dropdownRefs.value.forEach(el => {
    if (el) autoAnimate(el);
  });
});

function toggleDropdown(item, index) {
  item.open = !item.open;
}

function closeDropdown(item) {
  item.open = false;
}
</script>

<template>
  <div class="relative w-full h-20">
    <nav class="bg-base text-lg text-text fixed top-0 left-0 w-full z-50 px-8">
      <ul class="flex space-x-4 items-center h-20">
        <li v-for="(item, index) in navItems" :key="index" class="relative">
          <template v-if="item.dropdown">
            <div v-on-click-outside.bubble="() => closeDropdown(item)">
              <button
                @click="toggleDropdown(item, index)"
                class="focus:outline-none hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
                :class="{ 'bg-surface': item.open }"
              >
                {{ item.label }}
                <PlayIcon
                  class="size-3 inline-block -rotate-90 transition duration-200"
                  :class="{ 'rotate-90': item.open }"
                />
              </button>
              <div
                :ref="el => setDropdownRef(el, index)"
                :id="'dropdown-' + item.label.replace(/\s+/g, '-')"
                class="fixed flex top-20 left-0 w-full bg-surface shadow-lg dropdown-menu overflow-hidden transition-all duration-300"
                :style="item.open ? { height: '250px' } : { height: '0', padding: '0', border: 'none' }"
              >
                <ul v-if="item.open">
                  <li
                    v-for="(child, idx) in item.items"
                    :key="idx"
                    class="py-1"
                  >
                    <a :href="child.url" class="block hover:text-blue-600">
                      {{ child.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <template v-else>
            <NuxtLink
              :to="item.url"
              class="focus:outline-none hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
nav {
  font-family: "AdamBold", sans-serif;
}
</style>
