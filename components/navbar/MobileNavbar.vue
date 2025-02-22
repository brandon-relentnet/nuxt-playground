<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { navItemsData, accountItemsData } from "~/data/siteData";
import { Bars3Icon, PhoneIcon, PlayIcon, XMarkIcon } from "@heroicons/vue/24/solid";

const isOpen = ref(false);
const currentMenu = ref("main");
const activeItem = ref(null);
const menuContainer = ref(null);

const navItems = ref(navItemsData);
const accountItems = ref(accountItemsData);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
  currentMenu.value = "main";
  activeItem.value = null;
}

function openSubMenu(item) {
  activeItem.value = item;
  currentMenu.value = "sub";
}

function backToMain() {
  currentMenu.value = "main";
  activeItem.value = null;
}

onMounted(() => {
  if (menuContainer.value) {
    autoAnimate(menuContainer.value);
  }
});
</script>

<template>
  <nav
    class="bg-base text-lg text-text fixed top-0 left-0 w-full z-50 px-8 flex justify-between items-center h-20"
    style="font-family: AdamBold, sans-serif"
  >
    <ul class="flex space-x-4 items-center h-20">
      <NuxtLink to="/" class="ml-4">
        <NuxtImg
          src="/images/relentnet-logo.png"
          alt="RelentNet Logo"
          width="48"
          height="48"
          format="webp"
        />
      </NuxtLink>
      <div v-on-click-outside.bubble="closeMenu">
        <button
          @click="toggleMenu"
          class="focus:outline-none hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer"
        >
          <Bars3Icon class="size-6" />
        </button>
        <div
          ref="menuContainer"
          class="absolute top-20 left-0 bg-surface shadow-lg h-screen dropdown-menu overflow-auto"
          :class="isOpen ? 'sm:w-3/5 w-full' : 'w-0'"
        >
        <button class="absolute top-0 right-0 p-4 cursor-pointer text-muted" @click="closeMenu">
          <XMarkIcon class="size-6" />

        </button>
          <div v-if="isOpen" class="p-4">
            <Transition name="slide-out" mode="out-in">
              <div v-if="currentMenu === 'main'">
                <SectionTitle>Menu</SectionTitle>
                <ul>
                  <li v-for="(item, i) in navItems" :key="i">
                    <template v-if="item.dropdown">
                      <div
                        @click="openSubMenu(item)"
                        class="cursor-pointer group mb-2 block py-2 focus:outline-none hover:bg-overlay rounded-xl px-4 transition-colors duration-200"
                      >
                        <span>{{ item.label }}</span>
                        <PlayIcon
                          class="size-3 inline-block transition duration-200 ml-2 mb-1 group-hover:rotate-360"
                        />
                      </div>
                    </template>
                    <template v-else>
                      <NuxtLink
                        :to="item.url"
                        class="cursor-pointer hover:text-foam block mb-2 py-2 focus:outline-none hover:bg-overlay rounded-xl px-4 transition-colors duration-200"
                        @click="closeMenu"
                      >
                        {{ item.label }}
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
                <ul>
                  <li v-for="(item, i) in accountItems" :key="i">
                    <template v-if="item.dropdown">
                      <div
                        @click="openSubMenu(item)"
                        class="group cursor-pointer block mb-2 py-2 focus:outline-none hover:bg-overlay rounded-xl px-4 transition-colors duration-200"
                      >
                        <span>{{ item.label }}</span>
                        <PlayIcon
                          class="size-3 inline-block transition duration-200 ml-2 mb-1 group-hover:rotate-360"
                        />
                      </div>
                    </template>
                    <template v-else>
                      <NuxtLink
                        :to="item.url"
                        class="group cursor-pointer block mb-2 py-2 focus:outline-none hover:bg-overlay rounded-xl px-4 transition-colors duration-200"
                        @click="closeMenu"
                      >
                        {{ item.label }}
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
                <div class="flex items-center">
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
              </div>
            </Transition>
            <Transition name="slide-in" mode="out-in">
              <div v-if="currentMenu === 'sub'">
                <button
                  @click="backToMain"
                  class="text-muted group mb-4 cursor-pointer hover:text-foam transition duration-200"
                >
                  <PlayIcon
                    class="size-3 inline-block -rotate-180 transition duration-200 mb-1 group-hover:rotate-180"
                  />
                  Back
                </button>
                <div class="text-xl font-semibold mb-4 underline">
                  {{ activeItem?.label }}
                </div>
                <ul class="gap-y-4 flex flex-col">
                  <li
                    v-for="(section, sIndex) in activeItem.sections"
                    :key="sIndex"
                    class=""
                  >
                    <SectionTitle>
                      {{ section.sectionLabel }}
                    </SectionTitle>
                    <ul class="gap-y-2 flex flex-col">
                      <li
                        v-for="(link, linkIndex) in section.links"
                        :key="linkIndex"
                        class="mb-2"
                      >
                        <NuxtLink
                          :to="link.url"
                          class="py-2 group block hover:bg-overlay rounded-xl px-4 transition duration-200"
                          @click="closeMenu"
                        >
                          <component
                            :is="link.icon"
                            class="size-6 text-rose inline-block mr-2 -mt-0.5"
                          />
                          <span
                            class="group-hover:text-foam transition duration-200"
                          >
                            {{ link.label }}
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.slide-out-leave-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-in-enter-active {
  position: absolute;
}

.slide-out-move,
.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-move,
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease;
}

.slide-out-enter-from,
.slide-out-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
