<script setup>
const teamMembers = [
  {
    name: "Brandon Harris",
    role: "Co-founder & Software Engineer",
    blurb:
      "Our artistic web designer, bringing technical wizardry and creativity to the table. He loves crafting functional and user-friendly websites with a passion for solving problems and perfection.",
    image: "/images/brandon-harris-pfp.jpg",
  },
  {
    name: "Daniel Velez",
    role: "Co-founder & Sales",
    blurb:
      "The sales expert, dedicated to empowering businesses with innovative web solutions. With a passion for technology and a knack for building relationships, he's committed to driving success through digital excellence.",
    image: "/images/daniel-velez-pfp.png",
  },
  {
    name: "Linsey Delaune",
    role: "Graphic Designer",
    blurb:
      "Our graphic designer, adding an artistic touch to your logos or banners. Her designs are visually appealing, ensuring a unique charm that resonates with your audience.",
    image: "/images/lindsey-delaune-pfp.jpg",
  },
];
</script>

<template>
  <section id="team-info" class="relative bg-surface py-section">
    <span class="bg-mask-right" />
    <div class="container relative mx-auto px-4 py-block">
      <div class="text-center lg:w-1/2 mx-auto px-4 mb-12">
        <SectionTitle>People</SectionTitle>
        <h2 class="text-5xl font-bold mb-6">
          The <span class="italic">relentless</span> individuals.
        </h2>
        <p class="text-subtle max-w-[80ch] mb-4">
          We are a team of dedicated professionals committed to delivering
          excellence in web development, design, and digital marketing. With a
          passion for innovation and a focus on results, we work collaboratively
          to bring your online vision to life.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 place-content-center mb-8">
        <div
          v-for="(member, i) in teamMembers"
          :key="member.name"
          v-sequential-fade="{ index: i, delay: 0.55 }"
          class="text-center grid-card gap-y-4"
        >
          <NuxtImg :src="member.image" class="rounded-xl h-auto mx-auto mb-6" />
          <div class="w-3/4 mx-auto">
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="role-text italic text-subtle tracking-wide mb-2">{{ member.role }}</p>
            <p class="text-subtle">{{ member.blurb }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <MotionButton scrollTo="the-difference"
          ><span class="italic">More</span> about us </MotionButton
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.role-text {
  font-family: "AdamBold", sans-serif;
}
</style>