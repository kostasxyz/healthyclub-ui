<template>
<v-content class="home-view">
  <v-container fluid fill-height>
    <v-layout column>

      <v-flex xs12>
        <div>
          <v-layout row align-center justify-center column fill-height>
            <img :src="require('./../assets/images/logo_230_black.png')" >
          </v-layout>
        </div>
      </v-flex>

      <v-flex xs12>
        <div>
          <v-layout row align-center justify-center fill-height>
            <v-flex xs12 sm12 md3 class="text-xs-right">
              <v-btn to="/" round color="primary" dark>Login</v-btn>
            </v-flex>
            <v-flex xs12 sm12 md3 class="text-xs-left">
              <v-btn to="/registration" round color="red" dark>Register</v-btn>
            </v-flex>
          </v-layout>
        </div>
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

<style>
.home-view {
  background: #3ec2cf;
  height: 100vh;
}
</style>
