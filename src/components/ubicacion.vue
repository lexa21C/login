<!-- AgregarUbicacionMapa.vue -->
<template>
    <div>
      <h1>Agregar Ubicación</h1>
      <div class="map-container">
        <gmap-map
          :center="mapCenter"
          :zoom="mapZoom"
          @click="onMapClick"
        >
          <!-- Marca para indicar la ubicación seleccionada -->
          <gmap-marker
            :position="selectedLocation"
            :draggable="true"
            @dragend="onMarkerDragEnd"
          ></gmap-marker>
        </gmap-map>
      </div>
      <div class="location-info">
        <b-form @submit="agregarUbicacion">
          <b-form-group label="Latitud" label-for="latitud">
            <b-form-input id="latitud" v-model="latitud" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Longitud" label-for="longitud">
            <b-form-input id="longitud" v-model="longitud" type="text" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Agregar Ubicación</b-button>
        </b-form>
      </div>
    </div>
  </template>
<script>
// Importa la biblioteca de geocodificación de Google Maps
import Geocoder from "vue2-geocoder";

export default {
  data() {
    return {
      mapCenter: { lat: 0, lng: 0 },
      mapZoom: 10,
      selectedLocation: null,
      direccion: "CR18 7 A-47", // Cambia la dirección a la que deseas geocodificar
    };
  },
  methods: {
    async obtenerCoordenadasDesdeDireccion() {
      try {
        const response = await Geocoder.fromAddress(this.direccion);

        // La respuesta debe contener las coordenadas de latitud y longitud
        const { lat, lng } = response.results[0].geometry.location;

        // Actualiza el centro del mapa y muestra la dirección
        this.mapCenter = { lat, lng };

        console.log("Ubicación desde dirección:", this.mapCenter);
      } catch (error) {
        console.error("Error al obtener coordenadas:", error);
      }
    },
  },
  created() {
    // Llama al método para geocodificar la dirección al cargar el componente
    this.obtenerCoordenadasDesdeDireccion();
  },
};

</script>