<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <SpeedInsights />
    <header>
      <NavbarNavbars />
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
