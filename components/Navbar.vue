<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/24/solid";
import { navItemsData, accountItemsData } from "~/data/siteData";

const navItems = ref(navItemsData);
const accountItems = ref(accountItemsData);

function toggleDropdown(item) {
  item.open = !item.open;
}

function closeDropdown(item) {
  item.open = false;
}
</script>

<template>
  <div class="relative w-full h-20">
    <nav
      class="bg-base text-lg text-text fixed top-0 left-0 w-full z-50 px-8 flex justify-between items-center"
      style="font-family: AdamBold, sans-serif"
    >
      <ul class="flex space-x-4 items-center h-20">
        <NuxtLink
          to="/"
          class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200"
        >
          <NuxtImg
            src="/images/relentnet-logo.png"
            alt="RelentNet Logo"
            quality="100"
            width="48"
            height="48"
            format="webp"
          />
        </NuxtLink>
        <li v-for="(item, index) in navItems" :key="index" class="relative">
          <template v-if="item.dropdown">
            <NavDropdown
              :item="item"
              :toggleDropdown="toggleDropdown"
              :closeDropdown="closeDropdown"
            />
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
      <div class="flex items-center">
        <ul>
          <li
            v-for="(item, index) in accountItems"
            :key="index"
            class="relative"
          >
            <NavDropdown
              :item="item"
              :toggleDropdown="toggleDropdown"
              :closeDropdown="closeDropdown"
            />
          </li>
        </ul>
        <NuxtLink
          to="/contact"
          class="px-4 py-2 rounded-xl cursor-pointer text-subtle hover:text-text hover:bg-surface transition-colors duration-200"
        >
          <PhoneIcon class="size-6" />
        </NuxtLink>
        <div class="flex justify-center items-center size-8">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </div>
</template>
