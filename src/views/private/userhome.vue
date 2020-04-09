<template>
  <div class="home">
    <v-navigation-drawer v-model="drawer" width="300px" app temporary color="grey lighten-4">
      <v-list class="justify-center">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194">
          <v-list-item class="px-2 mx-auto">
            <v-list-item-avatar size="100" class="justify-center">
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title white--text">Sandra Adams</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-img>
      </v-list>

      <v-divider></v-divider>

      <v-list dense class="grey lighten-4">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="navbar">mdi-frequently-asked-questions</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Mis solicitudes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="navbar">mdi-alert-octagon</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Mis reportes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="navbar">mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <CardAyuda/> -->
        <!-- Comentado para probar la card de las solicitudes -->
        

        <CardSolicitud></CardSolicitud>

        <template v-slot:append>
        <div class="pa-2">
          <v-btn color="navbar">Salir</v-btn>
        </div>
      </template>
       
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-app-bar-nav-icon app @click="drawer = !drawer" />
        <v-spacer />
        

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
    fab: false,
    drawer: null,
    registerwindow: false,
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