<template>
    <v-container>
        <v-stepper vertical v-model="e6">
            <v-stepper-step :complete="e6 > 1" step="1"> Basic Info</v-stepper-step>
            <v-stepper-content step="1">
                <v-card v-if="showStep1" class="Step" width="100em" height="40em">
                    <v-card-title class="title1">Create Internship</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValid">
                            <v-row>
                                <v-col cols="12" sm="3">
                                    <v-card-title id="subtitle" class="subtitle">
                                        <v-icon color="black" size="30">view_quilt</v-icon>
                                        Basic Info
                                    </v-card-title>
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
                                            v-model="newName"
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
                                            v-model="newTitle"
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
                                            v-model="newCountry"
                                            :rules="[() => !!newCountry || 'This field is required']"
                                            :items="countries"
                                            label="Country"
                                            placeholder="Select..."
                                            required
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="3" align="right">
                                    <p class="subtitle-field">Salary</p>
                                    <p class="subtitle-field-mini">(Monthly)</p>
                                </v-col>
                                <v-col cols="12" sm="1" align="right">
                                    <div></div>
                                </v-col>
                                <v-col cols="12" sm="8">
                                    <v-text-field
                                            prefix="$"
                                            hint="1200.00 $"
                                            v-model="newSalary"
                                            :rules="[numberRule]"
                                            required>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-col class="text-right">
                            <v-btn :disabled="!isValid" @click="next('Step1')" bottom center class="white--text"
                                   color="#4b7bff"
                            >
                                next
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Offer Details</v-stepper-step>
            <v-stepper-content step="2">
                <v-card v-if="showStep2" class="Step" width="100em" height="40em">
                    <v-card-title class="title1">Create Internship</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValid">
                            <v-row>
                                <v-col cols="12" sm="3">
                                    <div>
                                        <v-card-title class="subtitle">
                                            <v-icon color="black" size="30">apps</v-icon>
                                            Offer Details
                                        </v-card-title>
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
                                    <v-textarea v-model="newDescription">
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
                            <v-btn :disabled="!isValid" bottom center class="white--text" color="#4b7bff"
                                   @click="next('Step2')">next
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Profile Requirements</v-stepper-step>
            <v-stepper-content step="3">
                <v-card v-if="showStep3" class="Step" width="100em" height="40em">
                    <v-card-title class="title1">Create Internship</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValid">
                            <v-row>
                                <v-col cols="12" sm="3">
                                    <div>
                                        <v-card-title class="subtitle">
                                            <v-icon color="black" size="30">check_box</v-icon>
                                            Profile Requirements
                                        </v-card-title>
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
                                            v-model="newField"
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
                                                    v-model="newSemester"
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
                            <v-btn :disabled="!isValid" bottom center class="white&#45;&#45;text" color="#4b7bff"
                                   @click="next('Step3')">next
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 4" step="4"> Documents</v-stepper-step>
            <v-stepper-content step="4">
                <v-card v-if="showStep4" class="Step" width="100em" height="40em">
                    <v-card-title class="title1">Create Internship</v-card-title>
                    <v-card-text>
                        <v-form v-model="isValid">
                            <v-row>
                                <v-col cols="12" sm="3">
                                    <v-card-title class="subtitle">
                                        <v-icon color="black" size="30">article</v-icon>
                                        Documents
                                    </v-card-title>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="3" align="right">
                                    <a class="subtitle-field">Required Documents</a>
                                </v-col>
                                <v-col cols="12" sm="1" align="right">
                                    <div></div>
                                </v-col>
                                <v-col cols="12" sm="8">
                                    <v-combobox
                                            v-model="newDocuments"
                                            :items="items"
                                            :search-input.sync="search"
                                            color=""
                                            hide-selected
                                            hint="Type to add a new document"
                                            label="Add some tags"
                                            multiple
                                            persistent-hint
                                            small-chips
                                    >
                                        <template v-slot:no-data>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </template>
                                    </v-combobox>
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
                                    >
                                        Create Internship
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title align="center" class="justify-center">Internship created successfully</v-card-title>
                                    <v-card-text align="center">Press continue to return to the dashboard</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-flex justify-center>
                                        <v-btn  color="primary" @click="submitInternship()">Continue</v-btn>
                                        </v-flex>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-stepper-content>
        </v-stepper>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CreateInternship",
        data: () => ({
                e6: 1,
                items: ['Curriculum Vitae', 'Birth Certificate'],
                search: null,
                newName: null,
                newTitle: null,
                newCountry: null,
                newSalary: null,
                newDescription: null,
                newLocation: null,
                newField: null,
                newSemester: null,
                newDocuments: null,
                newInternship: null,
                internshipId: null,
                isValid: true,
                dialog: null,
                showStep1: true,
                showStep2: false,
                showStep3: false,
                showStep4: false,
                showStep5: false,
                countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
                fields: ['Tech', 'Health', 'Transport', 'Accountancy', 'Human Resources', 'Graphic Design', 'Business', 'Call Center'],
                semesters: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                numberRule: v => {
                    if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99999999) return true;
                    return 'It has to be a number';
                },
                fieldRules: [v => !!v || 'Email is required'],
            }

        ),
        methods: {
            submitInternship(){
                axios.post('https://interlab4.azurewebsites.net/api/companies/1/internships', {
                    state: 'Available',
                    description: this.newDescription,
                    salary: parseInt(this.newSalary),
                    location: this.newCountry,
                    requiredDocuments: 'CV',
                    jobTitle: this.newTitle,
                    publicationDate: new Date(),
                    startingDate: new Date(),
                    finishingDate: new Date(),

                }).then((response) => {
                    this.newInternship = response.data;
                    this.internshipId = this.newInternship.id;
                    console.log(this.internshipId);
                    console.log(this.newInternship);
                    console.log(response.data);
                });
                this.dialog = false;
                location.reload();
            },
            next(Step) {

                this.e6 = this.e6 + 1;
                if (Step === 'Step1') {
                    this.showStep1 = false;
                    this.showStep2 = true;
                    console.log(this.newName, this.newTitle, this.newCountry, this.newSalary);
                }
                if (Step === 'Step2') {
                    this.showStep2 = false;
                    this.showStep3 = true;
                    console.log(this.newDescription);
                }
                if (Step === 'Step3') {
                    this.showStep3 = false;
                    this.showStep4 = true;
                    console.log(this.newField, this.newSemester);
                }
            }
        }
    }
</script>

<style scoped>
    .Step {
        width: 100em;
        align-content: center;
        position: center;
    }
    .justify-center{
        font-size: 1.5em!important;
        font-weight: bolder!important;
    }

    .next {
        position: center;
    }

    .subtitle-field {
        font-size: 20px;
        color: black;
        font-weight: 300;
    }

    .title1 {
        font-family: 'Khula', sans-serif;
        font-weight: 400;
        font-size: 1.5em;
    }

    .subtitle {
        font-weight: 400;
        font-size: 22px;
        color: black;
        justify-content: center;
    }
    .subtitle-field-mini{
        margin-top: -1.8vw;
        font-size: 1vw;
    }
</style>
