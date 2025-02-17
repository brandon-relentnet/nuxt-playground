<template>
  <div>
    <header>
      <h1 class="text-red-500">My Custom Layout</h1>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
