import { defineStore } from "pinia";
import { useColorMode } from "@vueuse/core";

export const useThemeStore = defineStore(
  "theme",
  () => {
    const mode = useColorMode({
      initialValue: process.client
        ? localStorage.getItem("theme") || "dark"
        : "dark",
      storageKey: "theme",
      attribute: "data-theme",
    });

    const toggle = () => {
      mode.value = mode.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", mode.value); // Ensure localStorage is updated
    };

    return { mode, toggle };
  },
  { persist: true }
);
