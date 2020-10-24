<template lang="html">
  <div class="center-container ptx ">
    <div class="row pad">
      <h1>Welcome</h1>
      <code>{{ user }}</code>
    </div>

    <div class="row mbx grid">
      <div class="relative">
        <strong class="mb">Add website manually</strong>
        <input placeholder="enter an url" v-model="url" />
        <form-button @click.native="handleNewSite" class="mt" button-text="ADD!" :is-disabled="false"></form-button>
      </div>
      <!--
      <div class=" ml">
        <strong class="mb">Or upload your bookmarks!</strong>
        <input type="file" name="" value="Select .html file" @change="parseFile">
      </div>-->
    </div>
    <div class="row mtx mb pad">
      <button class="secondary-button" @click="handleLogout">Log Out</button>
    </div>
    <div class="row mtx dashed-bg pad">
      <button class="secondary-button" @click="handleDeleteAccount">Delete Account?</button>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import FormButton from "~/components/form/FormButton.vue";

export default {
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  components: {
    FormButton
  },
  data(){
    return {
      siteHeader: "Account",
      url: null
    }
  },
  head () {
    return {
      title: "Account | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Log in to your account" },
        { hid: "keywords", name: "keywords", content: "account, login" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "createWebsite",
      "logout"
    ]),
    handleDeleteAccount(){

    },
    async handleLogout(){
      await this.logout(true);
    },
    async handleNewSite(){
      if (this.url){
        const { data } = await this.createWebsite({
          url: this.url
        });
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
    }
  },
  middleware: "accountPageGuard",
}
</script>

<style lang="css">


</style>
