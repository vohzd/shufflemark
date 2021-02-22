<template lang="html">
  <main class="center-container mt">
    <div class="relative mt">
      <h2>import from file</h2>

      <input type="file" @change="parseFile"/>


      <div class="section mt" v-if="sites.length > 0">
        <div>
          <label></label>Found {{ sites.length }} bookmarks!</label>
          <button>Archive!</button>
        </div>

        <div class="mtx">
          <div class="row grey-bg mb pad sites-grid strong">
            <span>#</span>
            <span>Status</span>
            <span>Icon</span>
            <span>URL</span>
            <span>Title</span>
          </div>
          <div v-for="(site, i) in sites" class="row grey-bg mb pad sites-grid">
            <div>{{ i + 1 }}</div>
            <div class="">Fresh</div>
            <img :src="site.iconuri" width="16px"/>
            <a :href="site.uri">link</a>
            <div class="">
              {{ site.title }}
            </div>
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
  data(){
    return {
      sites: []
    }
  },
  components: {
    FormButton
  },
  methods: {
    ...mapActions([
      "addWebsite"
    ]),
    async parseFile($event){
      console.log("method: parseFile");
      console.log($event);
      const file = $event.target.files[0];
      const fileReader = new FileReader();

      console.log(file);
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

  .sites-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 9fr;
  }
</style>
