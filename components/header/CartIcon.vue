<template lang="html">
  <nuxt-link to="/order/cart" v-show="totalCartQuantity" class="relative mr cart-indicator">
    <span class="small-number-indicator">
      {{ parseInt(totalCartQuantity) }}
    </span>
    <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
  </nuxt-link>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "cart",
      "totalCartQuantity"
    ])
  }
}
</script>

<style lang="css">
</style>
