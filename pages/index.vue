<template lang="html">
  <main class="center-container mt">
    <div>

      <div class="row">

        </div>
        <div class="row">
          <h4 class="mb">Newly added items</h4>

          <div v-for="site in websites" class="bookmarks-grid">
            <div v-if="site" class="flex-grid bookmark-item mb">
              {{ site.url }}
            </div>
        </div>

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
      "getWebsites"
    ])
  },
  mounted(){
    this.getWebsites();
  }
}
</script>

<style lang="css">

  .homepage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
  }

  .flex-grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 8px;
  }

  .bookmarks-item {

  }

  .bookmarks-item:nth-child(odd) {
    background: rgba(0,0,0,0.1);
  }
  ul {
    margin-left: 16px;
  }
  ul li {
    list-style: square;
    margin-bottom: 32px;
  }

  h4 {
    font-weight: 700;
    font-size: 22px;
  }

  @media (max-width: 1200px){
    .homepage-grid {
      display: grid;
      grid-template-columns: 1fr;
    }

    .homepage-grid > div {
      margin-bottom: 32px;
    }

    h1, h2 {
      width: auto;
      background: none;
      white-space: wrap;
      font-size: 24px;
      padding: 0px;
      margin: 0 0 16px 0;
    }

    .mtx {
      margin-top: 32px;
    }
  }

</style>
