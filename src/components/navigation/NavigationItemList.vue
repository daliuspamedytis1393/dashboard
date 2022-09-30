<template>
  <div class="navigation-items">
    <p class="navigation-items__title body-small body-small--regular">
      {{ textStructure.title }}
    </p>
    <ul class="navigation-items__list">
      <li
        v-for="(item, index) in textStructure.list"
        :key="`navigation-items__list-item-${index}`"
      >
        <NavigationItem
          :linkTo="item.link"
          :icon-component-name="item.componentName"
          :item-title="item.name"
          v-bind="{ isHamburgerToggled }"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import NavigationItem from "./NavigationItem.vue";

defineProps({
  textStructure: {
    type: Object,
    required: true,
  },
  isHamburgerToggled: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.navigation-items {
  margin-top: 39px;

  @include tablet {
    margin-top: 31px;
  }

  @include phone {
    margin-top: 15px;
  }

  &__title {
    padding: 10px 33px;
    color: $color-grey-300;

    @include tablet {
      text-align: center;
      padding: 10px;
    }
  }
  &__list {
    list-style-type: none;
  }
}
</style>
