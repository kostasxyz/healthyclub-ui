<template>
  <v-container fluid fill-height class="registration-steps registration-step-t">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <div class="text-xs-center">
            <h4>Το ιδανικό βάρος σου κυμαίνεται μεταξύ: </h4>
            <p>
              <v-chip outline color="cyan--text">{{ weightRange.from }}kg</v-chip>
              και 
              <v-chip outline color="cyan--text">{{ weightRange.to }}kg</v-chip>
            </p>
            <br>
            <p class="mt-5">Τώρα είσαι <span class="red--text">{{ weight }}kg</span> κιλά, πόσα θα ήθελες να φτάσεις;</p>

            <div class="mt-1">
              <v-text-field
                v-model="weightGoal"
                label="κιλά"
                class="mb-4"
                :rules="validate.weight"
                step="1"
                min="42"
                max="182"
              ></v-text-field>
            </div>

            <v-btn
              color="red"
              class="white--text"
              round
              :disabled="!validForm"
              @click="$emit('nextRegStep')">
                ΕΠΟΜΕΝΟ <v-icon right>arrow_forward</v-icon>
            </v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { isInt, intBetween } from '../../services/utils';
import idealWeight from '../../services/ideal-weight';

export default {
  name: 'register-step-t',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      idealWeight,
      validForm: false,
      validate: {
        weight: [
          v => !!v || 'Weight is required',
          v => isInt(v) || 'Weight must be a number',
          v => intBetween(v, this.weightRange.from, this.weightRange.to) || `Between ${this.weightRange.from} and ${this.weightRange.to}`,
        ],
      }
    }
  },

  mounted() {

  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    height() { return this.$store.state.registration.height },
    weightRange() {
      let r = idealWeight.filter(i => {
        return (this.height >= i.hmin && this.height <= i.hmax);
      });

      return r[0];
    },
    weightGoal: {
      get() { return this.$store.state.registration.weightGoal } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'weightGoal', val }) }
    },
    weight() { return this.$store.state.registration.weight },
  },
}
</script>

<style>
.v-form {
  width: 300px;
}
</style>
