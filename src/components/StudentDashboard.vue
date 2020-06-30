<template>
    <v-app id="style-1">
        <v-card>
            <v-navigation-drawer permanent fixed app clipped-left width="200px" class="size">
                <v-toolbar flat color="white" dark>
                    <div>
                        <a href="/">
                            <img class="logo" :src="require('../assets/interlab2.png')" alt=""/>
                        </a>
                    </div>
                </v-toolbar>
                <v-tabs vertical v-model="tab" class="title1">
                    <v-tab :class="title1" @click="setSelected('Dashboard')">
                        <v-icon left size="25">home</v-icon>
                        <v-list-item-title class="hidden">Home</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('FindInternship')">
                        <v-icon left size="25">search</v-icon>
                        <v-list-item-title class="hidden">Find Internship</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title2" @click="setSelected('MyRequests')">
                        <v-icon left size="25">view_list</v-icon>
                        <v-list-item-title class="hidden">My Requests</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title4" @click="setSelected('Edit_Profile')">
                        <v-icon left size="25">account_circle</v-icon>
                        <v-list-item-title class="hidden">Edit Profile</v-list-item-title>
                    </v-tab>
                </v-tabs>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn href="/" block>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-card>
        <v-main class="main_content">
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <StudentHome :companies="companies"></StudentHome>
                </v-tab-item>
                <v-tab-item>
                    <FindInternship :internships="internships"></FindInternship>
                </v-tab-item>
                <v-tab-item>
                    <MyRequests></MyRequests>
                </v-tab-item>
                <v-tab-item>
                    <ProfileContent></ProfileContent>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import StudentHome from "./StudentHome";
    import FindInternship from "./FindInternship";
    import ProfileContent from "./ProfileContent";
    import MyRequests from "./MyRequests";


    export default {
        name: 'StudentDashboard',
        components: {MyRequests, ProfileContent, FindInternship, StudentHome},
        props: {

        },
        data: () => ({
            drawer: true,
            internships: [],
            companies: [],
            img: 'require(\'./assets/logo.jpg\')',
            selected: '',
            title1: 'title',
            title2: 'title',
            title3: 'title',
            title4: 'title',
            title5: 'title',
            errors: [],
            tab: null,
            isHidden: true,
            users: []
        }),
        created() {
            this.setCompany();
            this.allCompanies();
        },
        methods: {
            setCompany() {
                axios.get('https://interlab4.azurewebsites.net/api/internships')
                    .then(response => {
                        this.internships = response.data;
                        console.log('Source Internships:');
                        console.log(response.data);
                    })
            },
            allCompanies(){
                axios.get('https://interlab4.azurewebsites.net/api/companies')
                    .then(response => {
                        this.companies = response.data;
                        console.log('Source Companies:');
                        console.log(response.data);
                    })
            },

            show(title) {
                if (title === 'Internships') this.isHidden = !this.isHidden
            },
            setSelected(info) {
                this.selected = info;

                if (info === 'Dashboard') {
                    this.title1 = "title-selected";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                }
                if (info === 'FindInternship') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title-selected";
                    this.title4 = "title";
                }
                if (info === 'MyRequests') {
                    this.title1 = "title";
                    this.title2 = "title-selected";
                    this.title3 = "title";
                    this.title4 = "title";
                }
                if (info === 'Edit_Profile') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title-selected";
                }
                return this.selected;
            },

        }
    };
</script>

<style scoped>
    #style-1 {
        font-family: 'Khula', sans-serif;
    }
    .logo{
        max-width:60%;
        height:45%;
        margin-left: 3.5vw;
    }
    .title {
        background-color: white;
        color: gray;
        font-weight: 300;
    }

    .title:hover {
        background-color: lightgray;
    }

    .title-selected {
        background-color: #4B7BFF;
        color: white;
        font-weight: 300;
    }

    .title-item {
        font-weight: 300;
    }
    .hidden {
        text-transform:none !important;
    }
    .main_content{
        padding: 0 0 0 200px !important;
    }

    @media screen and (max-width: 780px){
        .hidden {
            display: none;
        }
        .size {
            width: 100px !important;
        }
        .logo{
            max-width:100%;
            margin-left: 0 !important;
        }
        .main_content{
            padding: 0 0 0 100px !important;
        }
    }

</style>
