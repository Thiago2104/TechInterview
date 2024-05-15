<template>
  <router-link :to="{ name: pageName }">
    <v-btn color="white" text>{{ label }}</v-btn>
  </router-link>
</template>
<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
