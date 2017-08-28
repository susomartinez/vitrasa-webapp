<template>
  <div data-page="index" class="page">
    <div class="page-content">
      <div class="content-block-title">Paradas favoritas</div>
      <div class="list-block">
        <ul>
          <li><router-link to="/stop/6200">
            <!--a href="parada.html" class="item-link"-->
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Martínez Garrido 11</div>
              </div>
            </div></router-link></li>
          <li><router-link to="/stop/5800">
            <!--a href="parada.html" class="item-link"-->
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Jenaro de la Fuente 33</div>
              </div>
            </div></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
