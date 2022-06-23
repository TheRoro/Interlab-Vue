<template>
    <v-app id="style-1">
        <v-card>
            <v-navigation-drawer permanent width="200" class="size">
                <v-toolbar flat color="white">
                    <div>
                        <a href="/">
                            <img class="logo" :src="logo" alt="InterLab"/>
                        </a>
                    </div>
                </v-toolbar>
                <v-tabs direction="vertical" v-model="tab" class="title1">
                    <v-tab :class="title1" @click="setSelected('Dashboard')">
                        <v-icon start size="25">mdi-home</v-icon>
                        <v-list-item-title class="hidden">Home</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('FindInternship')">
                        <v-icon start size="25">mdi-magnify</v-icon>
                        <v-list-item-title class="hidden">Find Internship</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title2" @click="setSelected('MyRequests')">
                        <v-icon start size="25">mdi-format-list-bulleted</v-icon>
                        <v-list-item-title class="hidden">My Requests</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title4" @click="setSelected('Edit_Profile')">
                        <v-icon start size="25">mdi-account-circle</v-icon>
                        <v-list-item-title class="hidden">Edit Profile</v-list-item-title>
                    </v-tab>
                </v-tabs>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn @click="logout" block>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-card>
        <v-main class="main_content">
            <v-window v-model="tab">
                <v-window-item>
                    <StudentHome :companies="companies"></StudentHome>
                </v-window-item>
                <v-window-item>
                    <FindInternship :internships="internships"></FindInternship>
                </v-window-item>
                <v-window-item>
                    <MyRequests></MyRequests>
                </v-window-item>
                <v-window-item>
                    <ProfileContent></ProfileContent>
                </v-window-item>
            </v-window>
        </v-main>
    </v-app>
</template>

<script>
    import axios from '../api'
    import StudentHome from "./StudentHome.vue";
    import FindInternship from "./FindInternship.vue";
    import ProfileContent from "./ProfileContent.vue";
    import MyRequests from "./MyRequests.vue";
    import logo from "../assets/interlab2.png";


    export default {
        name: 'StudentDashboard',
        components: {MyRequests, ProfileContent, FindInternship, StudentHome},
        props: {

        },
        data: () => ({
            drawer: true,
            internships: [],
            companies: [],
            logo,
            selected: '',
            title1: 'title',
            title2: 'title',
            title3: 'title',
            title4: 'title',
            title5: 'title',
            errors: [],
            tab: 0,
            isHidden: true,
            users: []
        }),
        created() {
            this.setCompany();
            this.allCompanies();
        },
        methods: {
            async logout() {
                try {
                    await axios.post('/api/auth/logout');
                } finally {
                    this.$store.commit('clearSession');
                    await this.$router.push({name: 'login'});
                }
            },
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
