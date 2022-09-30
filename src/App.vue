<template>
  <DefaultLayout>
    <template #header>
      <NavigationVerticalBar v-bind="{ isHamburgerToggled }" />
    </template>
    <template #main>
      <TopHeader @is-active="isHamburgerToggled = $event" />
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </template>
  </DefaultLayout>
</template>

<script setup>
import { ref } from "vue";
import NavigationVerticalBar from "./components/navigation/NavigationVerticalBar.vue";
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import TopHeader from "./components/header/TopHeader.vue";

const isHamburgerToggled = ref(false);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
