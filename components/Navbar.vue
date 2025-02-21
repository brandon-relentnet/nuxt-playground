<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { PlayIcon, PhoneIcon } from "@heroicons/vue/24/solid";
import { navItemsData } from "~/data/siteData";

const navItems = ref(navItemsData);
const dropdownRefs = ref([]);

function setDropdownRef(el, index) {
  dropdownRefs.value[index] = el;
}

onMounted(() => {
  dropdownRefs.value.forEach((el) => {
    if (el) autoAnimate(el);
  });
});

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
            <div v-on-click-outside.bubble="() => closeDropdown(item)">
              <button
                @click="toggleDropdown(item)"
                class="focus:outline-none hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
                :class="{ 'bg-surface': item.open }"
              >
                {{ item.label }}
                <PlayIcon
                  class="size-3 inline-block -rotate-90 transition duration-200 mb-0.5"
                  :class="{ 'rotate-90': item.open }"
                />
              </button>
              <div
                :ref="(el) => setDropdownRef(el, index)"
                :id="'dropdown-' + item.label.replace(/\s+/g, '-')"
                class="fixed top-20 left-0 w-full bg-surface shadow-lg dropdown-menu overflow-hidden transition-all duration-300"
                :class="item.open ? 'h-[275px] p-4' : 'h-0 p-0'"
              >
                <div
                  v-if="item.open"
                  class="w-full flex flex-wrap justify-start gap-x-12 px-8"
                >
                  <div
                    v-for="(section, sIndex) in item.sections"
                    :key="sIndex"
                    class="min-w-[200px] p-4"
                  >
                    <SectionTitle>
                      {{ section.sectionLabel }}
                    </SectionTitle>
                    <ul class="gap-y-2 flex flex-col">
                      <NuxtLink
                        v-for="(link, linkIndex) in section.links"
                        :key="linkIndex"
                        class="py-2 group hover:bg-overlay rounded-xl px-4 -ml-4"
                        :to="link.url"
                      >
                        <component
                          :is="link.icon"
                          class="size-6 text-rose inline-block mr-2 -mt-0.5"
                        />
                        <span class="group-hover:text-foam">{{
                          link.label
                        }}</span>
                      </NuxtLink>
                    </ul>
                  </div>
                </div>
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
      <div class="flex items-center">
        <NuxtLink
          v-motion-button
          to="/contact"
          class="px-4 py-2 rounded-xl cursor-pointer text-subtle hover:text-text hover:bg-surface transition-colors duration-200"
          style="visibility: hidden; transform: scale(0)"
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
