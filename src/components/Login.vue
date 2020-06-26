<template>
  <v-app class="content">
    <v-row no-gutters>
      <v-col cols="12" sm="5" class="left_banner">
        <v-card-text class="header">
          <v-row>
            <v-col cols="12" sm="6">
              <div>
                <a href="/">
                  <img class="logo" src="@/assets/interlab.png" alt="">
                </a>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="language">
                <p class="eng">Eng</p>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="login">
          <div class="form">
            <v-text-field class="text-field"
                    v-model="email"
                    :rules="[rules.required2, rules.email]"
                    label="E-mail"
            ></v-text-field>
            <v-text-field class="text-field"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
            ></v-text-field>
          </div>
          <div class="links">
            <v-row>
              <v-col cols="12" sm="6">
                <router-link to="/registerCompany">Register as a Company</router-link>
              </v-col>
              <v-col cols="12" sm="6">
                <router-link to="/registerStudent">Register as a Student</router-link>
              </v-col>
            </v-row>
          </div>
          <v-card-text class="btn">
            <v-btn @click="validateUser" class="login_btn" color="primary" :disabled="!isValid" >Log In</v-btn>
          </v-card-text>
        </v-card-text>

        <v-card-text class="about">
          <v-row>
            <v-col cols="12" sm="8">
          <p class="about_title">What Is InterLab?</p>
              <div>
                <p class="about_text">Here at InterLab, we love Internships! Make sure to create an account to get access to the best internships offers from all around the globe.</p>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
          <v-btn href="https://8rb.github.io/Interlab-Landing-Page/" target="_blank" class="about_btn">About Us</v-btn>
              </v-col>
          </v-row>
        </v-card-text>

      </v-col>
      <v-col cols="12" sm="7" class="right_banner">
        <v-card-text class="right_text">
          <p class="text-lg-left">Welcome To</p>
          <h1 class="text-lg-left">InterLab</h1>
          <br/>
          <p class="text-lg-left">Log in with your account</p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-app>
</template>


<script>
  import axios from "axios";
  import router from "../router";

  export default {
    name: "Login",
    methods: {
      validateUser: function () {
        //Search User in database
        axios.all([
          axios.get('https://interlab4.azurewebsites.net/api/users'),
          axios.get('https://interlab4.azurewebsites.net/api/profiles')
        ])
        .then(responseArr =>{
          this.userId = 0;
          this.users = responseArr[0].data;
          this.profiles = responseArr[1].data;
          //Validating user
          for (let i = 0; i < responseArr[0].data.length; i++) {
            if (responseArr[0].data[i].username === this.email &&
                    responseArr[0].data[i].password === this.password ||
                    responseArr[0].data[i].email === this.email &&
                    responseArr[0].data[i].password === this.password) {
              console.log("User Found");
              userId = responseArr[0].data[i].id;
              console.log("User id: ", userId);
              this.auth = true;
              break;
            }
          }
          if (!this.auth) {
            alert("Wrong username or password");
          }
          if(this.auth){
            //validating profile
            for (let i = 0; i < responseArr[1].data.length; i++) {
              console.log("userId", userId);
              if (responseArr[1].data[i].id === userId) {
                this.role = true;
                console.log("Profile Found");
                if (responseArr[1].data[i].role.toLowerCase() === 'student') {
                  router.push({path: `/studentDashboard`})
                } else if (responseArr[1].data[i].role.toLowerCase() === 'company') {
                  router.push({path: `/companyDashboard`})
                } else {
                  alert("Invalid Role");
                }
                break;
              }
            }
            if(!this.role){
              alert("Could not find Role");
            }
          }
        });
      },
    },
    data: () => ({
      userId: 0,
      email:null,
      isValid:true,
      show1: false,
      auth: false,
      role: false,
      password: '',
      ref: "/",
      users: [],
      profiles: [],
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        required2: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }
    }),
  }
  export let userId = 0;
</script>

<style scoped>
    .right_text{
      margin-top: 2em;
      margin-left: 1.5em;
      color: white;
      font-size: 0.3em;
    }
    .content{
      padding-left: 0;
      margin-left: 0;
      border-left: 0;
    }
    .login{
      padding-top: 1em;
    }
    .text-field{
      width: 80%;
      padding-top: 1.5em;
      padding-left: 4em;
    }
    .left_banner{
      font-size: 3em;
    }
    .right_banner{
      font-size: 8em;
      color: white;
      background-color: #282a3f;
    }
    .language{
      margin-left: 10em;
    }
    .eng{
      margin-left: 1em;
      font-weight: bold;
      color: #282a3f;
    }
    .links{
      margin-top: 1.5em;
      margin-left: 4em;
    }
    .reg_company{
      text-decoration:none !important;
      color: #282a3f !important;
    }
    .reg_student{
      text-decoration:none !important;
      color: #282a3f !important;
    }
    .login_btn{
      margin-top: 1em;
      background-color: #2c305b !important;
      width: 75%;
      border-radius: 20px;
      margin-left: 3em;
    }
    .logo{
      margin-top: -1em;
      margin-left: 0.5em;
      width: 20%;
      height: 20%;
    }
    .about{
      /*margin-top: 4em;*/
      margin-bottom: 0;
    }
    .about_title{
      font-size: 1em;
      font-weight: bold;
    }
    .about_text{
      font-size: 0.8em;
      font-weight: normal;
    }
    .about_btn{
      margin-top: 2em;
      border-radius: 20px;
      margin-left: 1em;
    }

</style>
