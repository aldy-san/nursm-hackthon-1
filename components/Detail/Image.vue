<template>
  <div class="relative col-span-2">
    <div class="grid gap-1 mb-auto sticky top-4 left-0">
      <div class="swiper-container group">
        <button class="nav prev" @click="bannerSwiper.prev()">
          <Icon name="uil:angle-left" />
        </button>
        <ClientOnly>
          <swiper-container ref="bannerRef">
            <swiper-slide v-for="(slide, i) in 10" :key="i">
              <img :src="`https://placehold.co/${i + 1}00`" class="w-full" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <button class="nav next" @click="bannerSwiper.next()">
          <Icon name="uil:angle-right" />
        </button>
      </div>
      <div class="swiper-container group">
        <button class="nav prev" @click="thumbSwiper.prev()">
          <Icon name="uil:angle-left" />
        </button>
        <ClientOnly>
          <swiper-container ref="thumbRef">
            <swiper-slide v-for="(slide, i) in 10" :key="i">
              <img
                :src="`https://placehold.co/${i + 1}00`"
                class="hover:border-black border"
                @click="bannerSwiper.to(i)"
              />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <button class="nav next" @click="thumbSwiper.next()">
          <Icon name="uil:angle-right" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const bannerRef = ref(null);
const bannerSwiper = useSwiper(bannerRef);
const thumbRef = ref(null);
const thumbSwiper = useSwiper(thumbRef, {
  slidesPerView: 5,
  spaceBetween: 4,
});
</script>
