<template>
  <div class="upcoming-banner">
    <DefaultBanner
      style-class="border-only"
      class="upcoming-banner__banner"
      banner-padding="0"
    >
      <div class="upcoming-banner__wrapper">
        <div class="upcoming-banner__top-wrapper">
          <p class="upcoming-banner__subtitle h2 h2--regular">
            {{ textStructure.upcomingBanner.title }}
          </p>
          <BaseDate />
        </div>
        <ul class="upcoming-banner__list">
          <li
            v-for="(item, index) in textStructure.upcomingBanner.items"
            :key="`upcoming-banner__list-item-${index}`"
          >
            <div v-if="item.priority">
              <p
                class="upcoming-banner__note body-medium body-medium--standard"
              >
                {{ textStructure.upcomingBanner.priority }}
              </p>
              <SmallBanner :text-structure="item" />
            </div>
            <div v-else-if="item.other">
              <p
                class="upcoming-banner__note body-medium body-medium--standard"
              >
                {{ textStructure.upcomingBanner.other }}
              </p>
              <SmallBanner :text-structure="item" />
            </div>
            <div v-else>
              <SmallBanner :text-structure="item" />
            </div>
          </li>
        </ul>
      </div>
      <div class="upcoming-banner__footer">
        <BaseButton button-style="hidden">
          <p
            class="upcoming-banner__subtitle body-regular body-regular--regular"
          >
            {{ textStructure.upcomingBanner.buttonText }}
          </p>
        </BaseButton>
      </div>
    </DefaultBanner>
  </div>
</template>

<script setup>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import SmallBanner from "./SmallBanner.vue";
import textStructure from "./textStructure.json";
import BaseDate from "../ui-components/BaseDate.vue";
import BaseButton from "../ui-components/BaseButton.vue";
</script>

<style lang="scss" scoped>
.upcoming-banner {
  margin-top: 20px;

  &__subtitle {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__wrapper {
    padding: 16px 22px 0 22px;
  }

  &__list {
    list-style-type: none;
  }

  &__footer {
    border-top: 1px solid $color-grey-400;
    display: flex;
    justify-content: center;
    padding: 9px 10px;
    color: $color-primary;
  }

  &__note {
    color: $color-grey-300;
    margin: 9px 0;
  }
}
</style>
