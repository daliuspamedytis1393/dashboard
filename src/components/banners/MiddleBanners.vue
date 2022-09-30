<template>
  <div class="middle-banners">
    <DefaultBanner
      v-for="(item, index) in textStructure.middleBanners"
      :key="`middle-banners__banner-${index}`"
      class="middle-banners__banner"
      style-class="border-only"
    >
      <div>
        <p class="middle-banners__title h2 h2--regular">
          {{ item.title }}
        </p>
        <p
          class="middle-banners__number body-extra-large body-extra-large--regular"
        >
          {{ item.totalNumber }}
        </p>
        <p class="middle-banners__text body-medium body-medium--standard">
          {{ item.menInfo }}
        </p>
        <p class="middle-banners__text body-medium body-medium--standard">
          {{ item.womanInfo }}
        </p>
      </div>
      <div>
        <img
          class="middle-banners__image"
          :src="item.imgPath"
          :alt="item.imgAlt"
        />
        <DefaultBanner
          class="middle-banners__additional-banner"
          min-width="0"
          banner-padding="2px 10px"
        >
          <p
            class="middle-banners__additional-info body-medium body-medium--standard"
          >
            {{ item.additionalInfo }}
          </p>
        </DefaultBanner>
      </div>
    </DefaultBanner>
  </div>
</template>

<script setup>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import textStructure from "./textStructure.json";
</script>

<style lang="scss" scoped>
.middle-banners {
  margin-top: 20px;
  display: flex;

  @include phone {
    flex-direction: column;
  }

  &__banner {
    display: flex;
    justify-content: space-between;

    @include desktop {
      margin-right: 14px;
    }

    @include phone {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    @include tablet {
      margin-bottom: 0;

      &:not(:last-child) {
        margin-right: 14px;
      }
    }
  }

  &__number {
    margin-bottom: 32px;
  }

  &__text {
    margin-bottom: 4px;
    color: $color-grey-300;
  }

  &__additional-banner {
    margin-top: 20px;
  }

  &__image {
    margin-top: 14px;
    margin-left: 14px;
    width: 115px;
    height: 75px;
  }

  &__additional-info {
    color: $color-secondary;
  }

  &__title {
    margin-bottom: 22px;
  }
}
</style>
