<template>
      
      <v-card>
        <v-card-title class="">
          <span class="headline ">Formulario de Registro</span>
          
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Cedula" type="text" required v-model="userdni"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Nombre Completo" required v-model="username"></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field label="Correo Electrónico" hint=" Ejemplo: PepitoPerez@gmail.com" required v-model="usermail"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Contraseña" type="password" required v-model="userpassword"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
            <v-text-field label="Edad" type="number" required v-model="userage"></v-text-field>

              </v-col>
              
            </v-row>
          </v-container>
          <small>Todos los campos son obligatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <slot name="1"></slot>
            <slot name="2"></slot>

        </v-card-actions>
      </v-card>

</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
     name: "Register",
  data: () => ({
    dialog: false,
    userdni:null,
    username:null,
    usermail:null,
    userpassword:null,
    userage:null


  }),
  components: {},

  
};


</script>
