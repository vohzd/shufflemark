<template lang="html">
  <div class="">
    <div v-if="selectedSite">
      <iframe :src="selectedSite.url" class="row" width="100%" height="800px"></iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "websites"
    ])
  },
  data(){
    return {
      selectedSite: null
    }
  },
  methods: {
    ...mapActions([
      "getWebsites"
    ]),
    getRand(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  async mounted(){
    await this.getWebsites();
    const number = this.getRand(0, this.websites.length);
    this.selectedSite = this.websites[number];
  }
}
</script>

<style lang="css" scoped>
</style>
