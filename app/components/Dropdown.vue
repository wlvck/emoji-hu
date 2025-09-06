<script lang="ts" setup>
const { data } = await useFetch('/api/emoji')
const emojiList = computed(() => (data.value ? data.value.data : []))
</script>

<template>
    <div class="tw-absolute tw-top-full tw-left-[40px] tw-mt-1 tw-w-[254px] tw-bg-white tw-border tw-border-gray-200 tw-rounded-[12px] tw-shadow-lg tw-z-10">
      <ul>
        <li v-for="(group, index) in emojiList" :key="index">
          {{ group.group }}
        </li>
      </ul>
    </div>
</template>

