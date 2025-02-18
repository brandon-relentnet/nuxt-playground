<script setup>
import { useCounterStore } from '~/stores/counter'
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <h1>Counter: {{ counterStore.count }}</h1>
  </div>
</template>