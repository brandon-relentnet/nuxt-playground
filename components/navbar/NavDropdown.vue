<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { PlayIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  toggleDropdown: {
    type: Function,
    required: true,
  },
  closeDropdown: {
    type: Function,
    required: true,
  },
});

const dropdownRef = ref(null);

onMounted(() => {
  if (dropdownRef.value) {
    autoAnimate(dropdownRef.value);
  }
});
</script>

<template>
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
      ref="dropdownRef"
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
              <span class="group-hover:text-foam">
                {{ link.label }}
              </span>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
