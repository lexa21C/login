<template>
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-card class="m-2">
            <div class="text-center">
              <h1>Ver Perfil</h1>
            </div>
            <div>
              <!-- Mostrar los datos del perfil aquí -->
              <p><strong>Tipo de documento:</strong> {{ perfil.tipo_documento }}</p>
              <p><strong>Documento:</strong> {{ perfil.documento }}</p>
              <p><strong>Nombres Completos:</strong> {{ perfil.nombres }}</p>
              <p><strong>Apellidos Completos:</strong> {{ perfil.apellidos }}</p>
              <p><strong>Teléfono:</strong> {{ perfil.telefono }}</p>
              <p><strong>Ciudad:</strong> {{ perfil.ciudad }}</p>
              <p><strong>Dirección:</strong> {{ perfil.direccion }}</p>
              <p><strong>Servicios de interés:</strong> {{ perfil.servicios }}</p>
              <p><strong>Correo Electrónico:</strong> {{ perfil.email }}</p>
            </div>
            <!-- Botón para editar la contraseña -->
            <div class="text-center">
              <b-button @click="editarContraseña" variant="primary">Editar Contraseña</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        perfil: {
          tipo_documento: 'Cédula de ciudadanía',
          documento: '123456789',
          nombres: 'Juan',
          apellidos: 'Pérez',
          telefono: '555-555-5555',
          ciudad: 'Bogotá',
          direccion: 'Calle 123',
          servicios: 'Servicio A, Servicio B',
          email: 'juan@example.com',
        },
      };
    },
    methods: {
      editarContraseña() {
        // Redirige a la vista de edición de contraseña
        this.$router.push('/editar-contraseña');
      },
    },
  };
  </script>
  
  <style>
  /* Estilos personalizados aquí */
  </style>
  