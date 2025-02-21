<script setup>
import { ref, computed } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core";

const { y } = useWindowScroll();
const imageVisible = ref(false);
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

function handleImageLoad() {
  imageVisible.value = true;
}

const parallaxStyle = computed(() => {
  return !isMobile.value
    ? { transform: `translateY(-${y.value * 0.3}px)` }
    : {};
});
</script>

<template>
  <div class="relative bg-rose overflow-hidden justify-center h-[92vh]">
    <ClientOnly>
      <div
        v-if="!isMobile"
        ref="imageRef"
        class="absolute inset-0 h-[130vh] transition-transform duration-700 z-0 ease-out"
        :class="{
          'translate-y-[100vh] opacity-0': !imageVisible,
          'translate-y-[5vh] opacity-100': imageVisible,
        }"
        :style="parallaxStyle"
      >
        <NuxtImg
          src="/images/software-35.webp"
          class="w-full h-full object-cover"
          alt="Homepage Image"
          format="webp"
          quality="80"
          @load="handleImageLoad"
        />
      </div>
    </ClientOnly>
    <div
      class="flex relative z-10 items-center mx-auto justify-center radial-gradient w-auto h-full"
    >
      <div class="text-center">
        <h1
          class="empower-text text-5xl md:text-6xl font-bold relative italic inline-block overflow-hidden rounded-xl text-rose p-2"
        >
          Empower
        </h1>
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          your online vision.
        </h1>
        <MotionButton scrollTo="our-services">Explore</MotionButton>
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

.radial-gradient {
  background: radial-gradient(
    circle at 50% 50%,
    var(--color-base) 35%,
    transparent 100%
  );
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
