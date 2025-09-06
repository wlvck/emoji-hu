<script lang="ts" setup>
import { serviceStore } from '~/store'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const store = serviceStore()
</script>

<template>
  <header class="tw-flex tw-sticky tw-top-0 tw-left-0 tw-right-0 tw-justify-between tw-items-center tw-px-4 sm:tw-mx-[25px] lg:tw-mx-[50px] tw-pt-[20px] tw-pb-[15px] tw-relative tw-bg-white tw-z-50 tw-border-b tw-border-gray-100">
    <div class="tw-flex tw-items-end">
      <img class="tw-w-[32px] sm:tw-w-[40px]" src="/assets/img/logo.png" alt="">
      <h1 class="tw-text-[16px] sm:tw-text-[20px] tw-font-[500] tw-ml-1">Emoji Hub</h1>
    </div>
    
    <div class="tw-hidden md:tw-block">
      <ul class="tw-flex tw-items-center tw-gap-4 lg:tw-gap-6">
        <li>
          <NuxtLink 
            to="/" 
            class="tw-text-[#7A7A7A] tw-text-[16px] lg:tw-text-[18px] hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/catalog" 
            class="tw-text-[#7A7A7A] tw-text-[16px] lg:tw-text-[18px] hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Catalog
          </NuxtLink>
        </li>
        <li class="tw-relative">
          <NuxtLink 
            to="/favourites" 
            class="tw-text-[#7A7A7A] tw-text-[16px] lg:tw-text-[18px] hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Favourites
          </NuxtLink>
          <div class="tw-absolute tw-bottom-[10px] -tw-right-[15px] tw-rounded-[40px] tw-px-[5px] tw-py-[1px] tw-bg-gray-400 tw-text-white tw-text-[12px] tw-min-w-[20px] tw-text-center">{{ store.favourites.length }}</div>
        </li>
      </ul>
    </div>

    <button 
      @click="toggleMobileMenu"
      class="md:tw-hidden tw-p-2 tw-rounded-md tw-text-[#7A7A7A] hover:tw-bg-gray-100 tw-transition-colors"
      aria-label="Toggle menu"
    >
      <svg 
        class="tw-w-6 tw-h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          v-if="!isMobileMenuOpen"
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path 
          v-else
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Menu Dropdown -->
    <div 
      v-if="isMobileMenuOpen"
      class="tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-border-t tw-border-gray-200 tw-shadow-lg tw-z-50 md:tw-hidden"
    >
      <ul class="tw-py-4 tw-px-4">
        <li class="tw-mb-3">
          <NuxtLink 
            @click="closeMobileMenu"
            to="/" 
            class="tw-block tw-text-[#7A7A7A] tw-text-[18px] tw-py-2 hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Home
          </NuxtLink>
        </li>
        <li class="tw-mb-3">
          <NuxtLink 
            @click="closeMobileMenu"
            to="/catalog" 
            class="tw-block tw-text-[#7A7A7A] tw-text-[18px] tw-py-2 hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Catalog
          </NuxtLink>
        </li>
        <li class="tw-mb-3 tw-relative">
          <NuxtLink 
            @click="closeMobileMenu"
            to="/favourites" 
            class="tw-block tw-text-[#7A7A7A] tw-text-[18px] tw-py-2 hover:tw-text-[#F58E64] tw-transition-colors" 
            active-class="gradient"
          >
            Favourites
            <span class="tw-inline-block tw-ml-2 tw-rounded-[40px] tw-px-[6px] tw-py-[1px] tw-bg-gray-400 tw-text-white tw-text-[12px] tw-min-w-[20px] tw-text-center">{{ store.favourites.length }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
  <div 
    v-if="isMobileMenuOpen"
    @click="closeMobileMenu"
    class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25 tw-z-40 md:tw-hidden"
  ></div>
</template>

<style scoped>
.gradient {
    background: -webkit-linear-gradient(#FADD6F, #F4885B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>