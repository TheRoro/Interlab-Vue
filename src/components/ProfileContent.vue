<template>
    <v-container class="profileContent">
        <v-card-title class="justify-start">Edit Profile</v-card-title>
        <v-card v-if="showPersonal">
            <p>Personal Info</p>
            <div class="Names">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            label="Name"
                            v-model="firstName"
                            :rules="[v => !!v || 'Name is required']"
                            required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                            label="Last Name" hint="one of your parents last name"
                            v-model="lastName"
                            :rules="[v => !!v || 'Last Name is required']"
                            required>
                    </v-text-field>
                </v-col>
            </v-row>
            </div>
            <div  class="countries">
            <v-row>
                <v-col cols="12" sm="6">
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
                <v-col cols="12" sm="6">
                    <v-text-field
                            label="City" hint="Where do you live?"
                            v-model="city"
                            :rules="[v => !!v || 'Last Name is required']"
                            required>
                    </v-text-field>
                </v-col>
            </v-row>
            </div>
            <v-row>
                <v-col cols="12" sm="3">
                    <v-text-field
                            label="Phone Number" hint="In case recruiters need to call you ;)"
                            v-model="phone"
                            :rules="[v => !!v || 'Last Name is required']"
                            required>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card v-if="showAcademic">
            <p>Academic Info</p>
            <v-row>
                <v-col cols="12" sm="5">
                    <v-text-field
                            label="University"
                            v-model="univeristy"
                            :rules="[v => !!v || 'University Name is required']"
                            required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="5">
                    <v-text-field
                            label="Degree"
                            v-model="degree"
                            :rules="[v => !!v || 'Degree is required']"
                            required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                    <v-select
                            v-model="select"
                            :items="items"
                            color="pink"
                            label="Semester"
                            required
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                            label="Field"
                            v-model="field"
                            :rules="[v => !!v || 'Name is required']"
                            required>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card-actions>
            <v-btn v-if="showAcademic"  @click="backClick" >Back</v-btn>
            <v-col class="text-right">
                <v-btn v-if="showPersonal" :class="saveButton" @click="nextClick" bottom center class="white--text" color="#4b7bff">Next</v-btn>
                <v-btn v-if="showAcademic" :class="saveButton" @click="saveClick" bottom center class="white--text" color="#4b7bff">Save Changes</v-btn>
            </v-col>
        </v-card-actions>
    </v-container>
</template>

<script>
    export default {
        name: "ProfileContent",
        props: {
            articles: Array
        },
        data: () => ({
                email: null,
                password: null,
                firstName: null,
                lastName: null,
                isValid: true,
                saveButton: "saveButton",
                university: null,
                country: null,
                city: null,
                phone: null,
                degree: null,
                select: ['1'],
                showPersonal: true,
                showAcademic: false,
                items: [
                    '1','2','3','4','5','6','7','8','9','10','11','12'
                ],
                countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            }
        ),
        methods:{
            saveClick(){
                this.showAcademic = false;
            },
            nextClick(){
                this.showPersonal = false;
                this.showAcademic = true;
            },
            backClick(){
                this.showPersonal = true;
                this.showAcademic = false;
            }
        }
    }
</script>

<style scoped>
    .profileContent{
        font-family: 'Khula', sans-serif;
    }

    p{
        color: black;
    }

    .saveButton{
        background-color: #4b7bff;

    }
    .v-btn{
        text-transform:none !important;
    }
    .v-text-field{

    }
    .v-card {
        box-shadow: none;
    }

    @media only screen and (max-width: 600px) {
        .Names{
            font-size: 3.5vw;
        }
        .countries{
            font-size: 3.5vw;
        }
    }

</style>

