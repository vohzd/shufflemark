<template lang="html">
  <main class="center-container mt">
    <div class="relative">
      <strong class="mb">Add website manually</strong>
      <input placeholder="enter an url" v-model="url" />
      <form-button @click.native="addWebsite({ url })" class="mt" :button-text="buttonText" :is-disabled="false"></form-button>
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
      url: "https://attacomsian.com/blog/nodejs-create-directory"
    }
  },
  methods: {
    ...mapActions([
      "addWebsite"
    ])
  }
}
</script>

<style lang="css">


</style>
