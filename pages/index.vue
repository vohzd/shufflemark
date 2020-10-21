<template lang="html">
  <main class="center-container mt">
    <div>

      <div class="row">
        <h1>chantry.io</h1>

        <div class="row mtx mbx">
          <nuxt-link to="/surf">
            <button>SURF!</button>
          </nuxt-link>
        </div>
        <div class="row mbx homepage-grid">
          <div class=" relative">
            <strong class="mb">Add website manually</strong>
            <input placeholder="enter an url" v-model="url" />
            <form-button @click.native="addSite" class="mt" button-text="GO!" :is-disabled="false"></form-button>
          </div>
          <div class=" ml">
            <strong class="mb">Or upload your bookmarks!</strong>
            <input type="file" name="" value="Select .html file">
          </div>


        </div>
        <div class="row">
          <h4 class="mb">Newly added items</h4>
          <div v-for="site in sites">
            <h5>{{ site.url }}</h5>
            <img :src="site.screenshot" alt="" width="256px">
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<script>

import FormButton from "~/components/form/FormButton.vue";

export default {
  components: {
    FormButton
  },
  data(){
    return {
      url: "https://unrealarchive.org",
      sites: []
    }
  },
  methods: {
    async addSite(){
      if (this.url){

        try {
          const { data } = await this.$axios.get(`http://localhost:1337/website-screenshot?url=${this.url}`);
          this.sites.push({
            url: this.url,
            screenshot: `http://localhost:1337/screenshots/${data}`
          });
        }
        catch (e){
          console.log(e);
        }

      }
    }
  }
}
</script>

<style lang="css">

  .homepage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
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
