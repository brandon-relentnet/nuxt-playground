<script setup>
import { ref } from 'vue';

const dropdown = ref(false);
</script>

<template>
    <div class="bg-base text-text h-20 flex justify-between items-center px-8 fixed top-0 left-0 w-full z-50">
        <div class="ml-2 relative inline-block">
            <button @click="dropdown = !dropdown">
                Toggle Dropdown
            </button>
            <div 
            v-if="dropdown"
            v-on-click-outside="() => { dropdown = false }"
            class="absolute bg-surface w-48 h-48 dropdown">
                Dropdown Content
            </div>
        </div>
    </div>
</template>