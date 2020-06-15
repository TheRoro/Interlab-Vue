<template>
    <v-container>
        <v-card v-if="showPaso1" class="Paso" width="100em" height="40em">
            <v-card-title class="title1">Crear Pasantia</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <v-card-title id="subtitulo" class="subtitulo"> <v-icon color="black" size="30">search</v-icon>Informacion Basica</v-card-title>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Nombre de la empresa </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-text-field
                                    placeholder="Placeholder"
                                    counter="25"
                                    v-model="nombre"
                                    :rules="[v=> !!v || 'Nombre de la empresa es requerido']"
                                    required
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Titulo del Empleo </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-text-field
                                    placeholder="Placeholder"
                                    counter="25"
                                    v-model="titulo"
                                    :rules="[v=> !!v || 'Titulo is required']"
                                    required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Ubicacion </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-autocomplete
                                    ref="country"
                                    v-model="country"
                                    :rules="[() => !!country || 'This field is required']"
                                    :items="countries"
                                    label="Pais"
                                    placeholder="Select..."
                                    required
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Salario </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-text-field
                                    prefix="S/."
                                    hint="example: 1200.00"
                                    v-model="salario"
                                    :rules="[numberRule]"
                                    required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-col class="text-right">
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="siguiente('Paso1')">Siguiente</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showPaso2" class="Paso" width="100em" height="40em">
            <v-card-title class="title1">Crear Pasantia</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <div >
                                <v-card-title class="subtitulo"> <v-icon color="black" size="30">apps</v-icon>Detalles de oferta</v-card-title>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Descripcion del empleo </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-textarea>
                                <template v-slot:label>
                                    <div>
                                        Bio <small>(optional)</small>
                                    </div>
                                </template>
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-col class="text-right">
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="siguiente('Paso2')">Siguiente</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showPaso3" class="Paso" width="100em" height="40em">
            <v-card-title class="title1">Crear Pasantia</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <div >
                                <v-card-title class="subtitulo"> <v-icon color="black" size="30">check_box</v-icon>Requisitos de Perfil</v-card-title>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field"> Skills Generales </a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-autocomplete
                                    :items="sectores"
                                    label="Sector"
                                    v-model="sector"
                                    :rules="sectorRules"
                                    required
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-row>
                                <v-col cols="12" sm="2" align="left">
                                    <label>Cursando</label>
                                </v-col>
                                <v-col cols="12" sm="10" align="right">
                                    <v-select
                                            :items="ciclos"
                                            suffix="Ciclo"
                                            required
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-col class="text-right">
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="siguiente('Paso3')">Siguiente</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showPaso4"></v-card>
        <v-card v-if="showPaso5"></v-card>

    </v-container>
</template>

<script>
    export default {
        name: "CrearPasantia",
        data: () => ({
                nombre: null,
                titulo: null,
                ubicacion: null,
                salario: null,
                country: null,
                sector:null,
                isValid: true,
                showPaso1: true,
                showPaso2: false,
                showPaso3: false,
                showPaso4: false,
                showPaso5: false,
                countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
                sectores: ['Informatica', 'Salud', 'Transporte', 'Contabilidad', 'Recursos Humanos', 'Diseño', 'Administracion', 'Call Center'],
                ciclos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                numberRule: v  => {
                    if (!v.trim()) return true;
                    if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99999999) return true;
                    return 'It has to be a number';
                },
                sectorRules: [v => !!v || 'Email is required'],
            }

        ),
        methods: {
            siguiente(paso) {
                if (paso === 'Paso1') {
                    this.showPaso1 = false;
                    this.showPaso2 = true;
                }
                if (paso === 'Paso2') {
                    this.showPaso2 = false;
                    this.showPaso3 = true;
                }
                if (paso === 'Paso3') {
                    this.showPaso3 = false;
                    this.showPaso4 = true;
                }
                if (paso === 'Paso4') {
                    this.showPaso4 = false;
                    this.showPaso5 = true;
                }
                if (paso === 'Paso5') {
                    this.showPaso5 = false;
                }
            }
        }
    }
</script>

<style scoped>
    .Paso{
        width: 100em;
        align-content: center;
        position: center;
    }
    .siguiente{
        position: center;
    }
    .subtitle-field{
        font-size: 20px;
        color: black;
    }
    .title1 {
        font-family: 'Khula', sans-serif;
        font-weight: bold;
        font-size: 1.5em;
    }
    .subtitulo {
        font-weight: 600;
        font-size: 22px;
        color: black;
        justify-content: center;
    }
</style>
