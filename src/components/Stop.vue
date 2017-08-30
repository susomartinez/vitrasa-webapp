<template>
  <div data-page="projects" class="page">
    <div class="page-content">
      <div class="content-block-title">Nombre de la parada ({{ msg }})</div>
      <div class="list-block media-list" v-if="buses.length > 0">
        <ul>
          <li class="item-content" v-for="bus in buses">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title"><b>{{ bus.Linea }}</b> - {{ bus.minutos }} minutos</div>
              </div>
              <div class="item-subtitle">{{ bus.Ruta }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block" v-else>
        <div class="content-block-inner">
        <p>Sin servicio en los próximos minutos para esta parada.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buses: [],
      msg: '',
    };
  },
  beforeMount() {
    const url = `api/stop/${this.$route.params.id}/panel`;
    this.msg = this.$route.params.id;
    this.$http.get(url).then((response) => {
      this.buses = response.body;
    });
  },
};
</script>
