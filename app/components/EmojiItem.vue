<script lang="ts" setup>
import type { PropType } from 'vue';
import { serviceStore } from '~/store';

interface Emoji {
    name: string
    category: string
    group: string
    htmlCode: string[]
    unicode: string[]
}

const props = defineProps({
    emojiList: {
        type: Array as PropType<Emoji[]>,
        required: true
    }
})
const store = serviceStore()
const toggleFavorite = (emoji: Emoji) => {
    if (store.isFavourite(emoji)) {
        store.removeFromFavourites(emoji)
    } else {
        store.addToFavourites(emoji)
    }
}
</script>

<template>
<div>
    <div data-aos="fade-left" data-aos-duration="2500" class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-[20px]">
        <div class="tw-bg-[#F3835605] tw-w-full tw-h-[180px] tw-border-[1px] tw-border-[#F383564D] tw-rounded-[12px] tw-flex tw-flex-col tw-items-center tw-justify-center" v-for="(emoji, index) in emojiList" :key="index">
            <span>
                <span v-for="(code, i) in emoji.htmlCode" :key="i" v-html="code"></span>
            </span>
            <span class="tw-text-center tw-text-[17px] tw-text-black">{{ emoji.name }}</span>
            <span class="tw-text-[#00000080] tw-text-[14px]">{{ emoji.group }}</span>
            <img 
                @click="toggleFavorite(emoji)" 
                class="tw-mt-[10px] tw-cursor-pointer tw-transition-transform hover:tw-scale-110" 
                src="/assets/img/pack/add-star.png"
            />
        </div>
    </div>
</div>
</template>