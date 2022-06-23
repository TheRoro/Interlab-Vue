<template>
    <v-navigation-drawer :value="drawer" width="15%" permanent fixed app clipped-left class="elevation-2" id="style-1">
        <v-list density="compact" class="pt-3 text-white">
            <v-list-item prepend-icon="mdi-view-dashboard" @click=selectButton(dashboard) :class="dashboardState">
                <v-list-item-title class="sideMenuTitle">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-circle" @click=selectButton(profile) :class="profileState">
                <v-list-item-title class="sideMenuTitle">Edit Profile</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "SideMenu",
        props: {
            drawer: Boolean
        },
        data: () => ({
            errors: [],
            dashboardState: "inactive",
            profileState: "inactive",
            profile: "profile",
            dashboard: "dashboard",
        }),
        methods: {
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
