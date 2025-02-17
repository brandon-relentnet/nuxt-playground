import { defineStore } from 'pinia';
import { useColorMode } from '@vueuse/core';

export const useThemeStore = defineStore('theme', () => {
    const mode = useColorMode({
    initialValue: 'dark',
    storageKey: 'theme',
    attribute: 'data-theme',
    })

    const toggle = () => {
        mode.value = mode.value === 'dark' ? 'light' : 'dark';
    }
    
    return { mode, toggle };
}, { persist: true })