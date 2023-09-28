<template>
    <b-container>
        <b-row >
            <b-col cols="6">
                <b-card class="m-2">
                    <div class="text-center">               
                        <h1>Registrar</h1>
                    </div>
                    <div>
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group label="Tipo de documento:">
                            <b-form-select v-model="selected" :options="tipo_documento"></b-form-select>
                        </b-form-group >
                        <b-form-group id="input-group-2" label="Documento:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            type="number"
                            placeholder="Documento"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Nombres completos:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Nombres completos"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Apellidos Completos:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Apellidos Completos"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Telefono:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            type="number"
                            placeholder="Telefono"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Ciudad:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Ciudad"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Dirección:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Direccion"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Servicios en los que te gustaría participar :" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Servicios"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="input-group-1"
                          label="Correo electrónico:"
                          label-for="input-1"
                        >
                          <b-form-input
                            id="input-1"
                            v-model="form.email"
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
                            v-model="form.email"
                            type="password"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="input-group-1"
                          label="Confirmar contraseña:"
                          label-for="input-1"
                        >
                          <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="password"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                          <b-form-select
                            id="input-3"
                            v-model="form.food"
                            :options="foods"
                            required
                          ></b-form-select>
                        </b-form-group>                 -->
                        <div class="m-3 text-center">
                            <b-button type="submit" variant="primary">Registrar</b-button>
                        </div>
                      </b-form>
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
            tipo_documento: [
            { value: null, text: 'Por favor seleccione una opción' },
               {value:'Tarjeta de identidad' ,  text:'Tarjeta de identidad' },
               {value: 'Cédula de ciudadanía', text: 'Cédula de ciudadanía',}


            ],
          form: {
            email: '',
            name: '',
            food: null,
            checked: []
          },
          foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
          show: true
        }
      },
      methods: {
        onSubmit(event) {
            this.$router.push('/')
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
            
          })
        }
      }
    }
  </script>
  <style>
  
</style>