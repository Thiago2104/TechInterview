<template>
  <v-container>
    <v-row>
      <v-card>
        <v-card-title> Data Table </v-card-title>
        <v-card-subtitle
          ><p>
            Uh oh. There is nothing there. Using the data at
            <a href="https://random-data-api.com/"
              >https://random-data-api.com/</a
            >, populate the table below with headers and make it searchable.
            Also, expand the table to full width of the container. Let Bob know
            when complete.
          </p></v-card-subtitle
        >
        <v-data-table
          v-if="data.length > 0"
          :headers="headers"
          :items="data"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </template>
        </v-data-table>
        <v-progress-linear v-else indeterminate></v-progress-linear>
      </v-card>
    </v-row>
    <v-row> </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["users", "loading"]),
    data() {
      return this.$store.state.users;
    },
    /* Note: This could expose sensitive data or data out of interest; consider filtering or formatting the data on the backend, and if not possible, make a list of the desired headers to be shown. For example:
    headers: [
          { text: "ID", value: "ID" },
          { text: "First Name", value: "first_name" },
          { text: "Last Name", value: "last_name" },
        ],*/
    headers() {
      return Object.keys(this.data[0]).map((key) => {
        const formattedKey = key
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        return { text: formattedKey, value: key };
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
