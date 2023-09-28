<template>
  <div class="container ">
    <div class="row m-10">

    </div>
    <div class="row text-center ">
      <h1>Listado de Servicios</h1>
    </div>
    <div>
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Buscar manzanas"></b-form-input>
      </b-input-group>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Manzana</th>
          <th scope="col">Servicios</th>
          <th scope="col">acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>nombre</td>
          <td>
            <button class="btn btn-outline-secondary">Registrar</button>
            <b-button class="m-1" variant="outline-primary">
              <b-icon icon="eye"></b-icon>
              <span v-if="showText === 'eye'">Ver</span>
            </b-button>
          </td>
          <td>
            <button class="btn btn-outline-secondary" @click="verDetalles(servicio)">
              Ver Detalles
            </button>
            <b-button
              class="m-1"
              variant="outline-warning"
              @click="verManzana(manzana)"
            >
              <b-icon icon="pencil-square"></b-icon>
            </b-button>
            <b-button
              class="m-1"
              variant="outline-danger"
              @mouseover="showText = 'trash'"
              @mouseleave="showText = ''"
            >
              <b-icon icon="trash"></b-icon>
              <span v-if="showText === 'trash'">Borrar</span>
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DetalleManzana from '@/components/DetalleManzana.vue'; // Importa el componente DetalleManzana.vue

export default {
  data() {
    return {
      showText: '', // Variable para controlar el texto a mostrar
      servicios: [ /* Aquí debes tener tu lista de servicios */ ],
      manzanaSeleccionada: null, // Variable para almacenar la manzana seleccionada
    };
  },
  components: {
    DetalleManzana, // Registra el componente DetalleManzana
  },
  methods: {
    verDetalles(manzana) {
      this.manzanaSeleccionada = manzana; // Almacena la manzana seleccionada
      this.$refs.detalleManzana.show(); // Muestra el modal con los detalles
    },
  },
};
</script>
