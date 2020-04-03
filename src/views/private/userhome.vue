<template>
  <div class="home">
    <v-navigation-drawer v-model="drawer" app width="350px" temporary color="grey lighten-4">
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
     <v-btn rounded fixed outline right top color="transparent">
        <v-icon >mdi-account</v-icon>
     </v-btn>
      </v-container>

      
    </v-content>
  </div>
</template>

<script>
import CardAyuda from "../../components/Card_Ayuda";
import CardSolicitud from "../../components/Card_Solicitud";

export default {
  name: "Home",
  data: () => ({
    drawer: null
  }),
  components: {
    CardAyuda,
    CardSolicitud
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