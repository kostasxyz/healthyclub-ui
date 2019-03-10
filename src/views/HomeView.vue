<template>
<v-content class="home-view">
  <v-container fluid fill-height class="hc-bg-1">
    <v-layout column fill-height>
      <v-flex d-flex xs12 align-center justify-center fill-height>
        <v-layout align-center justify-center column >
          <v-flex xs12>
            <div>
              <v-layout align-center justify-center column>
                <img :src="require('./../assets/images/logo_230_black.png')" >
              </v-layout>
            </div>
          </v-flex>

          <v-flex xs12 justify-center>
            <h1 class="headline font-weight-light text-xs-center white--text">Δίαιτα Τέλος.</h1>
            <p class="text-xs-center">To HealthyClub σου δίνει το κίνητρο και την καθοδήγηση που χρειάζεσαι για να αποκτήσεις το σώμα που πάντα ήθελες, γιατί απλά μια δίαιτα δεν είναι αρκετή.</p>
          </v-flex>

          <v-flex xs12>
            <v-btn large to="/" round color="primary" dark>Login</v-btn>
            <v-btn large to="/registration" round color="red" dark>Register</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>
export default {
  name: 'home-view',
}
</script>

<style lang="scss">
.home-view {
  background-color: $main-bg;
  background-image: url(../assets/images/bg1.png);
  background-position: bottom center;
  background-size: 100%;
  background-blend-mode: soft-light;
  height: 100vh;
}
</style>
