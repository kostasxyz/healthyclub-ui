<template>
  <v-app>
    <v-toolbar color="primary" fixed flat class="text-xs-center white--text" app>
      <v-btn icon @click="prevRegStep">
        <v-icon color="white">arrow_back</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>ΕΓΓΡΑΦΗ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon></v-btn>
    </v-toolbar>
    
    <v-content class="registration-view primaryLight">
      <RegisterStepA v-if="regStep === 1" @nextRegStep="nextRegStep"/>

      <RegisterStepI v-if="regStep === 2" @nextRegStep="nextRegStep"/>

      <RegisterStepB v-if="regStep === 3" @nextRegStep="nextRegStep"/>

      <RegisterStepC v-if="regStep === 4" @nextRegStep="nextRegStep"/>

      <RegisterStepD v-if="regStep === 5" @nextRegStep="nextRegStep"/>

      <RegisterStepE v-if="regStep === 6" @nextRegStep="nextRegStep"/>

      <RegisterStepF v-if="regStep === 7" @nextRegStep="nextRegStep"/>

      <RegisterStepG v-if="regStep === 8" @nextRegStep="nextRegStep"/>

      <RegisterStepH v-if="regStep === 9" @nextRegStep="nextRegStep"/>

      <RegisterStepJ v-if="regStep === 10" @nextRegStep="nextRegStep"/>

      <RegisterStepK v-if="regStep === 11" @nextRegStep="nextRegStep"/>

      <RegisterStepL v-if="regStep === 12" @nextRegStep="nextRegStep"/>

      <RegisterStepM v-if="regStep === 13" @nextRegStep="nextRegStep"/>

      <RegisterStepN v-if="regStep === 14" @nextRegStep="nextRegStep"/>

      <RegisterStepO v-if="regStep === 15" @nextRegStep="nextRegStep"/>

      <RegisterStepP v-if="regStep === 16" @nextRegStep="nextRegStep"/>

      <RegisterStepQ v-if="regStep === 17" @nextRegStep="nextRegStep"/>

      <RegisterStepT v-if="regStep === 18" @nextRegStep="nextRegStep"/>

      <RegisterStepR v-if="regStep === 19" @nextRegStep="nextRegStep"/>

      <RegisterStepS v-if="regStep === 20" @nextRegStep="nextRegStep"/>

      <RegisterStepBilling v-if="regStep === 21" @nextRegStep="nextRegStep"/>
    </v-content>
  </v-app>
</template>


<script>
export default {
  name: 'registration-view',

  components: {
    RegisterStepA: () => import('../components/registration/RegisterStepA.vue'),
    RegisterStepI: () => import('../components/registration/RegisterStepI.vue'),
    RegisterStepB: () => import('../components/registration/RegisterStepB.vue'),
    RegisterStepC: () => import('../components/registration/RegisterStepC.vue'),
    RegisterStepD: () => import('../components/registration/RegisterStepD.vue'),
    RegisterStepE: () => import('../components/registration/RegisterStepE.vue'),
    RegisterStepF: () => import('../components/registration/RegisterStepF.vue'),
    RegisterStepG: () => import('../components/registration/RegisterStepG.vue'),
    RegisterStepH: () => import('../components/registration/RegisterStepH.vue'),
    RegisterStepJ: () => import('../components/registration/RegisterStepJ.vue'),
    RegisterStepK: () => import('../components/registration/RegisterStepK.vue'),
    RegisterStepL: () => import('../components/registration/RegisterStepL.vue'),
    RegisterStepM: () => import('../components/registration/RegisterStepM.vue'),
    RegisterStepN: () => import('../components/registration/RegisterStepN.vue'),
    RegisterStepO: () => import('../components/registration/RegisterStepO.vue'),
    RegisterStepP: () => import('../components/registration/RegisterStepP.vue'),
    RegisterStepQ: () => import('../components/registration/RegisterStepQ.vue'),
    RegisterStepR: () => import('../components/registration/RegisterStepR.vue'),
    RegisterStepS: () => import('../components/registration/RegisterStepS.vue'),
    RegisterStepT: () => import('../components/registration/RegisterStepT.vue'),
    RegisterStepBilling: () => import('../components/registration/RegisterStepBilling.vue'),
  },

  //--------------------------------------
  // Data
  //--------------------------------------
  data() {
    return {
      localStorageRegData: {}
    }
  },

  created() {
    this.getLocalStorageRegData();
  },

  updated() {
    console.log('created@localRegData: ', this.localStorageRegData);
  },

  //--------------------------------------
  // Computed
  //--------------------------------------
  computed: {
    regStep() { return this.$store.state.registration.step; },
  },

  //--------------------------------------
  // Methods
  //--------------------------------------
  methods: {
    getLocalStorageRegData() {
      let localStorageRegData = window.localStorage.getItem('hc_reg_data');
      if(localStorageRegData) {
        this.$store.dispatch('registration/seedState', JSON.parse(localStorageRegData));
        this.localStorageRegData = JSON.parse(localStorageRegData);
      }
    },
    nextRegStep() {
      this.$store.dispatch('registration/setData', { key: 'stepDir', val: 1 });
      let step = this.regStep + 1;

      // If is step 1 and gender is 1 (male) skip q2 for pregnants
      if(this.$store.state.registration.gender === 1 && this.regStep === 1) {
        step = this.regStep + 2;
      }

      // If lunch and dinner are included
      if(
        !(this.$store.state.registration.meals.includes('lunch') &&
        this.$store.state.registration.meals.includes('dinner')) &&
        this.regStep === 10
      ) {
        step = this.regStep + 2;
      }

      this.$store.dispatch('registration/setData', { key: 'step', val: step });
    },

    prevRegStep() {
      this.$store.dispatch('registration/setData', { key: 'stepDir', val: -1 });

      let step = this.regStep > 1 ? this.regStep - 1 : 1;

      // If is step 3 and gender is 1 (male) skip q2 for pregnants
      if(this.$store.state.registration.gender === 1 && this.regStep === 3) {
        step = this.regStep - 2;
      }

      // If lunch and dinner are included
      if(
        !(this.$store.state.registration.meals.includes('lunch') &&
        this.$store.state.registration.meals.includes('dinner')) && 
        this.regStep === 12
      ) {
        step = this.regStep - 2;
      }

      if(this.regStep === 1) {
        this.$router.push({ name: 'home' });
      } else {
        this.$store.dispatch('registration/setData', { key: 'step', val: step });
      }
    }
  }
}
</script>

<style lang="scss">
.registration-view {

  .container.fill-height {
    > .hc-layout-no-fill-height {
      height: auto;
    }
  }

  .v-form {
    width: 300px;
  }

  .radio-center {
    margin: 0 auto;
  }

  .registration-steps {
    .v-text-field--outline > .v-input__control > .v-input__slot {
      min-height: 42px;
    }

    .v-text-field.v-text-field--enclosed .v-input__append-inner {
      margin-top: 8px;
    }
  }
}
</style>
