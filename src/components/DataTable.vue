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
        <v-data-table v-if="data.length > 0" :headers="headers" :items="data">
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
  computed: {
    ...mapState(["users", "loading"]),
    data() {
      return this.$store.state.users;
    },
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
  /*mounted() {
    const { load } = getAllData();
    load()
      .then((data) => {
        this.data = data.users;
        // Get all keys from the data, and format them as column names by removing '_' and capitalizing each word
        this.headers = Object.keys(this.data[0]).map((key) => {
          const formattedKey = key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return { text: formattedKey, value: key };
        });
        console.log(this.data);
        Note: This could expose sensitive data or data out of interest; consider filtering or formatting the data on the backend, and if not possible, make a list of the desired headers to be shown. For example:
        headers: [
          { text: "ID", value: "ID" },
          { text: "First Name", value: "first_name" },
          { text: "Last Name", value: "last_name" },
        ],
        
      })
      .catch((err) => {
        this.error = err;
      });
  },*/
};
</script>
