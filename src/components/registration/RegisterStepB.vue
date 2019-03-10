<template>
  <v-container fluid fill-height class="registration-steps registration-step-b">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <div>
              <h4 class="text-xs-center">ποιό είναι το ύψος σου;</h4>
              <v-text-field
                v-model="height"
                label="εκατοστά"
                class="mb-5"
                :rules="validate.height"
                step="1"
                min="142"
                max="210"
              ></v-text-field>
            </div>

            <div class="mt-1">
              <h4 class="text-xs-center">ποιό είναι το βάρος σου;</h4>
              <v-text-field
                v-model="weight"
                label="κιλά"
                class="mb-4"
                :rules="validate.weight"
                step="1"
                min="42"
                max="182"
              ></v-text-field>
            </div>

            <p class="blue-grey--text text--lighten-2 my-2">Χρησιμοποιούμε αυτές τις πληροφορίες για να υπολογίσουμε το BMI σου</p>
        
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
import { isInt, intBetween } from '../../services/utils';

export default {
  name: 'register-step-b',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: false,
      validate: {
        height: [
          v => !!v || 'Height is required',
          v => isInt(v) || 'Height must be a number',
          v => intBetween(v, 142, 200) || 'Between 142 and 200',
        ],
        weight: [
          v => !!v || 'Weight is required',
          v => isInt(v) || 'Weight must be a number',
          v => intBetween(v, 38, 182) || 'Between 38 and 182',
        ],
      }
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    height: {
      get() { return this.$store.state.registration.height } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'height', val }) }
    },

    weight: {
      get() { return this.$store.state.registration.weight } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'weight', val }) }
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
