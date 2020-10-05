<template lang="html">
  <div class="center-container ptx">
    create account
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "userMeta"
    ])
  },
  data(){
    return {
      siteHeader: "Account",
    }
  },
  head () {
    return {
      title: "Account | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Log in to your account" },
        { hid: "keywords", name: "keywords", content: "account, login" },
      ]
    }
  },
  middleware: "accountPageGuard",
}
</script>

<style lang="css">


</style>
