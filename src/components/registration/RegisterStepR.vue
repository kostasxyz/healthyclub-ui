<template>
  <v-container fluid fill-height class="registration-steps registration-step-r">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md4>
        <div>
          <p>Εισάγετε το email σας για να δείτε πόσο βάρος μπορείτε να χάσετε με το HealthyClub</p>
        </div>
      </v-flex>
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
              <v-text-field
                v-model="email"
                label="Email"
                class="mb-4"
                :rules="validate.email"
              ></v-text-field>
        
              <v-btn 
                color="accent" 
                :disabled="!validForm"
                @click="$emit('nextRegStep')">
                  ΕΠΟΜΕΝΟ <v-icon right>arrow_forward</v-icon>
              </v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'register-step-r',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: false,
      validate: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      },
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    email: {
      get() { return this.$store.state.registration.email } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'email', val }) }
    },
  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {

  }
}
</script>

<style>
.v-form {
  width: 300px;
}
</style>
