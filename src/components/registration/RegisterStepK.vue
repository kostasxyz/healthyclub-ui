<template>
  <v-container fluid fill-height class="registration-steps registration-step-k">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Συνήθως το μεσημέρι και το βράδυ τρώτε το ίδιο φαγητό;</h4>
            <v-radio-group v-model="sameLunchDinner" :class="'radio-center'">
              <v-radio
                label="ΟΧΙ"
                :value="0"
              ></v-radio>
              <v-radio
                label="ΝΑΙ"
                :value="1"
              ></v-radio>
            </v-radio-group>
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
  name: 'register-step-k',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    sameLunchDinner: {
      get() { return this.$store.state.registration.sameLunchDinner } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'sameLunchDinner', val }) }
    },
  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {

  }
}
</script>
