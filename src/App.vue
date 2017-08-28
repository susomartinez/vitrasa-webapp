<template>
  <div id="app" class="views">
    <div class="view view-main">

      <div class="navbar">
        <div class="navbar-inner">
          <div class="center sliding">Horarios Vitrasa</div>
          <div class="right">
            <a href="#" class="link icon-only open-panel"> <i class="icon icon-bars"></i></a>
          </div>
        </div>
      </div>

      <div class="pages navbar-through toolbar-through">

        <router-view></router-view>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
</style>
