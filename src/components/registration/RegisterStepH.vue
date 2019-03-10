<template>
  <v-container fluid fill-height class="registration-steps registration-step-h">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-5">Ποιά απο τα παρακάτω ισχύουν για σένα;</h4>

            <v-checkbox 
              v-for="r in dietSituationals"
              :key="r.val"
              v-model="situationals" 
              :label="r.label" 
              :value="r.val">
            </v-checkbox>

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
import { dietSituationals } from '../../services/utils';

export default {
  name: 'register-step-h',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      dietSituationals
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    situationals: {
      get() { return this.$store.state.registration.situationals } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'situationals', val }) }
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
