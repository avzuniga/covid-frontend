<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="navbar" dark>
          <div class="close float-right">
            <v-btn icon>
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </div>
          <v-row class="title d-flex justify-center" dense>
            <div>
              <v-card-title class="help">Necesito ayuda</v-card-title>
            </div>
          </v-row>
          <v-card-subtitle class="subtitle">Edad</v-card-subtitle>
          <div class="pr-4 pl-4">
            <v-slider
              v-model="duration"
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
          <v-card-subtitle class="subtitle">Soy</v-card-subtitle>
          <div class="d-flex justify-center">
            <v-btn icon large class="mr-4">
              <v-icon x-large>mdi-human-male</v-icon>
            </v-btn>
            <v-btn icon large class="ml-4">
              <v-icon x-large>mdi-wheelchair-accessibility</v-icon>
            </v-btn>
          </div>
          <v-card-subtitle class="subtitle">Requiero</v-card-subtitle>
          <div class="d-flex justify-center">
            <v-btn icon large class="mr-5">
              <v-icon x-large>mdi-pill</v-icon>
            </v-btn>
            <v-btn icon large>
              <v-icon x-large>mdi-food</v-icon>
            </v-btn>
            <v-btn icon large class="ml-5">
              <v-icon x-large>mdi-help-circle</v-icon>
            </v-btn>
          </div>
          <div class="d-flex justify-center">
            <v-row dense no-gutters class="">
              <v-col cols="8" class="text-center">
                <v-card-subtitle class="subtitle-ubicacion"
                  >Usar ubicación actual</v-card-subtitle
                >
              </v-col>
              <v-col cols="4" class="d-flex justify-center">
                <v-switch color="info" dense></v-switch>
              </v-col>
            </v-row>
          </div>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="info" small>Iniciar Sesion</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Card_Solicitud",
  data: () => ({})
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
</style>
