<template>
  <div class="tw-flex tw-items-center cursor-pointer tw-relative">
    <img src="/assets/img/pack/filter.png" alt="" />
    <div>
      <div
        @click="showDropdown = !showDropdown"
        class="tw-bg-[#F1F1F1] tw-ml-4 tw-w-[254px] tw-rounded-[12px] tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-2 hover:tw-bg-[#E5E5E5] tw-transition-colors"
      >
        <span>{{ selectedValue || 'All' }}</span>
        <img 
          src="/assets/img/pack/dropdown.png" 
          alt="" 
          :class="{ 'tw-rotate-180': showDropdown }"
          class="tw-transition-transform tw-duration-200"
        />
      </div>
      
      <!-- Dropdown -->
      <div 
        v-if="showDropdown" 
        class="tw-absolute tw-top-full tw-left-[40px] tw-mt-1 tw-w-[254px] tw-bg-white tw-border tw-border-gray-200 tw-rounded-[12px] tw-shadow-lg tw-z-10 tw-max-h-60 tw-overflow-y-auto"
      >
        <div 
          @click="selectOption('All')"
          class="tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-100 tw-transition-colors"
          :class="{ 'tw-bg-[#F58E64] tw-text-white hover:tw-bg-[#F58E64]': selectedValue === 'All' || !selectedValue }"
        >
          All
        </div>
        <div 
          v-for="option in options" 
          :key="option"
          @click="selectOption(option)"
          class="tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-100 tw-transition-colors"
          :class="{ 'tw-bg-[#F58E64] tw-text-white hover:tw-bg-[#F58E64]': selectedValue === option }"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: 'All'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const showDropdown = ref(false)
const selectedValue = ref(props.modelValue)

const selectOption = (option) => {
  selectedValue.value = option
  showDropdown.value = false
  emit('update:modelValue', option)
  emit('change', option)
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.tw-relative')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Watch for prop changes
watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue
})
</script>

<style scoped>
.tw-max-h-60::-webkit-scrollbar {
  width: 6px;
}

.tw-max-h-60::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 6px;
}

.tw-max-h-60::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 6px;
}
</style>