<template>
    <v-app light id="body" >
        <v-card>
            <v-navigation-drawer permanent fixed app clipped-left width="200px" class="tamanio">
                <v-toolbar flat color="white" dark>
                    <v-img :src="require('../assets/InterlabMini.png')" aspect-ratio="5"/>
                </v-toolbar>
                <v-tabs vertical v-model="tab" class="title1">
                    <v-tab :class="title1" @click="setSelected('Dashboard')">
                        <v-icon left size="25">dashboard</v-icon>
                        <v-list-item-title class="oculto">Dashboard</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title2" @click="setSelected('Pasantias')">
                        <v-icon left size="25">business_center</v-icon>
                        <v-list-item-title class="oculto">Mis Ofertas </v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('CrearPasantia')">
                        <v-icon left size="25">add</v-icon>
                        <v-list-item-title class="oculto">Crear Ofertas </v-list-item-title>
                    </v-tab>
                </v-tabs>
            </v-navigation-drawer>
        </v-card>
        <v-content>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <Footer></Footer>
                </v-tab-item>
                <v-tab-item>
                    <MainContentInternship :internships="internships" ></MainContentInternship>
                </v-tab-item>
                <v-tab-item>
                    <CrearPasantia></CrearPasantia>
                </v-tab-item>
            </v-tabs-items>
        </v-content>
    </v-app>
</template>


<script>
    import axios from 'axios'
    import Footer from "./Footer";
    import MainContentInternship from "./MainContentInternship";
    import CrearPasantia from "./CrearPasantia";

    export default {
        name: 'DashboardEmpresa',
        components: {CrearPasantia, MainContentInternship, Footer},
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
                if (title == 'Pasantias') this.isHidden = !this.isHidden
            },
            setSelected(info) {
                this.selected = info;

                if (info === 'Pasantias') {
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
                if (info === 'CrearPasantia') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title-selected";
                    this.title4 = "title";
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
    .letra {
        text-transform:none !important;
    }
    .oculto {
        text-transform:none !important;
    }

    @media screen and (max-width: 780px){
        .oculto {
            display: none;
        }
        .tamanio {
            width: 100px !important;
        }
    }

</style>
