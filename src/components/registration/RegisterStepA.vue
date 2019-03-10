<template>
  <v-container fluid fill-height class="registration-steps registration-step-a">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
        <h3 class="subheading font-weight-light text-xs-center mb-4 gray--text text--darken-3">
          Συμπληρώστε τιςπαρακάτω ερωτήσεις, προκειμένου να φτιάξετε ένα εξατομικευμένο πλάνο με γεύματα και συνταγές για όλη την εβδομάδα.
        </h3>
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <v-select
              :items="birthYears"
              v-model="birthYear"
              label="χρονολογία γέννησης"
              class="mb-4"
              :rules="validate.birthYear"
            ></v-select>

            <p>Φύλο</p>
            <v-radio-group row v-model="gender" class="mb-4 text-xs-center">
              <v-radio
                color="red accent-3"
                v-for="n in 2"
                :key="n"
                :label="n == 1 ? 'ΑΝΤΡΑΣ' : 'ΓΥΝΑΙΚΑ'"
                :value="n"
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
import { birthYears, isInt } from '../../services/utils';

export default {
  name: 'register-step-a',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      birthYears: birthYears(),
      validForm: false,
      validate: {
        birthYear: [
          v => !!v || 'Birthyear is required',
          v => isInt(v) || 'Birthyear must be a number'
        ],
        gender: [
          v => !!v || 'Choose your gender',
          v => isInt(v) || 'Value must be a number'
        ]
      },
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    birthYear: {
      get() { return this.$store.state.registration.birthYear } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'birthYear', val }) }
    },
    
    gender: {
      get() { return this.$store.state.registration.gender } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'gender', val }) }
    },
    
    pregnant: {
      get() { return this.$store.state.registration.pregnant },
      set(val) {
        this.$store.dispatch('registration/setData', { key: 'pregnant', val })
      }
    },
  },
}
</script>

<style>
.v-form {
  width: 300px;
}
</style>
