<template>
  <v-container fluid fill-height class="registration-steps registration-step-i">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="text-xs-center mb-4">Είσαι έγκυος / θηλάζουσα;</h4>

            <v-radio-group v-model="pregnant" :class="'radio-center'">
              <v-radio
                label="ΟΧΙ"
                :value="0"
              ></v-radio>
              <v-radio
                label="ΝΑΙ"
                :value="1"
              ></v-radio>
            </v-radio-group>

            <v-dialog
              v-model="dialog"
              width="500">
              <v-card>
                <v-card-text>
                  Το healthyclub δεν υποστηρίζει έγκυες ή θυλάζουσες.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    flat
                    @click="leaveRegistration">
                    ΕΞΟΔΟΣ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

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
export default {
  name: 'register-step-i',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      isPregnant: 0
    }
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    pregnant: {
      get() { return this.$store.state.registration.pregnant } ,
      set(val) { this.$store.dispatch('registration/setData', { key: 'pregnant', val }) }
    },

    dialog: {
      get() { return this.$store.state.registration.pregnant },
      set(val) { return val }
    } 
  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {
    leaveRegistration() {
      this.$store.dispatch('registration/setData', { key: 'pregnant', val: 0 })
      this.$router.push({ name: 'home' });
    }
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
