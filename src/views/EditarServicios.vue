<template>
    <b-container>
        <b-row align-h="center" class="mt-2">
            <b-col cols="12" md="6">
                <b-card class="transparent-card m-3" title="Actualizar Servicio">
                  <form @submit.prevent="agregarServicio">
                    <!-- Campo para ingresar el código del servicio -->
                    <b-form-group
                      label="Código del Servicio"
                      label-for="codigoInput"
                    >
                      <b-form-input
                        id="codigoInput"
                        v-model="nuevoServicio.codigo"
                        required
                      ></b-form-input>
                    </b-form-group>
            
                    <!-- Campo para ingresar el nombre del servicio -->
                    <b-form-group
                      label="Nombre del Servicio"
                      label-for="nombreInput"
                    >
                      <b-form-input
                        id="nombreInput"
                        v-model="nuevoServicio.nombre"
                        required
                      ></b-form-input>
                    </b-form-group>
            
                    <!-- Campo para ingresar la descripción del servicio -->
                    <b-form-group
                      label="Descripción del Servicio"
                      label-for="descripcionInput"
                    >
                      <b-form-textarea
                        id="descripcionInput"
                        v-model="nuevoServicio.descripcion"
                        required
                      ></b-form-textarea>
                    </b-form-group>                 
                  </form>
                  <div class="m-2 text-center">
                    <hr class="my-4">
                    <b-button class="button" type="submit" >Guardar</b-button>
                </div>
                </b-card>
                <div>
              </div>
            </b-col>
        </b-row>
    </b-container>
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
      agregarServicio() {
        // Aquí puedes enviar los datos de nuevoServicio al servidor para agregar el Servicio a la base de datos
        // Luego, puedes realizar una redirección o mostrar un mensaje de éxito, etc.
        console.log('Servicio a agregar:', this.nuevoServicio);
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