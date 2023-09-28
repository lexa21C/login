<template>
    <div>
      <!-- Botón para abrir el modal de edición -->
      <b-button @click="abrirModalEditar" variant="primary">Editar</b-button>
  
      <!-- Modal de edición -->
      <b-modal id="modal-editar" title="Editar Servicio">
        <!-- Contenido del modal de edición -->
        <form @submit.prevent="guardarServicio">
          <!-- Campos de edición del servicio -->
          <b-form-group label="Código del Servicio" label-for="codigoInput">
            <b-form-input
              id="codigoInput"
              v-model="nuevoServicio.codigo"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group label="Nombre del Servicio" label-for="nombreInput">
            <b-form-input
              id="nombreInput"
              v-model="nuevoServicio.nombre"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group label="Descripción del Servicio" label-for="descripcionInput">
            <b-form-textarea
              id="descripcionInput"
              v-model="nuevoServicio.descripcion"
              required
            ></b-form-textarea>
          </b-form-group>
  
          <!-- Botón de guardar en el modal de edición -->
          <div class="text-center">
            <b-button type="submit" variant="primary">Guardar</b-button>
          </div>
        </form>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nuevoServicio: {
          codigo: '',
          nombre: '',
          descripcion: '',
        },
      };
    },
    methods: {
      abrirModalEditar() {
        // Abre el modal de edición cuando se hace clic en el botón "Editar"
        this.$bvModal.show('modal-editar');
      },
      guardarServicio() {
        // Aquí puedes enviar los datos de nuevoServicio al servidor para editar el Servicio en la base de datos
        // Luego, puedes realizar una redirección o mostrar un mensaje de éxito, etc.
        console.log('Servicio editado:', this.nuevoServicio);
  
        // Cierra el modal de edición después de guardar
        this.$bvModal.hide('modal-editar');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados aquí */
  </style>
  