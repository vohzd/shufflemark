<template lang="html">
  <main class="center-container mt">
    <div class="relative">
      todo
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
  methods: {
    ...mapActions([
      "createWebsite"
    ]),
    async parseFile($event){
      const file = $event.target.files[0];
      const fileReader = new FileReader();

      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = async ($event) => {
        const json = JSON.parse($event.target.result);
        this.sites = json.children.flatMap((v) => {
          if (!v.children) return v;
          return v.children.flatMap((node) => {
            return node.children ? node.children : node
          });
        });
      }
    }
  }
}
</script>

<style lang="css">


</style>
