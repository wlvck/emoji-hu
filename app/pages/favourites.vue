<template>
  <div class="tw-w-full tw-max-w-[875px] tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
    <h1 data-aos="fade-left" data-aos-duration="1200" class="tw-text-[#3F3F3F] tw-text-[32px] sm:tw-text-[48px] md:tw-text-[56px] lg:tw-text-[70px] tw-mt-[20px] tw-text-center tw-font-bold gradient tw-leading-tight">
      Your Favorites
    </h1>
    <p data-aos="fade-left" data-aos-duration="1200" class="tw-text-[#00000080] tw-text-[14px] sm:tw-text-[16px] md:tw-text-[18px] tw-text-center tw-px-2 sm:tw-px-4">
      All the emojis you've saved for quick access. Your personal collection! ⭐
    </p>
  </div>

  <div class="tw-mx-4 sm:tw-mx-6 lg:tw-mx-[50px] tw-mt-[25px] tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 sm:tw-gap-0 sm:tw-justify-between tw-items-start sm:tw-items-center">
    <span data-aos="fade-left" data-aos-duration="900" class="tw-text-[#00000080] tw-text-[16px] sm:tw-text-[18px] lg:tw-text-[20px]">
      {{ store.favouritesCount }} favorite {{ store.favouritesCount === 1 ? 'emoji' : 'emojis' }}
    </span>
    <div 
      @click="clearAll"
      data-aos="fade-left" 
      data-aos-duration="1500" 
      class="tw-flex tw-px-[8px] sm:tw-px-[12px] tw-py-[6px] sm:tw-py-[8px] tw-items-center tw-border-[1px] tw-border-[#FF6B6B] tw-rounded-[12px] tw-cursor-pointer hover:tw-bg-red-50 tw-transition-colors tw-self-start sm:tw-self-auto"
    >
      <img src="/assets/img/pack/delete.png" alt="" class="tw-w-4 tw-h-4 sm:tw-w-5 sm:tw-h-5">
      <p class="tw-text-[#FF6B6B] tw-ml-2 tw-text-[14px] sm:tw-text-[16px] tw-whitespace-nowrap">Clear all</p>
    </div>
  </div>

  <div class="tw-mx-4 sm:tw-mx-6 lg:tw-mx-[50px]">
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-[15px] sm:tw-gap-[20px]">
      <div 
        v-for="(favorite, index) in store.favourites" 
        :key="index"
        class="tw-bg-[#F3835605] tw-w-full tw-h-[180px] sm:tw-h-[160px] tw-mt-[20px] sm:tw-mt-[25px] tw-border-[1px] tw-border-[#F383564D] tw-rounded-[12px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-3"
      >
        <span class="tw-text-[24px] sm:tw-text-[28px] lg:tw-text-[32px] tw-mb-2">
          <span v-for="(code, i) in favorite.htmlCode" :key="i" v-html="code"></span>
        </span>
        <span class="tw-text-center tw-text-[14px] sm:tw-text-[16px] lg:tw-text-[17px] tw-text-black tw-font-medium tw-px-1 tw-leading-tight">{{ favorite.name }}</span>
        <span class="tw-text-[#00000080] tw-text-[12px] sm:tw-text-[13px] lg:tw-text-[14px] tw-mt-1">{{ favorite.group }}</span>
        <img 
          @click="removeFromFavorites(favorite)"
          class="tw-mt-[8px] sm:tw-mt-[10px] tw-cursor-pointer tw-w-[18px] sm:tw-w-[20px] tw-h-[18px] sm:tw-h-[20px] hover:tw-scale-110 tw-transition-transform" 
          src="/assets/img/pack/star-filled.png"
          alt="Remove from favorites"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { serviceStore } from '~/store'

const store = serviceStore()

const removeFromFavorites = (emoji) => {
  store.removeFromFavourites(emoji)
}

const clearAll = () => {
  if (confirm('Are you sure you want to clear all favorites?')) {
    store.clearFavourites()
  }
}
</script>

<style scoped>
.gradient {
    background: -webkit-linear-gradient(#FADD6F, #F4885B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>