<template>
    <b-modal id="editar-contrasena-modal" title="Editar Contraseña">
      <form @submit.prevent="guardarContraseña">
        <b-form-group label="Contraseña Actual:" label-for="contrasena-actual">
          <b-form-input
            id="contrasena-actual"
            v-model="contrasenaActual"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Nueva Contraseña:" label-for="nueva-contrasena">
          <b-form-input
            id="nueva-contrasena"
            v-model="nuevaContrasena"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Confirmar Nueva Contraseña:" label-for="confirmar-contrasena">
          <b-form-input
            id="confirmar-contrasena"
            v-model="confirmarContrasena"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="text-center">
          <b-button type="submit" variant="primary">Guardar</b-button>
          <b-button @click="cerrarModal" variant="secondary">Cancelar</b-button>
        </div>
      </form>
    </b-modal>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contrasenaActual: '',
        nuevaContrasena: '',
        confirmarContrasena: '',
      };
    },
    methods: {
      guardarContraseña() {
        // Aquí puedes implementar la lógica para guardar la nueva contraseña
        // Verifica que la nueva contraseña coincida con la confirmación
        if (this.nuevaContrasena !== this.confirmarContrasena) {
          alert("La nueva contraseña y la confirmación no coinciden.");
          return;
        }
        
        // Realiza la lógica para guardar la contraseña (puedes enviarla a un servidor, actualizar en la base de datos, etc.)
        
        // Cierra el modal después de guardar la contraseña
        this.$bvModal.hide('editar-contrasena-modal');
        
        // Limpia los campos de contraseña
        this.contrasenaActual = '';
        this.nuevaContrasena = '';
        this.confirmarContrasena = '';
      },
      cerrarModal() {
        // Cierra el modal sin guardar cambios
        this.$bvModal.hide('editar-contrasena-modal');
        
        // Limpia los campos de contraseña
        this.contrasenaActual = '';
        this.nuevaContrasena = '';
        this.confirmarContrasena = '';
      },
    },
  };
  </script>
  