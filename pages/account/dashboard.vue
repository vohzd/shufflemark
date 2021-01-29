<template lang="html">
  <div class="center-container ptx ">
    <div class="row pad">
      <h1>Welcome</h1>
    </div>
    <div class="row mt mb">
      <nuxt-link to="/websites/add">
        <button class="secondary-button">Add a website manually</button>
      </nuxt-link>
      <nuxt-link to="/websites/upload">
        <button class="secondary-button">Upload a shitton from a file</button>
      </nuxt-link>
    </div>
    <div class="row mt mb pad">
      <button class="secondary-button" @click="handleLogout">Log Out</button>
    </div>
    <div class="row mt dashed-bg pad">
      <button class="secondary-button" @click="handleDeleteAccount">Delete Account?</button>
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
