<template>
  <div
    class="hamburger"
    @click="toggleHamburger()"
    :class="{ change: isHamburgerActive }"
  >
    <div class="hamburger__first-bar" />
    <div class="hamburger__second-bar" />
    <div class="hamburger__third-bar" />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const isHamburgerActive = ref(false);

const emit = defineEmits("is-active");

const toggleHamburger = () => {
  isHamburgerActive.value = !isHamburgerActive.value;
  emit("is-active", isHamburgerActive.value);
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;

  &__first-bar,
  &__second-bar,
  &__third-bar {
    width: 17px;
    height: 2px;
    background-color: $color-grey-500;
    margin: 3px 0;
    transition: 200ms;
  }
}

.change .hamburger__first-bar {
  transform: translate(0, 5px) rotate(-45deg);
}
.change .hamburger__second-bar {
  opacity: 0;
}
.change .hamburger__third-bar {
  transform: translate(0, -5px) rotate(45deg);
}
</style>
