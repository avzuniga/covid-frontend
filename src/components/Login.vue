<template>
      
      <v-card>
        <v-card-title class="">
          <span class="headline ">Iniciar Sesión</span>
          
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Cedula" type="text" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Contraseña" required type="password"></v-text-field>
              </v-col>
              
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="1"></slot>
          <slot name ="2"></slot>
        </v-card-actions>
      </v-card>

</template>
<script>

export default {
    name:'Login',
    data: () => ({
    logindni:null,
    loginpassword:null,
    
  }),
  methods:{
  }
}
</script>