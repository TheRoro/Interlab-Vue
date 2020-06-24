<template>
    <v-layout class="internship_body" id="style-1">
            <v-dialog v-model="dialog" width="400">
                <template v-slot:activator="{ on, attrs }">
                    <v-flex class="internship_container">
                        <div>
                            <v-text-field v-on:keyup.enter="submit" class="search_bar" type="text" placeholder="Search..."></v-text-field>
                        </div>

                        <h1 class="results_title">Search Results: </h1>
                        <v-row>
                            <v-col>
                                <div v-for="internship in internships.slice(0,Math.round(internships.length/2))" :key="internship.id">
                                    <v-card class="internship_card">
                                        <div class="upper_box">
                                            <v-row>
                                                <v-col cols="12" sm="8">
                                                    <span class="headline">Software Engineer</span>
                                                    <v-card-text class="sub-headline">{{ internship.description }} </v-card-text>
                                                </v-col>
                                                <v-col cols="12" sm="4">
                                                    <v-btn class="apply_btn" dark v-bind="attrs" v-on="on" @click="selectButton">Apply</v-btn>
                                                </v-col>
                                            </v-row>
                                        </div>
                                        <v-row>
                                            <v-col cols="12" sm="8">
                                                <v-card-text> State: {{ internship.state }}</v-card-text>
                                                <v-card-text > Salary: $ {{ internship.salary }} - {{internship.salary+"0"}} </v-card-text>
                                                <v-card-text> Starting Date: {{ internship.startingDate }}</v-card-text>
                                                <v-card-text> Finishing Date: {{ internship.finishingDate }}</v-card-text>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </div>
                            </v-col>
                            <v-col>
                                <div v-for="internship in internships.slice((Math.round(internships.length/2)), internships.length)" :key="internship.id">
                                    <v-card class="internship_card">
                                        <div class="upper_box">
                                            <v-row>
                                                <v-col cols="12" sm="8">
                                                    <span class="headline">UX Designer</span>
                                                    <v-card-text class="sub-headline">{{ internship.description }} </v-card-text>
                                                </v-col>
                                                <v-col cols="12" sm="4">
                                                    <v-btn class="apply_btn" dark v-bind="attrs" v-on="on"  @click="selectButton">Apply</v-btn>
                                                </v-col>
                                            </v-row>
                                        </div>
                                        <v-row>
                                            <v-col cols="12" sm="8">
                                                <v-card-text> State: {{ internship.state }}</v-card-text>
                                                <v-card-text > Salary: $ {{ internship.salary }} - {{internship.salary+"0"}} </v-card-text>
                                                <v-card-text> Starting Date: {{ internship.startingDate }}</v-card-text>
                                                <v-card-text> Finishing Date: {{ internship.finishingDate }}</v-card-text>
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
    export default {
        name: "FindInternship",
        props: {
            internships: Array
        },
        data: () => ({
            dialog: false,
        }),
        methods: {
            selectButton(){

            },
            submit(){
                location.reload();
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
    }
    .sub-headline{
        margin-left: 1.2em;
    }
    .upper_box{
        background-image: url("https://thumbs.dreamstime.com/b/blurred-blue-bright-gradient-blue-light-gradient-purple-background-violet-purple-gradient-soft-light-wallpaper-blurred-blue-125220733.jpg");
        padding-bottom: 1em;
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
        height: 50% !important;
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
</style>
