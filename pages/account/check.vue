<template lang="html">
  <div class="center-container ptx">
    <form-button class="absolute-top-right"></form-button>
    <h1>What's your email?</h1>
    <div class="row">
      <input type="text" v-model="email" @keyup.enter="handleForm" placeholder="Email Address" />
    </div>
  </div>
</template>

<script>

import FormButton from "~/components/form/FormButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "userMeta"
    ])
  },
  data(){
    return {
      email: null,
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
  methods: {
    handleForm(){

    }
  }
  //middleware: "accountPageGuard",
}
</script>

<style lang="css">


</style>
