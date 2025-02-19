<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '~/stores/theme';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const themeStore = useThemeStore();
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <div class="flex justify-center items-center size-8">
    <button
      v-if="mounted"
      v-motion-button
      @click="themeStore.toggle"
      class="px-4 py-2 rounded-xl cursor-pointer text-subtle hover:text-text hover:bg-surface"
    >
      <transition name="scale" mode="out-in">
        <MoonIcon v-if="themeStore.mode === 'dark'" class="size-6" key="moon" />
        <SunIcon v-else key="sun" class="size-6" />
      </transition>
    </button>
  </div>
</template>
