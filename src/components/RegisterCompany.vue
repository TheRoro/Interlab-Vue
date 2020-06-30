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
                            <v-text-field class="text-field" type="text" label="E-mail"
                                          v-model="newEmail" :rules="[v => !!v || 'E-mail is required']"
                                          required>

                            </v-text-field>
                        </div>
                        <div class="form">
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
                        </div>
                        <div class="form">
                            <v-text-field class="text-field"  label="Password" v-model="newPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="[v => !!v || 'A password is required'] "
                                          :type="show1 ? 'text' : 'password'" required @click:append="show1 = !show1" hint="At least 8 characters">

                            </v-text-field>
                        </div>
                        <div class="form">
                            <v-text-field class="text-field" label="Confirm Password" v-model="newPassword2" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="[v => !!v || 'Passwords must be the same']"
                                          :type="show2 ? 'text' : 'password'" required @click:append="show2 = !show2">

                            </v-text-field>
                        </div>
                        <div class="links">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <a @click=registerStudent() class="student">Are you a student?</a>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <a href="/" class="already">Already have an account?</a>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <v-card-text class="btn">
                                <v-btn @click="createUser" class="register_btn">Register</v-btn>
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
    import axios from 'axios'
    import router from "../router";
    import {userId} from "./Login";
    export default {
        name: "RegisterCompany",
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
            userId: null,
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
            registerStudent(){
                router.push({path: `/registerStudent`})
            },
            createUser(){
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
                                console.log(response.data[i].email);
                                console.log(response.data[i].id);
                                if (response.data[i].email === this.newEmail.toString()) {
                                    console.log("New User Found");
                                    this.userId = response.data[i].id;
                                    this.$store.commit('saveId', this.userId);
                                    console.log("User id: ", userId);
                                    break;
                                }
                            }
                            axios.post('https://interlab4.azurewebsites.net/api/users/' + this.userId + '/profiles',{
                                role: 'company',
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
                                this.newPassword2,  this.isValid)
                            router.push({path: `/createCompany`});
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
    .right_text{
        margin-top: 6vw;
        margin-left: 7vw;
        color: white;
        font-size: 3.5vw;
    }
    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-left: 3vw;
    }
    .left_banner{
        font-size: 3vw;
    }
    .right_banner{
        font-size: 11vw;
        color: white;
        background-color: #2d2d33;
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
    .left_banner{
        font-size: 3vw;
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
    .user{
        margin-left: 11vw;
        font-weight: bold;
    }
    .register_btn{
        margin-top: 1vw;
        background-color: #2d2d33 !important;
        width: 80%;
        border-radius: 20px;
        margin-left: 3vw;
        height: 100%;
        color: white !important;
    }
    .student{
        text-decoration:none !important;
        color: black !important;
    }
    .already{
        text-decoration:none !important;
        color: black !important;
    }
    .first_name{
        width: 100%;
    }
    .last_name{
        width: 100%;
    }
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
            margin-left: 38%;
            width: 20%;
            height: 20%;
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
        .user{
            margin-left: 38%;
        }
        .register_btn{
            border-radius: 20px;
            margin-left: 7vw;
        }
    }
</style>
