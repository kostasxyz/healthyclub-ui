<template>
  <v-container fluid fill-height class="registration-steps registration-step-j">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-5">Ποιο από τα παρακάτω γεύματα τρώτε σχεδόν κάθε ημέρα; </h4>

            <v-checkbox 
              v-for="r in mealTimes"
              :key="r.val"
              v-model="meals" 
              :label="r.label" 
              :value="r.val"
              :rules="validate.meals">
            </v-checkbox>

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
import { mealTimes } from '../../services/utils';

export default {
  name: 'register-step-j',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      mealTimes,
      validate: {
        meals: [
          v => v.length >= 1 || 'Επιλέξτε τουλάχιστον 1 γεύμα',
        ],
      }
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    meals: {
      get() { return this.$store.state.registration.meals } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'meals', val }) }
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
