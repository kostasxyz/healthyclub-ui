<template>
  <v-container fluid fill-height class="registration-steps registration-step-e">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Έχετε αλλεργία/δυσανεξία σε κάποια απο τις παρακάτω τροφές;</h4>

            <v-checkbox 
              v-for="r in allergyList"
              :key="r.val"
              v-model="allergies" 
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
import { alergyList } from '../../services/utils';

export default {
  name: 'register-step-e',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      allergyList: alergyList
    }
  },

  mounted() {

  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    allergies: {
      get() { return this.$store.state.registration.allergies } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'allergies', val }) }
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
