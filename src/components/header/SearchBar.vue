<template>
  <form class="search-field">
    <input
      class="search-field__box"
      type="search"
      placeholder="Search"
      name="dummy-search"
      v-model="searchValue"
    />
    <button class="search-field__submit-button" type="submit">
      <SearchIcon class="search-field__icon" />
    </button>
  </form>
</template>

<script setup>
import SearchIcon from "@/assets/icons/icon-search.svg";

import { ref } from "vue";

const searchValue = ref("");
</script>

<style lang="scss" scoped>
.search-field {
  display: flex;
  align-items: center;
  position: relative;

  &__box {
    padding: 10px 16px;
    background: $color-grey-200;
    border: 1px solid $color-grey-400;
    border-radius: 4px;
    outline: none;
    display: none;

    @include desktop {
      width: 343px;
      display: block;
    }

    @include tablet {
      width: 242px;
      display: block;
    }

    &:hover,
    &:active {
      border: 1px solid $color-grey-300;
      transition: border 200ms;
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  &__icon {
    position: absolute;
    top: 10px;
    right: 11px;
    height: 16px;
    width: 16px;
    cursor: pointer;
    color: $color-grey-500;

    @include phone {
      position: absolute;
      top: -8px;
      right: 0;
      left: 24px;
      transform: scale(1.1);
    }

    &:hover,
    &:active {
      color: $color-grey-300;
      transform: scale(1.1);
      transition: all 100ms;
    }
  }

  &__submit-button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
}
</style>
