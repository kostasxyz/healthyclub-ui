<template>
  <v-container fluid fill-height class="registration-steps registration-step-l">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md6>
        <v-form v-model="validForm">
          <v-layout column>
            <h4 class="mb-4">Πόσο συχνά συνηθίζετε να τρώτε μέσα στην εβδομάδα τα παρακάτω πρωτεϊνικά τρόφιμα;</h4>

            <div v-for="item in items" :key="`protein-foods-${item.val}`">
              <v-layout row align-center>
                <v-flex xs4>
                  {{ item.label }}
                </v-flex>
                <v-flex xs8>
                  <v-select
                    :items="labels"
                    outline
                    single-line
                    :value="'Ποτέ'"
                    hide-details
                  ></v-select>
                </v-flex>
              </v-layout>

              <hr class="my-4">
            </div>

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
export default {
  name: 'register-step-l',

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      lamp: 0,
      items: [
        { label: 'Αρνί', val: 'lamp' },
        { label: 'Μοσχάρι', val: 'beaf' },
        { label: 'Ψάρι', val: 'fish' },
        { label: 'Κοτόπουλο', val: 'chicken' },
        { label: 'Χοιρινό', val: 'pork' },
      ],
      labels: [
        'Ποτέ', '1 ή 2 φορές', '3 ή 4 φορές', '5 ή 6 φορές', '7 ή περισσότερες'
      ],
      tickLabel: 'Ποτέ'
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
    setTickLabel(val) {
      this.tickLabel = this.tickLabels[val];
    }
  }
}
</script>
