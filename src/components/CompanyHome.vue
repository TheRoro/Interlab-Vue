<template>
    <v-layout class="internship_body" id="style-1">
        <v-flex class="internship_container">
            <div>
                <h1 class="welcome">Welcome: Company </h1>
            </div>
            <h1 class="posting">Take a look to some of the companies currently posting: </h1>
            <v-row>
                <v-col>
                    <div v-for="company in companies.slice(0,Math.round(companies.length/2))" :key="company.id">
                        <v-card class="internship_card">
                            <div class="upper_box">
                                <h1 class="headline">{{ company.name }}</h1>
                                <v-row>
                                    <v-col cols="12" sm="1">
                                        <v-icon class="location_icon">location_on</v-icon>
                                    </v-col>
                                    <v-col cols="12" sm="11">
                                        <v-card-text class="sub-headline">{{ company.city }}, {{ company.country }}</v-card-text>
                                    </v-col>
                                </v-row>
                            </div>
                            <v-card-text class="about"> Sector: {{ company.sector }}</v-card-text>
                            <v-card-text class="about"> About the job: {{ company.description }}</v-card-text>
                        </v-card>
                    </div>
                </v-col>
                <v-col>
                    <div v-for="company in companies.slice((Math.round(companies.length/2)), companies.length)" :key="company.id">
                        <v-card class="internship_card">
                            <div class="upper_box">
                                <h1 class="headline">{{ company.name }}</h1>
                                <v-row>
                                    <v-col cols="12" sm="1">
                                        <v-icon class="location_icon">location_on</v-icon>
                                    </v-col>
                                    <v-col cols="12" sm="11">
                                        <v-card-text class="sub-headline">{{ company.city }}, {{ company.country }}</v-card-text>
                                    </v-col>
                                </v-row>
                            </div>
                            <v-card-text class="about"> Sector: {{ company.sector }}</v-card-text>
                            <v-card-text class="about"> About the job: {{ company.description }}</v-card-text>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "CompanyHome",
        props: {
            companies: Array
        },
        data: () => ({
            dialog: false,
        }),
        created() {
        },
        methods: {
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
        padding-top: 0.5em;
        font-family: 'Khula', sans-serif !important;
        font-weight: 300;
    }
    .sub-headline{
        margin-left: 0.5em;
        margin-top: -1em;
        font-family: 'Khula', sans-serif !important;
        font-weight: 300;
    }
    .about{
        font-family: 'Khula', sans-serif;
        font-weight: 500;
        color: black !important;
    }
    .upper_box{
        background: rgb(127,139,255);
        background: linear-gradient(90deg, rgba(127,139,255,1) 0%, rgba(251,129,237,1) 100%);
        height: 90%;
        border-radius: 20px !important;
    }
    .posting{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        font-family: 'Khula', sans-serif !important;
        font-weight: 500;
    }
    .welcome{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-family: 'Khula', sans-serif !important;
        font-weight: 300;
        font-size: 1.3em;
    }
    .internship_card{
        margin-bottom: 1em;
        border-radius: 20px !important;
    }
    .internship_body{

    }
    .location_icon{
        margin-left: 1em;
    }
</style>


