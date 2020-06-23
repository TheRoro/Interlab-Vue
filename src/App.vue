<template>
      <v-content>
      <RegisterStudent/>
    </v-content>
</template>

<script>
//import DashboardEmpresa from "./components/DashboardEmpresa";
//import Login from "./components/Login";
import RegisterStudent from "./components/RegisterStudent";

export default {
  name: 'App',

  components: {
    //DashboardEmpresa,
     //Login,
      RegisterStudent,
  },

  data: () => ({
    //
  }),
};
</script>
