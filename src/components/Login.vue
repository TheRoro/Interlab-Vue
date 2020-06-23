<template>
  <v-app class="content">
    <v-row no-gutters>
      <v-col cols="12" sm="5" class="left_banner">
        <v-card-text class="Header">
          <v-row>
            <v-col cols="12" sm="6">
              <div>
                <img class="logo" src="@/assets/interlab.png" alt="">
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="language">
                <a class="esp">Esp</a>
                <a class="eng">Eng</a>
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
            <a href="/registerCompany" class="create">Create an Account</a>
            <a class="forgot">¿Forgot your password?</a>
          </div>
          <v-card-text class="btn">
            <v-btn href="/companyDashboard" class="login_btn" color="primary" :disabled="!isValid">Log In</v-btn>
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
          <v-btn class="about_btn">About Us</v-btn>
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

  export default {
    name: "Login",
    components:{
    },

    methods: {

    },


    data: () => ({
      email:null,
      isValid:true,

      show1: false,
      password: '',
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
    .text-field{
      width: 80%;
      padding-left: 4em;
    }
    .left_banner{
      font-size: 3em;
    }
    .right_banner{
      font-size: 10em;
      color: white;
      background-color: #282a3f;
    }
    .language{
      margin-left: 10em;
    }
    .eng{
      margin-left: 1em;
    }
    .links{
      margin-top: 2em;
      margin-left: 4em;
    }
    .create{
      text-decoration:none !important;
    }
    .forgot{
      margin-left: 6em;
    }
    .login_btn{
      margin-top: 1em;
      background-color: #2c305b !important;
      width: 80%;
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
      margin-top: 4em;
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
