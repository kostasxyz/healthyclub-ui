<template>
  <v-container fluid fill-height class="registration-steps registration-step-t">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
t
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { birthYears, onlyAlphaSpaces, isInt } from '../../services/utils';
import idealWeight from '../../services/ideal-weight';

export default {
  name: 'register-step-t',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      idealWeight
    }
  },

  mounted() {
    console.log(idealWeight);
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {

  },
}
</script>

<style>
.v-form {
  width: 300px;
}
</style>
