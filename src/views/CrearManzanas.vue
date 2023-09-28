<template>
  <b-container fluid>
    <b-row align-h="center" class="mt-5">
      <b-col cols="12" md="6">
        <b-card class="transparent-card">
          <b-row class="text-center">
            <h1>Manzanas del Cuidado</h1>
          </b-row>
          <b-form @submit="agregarManzana">
            <!-- Campo para ingresar el código -->
            <b-form-group
              label="Código de la Manzana"
              label-for="codigoInput"
            >
              <b-form-input
                id="codigoInput"
                v-model="nuevaManzana.codigo"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Campo para ingresar el nombre -->
            <b-form-group
              label="Nombre de la Manzana"
              label-for="nombreInput"
            >
              <b-form-input
                id="nombreInput"
                v-model="nuevaManzana.nombre"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Campo para seleccionar el municipio -->
            <b-form-group
              label="Municipio"
              label-for="municipioSelect"
            >
              <b-form-select
                id="municipioSelect"
                v-model="nuevaManzana.municipio_id"
                :options="municipios"
                required
              ></b-form-select>
            </b-form-group>

            <div class="m-2 text-center">
              <hr class="my-4">
              <b-button class="button"  >Guardar</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  data() {
    return {
      nuevaManzana: {
        codigo: '',
        nombre: '',
        municipio_id: null,
      },
      municipios: [
        // Aquí deberías cargar la lista de municipios desde tu base de datos o API
        // Ejemplo: { value: 1, text: 'Municipio 1' }
      ],
    };
  },
  methods: {
    agregarManzana() {
      // Aquí puedes enviar los datos de nuevaManzana al servidor para agregar la Manzana del Cuidado a la base de datos
      // Luego, puedes realizar una redirección o mostrar un mensaje de éxito, etc.
      console.log('Manzana a agregar:', this.nuevaManzana);
    },
  },
};
</script>

<style scoped>

/* Cambiar el color del botón Registrar a #005B8F */
.button{
  background-color: #005B8F !important;
}
</style>