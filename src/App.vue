<template>
      <v-content>
      <RegisterCompany/>
    </v-content>
</template>

<script>
//import DashboardEmpresa from "./components/DashboardEmpresa";
//import Login from "./components/Login";
//import RegisterStudent from "./components/RegisterStudent";
import RegisterCompany from "./components/RegisterCompany"

export default {
  name: 'App',

  components: {
    //DashboardEmpresa,
     //Login,
      //RegisterStudent,
      RegisterCompany
  },

  data: () => ({
    //
  }),
};
</script>
