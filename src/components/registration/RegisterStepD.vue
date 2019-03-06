<template>
  <v-container fluid fill-height class="registration-steps registration-step-d">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Είστε καπνιστής;</h4>
            <v-radio-group v-model="smoker" :class="'radio-center'">
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
  name: 'register-step-d',

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
    smoker: {
      get() { return this.$store.state.registration.smoker } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'smoker', val }) }
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

.radio-center {
  margin: 0 auto;
}
</style>
