<template lang="html">
  <div class="main-logo">
    <img src="~/assets/img/bookmark.svg" />
    <label>snagmark</label>
  </div>
</template>

<script>

</script>

<style>


  .main-logo {
    background: #1f1f1f;
    height: 122px;
    border-bottom-right-radius: 16px;
    z-index: 2;
    position: relative;
    padding: 16px;
  }

  .main-logo img {
    filter:invert(1);
    width: 100%;
    padding-left: 35%;
    padding-right: 35%;
  }

  .main-logo label {
    font-size: 24px;
    top: -24px;
    position: relative;
  }

  .main-logo:hover {
    opacity: 1 !important;
  }


</style>
