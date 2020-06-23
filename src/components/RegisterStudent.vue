<template>
    <v-app class="indigo accent-3">
        <v-row>
            <v-col cols="12" md="4" class="white accent-3">
    <v-card-text class="register">
        <v-card-text>
            <div class="form">
            <v-text-field label="E-mail" v-model="email"
                          :rules="[v => !!v || 'A email is required']"
                          required>

            </v-text-field>

            <v-text-field label="First and Last Names" v-model="name"
                          :rules="[v => !!v || 'Names are required']"
                          required>

            </v-text-field>

            <v-text-field label="Password" v-model="password"
                          :rules="[v => !!v || 'A password is required']"
                          type="password" required>

            </v-text-field>

            <v-text-field label="Confirm password" v-model="password2"
            :rules="[v => !!v || 'Passwords must be the same']"
            type="password" required>

            </v-text-field>
            </div>
            <div class="links">
                <a class="Internship" >¿Are you a Company?</a>   <a class="login?">¿Already have an account?</a>
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
                        <p class="Student">Student</p>
                    </div>
                </v-card-text>

                <v-card-text class="Notice">
                    <p class="title">Register as a Student</p>
                    <div>
                        <p class="text">As a student you will be able to apply for
                            internships offers in the best companies all around the world
                            manage your job requests and qualify all your internships.</p>
                    </div>
                    <v-btn class="more" color="indigo lighten-5" >More info</v-btn>
                </v-card-text>


                <v-card-text class="Notice">

                </v-card-text>
            </v-col>

            <v-col cols="12" md="8" class="Title2">
                <v-card-text class="white--text">
                    <p class="text-lg-left display-1">Register in</p>
                    <h1 class="text-lg-left display-4">Interlab</h1>
                    <p class="text-lg-left">Enter your info to proceed</p>
                </v-card-text>
            </v-col>

        </v-row>
    </v-app>
</template>

<script>
    export default {
        name: "RegisterStudent",
        data: () => ({
            email:null,
            name:null,
            password:null,
            password2:null,
            isValid:true,
        })
    }
</script>

<style scoped>
    .logo{
        transform: translateX(0px) translateY(-440px);
    }

    .register{
        transform: translateY(80px);
        margin:auto;
        max-width: 400px;
    }
    .Student{
        transform: translateX(280px) translateY(-500px);
    }
    .Internship{
        padding-right: 8em;
    }
    .btnRegister{
        transform: translateY(20px);
    }

    .links{
        transform: translateY(10px);
    }

    .white--text{
        transform: translateX(20px) translateY(200px);
    }
</style>

