<template class="content">
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
          </div>
          <div class="form">
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
                <router-link to="/registerCompany" class="register">Register as a Company</router-link>
              </v-col>
              <v-col cols="12" sm="6">
                <router-link to="/registerStudent" class="register">Register as a Student</router-link>
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
        axios.get('https://interlab4.azurewebsites.net/api/users')
        .then(response =>{
          this.userId = 0;
          this.users = response.data;
          //Validating user
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].username === this.email &&
                    response.data[i].password === this.password ||
                    response.data[i].email === this.email &&
                    response.data[i].password === this.password) {
              console.log("User Found");
              this.userId = response.data[i].id;
              console.log("User id: ", this.userId);
              this.$store.commit('saveId', this.userId);
              console.log("User id: ", this.$store.state.userId);
              this.auth = true;
              break;
            }
          }
          if (!this.auth) {
            alert("Wrong username or password");
          }
          if(this.auth){
            //validating profile
            axios.get('https://interlab4.azurewebsites.net/api/users/' + this.$store.state.userId + '/profiles')
            .then(response2 =>{
              this.userProfile = response2.data[0];
              this.firstName = response2.data[0].firstName;
              this.$store.commit('saveFirstName', this.firstName);
              console.log("First Name", response2.data[0].firstName);
              console.log(this.firstName);
              if (response2.data[0].role.toLowerCase() === 'student') {
                router.push({path: `/studentDashboard`})
              } else if (response2.data[0].role.toLowerCase() === 'company') {
                axios.get('https://interlab4.azurewebsites.net/api/users/'+ this.$store.state.userId +'/companies')
                        .then(response3 => {
                          this.$store.commit('saveCompanyId', response3.data[0].id);
                          router.push({path: `/companyDashboard`})
                        });
              } else {
                alert("Invalid Role");
              }
            }).catch(error => {
              console.log(error)
            });
          }
        });
      },
    },
    data: () => ({
      userId: 0,
      firstName: null,
      email:null,
      isValid:true,
      show1: false,
      auth: false,
      role: false,
      password: '',
      ref: "/",
      users: [],
      userProfile: [],
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
</script>

<style scoped>
    .right_text{
      margin-top: 6vw;
      margin-left: 7vw;
      color: white;
      font-size: 3.5vw;
    }
    .content{
      padding-left: 0;
      margin-left: 0;
      border-left: 0;
    }
    .form{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin-left: 3vw;
    }
    .login{
      padding-top: 1vw;
    }
    .left_banner{
      font-size: 3vw;
    }
    .right_banner{
      font-size: 11vw;
      color: white;
      background-color: #282a3f;
    }
    .language{
      margin-left: 13vw;
      align-content: end;
    }
    .eng{
      font-weight: bold;
      color: #282a3f;
    }
    .links{
      margin-top: 1.5vw;
      margin-left: 4vw;
    }
    .register{
      text-decoration:none !important;
      color: #282a3f !important;
      font-size: 1.2vw;
    }
    .login_btn{
      margin-top: 1vw;
      background-color: #2c305b !important;
      width: 80%;
      border-radius: 20px;
      margin-left: 3vw;
      height: 100%;
    }
    .logo{
      margin-top: -1vw;
      margin-left: 1vw;
      width: 40%;
      height: 40%;
    }
    .about{
      /*margin-top: 4em;*/
      margin-bottom: 0;
    }
    .about_title{
      font-size: 1.2vw;
      font-weight: bold;
    }
    .about_text{
      font-size: 1vw;
      font-weight: normal;
      text-align: justify;
    }
    .about_btn{
      margin-top: 2vw;
      border-radius: 20px;
      margin-left: 1vw;
      width: 80%;
      height: 50%;
      font-size: 1vw;
    }
    /*FOR SMARTPHONES*/
    @media only screen and (max-width: 600px) {
      .about_title{
        font-size: 4vw;
      }
      .about_text{
        font-size: 3vw;
      }
      .about_btn{
        width: 55%;
        height: 50%;
        font-size: 3vw;
        margin-left: 20%;
      }
      .register{
        font-size: 3.5vw;
      }
      .logo{
        margin-left: 40%;
        width: 20%;
        height: 20%;
      }
      .language{
        display: none;
      }
      .right_banner{
        display: none;
      }
      .text-field{
        display: flex;
        justify-content: center;
      }
      .form{
        width: 100%;
        margin-left: 0 !important;
      }
      .login_btn{
        border-radius: 20px;
        margin-left: 6vw;
      }
    }
</style>
