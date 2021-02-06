<template lang="html">
  <div class="center-container ptx ">
    <div class="row ">
      <h1>Welcome</h1>
    </div>
    <div class="row mt mb flex-wrapper">
      <nuxt-link to="/websites">Manage Websites</nuxt-link>
    </div>


    <div class="row mtx">
      <button class="secondary-button" @click="handleLogout">Log Out</button>
      <div class="row mt dashed-bg">
        <button class="secondary-button" @click="handleDeleteAccount">Delete Account?</button>
      </div>
    </div>

  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import FormButton from "~/components/form/FormButton.vue";

export default {
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  components: {
    FormButton
  },
  methods: {
    ...mapActions([
      "addWebsite",
      "logout"
    ]),
    handleDeleteAccount(){

    },
    async handleLogout(){
      await this.logout(true);
    },
  }
}
</script>

<style lang="css">


</style>
