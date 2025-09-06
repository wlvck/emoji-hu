<template>
  <div class="tw-max-w-[1021px] tw-mx-auto tw-my-[25px] sm:tw-my-[50px] tw-px-4 sm:tw-px-0">
    <div class="tw-bg-[#FAD86E40] tw-rounded-[20px] tw-mx-auto tw-w-[180px] sm:tw-w-[200px] tw-py-[10px] animate-fade-in-down">
        <div class="tw-flex tw-items-center tw-justify-center">
            <img class="tw-w-[25px] sm:tw-w-[30px]" src="/assets/img/pack/waving-hand.png" alt="">
            <span class="tw-ml-2 tw-text-[14px] sm:tw-text-base">Hello there!</span>
        </div>
    </div>
    <div class="tw-mt-[25px] animate-slide-up" style="animation-delay: 0.3s;">
        <h1 class="tw-text-[40px] sm:tw-text-[60px] lg:tw-text-[80px] tw-text-[#3F3F3F] tw-text-center tw-font-bold tw-leading-[100%]">Welcome to</h1>
        <h1 class="tw-text-[40px] sm:tw-text-[60px] lg:tw-text-[80px] tw-text-center tw-font-bold tw-leading-[100%] gradient">Emoji Hub</h1>
    </div>
    <div class="tw-mt-[25px] animate-fade-in tw-px-4 sm:tw-px-0" style="animation-delay: 0.6s;">
        <p class="tw-text-[14px] sm:tw-text-[18px] tw-font-semibold tw-text-[#00000060] tw-text-center">Your ultimate destination for discovering, browsing, and copying emojis.Express yourself perfectly with thousands of emojis at your fingertips!</p>
    </div>
    
    <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-items-center tw-gap-[15px] sm:tw-gap-[20px] tw-mt-[25px] animate-scale-in tw-px-4 sm:tw-px-0" style="animation-delay: 0.9s;">
        <div @click="$router.push('/catalog')" class="tw-flex tw-items-center tw-bg-[#F58E64] tw-rounded-[12px] tw-py-[10px] tw-px-[20px] hover-lift tw-w-full sm:tw-w-auto tw-justify-center">
            <p class="tw-text-white tw-text-[16px] sm:tw-text-[18px]">Browse Emojis</p>
            <img class="tw-w-[18px] sm:tw-w-[20px] tw-ml-2" src="/assets/img/pack/search.png" alt="">
        </div>
        <div @click="$router.push('favourites')" class="tw-flex tw-items-center tw-bg-[#FFF5C8] tw-rounded-[12px] tw-py-[10px] tw-px-[20px] hover-lift tw-w-full sm:tw-w-auto tw-justify-center">
            <p class="tw-text-[#3F3F3F] tw-text-[16px] sm:tw-text-[18px]">My Favorites</p>
            <img class="tw-w-[18px] sm:tw-w-[20px] tw-ml-2" src="/assets/img/pack/star.png" alt="">
        </div>
    </div>
    
    <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-mt-[25px] tw-items-center animate-slide-up-bottom tw-gap-4 sm:tw-gap-0" style="animation-delay: 1.2s;">
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center stat-item">
            <span class="tw-text-[#F58E64] tw-text-[18px] sm:tw-text-[20px]">1000+</span>
            <span class="tw-text-[18px] sm:tw-text-[20px] tw-text-[#666255] tw-leading-[100%]">Emojis</span>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-ml-0 sm:tw-ml-[30px] tw-pl-0 sm:tw-pl-[30px] tw-items-center tw-border-l-0 sm:tw-border-l-[2px] tw-border-l-[#FFB97C] stat-item">
            <span class="tw-text-[#FBDE6C] tw-text-[18px] sm:tw-text-[20px]">9</span>
            <span class="tw-text-[18px] sm:tw-text-[20px] tw-text-[#666255] tw-leading-[100%]">Categories</span>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-ml-0 sm:tw-ml-[30px] tw-pl-0 sm:tw-pl-[30px] tw-items-center tw-border-l-0 sm:tw-border-l-[2px] tw-border-l-[#FFB97C] stat-item">
            <span class="tw-text-[#F58E64] tw-text-[18px] sm:tw-text-[20px]">♾️</span>
            <span class="tw-text-[18px] sm:tw-text-[20px] tw-text-[#666255] tw-leading-[100%]">Possibilities</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.gradient {
    background: -webkit-linear-gradient(#FADD6F, #F4885B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideUpBottom {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        transform: translateY(0);
    }
    40%, 43% {
        transform: translateY(-10px);
    }
    70% {
        transform: translateY(-5px);
    }
}
.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out forwards;
    opacity: 0;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
    opacity: 0;
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
}

.animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
    opacity: 0;
}

.animate-slide-up-bottom {
    animation: slideUpBottom 0.8s ease-out forwards;
    opacity: 0;
}

.hover-lift {
    transition: all 0.3s ease;
    cursor: pointer;
}

.hover-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.stat-item {
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: scale(1.05);
}
</style>