<template>
  <div class="background-image">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="6" md="5">
          <b-card class="transparent-card">
            <b-row class="text-center">
              <h1>Iniciar Sesion</h1>
            </b-row>
            <b-row>
              <b-form @submit.prevent="submitForm">
                <!-- Tu contenido de formulario actual -->
                <b-form-group
                    id="input-group-1"
                    label="Correo electrónico:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      type="email"
                      placeholder="Correo electrónico"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Contraseña:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      type="password"
                      required
                    ></b-form-input>
                </b-form-group>
                <div class="m-2 text-center">
                  <hr class="my-4">
                  <b-button class="button" type="submit" >Iniciar sesion</b-button>
                </div>
                <!-- Agregar el texto con el enlace -->
                <p>¿No tienes una cuenta? <router-link to="/registrar">Registrarse</router-link></p>
              </b-form>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    submitForm() {
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      if (!this.name || !this.email || !this.password || !this.password_confirmation) {
        console.error('Please fill in all fields.');
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      axios
        .post('api/registro_usuario', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url('../assets/registrar.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.transparent-card {
  background-color: rgba(227, 204, 205, 0.89); /* Fondo semitransparente */
  padding: 20px;
  margin: 60px;
  margin-top: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Aplicar sombra */

}
/* Cambiar el color del botón Registrar a #005B8F */
.button{
  background-color: #005B8F !important;
}
</style>

