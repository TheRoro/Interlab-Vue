<template>
    <v-app class="content">
        <v-row no-gutters>
            <v-col cols="12" md="5" class="left_banner">
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
                            <div class="user">
                                <p class="company">Company</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="register">
                        <div class="form">
                            <v-text-field class="text-field"  label="E-mail" v-model="email"
                                          :rules="[v => !!v || 'E-mail is required']"
                                          required>

                            </v-text-field>

                            <v-text-field class="text-field"  label="First and Last Names" v-model="name"
                                          :rules="[v => !!v || 'First and Last Names are required']"
                                          required>

                            </v-text-field>

                            <v-text-field class="text-field"  label="Password" v-model="password"
                                          :rules="[v => !!v || 'A password is required']"
                                          type="password" required>

                            </v-text-field>

                            <v-text-field class="text-field" label="Confirm Password" v-model="password2"
                                          :rules="[v => !!v || 'Passwords must be the same']"
                                          type="password" required>

                            </v-text-field>
                        </div>
                        <div class="links">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <a href="/registerStudent" class="student">Are you a student?</a>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <a href="/" class="already">Already have an account?</a>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <v-card-text class="btn">
                                <v-btn href="/companyDashboard" class="register_btn" :disabled="!isValid">Register</v-btn>
                            </v-card-text>
                        </div>
                </v-card-text>
                <v-card-text class="about">
                    <v-row>
                        <v-col cols="12" sm="8">
                            <p class="about_title">Register as a Company:</p>
                            <div>
                                <p class="about_text">As a company you will be able to create
                                    and publish internship offers in your company
                                    manage your internships and choose from the
                                    best students to hire for the needs of your organisation.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn href="https://8rb.github.io/Interlab-Landing-Page/" target="_blank" class="about_btn">About Us</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-col>
            <v-col cols="12" md="7" class="right_banner">
                <v-card-text class="right_text">
                    <p class="text-lg-left">Welcome To</p>
                    <h1 class="text-lg-left">InterLab</h1>
                    <br/>
                    <p class="text-lg-left">Register as a company</p>
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
    .left_banner{
        font-size: 3em;
    }
    .right_banner{
        font-size: 8em;
        color: white;
        background-color: #2d2d33;
    }
    .right_text{
        margin-top: 2em;
        margin-left: 1.5em;
        color: white;
        font-size: 0.3em;
    }
    .register{
        margin-top: -2.5em;
    }
    .logo{
        margin-top: -1em;
        margin-left: 0.5em;
        width: 20%;
        height: 20%;
    }
    .text-field{
        width: 80%;
        padding-top: 1.3em;
        padding-left: 4em;
    }
    .user{
        margin-left: 10em;
    }
    .company{
        margin-left: 1em;
        font-weight: bold;
    }
    .register_btn{
        margin-top: 1em;
        background-color: #2d2d33 !important;
        width: 75%;
        border-radius: 20px;
        margin-left: 3em;
        color: white !important;
    }
    .links{
        margin-top: 1.5em;
        margin-left: 4em;
    }
    .student{
        text-decoration:none !important;
        color: black !important;
    }
    .already{
        text-decoration:none !important;
        color: black !important;
    }
    .about{
        /*margin-top: 4em;*/
        margin-bottom: 0;
    }
    .about_title{
        font-size: 1.1em;
        font-weight: bold;
    }
    .about_text{
        font-size: 1em;
        font-weight: normal;
    }
    .about_btn{
        margin-top: 2.5em;
        border-radius: 20px;
        margin-left: 1em;
    }
</style>
