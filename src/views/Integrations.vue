<script>
import Card from "@/components/UI/Card.vue";
import PageHead from "@/components/UI/PageHead.vue";
import { onMounted } from "vue";
import { useAPI } from "../api/integrations";

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
  <div class="integrations">
    <div class="main_container">
      <PageHead name="Интеграции" />
      <div class="integrations_card">
        <Card v-for="item of data" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.integrations {
  padding: 46px 0 72px;
  .integrations_card {
    display: flex;
    flex-direction: column;
    gap: 46px;
  }
}
@media (max-width: 576px) {
  .integrations {
    .integrations_card {
      gap: 35px;
    }
  }
}
</style>
