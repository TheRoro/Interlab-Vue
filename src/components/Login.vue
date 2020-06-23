<template>
  <v-app class="indigo darken-4">
    <div class="container mt-3">
      <router-view />
    </div>
    <v-row v-id="logeo">
      <v-col cols="12" md="4" class="white accent-3">
        <v-card-text  class="login">
          <div class="form">
            <v-text-field
                    v-model="email"
                    :rules="[rules.required2, rules.email]"
                    label="E-mail"
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Contraseña"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
            ></v-text-field>
          </div>
          <div class="links">
            <a class="create"> Crear cuenta</a>
            <a class="¿Password?">¿Olvidaste tu contraseña?</a>
          </div>
          <v-card-text class="btn">
            <v-btn href="/dashboard" class="nav-link" color="primary" :disabled="!isValid">Iniciar Sesión</v-btn>
          </v-card-text>

        </v-card-text>

        <v-card-text class="Notice">
          <h1 class="title">Notice</h1>
          <div>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ligula a eros luctus malesuada. Pellentesque in sodales libero.</p>
          </div>
          <v-btn class="more" color="indigo lighten-5" >Saber más</v-btn>
        </v-card-text>

        <v-card-text class="Encabezado">
          <div>
            <img class="logo" src="@/assets/interlab.png" alt="">
          </div>

          <div class="idioma">  <a class="Spanish">Esp</a>
            <a class="Inglish">Ing</a>
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="8" class="Title2">
        <v-card-text class="white--text">
          <p class="text-lg-left">Bienvenido a</p>
          <br/> <br/>
          <h1 class="text-lg-left">Interlab</h1>
          <br/> <br/> <br/>
          <p class="text-lg-left">Inicia sesión de tu cuenta</p>
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
      password: 'Password',
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

  .login{
    transform: translateY(-80px);
  }

  .form{
    transform: translateY(200px);
  }

  .links{
    transform: translateY(220px);
  }

  .create{
    margin-right: 8em;
  }

  .logo{
    transform: translateX(0px) translateY(-460px);
  }


  .btn{
    transform: translateY(220px);
  }

  .Spanish{
    padding-right: 3em;
  }

  .idioma{
    transform: translateX(280px) translateY(-540px);
  }

  .Notice{
    transform: translateY(150px);
  }
  .white--text{
    transform: translateX(20px) translateY(200px);
    font-size: 3em;
  }
  .white{
    max-width: 500px;
  }

</style>
