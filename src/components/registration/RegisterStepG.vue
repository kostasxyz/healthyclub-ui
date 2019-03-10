<template>
  <v-container fluid fill-height class="registration-steps registration-step-g">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-0">Περιορίζεις τροφές με υδατάνθρακα;</h4>
            <p class="text-xs-center mb-4">(π.χ. πατάτες, ρύζι, μακαρόνια, ψωμί κ.λ.π.)</p>

            <v-radio-group v-model="carbType" :class="'radio-center'">
              <v-radio
                class="mb-4"
                v-for="c in carbTypeList"
                :key="`ctype-${c.val}`"
                :label="c.label"
                :value="c.val"
              ></v-radio>
            </v-radio-group>

            <v-btn 
              color="red"
              class="white--text"
              round
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
import { carbTypeList } from '../../services/utils';

export default {
  name: 'register-step-g',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      carbTypeList
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    carbType: {
      get() { return this.$store.state.registration.carbType } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'carbType', val }) }
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
