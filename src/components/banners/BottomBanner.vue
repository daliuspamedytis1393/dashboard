<template>
  <div class="bottom-banner">
    <DefaultBanner
      style-class="border-only"
      class="bottom-banner__banner"
      banner-padding="0"
    >
      <div class="bottom-banner__wrapper">
        <div class="bottom-banner__top-wrapper">
          <p class="bottom-banner__subtitle h2 h2--regular">
            {{ textStructure.announcementBanner.title }}
          </p>
          <BaseDate @click="getTemporaryData()" />
        </div>
        <BaseLoader v-if="isLoading" />
        <div v-else>
          <SmallBanner
            v-for="(item, index) in itemsToShow"
            :key="`bottom-banner__small-banner-${index}`"
            :text-structure="dummyData[index]"
          />
        </div>
      </div>
      <div class="bottom-banner__footer">
        <BaseButton button-style="hidden" @click="seeAllAnnouncements">
          <p class="bottom-banner__subtitle body-regular body-regular--regular">
            {{ buttonText }}
          </p>
        </BaseButton>
      </div>
    </DefaultBanner>
  </div>
</template>
<script>
import DefaultBanner from "../ui-components/DefaultBanner.vue";
import SmallBanner from "./SmallBanner.vue";
import textStructure from "./textStructure.json";
import temporaryDataApi from "../../api/temporaryDataApi";
import BaseLoader from "../ui-components/BaseLoader.vue";
import { NUMBER_TO_SHOW_ITEMS } from "../../utils/constants";
import BaseDate from "../ui-components/BaseDate.vue";
import BaseButton from "../ui-components/BaseButton.vue";

export default {
  components: {
    DefaultBanner,
    SmallBanner,
    BaseLoader,
    BaseDate,
    BaseButton,
  },
  data() {
    return {
      textStructure,
      dummyData: [],
      isLoading: false,
      itemsToShow: NUMBER_TO_SHOW_ITEMS,
      isOpen: false,
    };
  },
  created() {
    this.getTemporaryData();
  },
  computed: {
    buttonText() {
      return this.isOpen
        ? textStructure.announcementBanner.closeText
        : textStructure.announcementBanner.text;
    },
  },
  methods: {
    async getTemporaryData() {
      try {
        this.isLoading = true;
        this.dummyData = await temporaryDataApi.dummyData();

        this.isLoading = false;
      } catch (error) {
        console.error("Fetch Error: " + error.message);
      }
    },
    seeAllAnnouncements() {
      if (this.itemsToShow === this.dummyData.length) {
        this.isOpen = false;
        this.itemsToShow = NUMBER_TO_SHOW_ITEMS;
      } else {
        this.isOpen = true;
        this.itemsToShow = this.dummyData.length;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bottom-banner {
  margin-top: 20px;

  @include desktop {
    margin-right: 15px;
  }

  &__subtitle {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
  }

  &__wrapper {
    padding: 16px 22px 0 22px;
  }

  &__footer {
    border-top: 1px solid $color-grey-400;
    display: flex;
    justify-content: center;
    padding: 9px 10px;
    color: $color-primary;
  }
}
</style>
