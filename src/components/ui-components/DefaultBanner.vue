<template>
  <div :style="computedStyle" class="default-banner" :class="styleClass">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    styleClass: {
      type: String,
      default: "background-color-tumbleweed",
      validator(value) {
        return [
          "background-color-tumbleweed",
          "background-color-blue",
          "background-color-purple",
          "background-gradient-blue",
          "background-grey-with-border",
          "border-only",
        ].includes(value);
      },
    },
    minWidth: {
      type: String,
      default: "204px",
    },
    bannerPadding: {
      type: String,
      default: "12px 20px 12px",
    },
  },
  computed: {
    computedStyle() {
      return {
        "--banner-width": this.minWidth,
        "--banner-padding": this.bannerPadding,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.default-banner {
  padding: var(--banner-padding);
  border-radius: 10px;

  @include desktop {
    min-width: var(--banner-width);
  }

  @include tablet {
    width: 100%;
  }
}

.background-color-tumbleweed {
  background-color: $color-tumbleweed;
}

.background-color-blue {
  background-color: $color-light-blue;
}

.background-color-purple {
  background-color: $color-light-purple;
}

.background-gradient-blue {
  background: $color-gradient-dark-blue;
}

.border-only {
  border: 1px solid $color-grey-400;
}

.background-grey-with-border {
  background-color: $color-grey-200;
  border: 1px solid $color-grey-400;
}
</style>
