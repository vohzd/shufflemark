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
      url: "https://bbc.com"
    }
  },
  methods: {
    ...mapActions([
      "addWebsite"
    ]),
    async handleNewSite(){
      this.buttonText = "Adding!";
      try {
        const { data } = await this.addWebsite({
          url: this.url.replace(/(^\w+:|^)\/\//, "https://")
        });
        console.log(data);
      }
      catch (e){
        console.log(e);
      }
      this.$router.push("/websites")
    }
  }
}
</script>

<style lang="css">


</style>
