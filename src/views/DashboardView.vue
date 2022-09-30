<template>
  <div class="dashboard">
    <h1 class="dashboard__title h1 h1--regular">Dashboard</h1>
    <div class="dashboard__banner-wrapper">
      <div>
        <TopBanners />
        <MiddleBanners />
        <BottomBanner />
      </div>
      <div class="dashboard__right-wrapper">
        <InfoBanner />
        <UpcomingBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBanners from "../components/banners/TopBanners.vue";
import MiddleBanners from "../components/banners/MiddleBanners.vue";
import InfoBanner from "../components/banners/InfoBanner.vue";
import BottomBanner from "../components/banners/BottomBanner.vue";
import UpcomingBanner from "../components/banners/UpcomingBanner.vue";
</script>

<style lang="scss" scoped>
.dashboard {
  &__banner-wrapper {
    @include desktop {
      display: flex;
      align-items: flex-start;
    }
  }

  &__title {
    margin: 24px 0 12px;
  }

  &__right-wrapper {
    @include tablet {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
