<template lang="html">
  <div class="center-container ptx relative">
    <form-button class="absolute-top-right" :is-disabled="isDisabled" :is-loading="isLoading" :button-text="buttonText"  @click.native="handleForm"></form-button>
    <h2>What's your email?</h2>
    <div class="row">
      <input type="text" v-model="email" @keyup.enter="handleForm" placeholder="Email Address" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FormButton from "~/components/form/FormButton.vue";

export default {
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  data(){
    return {
      buttonText: "Check this email",
      email: "allobon@gmail.com",
      isDisabled: false,
      isLoading: false,
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
    ...mapActions([
      "checkAccountExists"
    ]),
    async handleForm(){
      if (!this.isEmailValid()) return;
      this.isLoading = true;
      const { data } = await this.checkAccountExists(this.email);
      console.log("DOES ACCOUNT EXIST?!");
      console.log(data);
      data.exists ? this.$router.push(`/account/login?email=${this.email}`) : this.$router.push(`/account/create?email=${this.email}`);
    },
    isEmailValid(){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase())
    },
  },
  watch: {
    email(){
      this.isEmailValid() ? this.isDisabled = false : this.isDisabled = true;
    },
    user(){
      if (this.user){
        this.$router.push("/account");
      }
    }
  },
}
</script>

<style lang="css">


</style>
