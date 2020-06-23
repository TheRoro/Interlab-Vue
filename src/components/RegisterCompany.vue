<template>
    <v-app class="indigo darken-4">
        <v-row>
            <v-col cols="12" md="4" class="white accent-3">
                <v-card-text class="register">
                    <v-card-text>
                        <div class="form">
                            <v-text-field label="E-mail" v-model="email"
                                          :rules="[v => !!v || 'E-mail is required']"
                                          required>

                            </v-text-field>

                            <v-text-field label="First and Last Names" v-model="name"
                                          :rules="[v => !!v || 'First and Last Names are required']"
                                          required>

                            </v-text-field>

                            <v-text-field label="Password" v-model="password"
                                          :rules="[v => !!v || 'A password is required']"
                                          type="password" required>

                            </v-text-field>

                            <v-text-field label="Confirm Password" v-model="password2"
                                          :rules="[v => !!v || 'Passwords must be the same']"
                                          type="password" required>

                            </v-text-field>
                        </div>
                        <div class="links">
                            <a class="Internship" >¿Are you a Student?</a>   <a class="login">¿Already Have an Account?</a>
                        </div>
                        <div>
                            <v-card-actions>
                                <v-btn class="btnRegister" :disable="!isValid">Register</v-btn>
                            </v-card-actions>
                        </div>

                    </v-card-text>
                </v-card-text>
                <v-card-text class="Header">
                    <div>
                        <img class="logo" :src="require('../assets/interlab.png')" alt="">
                    </div>

                    <div class="ind">
                        <p class="Student">Company</p>
                    </div>
                </v-card-text>

                <v-card-text class="Notice" cols="12">
                    <p class="title">Register as a Company:</p>
                    <div>
                        <p class="text">As a company you will be able to create
                            and publish internship offers in your company
                            manage your internships and choose from the
                            best students to hire for the needs of your organisation</p>
                    </div>
                    <v-btn class="more" color="indigo lighten-5" @click="submit">More info</v-btn>
                </v-card-text>
            </v-col>

            <v-col cols="12" md="8" class="Title2">
                <v-card-text class="white--text">
                    <p class="text-lg-left">Register in</p>
                    <br/> <br/>
                    <h1 class="text-lg-left">Interlab</h1>
                    <br/> <br/> <br/>
                    <p class="text-lg-left">Enter your info to proceed</p>
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
    .Internship{
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
