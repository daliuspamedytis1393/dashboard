<template>
  <div class="info-banner">
    <DefaultBanner
      style-class="background-gradient-blue"
      class="info-banner__banner"
      banner-padding="0"
    >
      <div>
        <p class="info-banner__subtitle h2 h2--regular">
          {{ textStructure.infoBanner.subtitle }}
        </p>
        <div class="info-banner__wrapper">
          <p class="info-banner__date body-small body-small--regular">
            {{ textStructure.infoBanner.date }}
          </p>
          <p class="info-banner__title h2 h2--regular">
            {{ textStructure.infoBanner.title }}
          </p>
          <p class="info-banner__text body-regular body-regular--regular">
            {{ textStructure.infoBanner.text }}
          </p>
          <div class="info-banner__footer-content">
            <p
              class="info-banner__footer-text body-regular body-regular--standard"
            >
              {{ textStructure.infoBanner.footerText }}
            </p>
            <BaseButton button-style="primary" size="small">
              {{ textStructure.infoBanner.buttonText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </DefaultBanner>
  </div>
</template>

<script setup>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import textStructure from "./textStructure.json";
import BaseButton from "../ui-components/BaseButton.vue";
</script>

<style lang="scss" scoped>
.info-banner {
  display: flex;
  color: $color-white;
  margin-top: 20px;

  @include desktop {
    margin-top: 0;
  }

  @include tablet {
    margin-right: 16px;
  }

  &__banner {
    display: flex;
  }

  &__date {
    margin-bottom: 6px;
    opacity: 0.6;
  }

  &__text {
    margin-bottom: 28px;
    opacity: 0.6;
  }

  &__additional-banner {
    margin-top: 20px;
  }

  &__title {
    margin-bottom: 6px;
  }

  &__wrapper {
    padding: 26px 24px;
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

  &__subtitle {
    padding: 10px 24px 10px 24px;
    background-color: $color-navy-blue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__footer-content {
    @include desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__footer-text {
    margin-bottom: 18px;

    @include desktop {
      margin-bottom: 0;
    }
  }
}
</style>
