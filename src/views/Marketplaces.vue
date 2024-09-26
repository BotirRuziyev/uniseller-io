<script>
import Card from "@/components/UI/Card.vue";
import PageHead from "@/components/UI/PageHead.vue";
import { onMounted } from "vue";
import { useAPI } from "../api/marketplaces";

export default {
  components: {
    Card,
    PageHead,
  },
  setup() {
    const { data, error, fetchData } = useAPI();
    onMounted(() => {
      fetchData("/posts");
    });

    return {
      data,
      error,
    };
  },
};
</script>

<template>
  <div class="marketplaces">
    <div class="main_container">
      <PageHead name="Маркетплейсы" />
      <div class="marketplaces_card">
        <Card v-for="item of data" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.marketplaces {
  padding: 46px 0 72px;
  .marketplaces_card {
    display: flex;
    flex-direction: column;
    gap: 46px;
  }
}
@media (max-width: 576px) {
  .marketplaces {
    .marketplaces_card {
      gap: 35px;
    }
  }
}
</style>
