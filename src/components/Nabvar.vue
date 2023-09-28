<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-navbar-nav>
        <b-navbar-brand href="#">Mujeres Cuidadoras</b-navbar-brand>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item to="registrar">
          Registrar
        </b-nav-item>
        <b-nav-item to="login">
          Login
        </b-nav-item>
        <b-nav-item class="text-white">Servicios</b-nav-item>
      </b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Manzanas" right>
            <b-dropdown-item to="listado-manzanas">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-manzanas">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Servicios" right>
            <b-dropdown-item to="listado-servicios">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-servicios">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Establecimientos" right>
            <b-dropdown-item to="listado-establecimientos">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-establecimientos">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.bg-nav {
  background-color: #005B8F !important;
}

.text-white {
  color: white !important;
}
</style>
