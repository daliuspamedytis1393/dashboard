<template>
  <div class="top-header">
    <div class="top-header__left-wrapper">
      <BaseHamburger
        class="top-header__hamburger"
        @is-active="$emit('is-active', $event)"
      />
      <SearchBar />
    </div>
    <UserSettings />
  </div>
</template>

<script setup>
import UserSettings from "../ui-components/UserSettings.vue";
import BaseHamburger from "./BaseHamburger.vue";
import SearchBar from "./SearchBar.vue";
</script>

<style lang="scss" scoped>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $color-grey-400;

  @include desktop {
    padding-bottom: 23px;
  }

  @include tablet {
    padding-bottom: 12px;
  }

  @include phone {
    padding: 10px 20px;
    height: 69px;
    background-color: $color-white;
    width: 100%;
    z-index: map-get($z-index, navigation);
    position: fixed;
    top: 0;
    left: 0;
  }

  &__left-wrapper {
    display: flex;
    align-items: center;
  }

  &__hamburger {
    @include desktop {
      display: none;
    }

    @include tablet {
      margin-right: 20px;
    }
  }
}
</style>
