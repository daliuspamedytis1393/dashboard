<template>
  <div class="top-banners">
    <DefaultBanner
      v-for="(item, index) in textStructure.topBanners"
      :key="`top-banners__banner-${index}`"
      class="top-banners__banner"
      :style-class="item.bannerBackgroundClass"
    >
      <p class="top-banners__title h2 h2--regular">{{ item.title }}</p>
      <p class="top-banners__number body-x-large body-x-large--regular">
        {{ item.number }}
      </p>
      <p
        class="top-banners__text body-large body-large--standard"
        :class="item.additionalClass"
      >
        {{ item.text }}
      </p>
    </DefaultBanner>
  </div>
</template>

<script setup>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import textStructure from "./textStructure.json";
</script>

<style lang="scss" scoped>
.top-banners {
  display: flex;

  @include phone {
    flex-direction: column;
  }

  &__banner {
    @include phone {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    @include desktop {
      margin-right: 14px;
    }

    @include tablet {
      &:not(:last-child) {
        margin-right: 14px;
      }
    }
  }

  &__title,
  &__number,
  &__text {
    margin-bottom: 16px;
  }
}

.main-title {
  margin: 24px 0 12px;
}
</style>
