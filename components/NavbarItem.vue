<script setup>
defineProps({
  text: { type: String, required: true },
  link: { type: String, required: true },
});
</script>

<template>
  <NuxtLink
    :to="link"
    activeClass="bg-surface"
    class="hover:bg-surface rounded-xl px-4 py-2 transition-colors duration-300"
  >
    {{ text }}
  </NuxtLink>
</template>
