<template>
  <v-container fluid fill-height class="registration-steps registration-step-r">
    <v-layout align-center justify-center column class="hc-layout-no-fill-height">
      <v-flex xs12 sm8 md4>
        <v-layout column>
          <div>
            <h3>
              Το τελευταίο πρόγραμμα απώλειας βάρους που θα χρειαστείς!<br>
            </h3>
            <br>
            <p>
              Με βάση τις απαντήσεις σου, θα είσαι ΧΧΧ κιλά σε 12 εβδομάδες.<br>
              Ξεκίνα δοκιμάζοντας το HealthyClub ΔΩΡΕΑΝ για 14 ημέρες.<br>
            </p>
            <br>
            <p>
              <v-chip outline color="primary">Τωρινό BMI: xxx</v-chip>
              <v-chip outline color="primary">Στόχος: XXX</v-chip>
            </p>
          </div>

          <div>
            <EstimatedLossLineChart/>
          </div>
        
          <v-btn 
            color="red"
            class="white--text"
            round
            :disabled="!validForm"
            @click="$emit('nextRegStep')">
              ΕΠΟΜΕΝΟ <v-icon right>arrow_forward</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EstimatedLossLineChart from '../charts/EstimatedLossLineChart.vue';

export default {
  name: 'register-step-r',
  components: {
    EstimatedLossLineChart
  },

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      validForm: true,
      datax: {
        labels: ["", "", "", "", "", "", ""],
        datasets: [{
            label: "Data One",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [100, 100, 99, 99]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
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
.v-form {
  width: 300px;
}
</style>
