<template>
    <div class="container">
        <div class="row text-center">
            <h1>Listado de Servicios</h1>
        </div>
        <div>
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Buscar manzanas"></b-form-input>
          </b-input-group>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th> 
              <th scope="col">Establecimiento</th> 
              <th scope="col">acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                nombre
              </td>
              <td>
                descripcion
              </td>
              <td>
                <button class="btn btn-outline-secondary">
                  Registrar
                </button>
                <b-button class="m-1" variant="outline-primary">
                  <b-icon icon="eye">
                  </b-icon>
                </b-button>
              </td>
              <td>
                <b-button class="m-1" variant="outline-primary">
                  <b-icon icon="eye">
                  </b-icon>
                </b-button>
                <b-button class="m-1" variant="outline-warning">
                  <b-icon icon="pencil-square">
                  </b-icon>
                </b-button>
                <b-button class="m-1" variant="outline-danger">
                  <b-icon icon="trash">
                  </b-icon>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
