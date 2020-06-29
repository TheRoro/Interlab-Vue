<template>
    <v-layout class="internship_body" id="style-1">
        <v-flex class="internship_container">

            <div v-for="internship in internships" :key="internship.id">
                <v-card class="internship_card">
                    <div class="upper_box">
                        <h1 class="headline">{{ internship.jobTitle }}</h1>
                        <v-row>
                            <v-col cols="12" sm="1">
                                <v-icon class="location_icon">location_on</v-icon>
                            </v-col>
                            <v-col cols="12" sm="11">
                                <v-card-text class="sub-headline">{{ internship.location }}</v-card-text>
                            </v-col>
                        </v-row>
                    </div>
                    <v-card-text class="about"> Salary: {{ internship.salary }}</v-card-text>
                    <v-card-text class="about"> About the job: {{ internship.description }}</v-card-text>
                </v-card>
            </div>


        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "MainContentInternship",
        props: {
            internships: Array
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
        font-size: 1.3vw!important;
    }
    .sub-headline{
        margin-left: 0.5em;
        margin-top: -1em;
        font-family: 'Khula', sans-serif !important;
        font-weight: 300;
        font-size: 1vw;
    }
    .about{
        font-family: 'Khula', sans-serif;
        font-weight: 500;
        font-size: 1vw;
        color: black !important;
    }
    .upper_box{
        background: rgb(46,193,195);
        background: linear-gradient(0deg, rgba(46,193,195,1) 21%, rgba(170,45,253,1) 93%);
        height: 90%;
        border-radius: 20px !important;
        color: white;
    }

    .internship_card{
        margin-bottom: 1em;
        border-radius: 20px !important;
        margin-bottom: 3vw;
    }
    .internship_body{
        margin-right: 5vw!important;
        margin-left: 5vw!important;
    }
    .location_icon{
        margin-left: 1em;
        color: white;
        font-weight: bold;
    }
</style>
