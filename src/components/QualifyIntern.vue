<template>
    <v-container class="qualifyintern">
    <v-card-title class="justify-start">Historial de Pasante</v-card-title>
        <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                :single-select="singleSelect"
                item-key="name"
                show-select
                class="elevation-1"
        >
            <template v-slot:[`item.actions`]>
                <div class="text-center">
                    <v-rating></v-rating>
                </div>
            </template>
            <template>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    export default {
        name: "QualifyIntern",
        data () {
            return {
                singleSelect: false,
                selected: [],
                headers: [
                    {
                        title: 'Empresa',
                        align: 'start',
                        sortable: false,
                        key: 'name',
                    },
                    { title: 'Nombres', key: 'nombres' },
                    { title: 'Apellidos', key: 'apellidos' },
                    { title: 'Contratado en', key: 'contratados' },
                    { title: 'Duración', key: 'duraciones' },
                    { title: 'Cargo', key: 'cargos' },
                    { title: 'Actions', key: 'actions'}
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        nombres: 'Omar Alonso',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Ice cream sandwich',
                        nombres: 'Maro',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Eclair',
                        nombres: 'BITY',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Cupcake',
                        nombres: 'CALIXTO',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Gingerbread',
                        nombres: 'Osegeriz',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Jelly bean',
                        nombres: 'Empe',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Lollipop',
                        nombres: 'Juan Carlos',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Honeycomb',
                        nombres: 'Alonso',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'Donut',
                        nombres: 'Marcelo',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                    {
                        name: 'KitKat',
                        nombres: 'Rodrigo Ramirez',
                        apellidos: '',
                        contratados: '',
                        duraciones: '',
                        cargos: '',
                    },
                ],
            }
        },
    }
</script>


<style scoped>
</style>
