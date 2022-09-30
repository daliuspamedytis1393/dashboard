<template>
  <RouterLink to="dashboard" class="main-logo">
    <img src="src/assets/images/logo.png" alt="logo" class="main-logo__logo" />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.main-logo {
  &__logo {
    object-fit: contain;
    width: 108px;
    margin: 10px;

    @include tablet {
      width: 67px;
      height: 42px;
      margin: 10px;
    }
  }
}
</style>
