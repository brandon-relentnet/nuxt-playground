<script setup>
import { useWindowScroll } from "@vueuse/core";
import { computed } from "vue";
import { PlayIcon } from "@heroicons/vue/24/solid";

const { y } = useWindowScroll();

const parallaxStyle = computed(() => ({
  transform: `translateY(-${y.value * 0.3}px)`,
}));

const scrollToNextSection = () => {
  const nextSectionEl = document.getElementById('your-success');
  nextSectionEl?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
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
        class="absolute flex items-center justify-center left-1/2 top-[45vh] -translate-x-1/2 -translate-y-1/2 bg-radial from-base from-30% to-transparent to-70% w-[200vw] h-[200vw] max-w-[200vh] max-h-[200vh] aspect-square rounded-full"
      >
        <div class="w-1/2 text-6xl text-center font-bold">
          <h1 class="empower-text rounded-xl text-rose p-2">Empower</h1>
          <h1>your online vision.</h1>

          <button
            @click="scrollToNextSection"
            class="group mt-6 px-6 py-3 bg-linear-to-r from-rose to-foam text-text text-lg rounded-xl font-semibold hover:scale-105 transition duration-200 cursor-pointer active:scale-95"
          >
            Explore 
            <PlayIcon
              class="size-3 -mt-0.5 inline-block group-hover:rotate-90 transition duration-200 text-text"
            />
          </button>
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
