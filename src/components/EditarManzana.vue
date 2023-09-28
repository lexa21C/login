<template>
    <div>
      <!-- Botón para abrir el modal de edición -->
      <b-button v-b-modal.modal-edicion>Editar Manzana</b-button>
  
      <!-- Modal de edición -->
      <b-modal id="modal-edicion" title="Editar Manzana del Cuidado">
        <b-form @submit="editarManzana">
          <!-- Campo para editar el código -->
          <b-form-group label="Código de la Manzana" label-for="codigoEdit">
            <b-form-input id="codigoEdit" v-model="nuevaManzana.codigo" required></b-form-input>
          </b-form-group>
  
          <!-- Campo para editar el nombre -->
          <b-form-group label="Nombre de la Manzana" label-for="nombreEdit">
            <b-form-input id="nombreEdit" v-model="nuevaManzana.nombre" required></b-form-input>
          </b-form-group>
  
          <!-- Campo para seleccionar el municipio -->
          <b-form-group label="Municipio" label-for="municipioSelectEdit">
            <b-form-select id="municipioSelectEdit" v-model="nuevaManzana.municipio_id" :options="municipios" required></b-form-select>
          </b-form-group>
  
          <div class="text-center">
            <b-button type="submit" variant="primary">Guardar Cambios</b-button>
          </div>
        </b-form>
      </b-modal>
  
      <!-- Resto de tu código -->
    </div>
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
      editarManzana() {
        // Aquí puedes enviar los datos de nuevaManzana al servidor para editar la Manzana del Cuidado en la base de datos
        // Luego, puedes realizar una redirección o mostrar un mensaje de éxito, etc.
        console.log('Manzana editada:', this.nuevaManzana);
  
        // Cierra el modal después de editar
        this.$bvModal.hide('modal-edicion');
      },
    },
  };
  </script>
  