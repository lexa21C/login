<!-- EstablecimientosView.vue -->
<template>
    <div>
      <h1>Establecimientos</h1>
      <!-- Itera a través de la lista de establecimientos y muestra un botón para cada uno -->
      <div v-for="establecimiento in establecimientos" :key="establecimiento.id">
        <b-button v-b-modal.modal-establecimiento @click="mostrarDetalle(establecimiento)">
          Mostrar Detalle
        </b-button>
      </div>
  
      <!-- Modal para mostrar los detalles del establecimiento -->
      <b-modal id="modal-establecimiento" title="Detalles del Establecimiento">
        <!-- Aquí puedes mostrar los detalles del establecimiento -->
        <p><strong>ID:</strong> {{ establecimientoSeleccionado.id }}</p>
        <p><strong>Código:</strong> {{ establecimientoSeleccionado.codigo }}</p>
        <p><strong>Nombre:</strong> {{ establecimientoSeleccionado.nombre }}</p>
        <p><strong>Responsable:</strong> {{ establecimientoSeleccionado.responsable }}</p>
        <p><strong>Dirección:</strong> {{ establecimientoSeleccionado.direccion }}</p>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        establecimientos: [], // Aquí debes cargar los establecimientos desde tu fuente de datos
        establecimientoSeleccionado: {}, // Guarda el establecimiento seleccionado para mostrarlo en el modal
      };
    },
    methods: {
      mostrarDetalle(establecimiento) {
        // Al hacer clic en el botón, guarda el establecimiento seleccionado y muestra el modal
        this.establecimientoSeleccionado = establecimiento;
      },
    },
    created() {
      // Aquí puedes cargar los establecimientos desde tu fuente de datos (API, base de datos, etc.) y asignarlos a la variable establecimientos
      // Ejemplo de carga de datos ficticios:
      this.establecimientos = [
        {
          id: 1,
          codigo: "E1",
          nombre: "Establecimiento 1",
          responsable: "Responsable 1",
          direccion: "Dirección 1",
        },
        {
          id: 2,
          codigo: "E2",
          nombre: "Establecimiento 2",
          responsable: "Responsable 2",
          direccion: "Dirección 2",
        },
        // Agrega más objetos de establecimientos según sea necesario
      ];
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados aquí */
  </style>
  