<template>
  <div>
    <header>
      <h1>My Nuxt App</h1>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink>
        <ThemeToggle />
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
