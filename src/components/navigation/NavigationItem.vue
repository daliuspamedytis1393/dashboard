<template>
  <RouterLink
    class="navigation-item"
    :class="{ 'navigation-item--move-up': isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :to="linkTo"
  >
    <component class="navigation-item__icon" :is="iconComponentName" />
    <p
      class="navigation-item__title body-large body-large--regular"
      :class="{ 'navigation-item__title--show': isHamburgerToggled }"
    >
      {{ itemTitle }}
    </p>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
import IconDashboardIcon from "@/assets/icons/icon-dashboard.svg";
import IconRecruitmentIcon from "@/assets/icons/icon-recruitment.svg";
import IconCalendarIcon from "@/assets/icons/icon-calendar.svg";
import IconEmployeeIcon from "@/assets/icons/icon-employee.svg";
import IconDepartmentIcon from "@/assets/icons/icon-department.svg";
import IconSupportIcon from "@/assets/icons/icon-support.svg";
import IconSettingsIcon from "@/assets/icons/icon-settings.svg";

export default {
  components: {
    IconDashboardIcon,
    IconRecruitmentIcon,
    IconCalendarIcon,
    IconEmployeeIcon,
    IconDepartmentIcon,
    IconSupportIcon,
    IconSettingsIcon,
  },
  props: {
    iconComponentName: {
      type: String,
      required: true,
      validator(iconComponentName) {
        return [
          "IconDashboardIcon",
          "IconRecruitmentIcon",
          "IconCalendarIcon",
          "IconEmployeeIcon",
          "IconDepartmentIcon",
          "IconSupportIcon",
          "IconSettingsIcon",
        ].includes(iconComponentName);
      },
    },
    itemTitle: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
    isHamburgerToggled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation-item {
  padding: 16px 16px 16px 33px;
  display: flex;
  align-items: center;
  transition: transform 250ms;
  color: $color-grey-500;
  cursor: pointer;

  &--move-up {
    transform: translateY(-2px);
  }

  &__icon {
    margin-right: 27px;

    @include tablet {
      margin-right: 20px;
    }
  }

  &__title {
    @include tablet {
      display: none;
    }

    &--show {
      @include tablet {
        display: block;
      }
    }
  }
}

.router-link-active,
.router-link-exact-active {
  color: $color-primary;
}
</style>
