<template lang="html">
  <main class="center-container mt">
    <div class="relative">
      <h3>Your websites</h3>

      <div class="row" v-for="website in websites">
        {{ website.url }} <a @click="deleteWebsite(website._id)">delete</a>
      </div>


      <div class="row mtx">
        <h4 class="mb">Moar</h4>
        <nuxt-link to="/websites/add" ><button>Add a website manually</button></nuxt-link>
        <nuxt-link to="/websites/import" ><button>Import Multiple</button></nuxt-link>
      </div>



    </div>
  </main>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

import FormButton from "~/components/form/FormButton.vue";

export default {
  components: {
    FormButton
  },
  computed: {
    ...mapGetters([
      "websites"
    ])
  },
  methods: {
    ...mapActions([
      "deleteWebsite"
    ])
  },
  middleware: ["getWebsites"]
}
</script>

<style lang="css">


</style>
