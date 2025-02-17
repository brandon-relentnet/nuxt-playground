<script setup>
const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
];
</script>

<template>
  <nav
    class="bg-base text-text p-4 flex justify-end items-center fixed top-0 left-0 w-full space-x-2 font-semibold"
  >
    <NavbarItem 
      v-for="link in navLinks"
      :key="link.text"
      :text="link.text"
      :link="link.link"
    />
    <ThemeToggle />
  </nav>
</template>
