<template>
  <div
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    class="user-area"
  >
    <img
      class="user-area__image"
      src="src/assets/images/user.png"
      alt="User logo"
    />
    <p class="user-area__name body-large body-large--regular">Admirra John</p>
    <IconArrowLogo :class="{ 'user-area__arrow-icon': isHovered }" />
  </div>
</template>

<script setup>
import IconArrowLogo from "@/assets/icons/icon-arrow.svg";
import { ref } from "vue";

const isHovered = ref(false);
</script>

<style lang="scss" scoped>
.user-area {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__image {
    border-radius: 50%;
    height: 42px;
    width: 42px;
    margin-right: 7px;
  }

  &__name {
    margin-right: 10px;
    display: none;

    @include desktop {
      display: block;
    }
  }

  &__arrow-icon {
    transform: rotate(180deg);
    transition: transform 300ms;
  }
}
</style>
