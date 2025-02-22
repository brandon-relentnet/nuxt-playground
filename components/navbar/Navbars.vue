<script setup>
import { computed, ref, onMounted } from "vue";
import { useWindowSize } from "@vueuse/core";

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1200);
</script>

<template>
  <div class="relative w-full h-20">
    <NavbarMobileNavbar v-if="isMounted && isMobile" />
    <NavbarDesktopNavbar v-else-if="isMounted" />
  </div>
</template>