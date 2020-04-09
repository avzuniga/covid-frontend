<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="navbar" dark class="neddsCard">
          <v-card-actions>
            <v-card-title class="help">Necesito ayuda</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-subtitle class="subtitle">Soy</v-card-subtitle>
              <div class="d-flex justify-center">
                <v-btn icon large class="mr-4">
                  <v-icon x-large>mdi-human-male</v-icon>
                </v-btn>
                <v-btn icon large class="ml-4">
                  <v-icon x-large>mdi-wheelchair-accessibility</v-icon>
                </v-btn>
              </div>

              <v-card-subtitle class="subtitle">Edad</v-card-subtitle>
              <div class="pr-4 pl-4">
                <v-slider
                  v-model="datas.age"
                  min="0"
                  max="150"
                  thumb-label
                  thumb-color="info"
                  track-color="white"
                  color="info"
                  dense
                  class="slider"
                  hide-details
                ></v-slider>
              </div>
              <br/>
              <div class="d-flex justify-center">
                <v-text-field
                  type="number"
                  label="Teléfono"
                  prepend-icon="mdi-cellphone"
                  v-model="datas.movil"
                ></v-text-field>
              </div>

              <v-autocomplete
                v-model="datas.kindNeed"
                :items="kindNeeds"
                color="white"
                item-value="id"
                item-text="nombre"
                label="Tipo Necesidad"
                prepend-icon="mdi-help-circle"
              ></v-autocomplete>

              <v-card-subtitle class="subtitle">Descripción</v-card-subtitle>
              <div class="d-flex justify-center">
                <v-textarea
                  class="mx-auto descripText"
                  v-model="datas.description"
                  filled
                  height="90px"
                ></v-textarea>
              </div>

              

              <div class="d-flex justify-center">
                <v-row dense no-gutters class>
                  <v-col cols="8" class="text-center">
                    <v-card-subtitle class="subtitle-ubicacion">Usar ubicación actual</v-card-subtitle>
                  </v-col>
                  <v-col cols="4" class="d-flex justify-center">
                    <v-switch color="info" v-model="datas.location" dense></v-switch>
                  </v-col>
                </v-row>
              </div>
              <v-card-actions class="d-flex justify-center">
                <v-btn class="navbar--text white" width="100%" @click="AddNeed">Enviar solicitud</v-btn>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-card></v-card>
    </v-row>
    <v-snackbar v-model="limitSnack" color="error">Limite de solicitudes superado!</v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "Card_Solicitud",
  data: () => ({
    datas: {
      age: null,
      kindPerson: "",
      kindNeed: "",
      user: "",
      name: "",
      description: "",
      location:"",
    },
    show: false,
    Needs: [],
    kindNeeds:[],
    limitSnack: false
  }),
  methods: {
    AddNeed() {
      console.log(this.datas);
      if (this.Needs.length < 3) {
        this.datas.push(this.Needs);
      } else {
        this.limitSnack = true;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.close {
  margin-top: 15px;
  margin-right: 2px;
}
.title {
  margin-left: 20px;
}

.help {
  font-size: 16px;
  font-weight: bold;
}

.subtitle {
  font-size: 10px;
}
.subtitle-ubicacion {
  margin-top: 5px;
  font-size: 12px;
}

.descripText {
  margin: 5px;
}

.neddsCard {
  padding: 10px;
}
</style>
