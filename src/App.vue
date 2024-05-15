<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        <v-container>
          <v-row>
            <v-col>
              <router-link :to="{ name: 'Home' }">
                <v-btn variant="flat">Home</v-btn>
              </router-link>
            </v-col>
            <v-col>
              <router-link :to="{ name: 'About' }">
                <v-btn variant="flat">About</v-btn>
              </router-link>
            </v-col>
            <v-col>
              <router-link :to="{ name: 'Data' }">
                <v-btn variant="flat">Data</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
