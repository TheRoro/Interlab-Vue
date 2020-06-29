<template>
    <v-data-table
            :headers="headers"
            :items="this.$store.state.internships"
            :items-per-page="15"
            class="elevation-1"
    ></v-data-table>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MyRequests",
        data: () => ({
            headers: [
                {text: 'Job Title', align: 'start', sortable: false, value: 'jobTitle', },
                { text: 'Location', value: 'location' },
                { text: 'Salary', value: 'salary' },
                { text: 'Date', value: 'startingDate' },
            ],
        }),
        created() {
            this.getInternships();
            console.log("Ya entre amigo 3");
        },
        methods: {
            getInternships() {
                console.log("Ya entre amigo 2");
                axios.get('https://interlab4.azurewebsites.net/api/users/'+this.$store.state.userId+'/internships')
                .then(response => {
                    this.$store.commit('saveInternships', response.data);
                    console.log("Esta es", response.data);
                });
            }
        }
    }
</script>

<style scoped>

</style>
