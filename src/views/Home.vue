<template>
  <div class="home">
    <v-navigation-drawer v-model="drawer" app temporary color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <CardAyuda/>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid></v-container>
      <v-row class="nav mx-auto">
        <v-app-bar-nav-icon app @click="drawer = !drawer" />
        <v-spacer />
        <v-btn class="navButton">Iniciar Sesion</v-btn>
        <v-btn class="white--text navButton" color="navbar">Registrar</v-btn>
      </v-row>
    </v-content>
  </div>
</template>

<script>
import CardAyuda from '../components/Card_Ayuda'
export default {
  name: "Home",
  data: () => ({
    drawer: null
  }),
  components: {
    CardAyuda,
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