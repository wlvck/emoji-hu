<template>
  <div data-aos="fade-left" data-aos-duration="1600" class="tw-text-center tw-my-[25px]">
      <span class="tw-text-[#00000080] tw-font-regular tw-text-[20px]">
        Showing {{ filteredEmojiList.length }} emojis
      </span>
  </div>
  <div>
    <EmojiItem :emojiList="filteredEmojiList"/>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/emoji')
const emojiList = computed(() => (data.value ? data.value.data : []))
const props = defineProps({
    searchQuery: {
        type: String,
        required: true
    }
})
const filteredEmojiList = computed(() => {
  if (!props.searchQuery || props.searchQuery.trim() === '') {
    return emojiList.value
  }
  
  const query = props.searchQuery.toLowerCase()
  return emojiList.value.filter((emoji) => {
    return emoji.name.toLowerCase().includes(query) ||
           emoji.category.toLowerCase().includes(query) ||
           emoji.group.toLowerCase().includes(query)
  })
})
</script>
