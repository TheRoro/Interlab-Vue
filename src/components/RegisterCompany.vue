<template>
    <v-app class="indigo darken-4">
        <v-row>
            <v-col cols="12" md="4" class="white accent-3">
                <v-card-text class="register">
                    <v-card-text>
                        <div class="form">
                            <v-text-field label="Correo electrónico" v-model="email"
                                          :rules="[v => !!v || 'Correo electrónico is requerido']"
                                          required>

                            </v-text-field>

                            <v-text-field label="Nombre y Apellido" v-model="name"
                                          :rules="[v => !!v || 'Nombre y Apellido']"
                                          required>

                            </v-text-field>

                            <v-text-field label="Contraseña" v-model="password"
                                          :rules="[v => !!v || 'Contraseña es requerida']"
                                          type="password" required>

                            </v-text-field>

                            <v-text-field label="Confirmar Contraseña" v-model="password2"
                                          :rules="[v => !!v || 'La contraseña de be igual']"
                                          type="password" required>

                            </v-text-field>
                        </div>
                        <div class="links">
                            <a class="Intership" >¿Eres Estudiante?</a>   <a class="¿login?">¿Ya tienes Cuenta?</a>
                        </div>
                        <div>
                            <v-card-actions>
                                <v-btn class="btnRegister" :disable="!isValid">Registrarse</v-btn>
                            </v-card-actions>
                        </div>

                    </v-card-text>
                </v-card-text>
                <v-card-text class="Encabezado">
                    <div>
                        <img class="logo" src="@/assets/interlab.png" alt="">
                    </div>

                    <div class="ind">
                        <p class="Student">Empresa</p>
                    </div>
                </v-card-text>

                <v-card-text class="Notice" cols="12">
                    <p class="title"><wm>Registrarse como Empresa:</wm></p>
                    <div>
                        <p class="text">Te permitirá publicar ofertas de pasantías,
                            acceder a un dashboard y manejar tus
                            potenciales pasantes a dichas ofertas..</p>
                    </div>
                    <v-btn class="more" color="indigo lighten-5" @click="submit">Saber más</v-btn>
                </v-card-text>
            </v-col>

            <v-col cols="12" md="8" class="Title2">
                <v-card-text class="white--text">
                    <p class="text-lg-left">Regístrate en</p>
                    <br/> <br/>
                    <h1 class="text-lg-left">Interlab</h1>
                    <br/> <br/> <br/>
                    <p class="text-lg-left">Ingresa tus datos para continuar</p>
                </v-card-text>
            </v-col>

        </v-row>
    </v-app>
</template>

<script>
    export default {
        name: "RegisterCompany",
        data: () => ({
            email:null,
            name:null,
            password:null,
            password2:null,
            isValid:true,
        }),
        methods: {
            submit() {
                if(this.$ref.form.valid()){
                    console.log(this.email, this.name, this.password,
                        this.password2, this.isValid)
                }
            }
        }
    }
</script>

<style scoped>
    .logo{
        transform: translateX(0px) translateY(-440px);
    }

    .register{
        transform: translateY(100px);
        margin:auto;
        max-width: 400px;
    }
    .Student{
        transform: translateX(280px) translateY(-500px);
    }
    .Intership{
        padding-right: 6em;
    }
    .btnRegister{
        transform: translateY(20px);
    }

    .links{
        transform: translateY(10px);
    }

    .white--text{
        transform: translateX(20px) translateY(200px);
        font-size: 3em;
        margin:auto;
    }
</style>
