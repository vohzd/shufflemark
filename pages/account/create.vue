<template lang="html">
  <div class="center-container ptx relative">
    <form-button class="absolute-top-right" :is-disabled="isDisabled" :is-loading="isLoading" :button-text="buttonText"  @click.native="handleForm"></form-button>
    <h2>Create Account</h2>
    <h4>Enter Password</h4>
    <div class="row mb mt">
      <input type="text" v-model="email" @keyup.enter="handleForm" placeholder="Email Address" />
    </div>
    <div class="row mb">
      <input type="password" v-model="password" @keyup.enter="handleForm" placeholder="Password" />
    </div>
    <div class="row mb">
      <input type="password" v-model="password2" @keyup.enter="handleForm" placeholder="Password Again" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FormButton from "~/components/form/FormButton.vue";

export default {
  asyncData({ query }){
    return {
      email: query.email
    }
  },
  components: {
    FormButton
  },
  data(){
    return {
      buttonText: "Create Account",
      password: null,
      password2: null,
      isDisabled: false,
      isLoading: false,
    }
  },
  methods: {
    ...mapActions([
      "createAccount"
    ]),
    async handleForm(){
      await this.createAccount({
        email: this.email,
        password: this.password
      });
      this.$router.push("/account");
    }
  },
  watch: {
    email(){
      this.$router.push("/account/check")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
