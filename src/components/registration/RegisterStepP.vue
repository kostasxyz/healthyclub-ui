<template>
  <v-container fluid fill-height class="registration-steps registration-step-p">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Πόσο εύκολα μπορείτε να διασχίσετε ένα δωμάτιο; </h4>
            <v-radio-group v-model="crossRoom" :class="'radio-center'">
              <v-radio
                label="Πολύ Εύκολα"
                :value="0"
              ></v-radio>
              <v-radio
                label="Αντιμετωπίζω κάποιες δυσκολίες"
                :value="1"
              ></v-radio>
              <v-radio
                label="Αρκετά ή δεν μπορώ να το διασχίσω"
                :value="2"
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
import ageUnderSixty from '../../mixins/age-under-sixty.js';

export default {
  name: 'register-step-p',

  mixins: [ 
    ageUnderSixty 
  ],

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    crossRoom: {
      get() { return this.$store.state.registration.crossRoom } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'crossRoom', val }) }
    }
  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {

  }
}
</script>
