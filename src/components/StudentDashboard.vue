<template>
    <v-app light id="body" >
        <v-card>
            <v-navigation-drawer permanent fixed app clipped-left width="200px" class="size">
                <v-toolbar flat color="white" dark>
                    <v-img :src="require('../assets/InterlabMini.png')" aspect-ratio="5"/>
                </v-toolbar>
                <v-tabs vertical v-model="tab" class="title1">
                    <v-tab :class="title1" @click="setSelected('Dashboard')">
                        <v-icon left size="25">dashboard</v-icon>
                        <v-list-item-title class="hidden">Dashboard</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('FindInternship')">
                        <v-icon left size="25">search</v-icon>
                        <v-list-item-title class="hidden">Find Internship</v-list-item-title>
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
        <v-main>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <MainContentInternship :internships="internships"></MainContentInternship>
                </v-tab-item>
                <v-tab-item>
                    <FindInternship :internships="internships"></FindInternship>
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
    import MainContentInternship from "./MainContentInternship";
    import FindInternship from "./FindInternship";
    import ProfileContent from "./ProfileContent";

    export default {
        name: 'StudentDashboard',
        components: {ProfileContent, FindInternship, MainContentInternship},
        props: {

        },
        data: () => ({
            drawer: true,
            internships: [],
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
        },
        methods: {
            setCompany() {
                axios.get('https://interlabwapostudios.azurewebsites.net/api/companies/1/internships')
                    .then(response => {
                        this.internships = response.data;
                        console.log('Source Internships:');
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
    #body {
        font-family: 'Khula', sans-serif;
    }

    .title {
        background-color: white;
        color: gray !important;
        font-family: 'Khula', sans-serif !important;
    }

    .title:hover {
        background-color: lightgray;
        font-family: 'Khula', sans-serif !important;
    }

    .title-selected {
        background-color: #4B7BFF;
        color: white !important;
        font-family: 'Khula', sans-serif !important;
    }

    .title-item {
        font-family: 'Khula', sans-serif;
        font-weight: 700;
    }
    .hidden {
        text-transform:none !important;
    }

    @media screen and (max-width: 780px){
        .hidden {
            display: none;
        }
        .size {
            width: 100px !important;
        }
    }

</style>
