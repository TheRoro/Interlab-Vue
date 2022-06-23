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
                        <v-icon start size="25">mdi-view-dashboard</v-icon>
                        <v-list-item-title class="hidden">Dashboard</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title2" @click="setSelected('Internships')">
                        <v-icon start size="25">mdi-briefcase</v-icon>
                        <v-list-item-title class="hidden">My Internships</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('CreateInternship')">
                        <v-icon start size="25">mdi-plus</v-icon>
                        <v-list-item-title class="hidden">Create Internship</v-list-item-title>
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
                    <CompanyHome :companies="companies"></CompanyHome>
                </v-window-item>
                <v-window-item>
                    <MainContentInternship :internships="$store.state.internships"></MainContentInternship>
                </v-window-item>
                <v-window-item>
                    <CreateInternship></CreateInternship>
                </v-window-item>
                <v-window-item>
                    <ProfileCompany></ProfileCompany>
                </v-window-item>
            </v-window>
        </v-main>
    </v-app>
</template>


<script>
    import axios from '../api'
    import CompanyHome from "./CompanyHome.vue";
    import MainContentInternship from "./MainContentInternship.vue";
    import CreateInternship from "./CreateInternship.vue";
    import ProfileCompany from "./ProfileCompany.vue";
    import logo from "../assets/interlab2.png";
    //import Testing from "./Testing";

    export default {
        name: 'CompanyDashboard',
        components: {  ProfileCompany, CreateInternship, MainContentInternship, CompanyHome},
        props: {

        },
        data: () => ({
            drawer: true,
            companies: [],
            logo,
            selected: '',
            title1: 'title',
            title2: 'title',
            title3: 'title',
            title4: 'title',
            title5: 'title',
            title6: 'title',
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
                axios.get('/api/me/company/internships')
                    .then(response => {
                        this.$store.commit('saveInternships', response.data);
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

                if (info === 'Internships') {
                    this.title1 = "title";
                    this.title2 = "title-selected";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title";
                }
                if (info === 'Dashboard') {
                    this.title1 = "title-selected";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title";
                }
                if (info === 'CreateInternship') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title-selected";
                    this.title4 = "title";
                    this.title5 = "title";
                }
                if (info === 'Edit_Profile') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title-selected";
                    this.title5 = "title";
                }
                if (info === 'History_Intern') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title-selected";
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
        font-weight: 700;
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
