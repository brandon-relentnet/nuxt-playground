<!-- HomeHero.vue -->
<script setup>
import { ref, computed, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { useHead } from "#imports";

const { y } = useWindowScroll();
const imageVisible = ref(false);

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/software-35.png",
    },
  ],
});

onMounted(() => {
  setTimeout(() => {
    imageVisible.value = true;
  }, 100);
});

const parallaxStyle = computed(() => ({
  transform: `translateY(-${y.value * 0.3}px)`,
}));
</script>

<template>
  <div class="relative h-[112vh] w-full bg-rose overflow-hidden">
    <div
      ref="imageRef"
      class="absolute top-[10%] left-0 w-full h-[120%] transition-transform duration-700 ease-out"
      :class="{
        'translate-y-[100vh] opacity-0': !imageVisible,
        'translate-y-0 opacity-100': imageVisible,
      }"
      :style="parallaxStyle"
    >
      <NuxtImg
        src="/images/software-35.png"
        class="w-full h-full object-cover"
        loading="eager"
        priority
      />
    </div>

    <div
      class="absolute flex items-center justify-center left-1/2 top-[45vh] -translate-x-1/2 -translate-y-1/2 bg-radial from-base from-30% to-transparent to-70% w-[200vw] h-[200vw] max-w-[200vh] max-h-[200vh] aspect-square rounded-full"
    >
      <div class="w-1/2 text-6xl text-center font-bold">
        <h1 class="empower-text rounded-xl text-rose p-2">Empower</h1>
        <h1>your online vision.</h1>
        <MotionButton scrollTo="our-services">Explore </MotionButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideMask {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
}

.empower-text {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.empower-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    var(--color-foam),
    transparent
  );
  animation: slideMask 1s alternate 2;
}
</style>
