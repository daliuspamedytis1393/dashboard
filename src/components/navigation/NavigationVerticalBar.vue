<template>
  <nav
    class="navigation-vertical-bar"
    :class="{ 'navigation-vertical-bar--width': isHamburgerToggled }"
  >
    <MainLogo class="navigation-vertical-bar__logo" />
    <NavigationItemList
      v-bind="{ isHamburgerToggled }"
      :textStructure="textStructure.mainMenu"
    />
    <NavigationItemList
      v-bind="{ isHamburgerToggled }"
      :textStructure="textStructure.other"
    />
  </nav>
</template>

<script setup>
import MainLogo from "../ui-components/MainLogo.vue";
import NavigationItemList from "./NavigationItemList.vue";
import textStructure from "./textStructure.json";

defineProps({
  isHamburgerToggled: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.navigation-vertical-bar {
  z-index: map-get($z-index, navigation);
  width: $vertical-bar-width;
  background: $color-grey-200;
  height: 100%;

  @include phone {
    width: 0;
    overflow: hidden;
  }

  @include tablet {
    width: auto;
  }

  &--width {
    @include phone {
      overflow: scroll;
      position: fixed;
      width: 100%;
      transition: width 200ms;
    }

    @include tablet {
      width: $vertical-bar-tablet-width;
      transition: all 200ms;
    }
  }

  &__logo {
    padding: 30px 0 0;
    display: flex;
    justify-content: center;

    @include phone {
      padding: 78px 17px 0;
      justify-content: flex-start;
    }
  }
}
</style>
