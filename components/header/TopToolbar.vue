<template lang="html">
  <header class="main-header">
    <!--
    <nuxt-link to="/">
      <img src="~/assets/img/logo4.png" class="main-logo" />
    </nuxt-link>-->
    <account-icon class="absolute-top-right"></account-icon>
  </header>
</template>

<script>

import AccountIcon from "~/components/header/AccountIcon.vue";
export default {
  components: {
    AccountIcon,
  }
}

</script>

<style>

  .main-header {
    width: 100%;
    height: 64px;
    background: #181818;
    line-height: 64px;
    position: fixed;
    top: 0;
    z-index: 6;
  }

  .main-logo {
    margin-top: 2px;
    width: 212px;
  }
</style>
