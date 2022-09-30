<template>
  <div class="date">
    <p class="body-medium body-medium--standard">{{ currentDate }}</p>
    <SmallArrowIcon class="date__icon" />
  </div>
</template>

<script setup>
import SmallArrowIcon from "@/assets/icons/icon-small-arrow.svg";
import { computed } from "vue";
import { MONTH_NAMES, TODAY_STRING } from "@/utils/constants";

const currentDate = computed({
  get() {
    const today = new Date();
    const date =
      TODAY_STRING +
      " " +
      today.getDate() +
      " " +
      MONTH_NAMES[today.getMonth() + 1] +
      " " +
      today.getFullYear();
    return date;
  },
});
</script>

<style lang="scss" scoped>
.date {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid $color-grey-600;
  border-radius: 4px;
  color: $color-grey-300;
  cursor: pointer;

  &__icon {
    margin-left: 8px;
  }
}
</style>
