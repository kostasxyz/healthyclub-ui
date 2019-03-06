<template>
  <v-container fluid fill-height class="registration-steps registration-step-c">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Ημερήσια αθλητική δραστηριότητα</h4>

            <v-radio-group v-model="activity" :class="'radio-center'">
              <v-radio
                v-for="r in activities"
                :key="`activity-${r.val}`"
                :label="r.label"
                :value="r.val"
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
import { activities } from '../../services/utils';

export default {
  name: 'register-step-c',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      activities: activities,
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    activity: {
      get() { return this.$store.state.registration.activity } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'activity', val }) }
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
