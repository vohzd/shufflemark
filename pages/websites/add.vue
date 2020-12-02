<template lang="html">
  <main class="center-container mt">
    <div class="relative">
      <strong class="mb">Add website manually</strong>
      <input placeholder="enter an url" v-model="url" />
      <form-button @click.native="handleNewSite" class="mt" :button-text="buttonText" :is-disabled="false"></form-button>
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
  data(){
    return {
      buttonText: "ADD!",
      url: "https://example.com"
    }
  },
  methods: {
    ...mapActions([
      "createWebsite"
    ]),
    async handleNewSite(){
      this.buttonText = "Generating!";
      const { data } = await this.createWebsite({
        url: this.url
      });
      console.log(data);
      this.$router.push("/websites")
    }
  }
}
</script>

<style lang="css">


</style>
