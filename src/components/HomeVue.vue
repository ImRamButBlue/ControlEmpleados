<template>
  <div id="app" class="container">
        <h3 class="d-flex justify-content-center">
             VUE JS + Django API
        </h3>
        <h5>
            Portal de Control de Empleados
        </h5>
        <nav class="navbar navbar-expand-sm bg-light navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/">
                        Home
                    </router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/departamento">
                        Departamentos
                    </router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/empleado">
                        Empleados
                    </router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/sueldo">
                        Sueldos
                    </router-link>
                </li>
            </ul>
        </nav>
        
    </div>
</template>

<script>
export default {
  name: 'HomeVue',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0f213a;
}
</style>
