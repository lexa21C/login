<template>
    <div>
      <b-container>
        <b-row class="justify-content-center m-3" >
          <b-col md="8">
            <b-card title="Establecimientos">
              <form>
                
                <div class="form-group">
                  <label for="codigo">Código del establecimiento</label>
                  <input type="text" class="form-control" id="codigo" v-model="establecimiento.codigo">
                </div>
  
                <div class="form-group">
                  <label for="nombre">Nombre del establecimiento</label>
                  <input type="text" class="form-control" id="nombre" v-model="establecimiento.nombre">
                </div>
  
                <div class="form-group">
                  <label for="responsable">Nombre del responsable</label>
                  <input type="text" class="form-control" id="responsable" v-model="establecimiento.responsable">
                </div>
  
                <div class="form-group">
                  <label for="direccion">Dirección del establecimiento</label>
                  <input type="text" class="form-control" id="direccion" v-model="establecimiento.direccion">
                </div>
  
                <div class="m-2 text-center">
                  <hr class="my-4">
                  <b-button class="button" type="submit" > Guardar</b-button>
                </div>
              </form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        establecimiento: {
          id: '',
          codigo: '',
          nombre: '',
          responsable: '',
          direccion: ''
        }
      };
    }
  };
  </script>
  <style scoped>

  /* Cambiar el color del botón Registrar a #005B8F */
  .button{
    background-color: #005B8F !important;
  }
  </style>