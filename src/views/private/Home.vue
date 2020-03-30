<template>
  <div class="home">
    <v-navigation-drawer v-model="drawer" app temporary color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <!-- <CardAyuda/> --> <!-- Comentado para probar la card de las solicitudes -->
        <CardSolicitud>
          <!-- Ojo, he añadido un slot, para poder habilitar el inicio de sesión desde la card -->
        <v-btn color="info" small @click="loginwindow=true">Iniciar Sesion</v-btn>

        </CardSolicitud>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid></v-container>
      <v-row class="nav mx-auto">
        <v-app-bar-nav-icon app @click="drawer = !drawer" />
        <v-spacer />
        <!-- Se añade funcionalidad a los botones -->
         <v-btn class="navButton" @click="loginwindow= true">Iniciar Sesion</v-btn>

        <v-dialog v-model="loginwindow" persistent max-width="600px">
          <login>
            <template slot="1">
              <v-btn color="blue darken-1" text @click="loginwindow = false">Cerrar</v-btn>
            </template>
            <template slot="2">
              <v-btn color="blue darken-1" text @click="loginwindow = false">Iniciar Sesión</v-btn>
            </template>
          </login>
        </v-dialog>
        <v-btn class="white--text navButton" color="navbar" @click="registerwindow = true">Registrar</v-btn>
        <v-dialog v-model="registerwindow" persistent max-width="600px">
          <register>
            <template slot="1">
              <v-btn color="blue darken-1" text @click="registerwindow = false">Cancelar</v-btn>
            </template>
            <template slot="2">
              <v-btn color="blue darken-1" text @click="registerwindow = false">Registrarme</v-btn>
            </template>
          </register>
        </v-dialog>
      </v-row>
      
    </v-content>
  </div>
</template>

<script>
import CardAyuda from '../../components/Card_Ayuda'
import CardSolicitud from '../../components/Card_Solicitud'
import Login from '../../components/Login'
import Register from '../../components/Register'


export default {
  name: "Home",
  data: () => ({
    drawer: null,
    registerwindow:false, // Abre o cierra la ventana
    loginwindow:false
  }),
  components: {
    CardAyuda,
    CardSolicitud,
    Login,
    Register
  }
};
</script>
<style>
#keep .v-navigation-drawer__border {
  display: none;
}
.navButton {
  margin-left: 5px;
  margin-right: 5px;
}
.nav {
  background-color: transparent;
}

</style>