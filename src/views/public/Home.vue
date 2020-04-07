<template>
  <div class="home">

    <v-navigation-drawer v-model="drawer" width="350px" app temporary color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <!-- <CardAyuda/> -->
        <!-- Comentado para probar la card de las solicitudes -->
        <CardSolicitud>
          <!-- Ojo, he añadido un slot, para poder habilitar el inicio de sesión desde la card -->
          <v-btn color="info" small @click="loginwindow=true">Iniciar Sesion</v-btn>
        </CardSolicitud>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-app-bar-nav-icon app @click="drawer = !drawer" />
        <v-spacer />
        <!-- Se añade funcionalidad a los botones -->

        <v-speed-dial
          v-model="fab"
          fixed
          direction="left"
          top
          right
          transition="slide-x-reverse-transition"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="navbar" dark fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-btn class="navButton" @click="loginwindow= true">Iniciar Sesion</v-btn>
          <v-btn
            class="white--text navButton"
            color="navbar"
            @click="registerwindow = true"
          >Registrar</v-btn>
         
          
        </v-speed-dial>

        <v-dialog v-model="loginwindow" persistent max-width="600px">
          <login>
            <template slot="1">
              <v-btn color="white" text @click="loginwindow = false">Cerrar</v-btn>
            </template>
          </login>
        </v-dialog>
        <v-dialog v-model="registerwindow" persistent max-width="600px">
          <register>
            <template slot="1">
              <v-btn color="white" text @click="registerwindow = false">Cancelar</v-btn>
            </template>
          </register>
        </v-dialog>

      </v-container>
    </v-content>
  </div>
</template>

<script>
import CardAyuda from "../../components/Card_Ayuda";
import CardSolicitud from "../../components/Card_Solicitud";
import Login from "../../components/Login";
import Register from "../../components/Register";

export default {
  name: "Home",
  data: () => ({
    fab: true,
    drawer: null,
    registerwindow: false, // Abre o cierra la ventana
    loginwindow: false
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


#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>

