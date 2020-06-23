<template>
    <v-layout grid-list-md>
        <v-flex xs8 offset-md2>
            <div v-for="internship in internships" :key="internship.id">
                <v-card class="mx-auto" hover data-aos="zoom-in" data-aos-easing="ease">
                    <v-container fill-height fluid>
                        <v-layout>
                            <v-flex xs12 align-end d-flex>
                                <span class="headline">{{ internship.state }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card-text>{{ internship.description }}</v-card-text>
                </v-card>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "FindInternship",
        props: {
            internships: Array
        }
    }
</script>

<style scoped>

</style>
