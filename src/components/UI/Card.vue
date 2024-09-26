<script>
export default {
  props: {
    item: {
      type: Array,
      default: "",
    },
  },
};
</script>
<template>
  <div class="card_item" v-if="item.id < 6">
    <div class="card_head">
      <div class="card_title">{{ item.title.slice(0, 6) }}</div>
      <p class="card_description">{{ item.body }}</p>
    </div>
    <div class="card_info">
      <div class="card_img">
        <img src="" alt="" />
      </div>
      <div class="card_body">
        <div class="card_body_head">{{ item.title.slice(0, 6) }}</div>
        <ul class="card_body_list">
          <l1 class="list_item" v-for="item of 12" :key="item">{{ item }}</l1>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card_item {
  box-shadow: 6px 2px 20px 0 rgba(24, 24, 24, 0.3);
  background: #fff;
  border-radius: 25px;
  padding: 62px 37px;
  .card_head {
    padding-bottom: 20px;
    border-bottom: 1px solid #a9a9a9;
    .card_title {
      font-family: var(--third-family);
      font-weight: 600;
      font-size: 30px;
      line-height: 32px;
      color: #000;
    }
    .card_description {
      font-family: var(--third-family);
      font-weight: 600;
      font-size: 12px;
      line-height: 13px;
      color: #a9a9a9;
    }
  }
  .card_info {
    padding-top: 26px;
    display: flex;
    gap: 38px;
    .card_img {
      width: 190px;
      height: 190px;
      background: #dcdcdc;
      border-radius: 10px;
    }
    .card_body {
      &_head {
        font-family: var(--third-family);
        font-weight: 600;
        font-size: 16px;
        color: #000;
        margin-bottom: 24px;
      }
      .card_body_list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        .list_item {
          font-family: var(--second-family);
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #000;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .card_item {
    padding: 20px;
    border-radius: 20px;
    .card_info {
      gap: 20px;
      padding-top: 20px;
      .card_img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
