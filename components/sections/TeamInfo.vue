<script setup>
import { teamMembers } from "~/data/siteData";
</script>

<template>
  <section id="team-info" class="relative bg-surface py-section scroll-m-20">
    <span class="bg-mask-right" />
    <div class="container relative mx-auto px-4 py-block">
      <div class="text-center lg:w-1/2 mx-auto px-4 mb-12">
        <SectionTitle>People</SectionTitle>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          The <span class="italic">relentless</span> individuals.
        </h2>
        <p class="text-subtle max-w-[80ch] mb-4">
          We are a team of dedicated professionals committed to delivering
          excellence in web development, design, and digital marketing. With a
          passion for innovation and a focus on results, we work collaboratively
          to bring your online vision to life.
        </p>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-12 place-content-center mb-8"
        v-stagger-fade
      >
        <div
          v-for="(member, i) in teamMembers"
          :key="member.name"
          class="text-center grid-card gap-y-4"
        >
          <NuxtImg
            :src="member.image"
            class="rounded-xl mx-auto mb-6"
            :alt="member.name"
            quality="100"
            sizes="350px md:400px"
          />
          <div class="w-3/4 mx-auto">
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="role-text italic text-subtle tracking-wide mb-2">
              {{ member.role }}
            </p>
            <p class="text-subtle">{{ member.blurb }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <MotionButton scrollTo="the-difference"
          ><span class="italic">More</span> about us
        </MotionButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.role-text {
  font-family: "AdamBold", sans-serif;
}
</style>
