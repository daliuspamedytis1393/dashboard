<template>
  <button
    v-bind="$attrs"
    class="button"
    :class="[`button__${buttonStyle}`, `button__${size}`]"
    :to="to"
    :href="href"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  buttonStyle: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary", "hidden"].includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(value) {
      return ["medium", "small"].includes(value);
    },
  },
  to: {
    type: String,
    default: "/",
  },
  href: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;
  font: inherit;
  text-decoration: none;
  font-style: normal;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  outline: inherit;
  border: none;
  transition: all 100ms ease;

  &__primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      box-shadow: 0px 4px 12px rgba(255, 81, 81, 0.2);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &__secondary {
    color: $color-primary;
    background-color: $color-white;
    border: 2px solid $color-primary;

    &:hover {
      background: rgba(255, 151, 151, 0.2);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &__medium {
    padding: 14px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  &__small {
    padding: 10px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }

  &__hidden {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
  }
}
</style>
