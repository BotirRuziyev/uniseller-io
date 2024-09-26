<script>
import User from "../models/user";
export default {
  name: "Header",
  data() {
    return {
      accordion: null,
      menu: false,
      userSignIn: new User(""),
      userSignUp: new User(""),
      messageSignIn: "",
      messageSignUp: "",
      successful: true,
    };
  },
  watch: {
    menu() {
      if (this.menu) {
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.querySelector("body").style.overflow = "visible";
      }
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.successful = true;
    }
  },
  methods: {
    toggleAccordion(data) {
      this.accordion = this.accordion == data ? null : data;
    },
    Modal(val) {
      document.querySelectorAll(".header-modal").forEach((e, i) => {
        if (e.getAttribute("data-filter") === val) {
          e.classList.toggle("active");
        } else {
          e.classList.remove("active");
        }
      });
    },
    handleLogin() {
      if (this.userSignIn.email) {
        this.$store.dispatch("auth/login", this.userSignIn).then(
          () => {
            this.successful = true;
            this.$router.push("/profile");
            document.querySelectorAll(".header-modal").forEach((e, i) => {
              e.classList.remove("active");
            });
          },
          (error) => {
            this.messageSignIn =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
          },
        );
      }
    },
    handleRegister() {
      this.$store.dispatch("auth/register", this.userSignUp).then(
        (data) => {
          this.successful = true;
          document.querySelectorAll(".header-modal").forEach((e, i) => {
            e.classList.remove("active");
          });
        },
        (error) => {
          this.messageSignUp =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        },
      );
    },
  },
  mounted() {
    window.onclick = (e) => {
      if (
        !e.target.closest(".header-modal") &&
        !e.target.closest(".auth_btn") &&
        !e.target.closest(".btn_orange")
      ) {
        document.querySelectorAll(".header-modal").forEach((e, i) => {
          e.classList.remove("active");
        });
      }
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="main_container header__container">
      <div class="header__left">
        <a href="/" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="" />
          <span class="header__logo_text">uniseller<span>.</span>io</span>
        </a>
        <ul class="header__nav">
          <li class="header__nav_item">
            <a href="#" class="header__nav_link">
              <span>Услуги</span>
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.883789 1L4.38379 4L7.88379 0.999999"
                  stroke="#EF6C1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="header__nav_list">
              <li>
                <a href="#">Личные кабинеты</a>
              </li>
              <li>
                <a href="#">Цены и остатки</a>
              </li>
              <li>
                <a href="#">Ассортимент</a>
              </li>
              <li>
                <a href="#">Подключение</a>
              </li>
              <li>
                <a href="#">Аналитика</a>
              </li>
            </ul>
          </li>
          <li class="header__nav_item">
            <a href="#" class="header__nav_link">
              <span>Интеграции</span>
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.883789 1L4.38379 4L7.88379 0.999999"
                  stroke="#EF6C1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="header__nav_list">
              <li>
                <a href="#">1С</a>
              </li>
              <li>
                <a href="#">Мой склад</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Решения</a>
              </li>
              <li>
                <a href="#">Сторонние сервисы</a>
              </li>
            </ul>
          </li>
          <li class="header__nav_item">
            <a href="#" class="header__nav_link">
              <span>Маркетплейсы</span>
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.883789 1L4.38379 4L7.88379 0.999999"
                  stroke="#EF6C1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="header__nav_list">
              <li>
                <a href="#">Ozon</a>
              </li>
              <li>
                <a href="#">Яндекс Маркет</a>
              </li>
              <li>
                <a href="#">Мегамаркет</a>
              </li>
              <li>
                <a href="#">Wildberries</a>
              </li>
              <li>
                <a href="#">Avito</a>
              </li>
            </ul>
          </li>
          <li class="header__nav_item">
            <a href="#" class="header__nav_link">
              <span>Тарифы</span>
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.883789 1L4.38379 4L7.88379 0.999999"
                  stroke="#EF6C1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="header__nav_list">
              <li>
                <a href="#">Basic</a>
              </li>
              <li>
                <a href="#">Seller</a>
              </li>
              <li>
                <a href="#">SellerPro</a>
              </li>
              <li>
                <a href="#">SellerTop</a>
              </li>
              <li>
                <a href="#">MegaSeller</a>
              </li>
            </ul>
          </li>
          <li class="header__nav_item">
            <a href="#" class="header__nav_link">
              <span>FAQ</span>
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.883789 1L4.38379 4L7.88379 0.999999"
                  stroke="#EF6C1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="header__nav_list">
              <li>
                <a href="#">Личные кабинеты</a>
              </li>
              <li>
                <a href="#">Цены и остатки</a>
              </li>
              <li>
                <a href="#">Ассортимент</a>
              </li>
              <li>
                <a href="#">Подключение</a>
              </li>
              <li>
                <a href="#">Аналитика</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="header__right">
        <div class="orange-wrapper">
          <button class="btn_orange" @click="Modal('leave-request')">
            Оставить заявку
          </button>
          <div class="header-modal" data-filter="leave-request">
            <form>
              <div class="form_control">
                <label for="name">Имя</label>
                <input type="text" id="name" />
              </div>
              <div class="form_control">
                <label for="phone">Номер телефона*</label>
                <input type="text" id="phone" />
              </div>
              <button class="requaest_call_btn btn">Заказать звонок</button>
            </form>
          </div>
        </div>
        <ul class="header__auth" v-if="!successful">
          <li>
            <button class="auth_btn" @click="Modal('sign-in')">Войти</button>
            <div class="header-modal" data-filter="sign-in">
              <form name="form" @submit.prevent="handleLogin">
                <div class="form_control">
                  <label for="sign-in-email">электронная почта*</label>
                  <input
                    type="email"
                    id="sign-in-email"
                    v-model="userSignIn.email"
                  />
                  <span class="error-message" v-if="messageSignIn">{{
                    messageSignIn
                  }}</span>
                </div>
                <button class="sign_in_btn btn">Войти</button>
              </form>
            </div>
          </li>
          <li>
            <button class="auth_btn" @click="Modal('sign-up')">
              Регистрация
            </button>
            <div class="header-modal" data-filter="sign-up">
              <form name="form" @submit.prevent="handleRegister">
                <div class="form_control">
                  <label for="sign-up-email">электронная почта*</label>
                  <input
                    type="email"
                    id="sign-up-email"
                    v-model="userSignUp.email"
                  />
                  <span class="error-message" v-if="messageSignUp">{{
                    messageSignUp
                  }}</span>
                </div>
                <button class="sign_up_btn btn">Регистрация</button>
              </form>
            </div>
          </li>
        </ul>
        <div class="header__settings" v-if="successful">
          <router-link to="/profile">
            <img src="@/assets/images/user-circle.svg" alt="" />
          </router-link>
          <router-link to="#">
            <img src="@/assets/images/settings-icon.svg" alt="" />
          </router-link>
        </div>
        <button class="bars" @click="menu = true">
          <img src="@/assets/images/bars.svg" alt="" />
        </button>
      </div>
    </div>
  </header>

  <div class="mobile_menu" :class="menu ? 'active' : ''">
    <button class="close" @click="menu = false">
      <img src="@/assets/images/times.svg" alt="" />
    </button>
    <ul class="mobile_menu__nav">
      <li class="mobile_menu__nav_item">
        <button @click="toggleAccordion('Услуги')">
          <span>Услуги</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 1L4.38379 4L7.88379 0.999999"
              stroke="#EF6C1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          class="mobile_menu__nav_list"
          :class="accordion == 'Услуги' ? 'active' : ''"
        >
          <li>
            <a href="#">Личные кабинеты</a>
          </li>
          <li>
            <a href="#">Цены и остатки</a>
          </li>
          <li>
            <a href="#">Ассортимент</a>
          </li>
          <li>
            <a href="#">Подключение</a>
          </li>
          <li>
            <a href="#">Аналитика</a>
          </li>
        </ul>
      </li>
      <li class="mobile_menu__nav_item">
        <button @click="toggleAccordion('Интеграции')">
          <span>Интеграции</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 1L4.38379 4L7.88379 0.999999"
              stroke="#EF6C1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          class="mobile_menu__nav_list"
          :class="accordion == 'Интеграции' ? 'active' : ''"
        >
          <li>
            <a href="#">1С</a>
          </li>
          <li>
            <a href="#">Мой склад</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Решения</a>
          </li>
          <li>
            <a href="#">Сторонние сервисы</a>
          </li>
        </ul>
      </li>
      <li class="mobile_menu__nav_item">
        <button @click="toggleAccordion('Маркетплейсы')">
          <span>Маркетплейсы</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 1L4.38379 4L7.88379 0.999999"
              stroke="#EF6C1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          class="mobile_menu__nav_list"
          :class="accordion == 'Маркетплейсы' ? 'active' : ''"
        >
          <li>
            <a href="#">Ozon</a>
          </li>
          <li>
            <a href="#">Яндекс Маркет</a>
          </li>
          <li>
            <a href="#">Мегамаркет</a>
          </li>
          <li>
            <a href="#">Wildberries</a>
          </li>
          <li>
            <a href="#">Avito</a>
          </li>
        </ul>
      </li>
      <li class="mobile_menu__nav_item">
        <button @click="toggleAccordion('Тарифы')">
          <span>Тарифы</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 1L4.38379 4L7.88379 0.999999"
              stroke="#EF6C1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          class="mobile_menu__nav_list"
          :class="accordion == 'Тарифы' ? 'active' : ''"
        >
          <li>
            <a href="#">Basic</a>
          </li>
          <li>
            <a href="#">Seller</a>
          </li>
          <li>
            <a href="#">SellerPro</a>
          </li>
          <li>
            <a href="#">SellerTop</a>
          </li>
          <li>
            <a href="#">MegaSeller</a>
          </li>
        </ul>
      </li>
      <li class="mobile_menu__nav_item">
        <button @click="toggleAccordion('FAQ')">
          <span>FAQ</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 1L4.38379 4L7.88379 0.999999"
              stroke="#EF6C1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          class="mobile_menu__nav_list"
          :class="accordion == 'FAQ' ? 'active' : ''"
        >
          <li>
            <a href="#">Личные кабинеты</a>
          </li>
          <li>
            <a href="#">Цены и остатки</a>
          </li>
          <li>
            <a href="#">Ассортимент</a>
          </li>
          <li>
            <a href="#">Подключение</a>
          </li>
          <li>
            <a href="#">Аналитика</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
