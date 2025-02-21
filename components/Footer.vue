<script setup>
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <footer class="bg-overlay">
    <div class="container py-section mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center text-center md:text-left">
      <div class="max-w-[150px] mx-auto md:mx-0">
        <NuxtImg
          src="/images/relentnet-logo.png"
          alt="RelentNet Logo"
          quality="100"
          format="webp"
          sizes="md:100px lg:150px 75px"
        />
      </div>
      <div class="gap-y-4">
        <SectionTitle>Quick Links</SectionTitle>
        <ul class="gap-y-2">
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
      <div class="gap-y-4">
        <SectionTitle>Contact</SectionTitle>
        <ul class="gap-y-2">
          <li class="flex items-center justify-center gap-x-2 md:justify-start">
            <MapPinIcon class="size-5 text-rose" />
            <span class="text-subtle">Nashville, TN</span>
          </li>
          <li class="flex items-center justify-center gap-x-2 md:justify-start">
            <PhoneIcon class="size-5 text-rose" />
            <span class="text-subtle">+1 (918) 550-9049</span>
          </li>
          <li class="flex items-center justify-center gap-x-2 md:justify-start">
            <EnvelopeIcon class="size-5 text-rose" />
            <span class="text-subtle">support@relentnet.com</span>
          </li>
        </ul>
      </div>
      <div class="gap-y-4">
        <SectionTitle>Policies</SectionTitle>
        <ul class="gap-y-2 text-subtle">
          <li>
            <NuxtLink to="/policies/cloud-based-contracts" class="hover:text-rose transition duration-200">
              Cloud-Based Contract
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/policies/web-and-app-contracts" class="hover:text-rose transition duration-200">
              Web & App Development Contract
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
    <div class="bg-base">
      <div
        class="container mx-auto py-block md:py-2 px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm text-subtle">
          &copy; 2025 RelentNet. All rights reserved.
        </p>
        <div class="flex gap-x-4">
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
