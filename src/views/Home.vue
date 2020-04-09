<template>
  <div class="home">
    <Mapa />

    <v-content>
      <v-container fluid>
       
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
          >Registrarse</v-btn>
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
import CardAyuda from "../components/Card_Ayuda";
import CardSolicitud from "../components/Card_Solicitud";
import Login from "../components/Login";
import Register from "../components/Register";
import Mapa from "../components/Mapa";

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
    Register,
    Mapa
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

