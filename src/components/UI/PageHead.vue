<script>
export default {
  props: {
    name: {
      typeof: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="page_head">
    <router-link to="/">Главная</router-link>/<span>{{ name }}</span>
  </div>
</template>
