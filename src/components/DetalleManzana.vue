<template>
    <div>
      <!-- Botón para abrir el modal -->
      <b-button v-b-modal.manzana-modal>Ver Detalles</b-button>
  
      <!-- Modal -->
      <b-modal id="manzana-modal" title="Detalles de la Manzana">
        <b-card>
          <b-card-title>Detalles de la Manzana</b-card-title>
          <b-card-text>
            <p><strong>ID:</strong> {{ manzana.id }}</p>
            <p><strong>Código:</strong> {{ manzana.codigo }}</p>
            <p><strong>Nombre:</strong> {{ manzana.nombre }}</p>
            <p><strong>Municipio ID:</strong> {{ manzana.municipio_id }}</p>
          </b-card-text>
        </b-card>
      </b-modal>
    </div>
  </template>
  
  <script>
  import Ubicacion from '@/components/ubicacion.vue'
  export default {
    props: {
      manzana: Object, // Recibimos el objeto Manzana como una prop
    },
    components:{
      Ubicacion
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados aquí */
  </style>
  