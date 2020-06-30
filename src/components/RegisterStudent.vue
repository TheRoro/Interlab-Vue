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
                                <p class="student">Student</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text class="register">
                    <div class="form">
                        <v-text-field class="text-field"  label="E-mail" v-model="newEmail"
                                      :rules="[v => !!v || 'E-mail is required']"
                                      required>

                        </v-text-field>
                        <v-row>
                            <v-col>
                                <v-text-field class="text-field first_name"  label="First Name" v-model="newFirstName"
                                              :rules="[v => !!v || 'First and Last Names are required']"
                                              required>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field class="text-field last_name"  label="Last Name" v-model="newLastName"
                                              :rules="[v => !!v || 'First and Last Names are required']"
                                              required>
                                </v-text-field>
                            </v-col>
                        </v-row>


                        <v-text-field class="text-field"  label="Password" v-model="newPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                      :rules="[v => !!v || 'A password is required'] "
                                      :type="show1 ? 'text' : 'password'" required @click:append="show1 = !show1" hint="At least 8 characters">

                        </v-text-field>

                        <v-text-field class="text-field" label="Confirm Password" v-model="newPassword2" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                      :rules="[v => !!v || 'Passwords must be the same']"
                                      :type="show2 ? 'text' : 'password'" required @click:append="show2 = !show2">

                        </v-text-field>
                    </div>
                    <div class="links">
                        <v-row>
                            <v-col cols="12" sm="6">
                                <a @click=registerCompany() class="company">Are you a company?</a>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <a href="/" class="already">Already have an account?</a>
                            </v-col>
                        </v-row>
                    </div>
                    <div>
                        <v-card-text class="btn">
                            <v-btn  @click="createUser" class="register_btn" :disabled="!isValid">Register</v-btn>
                        </v-card-text>
                    </div>
                </v-card-text>
                <v-card-text class="about">
                    <v-row>
                        <v-col cols="12" sm="8">
                            <p class="about_title">Register as a student:</p>
                            <div>
                                <p class="about_text">As a student you will be able to apply for
                                    internships offers in the best companies all around the world
                                    manage your job requests and qualify all your internships.</p>
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
                    <p class="text-lg-left">Register as a student</p>
                </v-card-text>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
    import axios from "axios";
    import {userId} from "./Login";
    import router from "../router";

    export default {
        name: "RegisterStudent",
        data: () => ({
            newEmail: '',
            newName: '',
            newPassword: '',
            newPassword2: '',
            isValid: true,
            newRole: '',
            newFirstName: '',
            newLastName:  '',
            users: [],
            profiles: [],
            userId : null,
            show1: false,
            show2: false,
        }),
        methods: {
            submit() {
                if(this.$ref.form.valid()){
                    console.log(this.newEmail, this.newName, this.newPassword,
                        this.newPassword2, this.isValid)
                }
            },
            registerCompany(){
                router.push({path: `/registerCompany`})
            },
            createUser(){
                this.newRole = "student";
                //create user
                axios.post('https://interlab4.azurewebsites.net/api/users', {
                    username: this.newEmail,
                    password: this.newPassword,
                    email: this.newEmail,
                    dateCreated: new Date(),
                }).then((response) =>{
                    const data = response.data;
                    this.users.push(data);
                    console.log(response);
                    axios.get('https://interlab4.azurewebsites.net/api/users')
                        .then(response => {
                            this.users = response.data;
                            console.log('Source Users:');
                            console.log(response.data);
                            this.users = response.data;
                            //Validating user
                            for (let i = 0; i < response.data.length; i++) {
                                if (response.data[i].email === this.newEmail) {
                                    console.log("New User Found");
                                    this.userId = response.data[i].id;
                                    this.$store.commit('saveId', this.userId);
                                    console.log("User id: ", userId);
                                    break;
                                }
                            }
                            axios.post('https://interlab4.azurewebsites.net/api/users/' + this.userId + '/profiles',{
                                role: 'student',
                                firstName: this.newFirstName,
                                lastName: this.newLastName,
                                field: '',
                                phone: '',
                                description: '',
                                country: '',
                                city: '',
                            }).then((response) =>{
                                const data = response.data;
                                this.profiles.push(data);
                                this.$store.commit('saveFirstName', this.newFirstName);
                                console.log("Saved name is: ", this.$store.state.firstName);
                                console.log("Saved Id: ", this.$store.state.userId);
                                console.log(response);
                            })
                            console.log("creating profiles' user...", this.newRole, this.newFirstName, this.newPassword,
                                this.newPassword2,  this.isValid, this.userId)
                            router.push({path: `/studentDashboard`})
                        })

                })
                console.log("creating user...", this.newEmail, this.newFirstName, this.newLastName, this.newPassword,
                    this.isValid)
                //get user


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
        background-color: #447dd4;
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
    .student{
        margin-left: 1em;
        font-weight: bold;
        color: #447dd4 !important;
    }
    .register_btn{
        margin-top: 1em;
        background-color: #447dd4 !important;
        width: 75%;
        border-radius: 20px;
        margin-left: 3em;
        color: white !important;
    }
    .links{
        margin-top: 1.5em;
        margin-left: 4em;
    }
    .company{
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
    .first_name{
        width: 90%;
    }
    .last_name{
        margin-left: -4.5em;
        width: 90%;
    }
</style>

