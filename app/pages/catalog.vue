<template>
  <div class="tw-w-full tw-max-w-[875px] tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
    <h1 data-aos="fade-left" data-aos-duration="1200" class="tw-text-[#3F3F3F] tw-text-[32px] sm:tw-text-[48px] md:tw-text-[56px] lg:tw-text-[70px] tw-mt-[20px] tw-text-center tw-font-bold gradient tw-leading-tight">
      Emoji Catalog
    </h1>
    <p data-aos="fade-left" data-aos-duration="1200" class="tw-text-[#00000080] tw-text-[14px] sm:tw-text-[16px] md:tw-text-[18px] tw-text-center tw-px-2 sm:tw-px-4">
      Browse our complete collection of emojis. Search, filter, and find the perfect emoji for any occasion! 📚
    </p>
  </div>

  <div class="tw-mt-[25px] tw-px-4 sm:tw-px-6 lg:tw-px-8">
    <div class="tw-mx-auto tw-w-full tw-max-w-[875px] tw-relative"
    data-aos="fade-up"
    data-aos-duration="1000">
      <input  
        v-model="searchQuery"
        placeholder="Search emojis by name or keyword..."
        class="tw-bg-[#F1F1F1] tw-rounded-[12px] tw-py-[12px] tw-w-full tw-pl-[35px] tw-pr-4 tw-outline-none tw-text-[14px] sm:tw-text-[16px]"
        type="text"
      />
      <img
        class="tw-absolute tw-top-[18px] tw-left-[10px] tw-w-[15px] tw-h-[15px]"
        src="/assets/img/pack/search-input.png"
        alt="Search"
      />
    </div>
  </div>
  
  <div class="tw-mx-4 sm:tw-mx-6 lg:tw-mx-[50px]">
    <emoji-list :searchQuery="searchQuery"/>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const showDropdown1 = ref(false)
const showDropdown2 = ref(false)
</script>

<style scoped>
.gradient {
    background: -webkit-linear-gradient(#FADD6F, #F4885B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>