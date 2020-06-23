<template>
    <v-navigation-drawer v-model="drawer" width="15%" permanent fixed app clipped-left class="elevation-2" id="style-1">
        <v-list dense class="pt-3 white--text">
            <v-list-item @click=selectButton(dashboard) :class="dashboardState">
                <v-list-item-icon>
                    <v-icon>dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="sideMenuTitle">Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click=selectButton(profile) :class="profileState">
                <v-list-item-icon>
                    <v-icon>account_circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="sideMenuTitle">Edit Profile</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "SideMenu",
        props: {
            apiKey: String,
            drawer: Boolean
        },
        data: () => ({
            sources: [],
            errors: [],
            dashboardState: "inactive",
            profileState: "inactive",
            profile: "profile",
            dashboard: "dashboard",
        }),
        created(){
            axios.get('https://newsapi.org/v2/sources?apiKey='+this.apiKey)
                .then(response=>{
                    this.sources = response.data.sources;
                    console.log('Sources: ');
                    console.log(response.data.sources);
                })
        },
        methods: {
            urlToLogo(source) {
                const hostname = new URL(source.url).hostname
                return 'https://logo.clearbit.com/'+hostname;
            },
            selectSource(sourceId){
                this.$emit('select-source', sourceId);
            },
            selectButton(name){
                if(name.toString() === "profile"){
                    this.profileState = "active";
                    this.dashboardState = "inactive";
                    console.log(name);
                }
                else{
                    this.profileState = "inactive";
                    this.dashboardState = "active";
                    console.log(name);
                }
            }
        }
    }
</script>

<style scoped>
    .inactive{
        background-color: white;
    }
    .active{
        background-color: #4b7bff;
    }
    #style-1 {
        width: 10px;
        font-family: 'Khula', sans-serif;
    }
    @media screen and (max-width: 780px) {

        .sideMenuTitle {
            display: none;
        }
    }
</style>
