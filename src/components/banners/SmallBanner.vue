<template>
  <DefaultBanner
    style-class="background-grey-with-border"
    class="small-banner"
    banner-padding="12px 16px"
  >
    <div class="small-banner__wrapper">
      <p class="small-banner__description body-large body-large--standard">
        {{ textStructure.description }}
      </p>
      <p class="small-banner__date body-small body-small--standard">
        {{ textStructure.title }}
      </p>
    </div>
    <div class="small-banner__icon-area">
      <PinIcon class="small-banner__icon small-banner__icon--margin-right" />
      <DotsIcon class="small-banner__icon" />
    </div>
  </DefaultBanner>
</template>

<script setup>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import PinIcon from "@/assets/icons/icon-pin.svg";
import DotsIcon from "@/assets/icons/icon-dots.svg";

defineProps({
  textStructure: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.small-banner {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icon-area {
    display: flex;
    align-items: center;
  }

  &__icon {
    color: $color-grey-500;

    &--margin-right {
      margin-right: 26px;
    }

    &:hover,
    &:active {
      opacity: 0.75;
      transition: opacity 100ms;
    }
  }

  &__date {
    color: $color-grey-300;
    margin-top: 6px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__description {
    max-width: 405px;
  }
}
</style>
