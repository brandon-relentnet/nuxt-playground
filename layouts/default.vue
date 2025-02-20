<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <SpeedInsights />
    <header>
      <Navbar />
    </header>
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
