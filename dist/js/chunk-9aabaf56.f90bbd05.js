(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aabaf56","chunk-38d8e494"],{2350:function(t,s,e){},"51ef":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABXCAYAAAB4I3kWAAAABHNCSVQICAgIfAhkiAAABF5JREFUeF7tnDGIHGUUx3+zuRQWgtgowVaM3OLZGBCtRFBMGhWVeIiJsbJQ5E5BRIukschCVKwkISdcYqNoI2qrV4iFWd1TsbIRtBAEBZtjR77Zmd1vNjM7b24fyyb+t7qd+c/7Zn7z/957MztzCfq4EUjcIikQguloAsEUTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs4UTEcCjqHkTMF0JOAYSs68zmHeBDxhOMYrwLcG3cIky+jMO4EfDQTeAl4z6BYmEUxH1IIpmBkBTXODEZQzDZCsEsG0kjLoBNMAySoRTCspg+4w8JNBpwJkgCSYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiWBaSRl0gmmAZJUIppWUQSeYBkhWiQVmCrwC9KxBF6FbxpvDTTD/Bt4DhsDri4BkHeNag7kDPAX8Aryj34CaT3OdMz8AngN2gTt0p70ZZFBUwXwZeBt4F3gBshcbdNfIwDOGuQccBb4EVoHvgIN5DMFsAfMf4B7g53ybP4Gbo+0F0wjzM+AB4Ndc/yHwZD69ixCCaYB5IxCm97+59hjwKdCZ2lYwDTBjSQD7VwXIoBHMFjAPAF8B99ZsI5gtYD4PvD9DL5hGmLfnVzmz5IJpgHlDDvK2Bq1gGmA23ehQa2SAWEgEswWsJqlgNhFqsT4Un28M+nPAaYNuYZJlvJ+5sIP3HkgwHYkKpmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMJWcKpiMBx1BypmA6EnAMVevMbvf4Lax0fs/GSjk16G9fcBx3/lCvnj/EcOW3UaD0Jc6eCM9rzvfZ3ApPJEM6fJTeyU/aBlsIzHBiBoPLf7TduZn6/xvM1bWn30iS5DQpFwb97VOCOcc0F8zcPlU5s9s9fhcrnX7GN00fTpLk88JtaZq+udu/dCZ8j3UlN045dAx7HORqB3fvXs/yWBgPOJI5fW946+CRBw+Yc+bmxRchCU8e5yk2Hb2lkSQbpHxM79nHs+9xzqTzDAmPTbZpzqOtcmYtpPE+joBaYK6urX+dJNw3PfXTlJ3d/vb9xfIJTHbG+jYwN7Y+KkG5asAKmHX5KE179E5s1q3eP8zIZSWHhQPNi03dNK/TRy6cuDx3ZukArDBjR8YVurS8BmY6PELv5Ojfo21cPJu5eFTpJ8unqO4f5t5wbTC4/H0+rSdtlAFmPHV3+5e+GLswSiODK9vZvhXa8HexLNNbqnnhyipHjddVwaxotWbFyg9gHphjB5byawS5ypklbd18Ccvzk1IH3gRzc+uHcD4q+9DCbXU5c7rPrNI7OnP5YV7vzgwnsyg+cQdQpIvp5n4+Z0ZVfMlzpsWZD8XtU9G8N031UpsVtUZxfi1P84p8URSKa6KaR4WmLmdmbltbP0+SvaYXrvFLV0KldQWPKG5cgEKfuS+YWf+4jz4z6YSeuevSZ86qDVpXTUD3Mx2dIZiC6UjAMZSc6QjzP/ydBYW6bNwqAAAAAElFTkSuQmCC"},"578a":function(t,s,e){"use strict";e.r(s),e.d(s,"userId",(function(){return c}));var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-app",{staticClass:"content"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"left_banner",attrs:{cols:"12",sm:"5"}},[a("v-card-text",{staticClass:"header"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:e("51ef"),alt:""}})])])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"language"},[a("p",{staticClass:"eng"},[t._v("Eng")])])])],1)],1),a("v-card-text",{staticClass:"login"},[a("div",{staticClass:"form"},[a("v-text-field",{staticClass:"text-field",attrs:{rules:[t.rules.required2,t.rules.email],label:"E-mail"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),a("v-text-field",{staticClass:"text-field",attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(s){t.show1=!t.show1}},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),a("div",{staticClass:"links"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("router-link",{attrs:{to:"/registerCompany"}},[t._v("Register as a Company")])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("router-link",{attrs:{to:"/registerStudent"}},[t._v("Register as a Student")])],1)],1)],1),a("v-card-text",{staticClass:"btn"},[a("v-btn",{staticClass:"login_btn",attrs:{color:"primary",disabled:!t.isValid},on:{click:t.validateUser}},[t._v("Log In")])],1)],1),a("v-card-text",{staticClass:"about"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("p",{staticClass:"about_title"},[t._v("What Is InterLab?")]),a("div",[a("p",{staticClass:"about_text"},[t._v("Here at InterLab, we love Internships! Make sure to create an account to get access to the best internships offers from all around the globe.")])])]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",{staticClass:"about_btn",attrs:{href:"https://8rb.github.io/Interlab-Landing-Page/",target:"_blank"}},[t._v("About Us")])],1)],1)],1)],1),a("v-col",{staticClass:"right_banner",attrs:{cols:"12",sm:"7"}},[a("v-card-text",{staticClass:"right_text"},[a("p",{staticClass:"text-lg-left"},[t._v("Welcome To")]),a("h1",{staticClass:"text-lg-left"},[t._v("InterLab")]),a("br"),a("p",{staticClass:"text-lg-left"},[t._v("Log in with your account")])])],1)],1)],1)},r=[],i=e("bc3a"),l=e.n(i),n=e("41cb"),o={name:"Login",methods:{validateUser:function(){var t=this;l.a.all([l.a.get("https://interlab4.azurewebsites.net/api/users"),l.a.get("https://interlab4.azurewebsites.net/api/profiles")]).then((function(s){t.userId=0,t.users=s[0].data,t.profiles=s[1].data;for(var e=0;e<s[0].data.length;e++)if(s[0].data[e].username===t.email&&s[0].data[e].password===t.password||s[0].data[e].email===t.email&&s[0].data[e].password===t.password){console.log("User Found"),c=s[0].data[e].id,console.log("User id: ",c),t.auth=!0;break}if(t.auth||alert("Wrong username or password"),t.auth){for(var a=0;a<s[1].data.length;a++)if(console.log("userId",c),s[1].data[a].id===c){t.role=!0,console.log("Profile Found"),"student"===s[1].data[a].role.toLowerCase()?n["a"].push({path:"/studentDashboard"}):"company"===s[1].data[a].role.toLowerCase()?n["a"].push({path:"/companyDashboard"}):alert("Invalid Role");break}t.role||alert("Could not find Role")}}))}},data:function(){return{userId:0,email:null,isValid:!0,show1:!1,auth:!1,role:!1,password:"",ref:"/",users:[],profiles:[],rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},required2:function(t){return!!t||"Required."},email:function(t){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(t)||"Invalid e-mail."}}}}},c=0,d=o,u=(e("f044"),e("2877")),f=e("6544"),p=e.n(f),w=e("7496"),m=e("8336"),v=e("99d9"),h=e("62ad"),b=e("0fd9"),g=e("8654"),C=Object(u["a"])(d,a,r,!1,null,"98f713fe",null);s["default"]=C.exports;p()(C,{VApp:w["a"],VBtn:m["a"],VCardText:v["b"],VCol:h["a"],VRow:b["a"],VTextField:g["a"]})},8512:function(t,s,e){"use strict";var a=e("9f55"),r=e.n(a);r.a},"9f55":function(t,s,e){},f044:function(t,s,e){"use strict";var a=e("2350"),r=e.n(a);r.a},f330:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-app",{staticClass:"content"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"left_banner",attrs:{cols:"12",md:"5"}},[a("v-card-text",{staticClass:"header"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:e("51ef"),alt:""}})])])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"user"},[a("p",{staticClass:"student"},[t._v("Student")])])])],1)],1),a("v-card-text",{staticClass:"register"},[a("div",{staticClass:"form"},[a("v-text-field",{staticClass:"text-field",attrs:{label:"E-mail",rules:[function(t){return!!t||"E-mail is required"}],required:""},model:{value:t.newEmail,callback:function(s){t.newEmail=s},expression:"newEmail"}}),a("v-row",[a("v-col",[a("v-text-field",{staticClass:"text-field first_name",attrs:{label:"First Name",rules:[function(t){return!!t||"First and Last Names are required"}],required:""},model:{value:t.newFirstName,callback:function(s){t.newFirstName=s},expression:"newFirstName"}})],1),a("v-col",[a("v-text-field",{staticClass:"text-field last_name",attrs:{label:"Last Name",rules:[function(t){return!!t||"First and Last Names are required"}],required:""},model:{value:t.newLastName,callback:function(s){t.newLastName=s},expression:"newLastName"}})],1)],1),a("v-text-field",{staticClass:"text-field",attrs:{label:"Password",rules:[function(t){return!!t||"A password is required"}],type:"password",required:""},model:{value:t.newPassword,callback:function(s){t.newPassword=s},expression:"newPassword"}}),a("v-text-field",{staticClass:"text-field",attrs:{label:"Confirm Password",rules:[function(t){return!!t||"Passwords must be the same"}],type:"password",required:""},model:{value:t.newPassword2,callback:function(s){t.newPassword2=s},expression:"newPassword2"}})],1),a("div",{staticClass:"links"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("a",{staticClass:"company",attrs:{href:"/registerCompany"}},[t._v("Are you a company?")])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("a",{staticClass:"already",attrs:{href:"/"}},[t._v("Already have an account?")])])],1)],1),a("div",[a("v-card-text",{staticClass:"btn"},[a("v-btn",{staticClass:"register_btn",attrs:{disabled:!t.isValid},on:{click:t.createUser}},[t._v("Register")])],1)],1)]),a("v-card-text",{staticClass:"about"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("p",{staticClass:"about_title"},[t._v("Register as a student:")]),a("div",[a("p",{staticClass:"about_text"},[t._v("As a student you will be able to apply for internships offers in the best companies all around the world manage your job requests and qualify all your internships.")])])]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",{staticClass:"about_btn",attrs:{href:"https://8rb.github.io/Interlab-Landing-Page/",target:"_blank"}},[t._v("About Us")])],1)],1)],1)],1),a("v-col",{staticClass:"right_banner",attrs:{cols:"12",md:"7"}},[a("v-card-text",{staticClass:"right_text"},[a("p",{staticClass:"text-lg-left"},[t._v("Welcome To")]),a("h1",{staticClass:"text-lg-left"},[t._v("InterLab")]),a("br"),a("p",{staticClass:"text-lg-left"},[t._v("Register as a student")])])],1)],1)],1)},r=[],i=(e("d3b7"),e("25f0"),e("bc3a")),l=e.n(i),n=e("578a"),o=e("41cb"),c={name:"RegisterStudent",data:function(){return{newEmail:"",newName:"",newPassword:"",newPassword2:"",isValid:!0,newRole:"",newFirstName:"",newLastName:"",users:[],profiles:[],userId:null}},methods:{submit:function(){this.$ref.form.valid()&&console.log(this.newEmail,this.newName,this.newPassword,this.newPassword2,this.isValid)},createUser:function(){var t=this,s=(new Date).toString();this.newRole="student",l.a.post("https://interlab4.azurewebsites.net/api/users",{username:this.newEmail,password:this.newPassword,email:this.email,date_created:s}).then((function(s){var e=s.data;t.users.push(e),console.log(s)})),console.log("creating user...",this.newEmail,this.newFirstName,this.newLastName,this.newPassword,s.toString(),this.isValid),l.a.get("https://interlab4.azurewebsites.net/api/users").then((function(s){t.users=s.data,console.log("Source Users:"),console.log(s.data),t.userId=0,t.users=s.data;for(var e=0;e<s.data.length;e++)if(s.data[e].email===t.newEmail){console.log("New User Found"),t.userId=s.data[e].id,console.log("User id: ",n["userId"]);break}})),l.a.post("https://interlab4.azurewebsites.net/api/profiles",{role:this.newRole,first_name:this.newFirstName,last_name:this.newLastName,field:"",phone:"",description:"",country:"",city:"",user_id:this.userId}).then((function(s){var e=s.data;t.profiles.push(e),console.log(s)})),console.log("creating profiles' user...",this.newRole,this.newFirstName,this.newPassword,this.newPassword2,s.toString(),this.isValid,this.userId),o["a"].push({path:"/studentDashboard"})}}},d=c,u=(e("8512"),e("2877")),f=e("6544"),p=e.n(f),w=e("7496"),m=e("8336"),v=e("99d9"),h=e("62ad"),b=e("0fd9"),g=e("8654"),C=Object(u["a"])(d,a,r,!1,null,"c11d8fe0",null);s["default"]=C.exports;p()(C,{VApp:w["a"],VBtn:m["a"],VCardText:v["b"],VCol:h["a"],VRow:b["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-9aabaf56.f90bbd05.js.map