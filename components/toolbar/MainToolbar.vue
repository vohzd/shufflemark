<template lang="html">
  <header class="main-toolbar">
    <nuxt-link to="/" class="nohover"><site-logo></site-logo></nuxt-link>
    <!--
    <div class="main-ctas pad">
      <nuxt-link to="/surf" class="row ">
        <button >SURF!</button>
      </nuxt-link>
    </div>-->
    <account-icon class="absolute-top-right"></account-icon>
  </header>
</template>

<script>

import AccountIcon from "~/components/toolbar/AccountIcon.vue";
import SiteLogo from "~/components/toolbar/SiteLogo.vue";

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

  .main-ctas {
    width: 156px;
    background: #f1f1f1;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 112px;
    z-index: 1;
    border-bottom-right-radius: 4px;
  }

  .main-ctas button {
    width: 100%;
    text-align: center;
  }



</style>
