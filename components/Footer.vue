<script setup>
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <footer class="bg-overlay py-block">
    <div class="container mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div class="space-y-4">
        <NuxtImg
          src="/images/relentnet-logo.png"
          class="h-auto max-w-1/3 object-cover"
        />
      </div>
      <div class="space-y-4">
        <h4 class="text-xl font-semibold text-text">Quick Links</h4>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="hover:text-rose transition duration-200">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="hover:text-rose transition duration-200"
            >
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:text-rose transition duration-200"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:text-rose transition duration-200"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="text-xl font-semibold text-text">Contact</h4>
        <ul class="space-y-2">
          <li class="flex items-center space-x-2">
            <MapPinIcon class="size-5 text-rose" />
            <span class="text-subtle">Nashville, TN</span>
          </li>
          <li class="flex items-center space-x-2">
            <PhoneIcon class="size-5 text-rose" />
            <span class="text-subtle">+1 (918) 550-9049</span>
          </li>
          <li class="flex items-center space-x-2">
            <EnvelopeIcon class="size-5 text-rose" />
            <span class="text-subtle">support@relentnet.com</span>
          </li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="text-xl font-semibold text-text">Policy Information</h4>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/policies/contracts" class="hover:text-rose transition duration-200">
              Contracts
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/policies/privacy-policy"
              class="hover:text-rose transition duration-200"
            >
              Privacy Policy
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/policies/refund-policy"
              class="hover:text-rose transition duration-200"
            >
              Refund Policy
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/policies/terms-of-service"
              class="hover:text-rose transition duration-200"
            >
              Terms of Service
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-12 border-t border-foam/30 pt-4">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm text-subtle">
          &copy; 2025 RelentNet. All rights reserved.
        </p>
        <div class="flex space-x-4">
          <NuxtLink to="#" class="hover:text-rose transition duration-200">
            <span class="text-subtle">Twitter</span>
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-rose transition duration-200">
            <span class="text-subtle">LinkedIn</span>
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-rose transition duration-200">
            <span class="text-subtle">Facebook</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
