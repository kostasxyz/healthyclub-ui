<template>
  <v-container fluid fill-height class="registration-steps registration-step-f">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Ποιός τύπος διατροφής σε χαρακτηρίζει περισσότερο;</h4>

            <v-radio-group v-model="dietType" :class="'radio-center'">
              <v-radio
                class="mb-4"
                v-for="d in dietTypeList"
                :key="`dtype-${d.val}`"
                :label="d.label"
                :value="d.val"
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
import { dietTypeList } from '../../services/utils';

export default {
  name: 'register-step-f',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      dietTypeList
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    dietType: {
      get() { return this.$store.state.registration.dietType } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'dietType', val }) }
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
