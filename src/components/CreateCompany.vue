<template>
    <v-app>
        <v-content>
            <v-card width="100%" height="100%">
                <v-card-title class="title1">Create Company</v-card-title>
                <v-card-text>
                    <v-form v-model="isValid">
                        <v-row>
                            <v-col cols="12" sm="3">
                                <v-card-title id="subtitle" class="subtitle">
                                    <v-icon color="black" size="30">search</v-icon>
                                    Basic Info
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Company Name</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                        placeholder="InterLab S.A"
                                        counter="25"
                                        v-model="name"
                                        :rules="[v=> !!v || 'Company Name is required']"
                                        required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Description</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-textarea v-model="description">
                                    <template v-slot:label counter="300">
                                        <div>
                                            Description you want to show about your company
                                        </div>
                                    </template>
                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Sector</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-autocomplete
                                        :items="fields"
                                        label="Field"
                                        v-model="field"
                                        :rules="fieldRules"
                                        required
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Company Email</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                        label="email"
                                        placeholder="sample@interlab.com"
                                        v-model="email"
                                        :rules="[v=> !!v || 'Email is required']"
                                        required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Company Phone Number</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                        label="Phone"
                                        placeholder="+51 999-999-999"
                                        v-model="phone"
                                        :rules="[numberRule]"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Company Address</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                        placeholder="Snowy Rock Pl"
                                        counter="40"
                                        v-model="address"
                                        :rules="[v=> !!v || 'Company Address is required']"
                                        required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">Country</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-autocomplete
                                        ref="country"
                                        v-model="country"
                                        :rules="[() => !!country || 'This field is required']"
                                        :items="countries"
                                        label="Country"
                                        placeholder="Select..."
                                        required
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" >
                                <p class="subtitle-field">City</p>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                        placeholder="Lima"
                                        v-model="city"
                                        :rules="[v=> !!v || 'City is required']"
                                        required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-col class="text-right">
                        <v-dialog v-model="dialog" persistent max-width="30em">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        :disabled="!isValid"
                                        @click="createCompany()"
                                >
                                    Create Company
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title align="center" class="justify-center">Company created successfully</v-card-title>
                                <v-card-text align="center">Press continue to go to the dashboard</v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-flex justify-center>
                                        <v-btn  color="primary" @click="goDashboard()">Continue</v-btn>
                                    </v-flex>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-card-actions>

            </v-card>
        </v-content>
    </v-app>
</template>

<script>
    import axios from "axios";
    import router from "../router";
    export default {
        methods: {
            createCompany() {
                console.log(this.name);
                console.log(this.description);
                console.log(this.field);
                console.log(this.email);
                console.log(this.phone);
                console.log(this.address);
                console.log(this.country);
                console.log(this.city);
                axios.post('https://interlab4.azurewebsites.net/api/companies', {
                    name: this.name,
                    description: this.description,
                    sector: this.field,
                    email: this.email,
                    phone: this.phone,
                    address: this.address,
                    country: this.country,
                    city: this.city
                }).then(response => {
                    this.$store.commit('saveCompanyId', response.data.id);
                    console.log(this.$store.state.companyId);
                    axios.post('https://interlab4.azurewebsites.net/api/users/'+ this.$store.state.userId +'/companies/'+ this.$store.state.companyId);
                })
            },
            goDashboard() {
                router.push({path: `/CompanyDashboard`});
            }
        },
        data: () => ({
            name: null,
            email: null,
            description: null,
            address: null,
            field: null,
            phone: null,
            isValid: true,
            country: null,
            city: null,
            fields: ['Tech', 'Health', 'Transport', 'Accountancy', 'Human Resources', 'Graphic Design', 'Business', 'Call Center'],
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            fieldRules: [v => !!v || 'Field is required'],
            numberRule: v => {
                if (!v.trim()) return true;
                if (!isNaN(parseFloat(v)) || v >= 0 && v <= 99999999 &&  v==='-' && v===' ' && v==='+') return true;
                return 'It has to be a number';
            },
        })
    }
</script>

<style scoped>
    .subtitle-field {
        margin-left: 20vw;
    }
    @media only screen and (max-width: 600px) {
        .subtitle-field {
            margin-left: 0!important;
        }
    }
</style>
