<script setup>
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
    <div>
        <h1>Counter: {{ counterStore.count }}</h1>
        <button @click="counterStore.increment">Increment</button>
        <button @click="counterStore.decrement">Decrement</button>
        <button @click="counterStore.reset">Reset</button>
    </div>
</template>