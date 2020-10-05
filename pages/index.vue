<template lang="html">
  <main class="center-container mt">
    <div>
      <div class="c50">
        <h1>chantry.io</h1>
        <img src="https://files.epitrade.io/misc/tremere.png" alt="" />
      </div>
      <div class="c50 relative">
        <div class="row mbx">
          <form-button class="absolute-top-right"></form-button>
          <input placeholder="enter an url" />
        </div>
        <div class="">
          <p>wueigfiouewgfowiefwoeif</p>
          <p>iwuegfiwuegfiuwegfiuwegiufwgefiuwgefiu</p>
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
      email: null
    }
  },
  methods: {
    async handleBetaSignup(){
      if (this.email){
        try {
          const { data } = await this.$axios.post("http://localhost:1337/register", {
            email: this.email
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
