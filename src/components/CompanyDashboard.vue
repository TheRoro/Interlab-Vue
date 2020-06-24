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
                    <v-tab :class="title2" @click="setSelected('Internships')">
                        <v-icon left size="25">business_center</v-icon>
                        <v-list-item-title class="hidden">My Internships</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('CreateInternship')">
                        <v-icon left size="25">add</v-icon>
                        <v-list-item-title class="hidden">Create Internship</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title4" @click="setSelected('Edit_Profile')">
                        <v-icon left size="25">account_circle</v-icon>
                        <v-list-item-title class="hidden">Edit Profile</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title5" @click="setSelected('Edit_Profile')">
                        <v-icon left size="25">how_to_reg</v-icon>
                        <v-list-item-title class="hidden">History Intern</v-list-item-title>
                    </v-tab>
                </v-tabs>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn href="/" block>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-card>
        <v-content>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <MainContentInternship :internships="internships"></MainContentInternship>
                </v-tab-item>
                <v-tab-item>
                    <MainContentInternship :internships="internships"></MainContentInternship>
                </v-tab-item>
                <v-tab-item>
                    <CreateInternship></CreateInternship>
                </v-tab-item>
                <v-tab-item>
                    <ProfileCompany></ProfileCompany>
                </v-tab-item>
                <v-tab-item>
                    <QualifyIntern></QualifyIntern>
                </v-tab-item>
            </v-tabs-items>
        </v-content>
    </v-app>
</template>


<script>
    import axios from 'axios'
    import MainContentInternship from "./MainContentInternship";
    import CreateInternship from "./CreateInternship";
    import ProfileCompany from "./ProfileCompany";
    import QualifyIntern from "./QualifyIntern";
    //import Testing from "./Testing";

    export default {
        name: 'CompanyDashboard',
        components: {QualifyIntern,  ProfileCompany, CreateInternship, MainContentInternship},
        props: {
            selected: Boolean,
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
            title6: 'title',
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

                if (info === 'Internships') {
                    this.title1 = "title";
                    this.title2 = "title-selected";
                    this.title3 = "title";
                    this.title4 = "title";
                }
                if (info === 'Dashboard') {
                    this.title1 = "title-selected";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                }
                if (info === 'CreateInternship') {
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

<style>

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
