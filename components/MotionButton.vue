<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "#imports";
import { PlayIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  scrollTo: {
    type: String,
    default: null,
  },
});

const router = useRouter();
const isLink = computed(() => !!props.to);
const isScrollTarget = computed(() => !!props.scrollTo);

function handleClick(event) {
  if (isScrollTarget.value) {
    event.preventDefault();
    const nextSectionEl = document.getElementById(props.scrollTo);
    nextSectionEl?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (isLink.value) {
    event.preventDefault();
    router.push(props.to);
    return;
  }
}
</script>

<template>
  <component
    :is="isLink ? 'NuxtLink' : 'button'"
    v-motion-button
    class="group mt-6 px-6 py-3 bg-linear-to-r tracking-widest font-bold from-rose to-foam text-text text-lg rounded-xl cursor-pointer"
    @click="handleClick"
    style="font-family: 'AdamBold', sans-serif; transform: scale(0);"
  >
    <slot />
    <PlayIcon
      :class="[
        'size-3 -mt-0.5 inline-block transition duration-200 text-text',
        isLink ? 'group-hover:rotate-360' : 'group-hover:rotate-90',
      ]"
    />
  </component>
</template>
