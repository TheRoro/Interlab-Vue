(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03cc2484"],{"19e8":function(t,e,a){"use strict";var s=a("d611"),i=a.n(s);i.a},4149:function(t,e,a){},"4e0a":function(t,e,a){"use strict";var s=a("faba"),i=a.n(s);i.a},"5ef1":function(t,e,a){"use strict";var s=a("cfa9"),i=a.n(s);i.a},"6bc4":function(t,e,a){"use strict";var s=a("4149"),i=a.n(s);i.a},b697:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"style-1"}},[s("v-card",[s("v-navigation-drawer",{staticClass:"size",attrs:{permanent:"",fixed:"",app:"","clipped-left":"",width:"200px"},scopedSlots:t._u([{key:"append",fn:function(){return[s("div",{staticClass:"pa-2"},[s("v-btn",{attrs:{href:"/",block:""}},[t._v("Logout")])],1)]},proxy:!0}])},[s("v-toolbar",{attrs:{flat:"",color:"white",dark:""}},[s("div",[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"logo",attrs:{src:a("9161"),alt:""}})])])]),s("v-tabs",{staticClass:"title1",attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab",{class:t.title1,on:{click:function(e){return t.setSelected("Dashboard")}}},[s("v-icon",{attrs:{left:"",size:"25"}},[t._v("home")]),s("v-list-item-title",{staticClass:"hidden"},[t._v("Home")])],1),s("v-tab",{class:t.title3,on:{click:function(e){return t.setSelected("FindInternship")}}},[s("v-icon",{attrs:{left:"",size:"25"}},[t._v("search")]),s("v-list-item-title",{staticClass:"hidden"},[t._v("Find Internship")])],1),s("v-tab",{class:t.title2,on:{click:function(e){return t.setSelected("MyRequests")}}},[s("v-icon",{attrs:{left:"",size:"25"}},[t._v("view_list")]),s("v-list-item-title",{staticClass:"hidden"},[t._v("My Requests")])],1),s("v-tab",{class:t.title4,on:{click:function(e){return t.setSelected("Edit_Profile")}}},[s("v-icon",{attrs:{left:"",size:"25"}},[t._v("account_circle")]),s("v-list-item-title",{staticClass:"hidden"},[t._v("Edit Profile")])],1)],1)],1)],1),s("v-main",[s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",[s("StudentHome",{attrs:{companies:t.companies}})],1),s("v-tab-item",[s("FindInternship",{attrs:{internships:t.internships}})],1),s("v-tab-item",[s("MyRequests")],1),s("v-tab-item",[s("ProfileContent")],1)],1)],1)],1)},i=[],n=a("bc3a"),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"internship_body",attrs:{id:"style-1"}},[a("v-flex",{staticClass:"internship_container"},[a("div",[a("h1",{staticClass:"welcome"},[t._v("Welcome: "+t._s(this.$store.state.firstName))])]),a("h1",{staticClass:"results_title"},[t._v("Take a look to some of the companies currently hiring: ")]),a("v-row",[a("v-col",t._l(t.companies.slice(0,Math.round(t.companies.length/2)),(function(e){return a("div",{key:e.id},[a("v-card",{staticClass:"internship_card"},[a("div",{staticClass:"upper_box"},[a("h1",{staticClass:"headline"},[t._v(t._s(e.name))]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-icon",{staticClass:"location_icon"},[t._v("location_on")])],1),a("v-col",{attrs:{cols:"12",sm:"11"}},[a("v-card-text",{staticClass:"sub-headline"},[t._v(t._s(e.city)+", "+t._s(e.country))])],1)],1)],1),a("v-card-text",{staticClass:"about"},[t._v(" Sector: "+t._s(e.sector))]),a("v-card-text",{staticClass:"about"},[t._v(" About the job: "+t._s(e.description))])],1)],1)})),0),a("v-col",t._l(t.companies.slice(Math.round(t.companies.length/2),t.companies.length),(function(e){return a("div",{key:e.id},[a("v-card",{staticClass:"internship_card"},[a("div",{staticClass:"upper_box"},[a("h1",{staticClass:"headline"},[t._v(t._s(e.name))]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-icon",{staticClass:"location_icon"},[t._v("location_on")])],1),a("v-col",{attrs:{cols:"12",sm:"11"}},[a("v-card-text",{staticClass:"sub-headline"},[t._v(t._s(e.city)+", "+t._s(e.country))])],1)],1)],1),a("v-card-text",{staticClass:"about"},[t._v(" Sector: "+t._s(e.sector))]),a("v-card-text",{staticClass:"about"},[t._v(" About the job: "+t._s(e.description))])],1)],1)})),0)],1)],1)],1)},l=[],c={name:"StudentHome",props:{companies:Array},data:function(){return{dialog:!1}},created:function(){},methods:{selectButton:function(){},submit:function(){}}},u=c,d=(a("4e0a"),a("2877")),v=a("6544"),h=a.n(v),m=a("b0af"),p=a("99d9"),f=a("62ad"),b=a("0e8f"),_=a("132d"),g=a("a722"),y=a("0fd9"),C=Object(d["a"])(u,o,l,!1,null,"6b6e2679",null),w=C.exports;h()(C,{VCard:m["a"],VCardText:p["b"],VCol:f["a"],VFlex:b["a"],VIcon:_["a"],VLayout:g["a"],VRow:y["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"internship_body",attrs:{id:"style-1"}},[a("v-dialog",{attrs:{width:"450"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-flex",{staticClass:"internship_container"},[t._e(),a("h1",{staticClass:"results_title"},[t._v("Search Results: ")]),a("v-row",[a("v-col",t._l(t.internships.slice(0,Math.round(t.internships.length/2)),(function(e){return a("div",{key:e.id},[a("v-card",{staticClass:"internship_card"},[a("div",{staticClass:"upper_box"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("h1",{staticClass:"headline"},[t._v(t._s(e.jobTitle))]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-icon",{staticClass:"location_icon"},[t._v("location_on")])],1),a("v-col",{attrs:{cols:"12",sm:"11"}},[a("v-card-text",{staticClass:"sub-headline"},[t._v(t._s(e.location))])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",t._g(t._b({staticClass:"apply_btn",attrs:{dark:""},on:{click:function(a){return t.selectButton(e.id)}}},"v-btn",i,!1),s),[t._v("Apply")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-card-text",[t._v(" About the job: "+t._s(e.description))]),a("v-card-text",[t._v(" Salary: $ "+t._s(e.salary)+" - "+t._s(2*e.salary)+" ")]),a("v-card-text",[t._v(" Date of internship: "+t._s(e.startingDate.substring(0,10))+" - "+t._s(e.finishingDate.substring(0,10)))])],1),a("v-col",{attrs:{cols:"12",sm:"4"}})],1)],1)],1)})),0),a("v-col",t._l(t.internships.slice(Math.round(t.internships.length/2),t.internships.length),(function(e){return a("div",{key:e.id},[a("v-card",{staticClass:"internship_card"},[a("div",{staticClass:"upper_box"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("h1",{staticClass:"headline"},[t._v(t._s(e.jobTitle))]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-icon",{staticClass:"location_icon"},[t._v("location_on")])],1),a("v-col",{attrs:{cols:"12",sm:"11"}},[a("v-card-text",{staticClass:"sub-headline"},[t._v(t._s(e.location))])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",t._g(t._b({staticClass:"apply_btn",attrs:{dark:""},on:{click:function(a){return t.selectButton(e.id)}}},"v-btn",i,!1),s),[t._v("Apply")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-card-text",[t._v(" About the job: "+t._s(e.description))]),a("v-card-text",[t._v(" Salary: $ "+t._s(e.salary)+" - "+t._s(2*e.salary)+" ")]),a("v-card-text",[t._v(" Date of internship: "+t._s(e.startingDate.substring(0,10))+" - "+t._s(e.finishingDate.substring(0,10)))])],1),a("v-col",{attrs:{cols:"12",sm:"4"}})],1)],1)],1)})),0)],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("Success!")]),a("v-card-text",[t._v("Successfully applied to this internship")]),a("v-card-text",[t._v("Check it out in your requests ;)")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Continue")])],1)],1)],1)],1)},S=[],k={name:"FindInternship",props:{internships:Array},data:function(){return{dialog:!1}},methods:{selectButton:function(t){var e=this;this.$store.commit("saveInternshipId",t),r.a.post("https://interlab4.azurewebsites.net/api/users/"+this.$store.state.userId+"/internships/"+this.$store.state.internshipId).then((function(t){console.log("Aplicado",t.data),r.a.get("https://interlab4.azurewebsites.net/api/users/"+e.$store.state.userId+"/internships").then((function(t){e.$store.commit("saveInternships",t.data)}))}))},submit:function(){location.reload()}}},V=k,I=(a("19e8"),a("8336")),N=a("169a"),A=a("8654"),B=Object(d["a"])(V,x,S,!1,null,"292c86c2",null),M=B.exports;h()(B,{VBtn:I["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:f["a"],VDialog:N["a"],VFlex:b["a"],VIcon:_["a"],VLayout:g["a"],VRow:y["a"],VTextField:A["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"profileContent"},[a("v-card-title",{staticClass:"justify-start"},[t._v("Edit Profile")]),t.showPersonal?a("v-card",[a("p",[t._v("Personal Info")]),a("div",{staticClass:"Names"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Name",rules:[function(t){return!!t||"Name is required"}],required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Last Name",hint:"one of your parents last name",rules:[function(t){return!!t||"Last Name is required"}],required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)],1)],1),a("div",{staticClass:"countries"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{ref:"country",attrs:{rules:[function(){return!!t.country||"This field is required"}],items:t.countries,label:"Country",placeholder:"Select...",required:""},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"City",hint:"Where do you live?",rules:[function(t){return!!t||"Last Name is required"}],required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-text-field",{attrs:{label:"Phone Number",hint:"In case recruiters need to call you ;)",rules:[function(t){return!!t||"Last Name is required"}],required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1):t._e(),t.showAcademic?a("v-card",[a("p",[t._v("Academic Info")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-text-field",{attrs:{label:"University",rules:[function(t){return!!t||"University Name is required"}],required:""},model:{value:t.university,callback:function(e){t.university=e},expression:"university"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-text-field",{attrs:{label:"Degree",rules:[function(t){return!!t||"Degree is required"}],required:""},model:{value:t.degree,callback:function(e){t.degree=e},expression:"degree"}})],1),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-select",{attrs:{items:t.items,color:"pink",label:"Semester",required:""},model:{value:t.semester,callback:function(e){t.semester=e},expression:"semester"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Field",rules:[function(t){return!!t||"Name is required"}],required:""},model:{value:t.field,callback:function(e){t.field=e},expression:"field"}})],1)],1)],1):t._e(),a("v-card-actions",[t.showAcademic?a("v-btn",{on:{click:t.backClick}},[t._v("Back")]):t._e(),a("v-col",{staticClass:"text-right"},[t.showPersonal?a("v-btn",{staticClass:"white--text",class:t.saveButton,attrs:{bottom:"",center:"",color:"#4b7bff"},on:{click:t.nextClick}},[t._v("Next")]):t._e(),t.showAcademic?a("v-btn",{staticClass:"white--text",class:t.saveButton,attrs:{bottom:"",center:"",color:"#4b7bff"},on:{click:t.saveClick}},[t._v("Save Changes")]):t._e()],1)],1)],1)},P=[],q=(a("d3b7"),a("25f0"),{name:"ProfileContent",props:{articles:Array},data:function(){return{email:null,password:null,firstName:null,lastName:null,isValid:!0,saveButton:"saveButton",university:null,country:null,field:null,city:null,phone:null,degree:null,semester:["1"],showPersonal:!0,showAcademic:!1,items:["1","2","3","4","5","6","7","8","9","10","11","12"],countries:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]}},created:function(){this.initializerProfile()},methods:{initializerProfile:function(){var t=this;r.a.get("https://interlab4.azurewebsites.net/api/users/"+this.$store.state.userId+"/profiles").then((function(e){t.profiles=e.data,console.log("Source Profiles:"),console.log(e.data),t.firstName=e.data[0].firstName,t.lastName=e.data[0].lastName,t.university=e.data[0].university,t.phone=e.data[0].phone,t.country=e.data[0].country,t.city=e.data[0].city,t.degree=e.data[0].degree,t.field=e.data[0].field,t.semester=e.data[0].semester.toString(),console.log("Saved name is: ",t.firstName),console.log("Saved lastName is: ",t.lastName),console.log("Saved phone is: ",t.phone),console.log("Saved country is: ",t.country),console.log("Saved city is: ",t.city),console.log("Saved field is: ",t.field),console.log("Saved university is: ",t.university),console.log("Saved degree is: ",t.degree),console.log("Saved semester is: ",t.semester)}))},saveClick:function(){var t=this;this.showAcademic=!1,r.a.put("https://interlab4.azurewebsites.net/api/users/"+this.$store.state.userId+"/profiles",{firstName:this.firstName,lastName:this.lastName,phone:this.phone,country:this.country,city:this.city,field:this.field,university:this.university,degree:this.degree,semester:parseInt(this.semester)}).then((function(e){var a=e.data;t.profiles.push(a),console.log(e),console.log("updating profiles' user...",t.firstName,t.lastName,t.phone,t.country,t.city,t.field,t.university,t.degree,t.semester),alert("Update Profile Successfully"),t.showPersonal=!0}))},nextClick:function(){this.showPersonal=!1,this.showAcademic=!0},backClick:function(){this.showPersonal=!0,this.showAcademic=!1}}}),z=q,L=(a("6bc4"),a("c6a6")),D=a("a523"),F=a("b974"),R=Object(d["a"])(z,T,P,!1,null,"a986d772",null),j=R.exports;h()(R,{VAutocomplete:L["a"],VBtn:I["a"],VCard:m["a"],VCardActions:p["a"],VCardTitle:p["c"],VCol:f["a"],VContainer:D["a"],VRow:y["a"],VSelect:F["a"],VTextField:A["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:this.$store.state.internships,"items-per-page":15}})},$=[],G={name:"MyRequests",data:function(){return{headers:[{text:"Job Title",align:"start",sortable:!1,value:"jobTitle"},{text:"Location",value:"location"},{text:"Salary",value:"salary"},{text:"Date",value:"startingDate"}]}},created:function(){this.getInternships(),console.log("Ya entre amigo 3")},methods:{getInternships:function(){var t=this;console.log("Ya entre amigo 2"),r.a.get("https://interlab4.azurewebsites.net/api/users/"+this.$store.state.userId+"/internships").then((function(e){t.$store.commit("saveInternships",e.data),console.log("Esta es",e.data)}))}}},H=G,U=a("8fea"),K=Object(d["a"])(H,E,$,!1,null,"4245e99b",null),J=K.exports;h()(K,{VDataTable:U["a"]});var O={name:"StudentDashboard",components:{MyRequests:J,ProfileContent:j,FindInternship:M,StudentHome:w},props:{},data:function(){return{drawer:!0,internships:[],companies:[],img:"require('./assets/logo.jpg')",selected:"",title1:"title",title2:"title",title3:"title",title4:"title",title5:"title",errors:[],tab:null,isHidden:!0,users:[]}},created:function(){this.setCompany(),this.allCompanies()},methods:{setCompany:function(){var t=this;r.a.get("https://interlab4.azurewebsites.net/api/internships").then((function(e){t.internships=e.data,console.log("Source Internships:"),console.log(e.data)}))},allCompanies:function(){var t=this;r.a.get("https://interlab4.azurewebsites.net/api/companies").then((function(e){t.companies=e.data,console.log("Source Companies:"),console.log(e.data)}))},show:function(t){"Internships"===t&&(this.isHidden=!this.isHidden)},setSelected:function(t){return this.selected=t,"Dashboard"===t&&(this.title1="title-selected",this.title2="title",this.title3="title",this.title4="title"),"FindInternship"===t&&(this.title1="title",this.title2="title",this.title3="title-selected",this.title4="title"),"MyRequests"===t&&(this.title1="title",this.title2="title-selected",this.title3="title",this.title4="title"),"Edit_Profile"===t&&(this.title1="title",this.title2="title",this.title3="title",this.title4="title-selected"),this.selected}}},W=O,Y=(a("5ef1"),a("7496")),Z=a("5d23"),Q=a("f6c4"),X=a("f774"),tt=a("71a3"),et=a("c671"),at=a("fe57"),st=a("aac8"),it=a("71d9"),nt=Object(d["a"])(W,s,i,!1,null,"1ba2f809",null);e["default"]=nt.exports;h()(nt,{VApp:Y["a"],VBtn:I["a"],VCard:m["a"],VIcon:_["a"],VListItemTitle:Z["b"],VMain:Q["a"],VNavigationDrawer:X["a"],VTab:tt["a"],VTabItem:et["a"],VTabs:at["a"],VTabsItems:st["a"],VToolbar:it["a"]})},cfa9:function(t,e,a){},d611:function(t,e,a){},faba:function(t,e,a){}}]);
//# sourceMappingURL=chunk-03cc2484.aa8de486.js.map