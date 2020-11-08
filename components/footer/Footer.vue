<template lang="html">
  <footer class="site-footer">
    <div class="footer-column">
      <div class="">
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/pricing">pricing</nuxt-link>
        <nuxt-link to="/faq">faq</nuxt-link>
      </div>
      <div >
        <nuxt-link to="/careers">careers</nuxt-link>
        <nuxt-link to="/privacy">privacy</nuxt-link>
        <nuxt-link to="/terms">terms</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.site-footer {
  background: black;
  color: white;
  width: 100%;
  height: 128px;
  bottom: -128px;
  position: absolute;
  text-align: center;
  margin: auto;
}

.footer-column {
  padding-top: 16px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}

.footer-column  a {
  width: 100%;
  color: white;
}
</style>
