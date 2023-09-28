<template>
    <div>
      <!-- Botón para abrir el modal -->
      <b-button v-b-modal.my-modal>Show Modal</b-button>
  
      <!-- Modal -->
      <b-modal id="my-modal" title="Detalle de Servicio">
        <!-- Contenido del modal -->
        <div>
          <p><strong>ID (Clave primaria):</strong> {{ servicio.id }}</p>
          <p><strong>Código del servicio:</strong> {{ servicio.codigo }}</p>
          <p><strong>Nombre del servicio:</strong> {{ servicio.nombre }}</p>
          <p><strong>Descripción del servicio:</strong> {{ servicio.descripcion }}</p>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        servicio: {
          id: '',
          codigo: '',
          nombre: '',
          descripcion: ''
        }
      };
    }
  };
  </script>
  