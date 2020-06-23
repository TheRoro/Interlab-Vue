<template>
      <v-content>
          <ProfileContent></ProfileContent>
    </v-content>
</template>

<script>
import ProfileContent from "./components/ProfileContent";

export default {
  name: 'App',

  components: {
      ProfileContent,
  },

  data: () => ({
    //
  }),
};
</script>
