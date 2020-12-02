<template lang="html">
  <main class="center-container mt">
    <div class="relative">
      <h3>Your websites</h3>

      <div class="">
        {{ websites }}
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
  }
}
</script>

<style lang="css">


</style>
