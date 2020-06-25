<template>
    <v-layout class="internship_body" id="style-1">
        <v-dialog v-model="dialog" width="400">
            <template v-slot:activator="{ on, attrs }">
                <v-flex class="internship_container">
                    <div>
                        <h1 class="results_title">Welcome: Rodrigo </h1>
                    </div>
                    <h1 class="results_title">Search Results: </h1>
                    <v-row>
                        <v-col>
                            <div v-for="company in companies.slice(0,Math.round(companies.length/2))" :key="company.id">
                                <v-card class="internship_card">
                                    <div class="upper_box">
                                        <v-row>
                                            <v-col cols="12" sm="8">
                                                <h1 class="headline">{{ company.name }}</h1>
                                                <v-row>
                                                    <v-col cols="12" sm="1">
                                                        <v-icon class="location_icon">location_on</v-icon>
                                                    </v-col>
                                                    <v-col cols="12" sm="11">
                                                        <v-card-text class="sub-headline">{{ company.location }}</v-card-text>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-btn class="apply_btn" dark v-bind="attrs" v-on="on" @click="selectButton">Apply</v-btn>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <v-row>
                                        <v-col cols="12" sm="8">
                                            <v-card-text> About the job: {{ company.description }}</v-card-text>
                                            <v-card-text> Salary: $ {{ company.salary }} - {{company.salary*2}} </v-card-text>
                                          </v-col>
                                        <v-col cols="12" sm="4">
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </div>
                        </v-col>
                        <v-col>
                            <div v-for="company in companies.slice((Math.round(companies.length/2)), companies.length)" :key="company.id">
                                <v-card class="internship_card">
                                    <div class="upper_box">
                                        <v-row>
                                            <v-col cols="12" sm="8">
                                                <h1 class="headline">company.jobTitle</h1>
                                                <v-row>
                                                    <v-col cols="12" sm="1">
                                                        <v-icon class="location_icon">location_on</v-icon>
                                                    </v-col>
                                                    <v-col cols="12" sm="11">
                                                        <v-card-text class="sub-headline">{{ company.location }}</v-card-text>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-btn class="apply_btn" dark v-bind="attrs" v-on="on" @click="selectButton">Apply</v-btn>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <v-row>
                                        <v-col cols="12" sm="8">
                                            <v-card-text> About the job: {{ company.description }}</v-card-text>
                                            <v-card-text> Sector:  {{ company.sector }} </v-card-text>
                                          </v-col>
                                        <v-col cols="12" sm="4">
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </v-flex>
            </template>
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Success!</v-card-title>
                <v-card-text>Successfully applied to this internship</v-card-text>
                <v-card-text>Check it out in your requests ;)</v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">Continue</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import userId from './Login'
    export default {
        name: "StudentHome",
        props: {
            companies: Array
        },
        data: () => ({
            dialog: false,
        }),
        created() {
            this.getUserId();
        },
        methods: {
            getUserId(){
                console.log("UserId in home: ", userId);
                for (let i = 0; i < this.profiles.length; i++) {
                    if (this.profiles[i].user_id === this.userId) {
                        console.log(this.profiles[i].first_name);
                        break;
                    }
                }
            },
            selectButton(){

            },
            submit(){

            }
        }
    }
</script>

<style scoped>
    .internship_container{
        margin-left: 1em;
        margin-right: 1em;
    }
    .headline{
        margin-left: 1em;
        margin-top: 0.5em;
    }
    .sub-headline{
        margin-left: 0.5em;
        margin-top: -1em;
    }
    .upper_box{
        background-image: url("https://thumbs.dreamstime.com/b/blurred-blue-bright-gradient-blue-light-gradient-purple-background-violet-purple-gradient-soft-light-wallpaper-blurred-blue-125220733.jpg");
        height: 90%;
        border-radius: 20px !important;
    }
    .apply_btn{
        background-color: #4b7bff !important;
        width: 80%;
        margin-top: 2em;
        margin-left: -3em;
        padding-left: 0;
        border-left: 0;
        border-radius: 20px;
        color: white;
        text-transform:none !important;
        height: 35% !important;
    }
    .results_title{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    .internship_card{
        margin-bottom: 1em;
        border-radius: 20px !important;
    }
    .internship_body{
        font-family: 'Khula', sans-serif !important;
    }
    #style-1 {
        font-family: 'Khula', sans-serif !important;
    }
    .search_bar{
        width: 90%;
        margin-left: 2em;
    }
    .location_icon{
        margin-left: 1em;
    }
</style>

