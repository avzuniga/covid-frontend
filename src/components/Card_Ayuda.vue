<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="navbar" dark>
          <div class="time float-right">hace 30 min</div>
          <v-row class="title" dense>
            <v-icon large>mdi-pill</v-icon>
            <div>
              <v-card-title class="usertype">Anciano</v-card-title>
              <v-card-subtitle class="address">Calle 13 #25-25</v-card-subtitle>
            </div>
          </v-row>
          <v-card-actions class="d-flex justify-center">
            <v-btn class="mr-10" icon>
              <v-icon>mdi-message-reply</v-icon>
            </v-btn>
            <v-btn class="ml-10" icon>
              <v-icon>mdi-cards-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Card_Ayuda",
  data: () => ({
    alert: false,
    logindni: null,
    loginpassword: null,
    datas: {
      descripcion: "",
      nombre: "",
      edad: 0,
      telefono: "",
      tipo_persona: "",
      estado: "",
      tipo_necesidad: 0,
      usuario: "",
      /* rute: {
        url: "http://54.184.79.67/covid/api/v1/reportes/get_reportes_usuario/"
      } */
    }
  }),
  methods: {
    login: function() {
      let datas = {
        url: "http://54.184.79.67/covid/api/v1/reportes/get_reportes_usuario/"
      };
      this.$store
        .dispatch("getDatas", { datas })
        .then(
            resp => (
              console.log("POST CORRECTO")
            )
          )
        .catch(err => (this.alert = true));
    }
  }
};
</script>

<style lang="css" scoped>
.time {
  font-size: 10px;
  margin-top: 25px;
  margin-right: 15px;
}
.title {
  margin-left: 15px;
}

.usertype {
  font-size: 16px;
  font-weight: bold;
}
.address {
  font-size: 10px;
}
</style>
