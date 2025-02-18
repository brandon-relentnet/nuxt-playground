<script setup>
import { useWindowScroll } from "@vueuse/core";
import { computed, ref } from "vue";

const { y } = useWindowScroll();

const parallaxStyle = computed(() => ({
  transform: `translateY(-${y.value * 0.3}px)`,
}));

const nextSection = ref(null);

const scrollToNextSection = () => {
  nextSection.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="relative">
    <div class="relative h-[112vh] w-full bg-rose overflow-hidden">
      <div
        class="absolute top-[10%] left-0 w-full h-[120%] transition-transform duration-400 ease-out"
        :style="parallaxStyle"
      >
        <NuxtImg
          src="/images/software-35.png"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute flex items-center justify-center left-1/2 top-[46vh] -translate-x-1/2 -translate-y-1/2 bg-radial from-base from-25% to-transparent to-70% w-[200vw] h-[200vw] max-w-[200vh] max-h-[200vh] aspect-square rounded-full"
      >
        <div class="w-1/3 text-5xl text-center font-bold">
          <h1 class="empower-text rounded-xl text-rose p-2">Empower</h1>
          <h1>your online vision.</h1>

          <button
            @click="scrollToNextSection"
            class="mt-6 px-6 py-3 bg-linear-to-r from-rose to-foam text-text text-lg rounded-xl font-semibold hover:scale-105 transition duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    <div ref="nextSection" class="h-300 w-full">
      <h2 class="text-3xl font-bold text-text">Welcome to the next section!</h2>
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
