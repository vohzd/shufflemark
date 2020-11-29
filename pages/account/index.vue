<template lang="html">
  <div class="center-container ptx ">
    <div class="row pad">
      <h1>Welcome</h1>
      <code>{{ user }}</code>
    </div>

    <div class="row mt mb">
      <nuxt-link to="/websites/add">Add a website manually</nuxt-link>
      <nuxt-link to="/websites/upload">Upload a shitton from a file</nuxt-link>
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
      "createWebsite",
      "logout"
    ]),
    handleDeleteAccount(){

    },
    async handleLogout(){
      await this.logout(true);
    },
  },
  middleware: "accountPageGuard",
}
</script>

<style lang="css">


</style>
