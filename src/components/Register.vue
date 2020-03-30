<template>
  <v-card shaped>
    <v-toolbar color="navbar">
      <v-card-title class>
        <span class="headline white--text">Registrate!</span>
      </v-card-title>
      <v-spacer></v-spacer>
      <slot name="1"></slot>
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            :rules="[v => !!v || 'Item requerido']"
            label="Nombre Completo"
            required
            v-model="username"
          ></v-text-field>

          <v-text-field
            :rules="[v => !!v || 'Item requerido']"
            label="No. Identificación"
            type="text"
            required
            v-model="userdni"
          ></v-text-field>

          <v-text-field
            :rules="[v => !!v || 'Item requerido']"
            label="Edad"
            type="number"
            required
            v-model="userage"
          ></v-text-field>

          <v-text-field label="Correo Electrónico" :rules="emailRules" required v-model="usermail"></v-text-field>

          <v-text-field
            :rules="[v => !!v || 'Item requerido']"
            label="Contraseña"
            type="password"
            required
            v-model="userpassword"
          ></v-text-field>
          <small>Todos los campos son obligatorios*</small>
          <br />
          <v-btn color="navbar" width="100%" @click="validate" dark>Continuar</v-btn>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Register",
  data: () => ({
    valid: true,
    dialog: false,
    userdni: null,
    username: null,
    usermail: null,
    userpassword: null,
    userage: null,
    emailRules: [
      v => !!v || "E-mail requerido",
      v => /.+@.+/.test(v) || "E-mail debe ser válido"
    ]
  }),
  components: {},
  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
