<script>
import { onMounted } from "vue";
import { useAPI } from "../api/tariffs";

export default {
  setup() {
    const { data, error, fetchData, limitedData } = useAPI();
    onMounted(() => {
      fetchData("/users");
    });

    return {
      data,
      limitedData,
      error,
    };
  },
};
</script>
<template>
  <div class="tariffs">
    <div class="main_container">
      <div class="page_head">
        <router-link to="/">Главная</router-link>
        <span>/Тарифы</span>
      </div>
      <h1 class="page_title">Выбор тарифного плана</h1>
      <div class="tariffs_card">
        <div class="card_item" v-for="item of data" :key="item.id">
          <div class="tariff_name">{{ item.name.slice(0, 6) }}</div>
          <div class="tariff_sum">
            {{ item.username.slice(0, 6) }}<span>мес.</span>
          </div>
          <ul class="tariff_info">
            <li class="tariff_info_item" v-for="(list, i) in 7" :key="i">
              <div class="list_type">
                <img src="@/assets/images/list-type.svg" alt="" />
              </div>
              <span>{{ item.address.suite }}</span>
            </li>
          </ul>
        </div>
      </div>
      <p class="description">
        * - Возможны индивидуальные условия подключения , для получения
        подробной информации оставьте заявку. Наш менеджер свяжется с вами в
        ближайшее время.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tariffs {
  padding: 46px 0 66px;

  .page_title {
    font-family: var(--third-family);
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: #000;
    margin-bottom: 66px;
  }
  .tariffs_card {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 389px);
    justify-content: center;
    column-gap: 37px;
    row-gap: 66px;
    margin-bottom: 42px;
    .card_item {
      flex: 1 1 320px;
      max-width: 389px;
      box-shadow: 6px 2px 20px 0 rgba(24, 24, 24, 0.3);
      background: #fff;
      border-radius: 25px;
      padding: 62px 37px;
      .tariff_name {
        font-family: var(--third-family);
        font-weight: 600;
        font-size: 30px;
        color: #000;
        margin-bottom: 29px;
      }
      .tariff_sum {
        font-family: var(--third-family);
        font-weight: 600;
        font-size: 50px;
        color: #000;
        margin-bottom: 29px;
        span {
          font-size: 30px;
        }
      }
      .tariff_info {
        display: flex;
        flex-direction: column;
        gap: 29px;
        &_item {
          display: flex;
          align-items: center;
          gap: 10px;
          .list_type {
            height: 18px;
          }
          span {
            font-family: var(--second-family);
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #000;
          }
        }
      }
    }
  }
  .description {
    max-width: 742px;
    margin: 0 auto;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #000;
  }
}
@media (max-width: 717px) {
  .tariffs {
    .tariffs_card {
      gap: 30px;
      .card_item {
        max-width: 100%;
      }
    }
  }
}
@media (max-width: 576px) {
  .tariffs {
    padding: 35px 0 70px;
    .page_title {
      font-size: 28px;
      margin-bottom: 35px;
    }
    .tariffs_card {
      .card_item {
        max-width: 100%;
        padding: 30px;
        .tariff_name {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .tariff_sum {
          font-size: 36px;
          margin-bottom: 20px;
        }
        .tariff_info {
          gap: 20px;
        }
        .tariff_info_item {
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
