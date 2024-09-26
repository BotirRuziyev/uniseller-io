<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  methods: {
    getUrl(name) {
      return new URL(name, import.meta.url).href;
    },
  },
};
</script>

<template>
  <!-- Home -->
  <section class="home">
    <div class="main_container home__container">
      <div class="home__left">
        <img src="@/assets/images/logo-xl.svg" alt="" />
        <h2>uniseller<span>.</span>io</h2>
        <p>автоматизация бизнеса на маркетплейсах</p>
      </div>
      <div class="home__right">
        <h3>Все необходимое <br />для селлеров <span>Маркетплейсов</span></h3>
        <p>
          Уникальный инструмент, способный объеденить в одном окне упаравление
          продажами на всех доступных маркетплейсах. Добавляйте организации,
          подключайте каналы продаж, создавайте карточки товаров, добавляйте
          ассортимент, контролируйте цены, заказы и отгрузки. <br />
          С помощью Uniseller вы сможете масштабировать продажи и работать
          <br />с любым количеством личных кабинетов. Получите возможность
          подключения к “1С” , “Мой Склад” либо с другим вашим сервисом.
        </p>
        <a href="#" class="btn_yellow">
          <span>Подробнее о UniSeller</span>
          <img src="@/assets/images/youtube.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
  <!-- Home end -->

  <!-- Partners -->
  <section class="partners">
    <div class="main_container partners__container">
      <div class="partners_1">
        <img
          v-for="i in 5"
          :key="i"
          :src="require('@/assets/images/partners-1-' + i + '.svg')"
          alt=""
        />
        <img
          v-for="i in 5"
          :key="i"
          :src="require('@/assets/images/partners-1-' + i + '.svg')"
          alt=""
        />
      </div>
      <div class="partners_2">
        <img
          v-for="i in 5"
          :key="i"
          :src="require('@/assets/images/partners-2-' + i + '.svg')"
          alt=""
        />
        <img
          v-for="i in 5"
          :key="i"
          :src="require('@/assets/images/partners-2-' + i + '.svg')"
          alt=""
        />
      </div>
    </div>
  </section>
  <!-- Partners end -->

  <!-- Cards -->
  <section class="cards">
    <div class="main_container cards__container">
      <div class="cards_item">
        <img src="@/assets/images/cards-1.svg" alt="" class="main-img" />
        <img src="@/assets/images/card-bg.png" class="cards_item__bg" alt="" />
        <h3>Все в одном окне</h3>
        <p>
          Готовая интеграция со всеми <br />
          Маркетпейсами, 1С и Мой Склад. <br />
          Возможность подключения до <br />
          200 личных кабинетов.
        </p>
      </div>
      <div class="cards_item">
        <img src="@/assets/images/cards-2.svg" alt="" class="main-img" />
        <img src="@/assets/images/card-bg.png" class="cards_item__bg" alt="" />
        <h3>Цены и остатки</h3>
        <p>
          Мгновенная передача остатков <br />
          и цен. Уникальная технология <br />
          контроля количества заказов <br />
          и резерв позиций.
        </p>
      </div>
      <div class="cards_item">
        <img src="@/assets/images/cards-3.svg" alt="" class="main-img" />
        <img src="@/assets/images/card-bg.png" class="cards_item__bg" alt="" />
        <h3>
          Оптимизация <br />
          отгрузки
        </h3>
        <p>
          Ускореный способ поиска <br />
          позиций и комплектации <br />
          заказов. Изменение <br />и контроль статусов.
        </p>
      </div>
      <div class="cards_item">
        <img src="@/assets/images/cards-4.svg" alt="" class="main-img" />
        <img src="@/assets/images/card-bg.png" class="cards_item__bg" alt="" />
        <h3>
          Высокая <br />
          скорость работы <br />
          и надежность
        </h3>
        <p>
          Минимальный процент <br />
          ошибок и отмен.
        </p>
      </div>
      <div class="cards_item">
        <img src="@/assets/images/cards-5.svg" alt="" class="main-img" />
        <img src="@/assets/images/card-bg.png" class="cards_item__bg" alt="" />
        <h3>
          Сервис для <br />
          фулфилмент
        </h3>
        <p>
          Выгружайте маркировочные <br />
          листы и реестры, осуществляйте <br />
          отгрузки для всех ваших клиентов.
        </p>
      </div>
      <div class="cards_last">
        <img src="@/assets/images/card-6.svg" alt="" />
      </div>
    </div>
  </section>
  <!-- Cards end -->

  <!-- contact -->
  <section class="contact">
    <div class="main_container">
      <h3 class="contact_title">
        Задайте<br />
        свой вопрос
      </h3>
      <form action="#">
        <div class="form_left">
          <div class="form_left_top">
            <div class="form_left_top_block">
              <label for="name"> Ваше имя* </label>
              <input type="text" />
            </div>
            <div class="form_left_top_block">
              <label for="phone"> Номер телефона* </label>
              <div class="input_block">
                <div class="flag">
                  <img src="@/assets/images/flag_icon.svg" alt="" />
                  <img src="@/assets/images/down_icon.svg" alt="" />
                </div>
                <input type="tel" placeholder="+7 (000) 000-00-00" />
              </div>
            </div>
          </div>
          <p>* - поля, обязательные для заполнения</p>
          <p>
            Отправляя данные, вы соглашаетесь с
            <a href="#">политикой конфиденциальности</a>
          </p>
        </div>
        <button class="btn_yellow">Заказать звонок</button>
      </form>
    </div>
  </section>
  <!-- contact -->
</template>
