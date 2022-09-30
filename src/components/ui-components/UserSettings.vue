<template>
  <div class="user-settings">
    <BaseButton button-style="hidden">
      <RoundNotificationsLogo class="user-settings__logo" />
      <CircleLogo class="user-settings__circle" />
    </BaseButton>
    <BaseButton button-style="hidden">
      <NotificationsLogo class="user-settings__logo" />
    </BaseButton>
    <UserArea />
  </div>
</template>

<script setup>
import NotificationsLogo from "@/assets/icons/icon-notifications.svg";
import CircleLogo from "@/assets/icons/icon-circle.svg";
import RoundNotificationsLogo from "@/assets/icons/icon-round-notifications.svg";
import UserArea from "./UserArea.vue";
import BaseButton from "../ui-components/BaseButton.vue";
</script>

<style lang="scss" scoped>
.user-settings {
  display: flex;
  align-items: center;

  &__circle {
    height: 20px;
    width: 25px;
    position: absolute;
    left: 1px;

    animation: bounce 1.5s linear infinite;
  }

  &__logo {
    margin-right: 32px;
    color: $color-grey-500;

    @include phone {
      margin-right: 20px;
    }

    &:hover,
    &:active {
      opacity: 0.75;
      transition: opacity 100ms;
    }
  }
}

@keyframes bounce {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}
</style>
