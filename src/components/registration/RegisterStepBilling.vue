<template>
  <v-container fluid fill-height class="registration-steps registration-step-billing">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md4>
        <v-form v-model="validForm">
          <p>Billing form</p>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'register-step-billing',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {

  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {

  }
}
</script>

<style>

</style>
