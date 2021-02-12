<template lang="html">
  <div class="account-icon relative large-icon mr hover">
    <nuxt-link to="/account" class="no-colour"><font-awesome-icon icon="user-circle" ></font-awesome-icon ></nuxt-link>
    <div class="login-status" :class="{ 'login-status--green': user  }"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters([
        "user"
      ])
    }
  }
</script>

<style lang="css">

  .account-icon {
    display: inline-block;
    width: 48px;
    margin-top: 4px;
  }

  .account-icon svg {
    color: white;
    width:100%;
  }

  .login-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    background: grey;
    right: -2px;
  }
  .login-status--green {
    background: rgb(109, 227, 29);
  }

</style>
