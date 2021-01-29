<template lang="html">
  <div class=""></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  /*
  middleware: "loginCheck",*/

  computed: {
    ...mapGetters([
      "authServerEndpoint",
      "user"
    ])
  },

  methods: {
    determineOutcome(){

      /*
      if (this.user){
        console.log("has user")
        //return redirect()

        this.$router.push("/account/dashboard")
      }
      else {
        console.log("redirect user to multipass")
        window.location = `${this.authServerEndpoint}?redirectUrl=https://localhost:1440/account/dashboard`;
      }*/
    }
  },
  mounted(){
    console.log("mounted");
    //this.determineOutcome();
  },
  middleware: "loginCheck",
  watch: {
    user (){
      //console.log("USER CHANGED")
      //console.log(this.user);

      /*
      if (this.user){
        this.determineOutcome();
      }*/
    }
  }
}
</script>

<style lang="css" scoped>
</style>
