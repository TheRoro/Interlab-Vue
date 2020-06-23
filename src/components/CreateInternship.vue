<template>
    <v-container>
        <v-card v-if="showStep1" class="Step" width="100em" height="40em">
            <v-card-title class="title1">Create Internship</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <v-card-title id="subtitle" class="subtitle"> <v-icon color="black" size="30">search</v-icon>Basic Info</v-card-title>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">Company Name</a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
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
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">Job Title</a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-text-field
                                    placeholder="Software Engineer"
                                    counter="25"
                                    v-model="title"
                                    :rules="[v=> !!v || 'Job Title is required']"
                                    required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">Location</a>
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
                                    label="Country"
                                    placeholder="Select..."
                                    required
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">Salary</a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-text-field
                                    prefix="$"
                                    hint="1200.00 $"
                                    v-model="salary"
                                    :rules="[numberRule]"
                                    required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-col class="text-right">
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="next('Step1')">next</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showStep2" class="Step" width="100em" height="40em">
            <v-card-title class="title1">Create Internship</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <div >
                                <v-card-title class="subtitle"> <v-icon color="black" size="30">apps</v-icon>Offer Details</v-card-title>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">Job Description</a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-textarea>
                                <template v-slot:label>
                                    <div>
                                        Main activities to perform during the job
                                    </div>
                                </template>
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-col class="text-right">
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="next('Step2')">next</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showStep3" class="Step" width="100em" height="40em">
            <v-card-title class="title1">Create Internship</v-card-title>
            <v-card-text>
                <v-form v-model="isValid">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <div >
                                <v-card-title class="subtitle"> <v-icon color="black" size="30">check_box</v-icon>Profile Requirements</v-card-title>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="3" align="right">
                            <a class="subtitle-field">General Skills</a>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
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
                        <v-col cols="12" sm="3" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="1" align="right">
                            <div></div>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-row>
                                <v-col cols="12" sm="2" align="left">
                                    <label>Semester:</label>
                                </v-col>
                                <v-col cols="12" sm="10" align="right">
                                    <v-select
                                            :items="semesters"
                                            suffix="Semester"
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
                    <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff" @click="next('Step3')">next</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        <v-card v-if="showStep4"></v-card>
        <v-card v-if="showStep5"></v-card>

    </v-container>
</template>

<script>
    export default {
        name: "CreateInternship",
        data: () => ({
                name: null,
                title: null,
                location: null,
                salary: null,
                country: null,
                field:null,
                isValid: true,
                showStep1: true,
                showStep2: false,
                showStep3: false,
                showStep4: false,
                showStep5: false,
                countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
                fields: ['Tech', 'Health', 'Transport', 'Accountancy', 'Human Resources', 'Graphic Design', 'Business', 'Call Center'],
                semesters: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                numberRule: v  => {
                    if (!v.trim()) return true;
                    if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99999999) return true;
                    return 'It has to be a number';
                },
                fieldRules: [v => !!v || 'Email is required'],
            }

        ),
        methods: {
            next(Step) {
                if (Step === 'Step1') {
                    this.showStep1 = false;
                    this.showStep2 = true;
                }
                if (Step === 'Step2') {
                    this.showStep2 = false;
                    this.showStep3 = true;
                }
                if (Step === 'Step3') {
                    this.showStep3 = false;
                    this.showStep4 = true;
                }
                if (Step === 'Step4') {
                    this.showStep4 = false;
                    this.showStep5 = true;
                }
                if (Step === 'Step5') {
                    this.showStep5 = false;
                }
            }
        }
    }
</script>

<style scoped>
    .Step{
        width: 100em;
        align-content: center;
        position: center;
    }
    .next{
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
    .subtitle {
        font-weight: 600;
        font-size: 22px;
        color: black;
        justify-content: center;
    }
</style>
