<template lang="html">
  <header class="main-toolbar">
    <nuxt-link to="/" class="main-logo">
      <site-logo></site-logo>
    </nuxt-link>
    <div class="main-ctas pad">
      <nuxt-link to="/surf" class="row ">
        <button >SURF!</button>
      </nuxt-link>

      <!--
      <div class=" main-cta-socials">
        <div class="div">
          <font-awesome-icon :icon="['fas', 'bookmark']"></font-awesome-icon>
        </div>
        <div class="">
          <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        </div>
      </div>-->
    </div>
    <account-icon class="absolute-top-right"></account-icon>
  </header>
</template>

<script>

import AccountIcon from "~/components/header/AccountIcon.vue";
import SiteLogo from "~/components/header/SiteLogo.vue";

export default {
  components: {
    AccountIcon,
    SiteLogo
  }
}

</script>

<style>

  .main-toolbar {
    width: 100%;
    height: 64px;
    background: #1f1f1f;
    line-height: 64px;
    position: fixed;
    top: 0;
    z-index: 6;
  }

  .main-logo img{
    margin-top: 2px;
    width: 300px;
    border-bottom-right-radius: 4px;
    z-index: 2;
    position: relative;
  }

  .main-logo:hover {
    opacity: 1 !important;
  }

  .main-ctas {
    width: 300px;
    background: #f1f1f1;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 138px;
    z-index: 1;
    border-bottom-right-radius: 4px;
  }

  .main-ctas button {
    width: 100%;
    text-align: center;
  }

  .main-cta-socials div {
    font-size: 12px;
    display: inline-block;
    color: var(--link)
  }


</style>
