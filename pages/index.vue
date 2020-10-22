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
            <input type="file" name="" value="Select .html file" @change="parseFile">
          </div>


        </div>
        <div class="row">
          <h4 class="mb">Newly added items</h4>

          <div v-for="site in sites" class="bookmarks-grid">
            <div v-if="site" class="flex-grid bookmark-item mb">
              <div class="flex-grid-item">
                <img :src="site.iconuri" alt="" width="32px">
              </div>
              <div class="flex-grid-item">
                <h4>{{ site.title }}</h4>
                <a :href="site.uri" class="tiny">{{ site.uri }}</a>
              </div>
            </div>


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
    },
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

      /*
      console.log(parseBookmarks);
      try {
        const wat = await parseBookmarks(file);
        console.log("qwd");
      }
      catch (e){
        console.log(e);
      }
*/
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
