(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[4649],{22713:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},36178:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return I},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return v}});var n=a(22122),r=a(19756),l=a(67294),i=a(3905);a(95838);var o=a(22713);var s=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(86010),m="tabItem_1uMI",d="tabItemActive_2DSg";var u=37,k=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,i=e.groupId,o=e.className,c=s(),N=c.tabGroupChoices,g=c.setTabGroupChoices,f=(0,l.useState)(n),h=f[0],b=f[1],y=l.Children.toArray(e.children),v=[];if(null!=i){var w=N[i];null!=w&&w!==h&&r.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var t=e.currentTarget,a=v.indexOf(t),n=r[a].value;b(n),null!=i&&(g(i,n),setTimeout((function(){var e,a,n,r,l,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&l<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},I=function(e){var t,a;switch(e.keyCode){case k:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case u:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},o)},r.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:I,onFocus:T,onClick:T},a)}))),t?(0,l.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};var N,g=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},f=["components"],h={id:"api",title:"Bit form API",sidebar_label:"API",slug:"/wpbitform-api"},b=void 0,y={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"Bit form API",description:"An API (Application Protocol Interface) defines a set of functions that interact with other software components or applications or you can call micro services between web applications. If any web application or software needs any information from another software, they have to make a call or request to get the information. This specific call or request is called API.",source:"@site/docs/API.mdx",sourceDirName:".",slug:"/wpbitform-api",permalink:"/wpbitform-api",editUrl:"https://github.com/Bit-Press/bitform-documentation/blob/main/docs/API.mdx",version:"current",frontMatter:{id:"api",title:"Bit form API",sidebar_label:"API",slug:"/wpbitform-api"},sidebar:"someSidebar",previous:{title:"How to set up an autoresponder Email",permalink:"/wpbitform-email-autoresponder"}},v=[{value:"API Key Option",id:"api-key-option",children:[]},{value:"API Endpoints",id:"api-endpoints",children:[{value:"Get Forms",id:"get-forms",children:[]},{value:"Fetch Entries",id:"fetch-entries",children:[]},{value:"Get Form Fields",id:"get-form-fields",children:[]},{value:"Add record/entries",id:"add-recordentries",children:[]},{value:"Edit record/entries",id:"edit-recordentries",children:[]},{value:"Delete record/entries",id:"delete-recordentries",children:[]}]},{value:"API Status Codes",id:"api-status-codes",children:[]}],w=(N="Video",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),T={toc:v};function I(e){var t=e.components,a=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,n.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"API (Application Protocol Interface)")," defines a set of functions that interact with other software components or applications or you can call micro services between web applications. If any web application or software needs any information from another software, they have to make a ",(0,i.kt)("strong",{parentName:"p"},"call")," or ",(0,i.kt)("strong",{parentName:"p"},"request")," to get the information. This specific call or request is called ",(0,i.kt)("strong",{parentName:"p"},"API"),"."),(0,i.kt)("p",null,"To simplify this context, we can take an example that a user installed a form plugin from which he/she wants to deliver form data to our Bit Form plugin where user has already made a form. What user has to do is to make an API request to Bit Form. In response, user will get all the data that they have requested will be stored in Bit Form."),(0,i.kt)("h2",{id:"api-key-option"},"API Key Option"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to Bit form ",(0,i.kt)("strong",{parentName:"li"},"Settings")," and then navigate ",(0,i.kt)("strong",{parentName:"li"},"API")),(0,i.kt)("li",{parentName:"ol"},"Copy your ",(0,i.kt)("inlineCode",{parentName:"li"},"API Key")," then use it in request header.")),(0,i.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,i.kt)("h3",{id:"get-forms"},"Get Forms"),(0,i.kt)("p",null,"To fetch all forms."),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET Request"',title:'"GET','Request"':!0},"https://<base_url>/wp-json/bitform/v1/forms\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "forms": [\n      {\n        "form_name": "Contact Form"\n        "id": "1"\n      }\n  ],\n  "status": 200,\n  "code": 4000,\n  "sucess":true\n}\n')))),(0,i.kt)("h3",{id:"fetch-entries"},"Fetch Entries"),(0,i.kt)("p",null,"Fetch all entries by specific form ID."),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access."),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_id")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Sepecify form ID."),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"per_page")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},"How many data fetch in each request."),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Page offset."),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET Request"',title:'"GET','Request"':!0},"https://<base_url>/wp-json/bitform/v1/form/response/<form_id>\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n        "count":"95",\n        "entries":[\n            {\n            "entry_id":"12",\n            "bf1-1":"test data"\n            },\n            ...\n        ]\n    },\n    "status": 200,\n    "sucess": true\n}\n')))),(0,i.kt)("h3",{id:"get-form-fields"},"Get Form Fields"),(0,i.kt)("p",null,"Fetch all field of a specific form."),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"form_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"Sepecify form ID.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET Request"',title:'"GET','Request"':!0},"  https://<base_url>/wp-json/bitform/v1/fields/<form_id>\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "data": {\n    "fields": {\n      "bf1-1-": {\n        "typ": "txt",\n        "lbl": "First Name",\n        "ph": "Enter Your First Name",\n        "valid": {}\n      }\n    },\n    "fieldkeys": {\n      "bf1-1-": "bf1-1-"\n    },\n    "workflows": [\n      {\n        "workflow_name": "workflow 2",\n        "id": "2"\n      }\n    ],\n    "workflow_key_name": "workflow"\n  },\n  "status": 200,\n  "code": 4000,\n  "sucess": true\n}\n')),(0,i.kt)("p",null,"In this API request user have to indicate the specific id to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"form_id"))," in which fields will be used to fetch information. Suppose a client sent an API request, under a specific form some field\u2019s information will be inserted where , ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"typ = field type")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"lbl = field label name")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ph = a indicator of the fields action")),". The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"valid : {}"))," denotes ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"True/False")),". If the required field is enabled then ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"valid : {}"))," will return ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"True"))," otherwise ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"valid : {}"))," will be empty. Then ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"fieldkeys")),"is the key name of the input field. Clients can also run workflows using conditional logic by sending API requests. As example, if a client wants any records to be created & submitted, an email notification will be sent. Clients have to set this workflow & have to mention that specific workflow name on their API request. They can set actions like : ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Success Message")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Redirect URL")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Web hook")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Integration"))," and run those actions through our API request. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"workflow_key_name"))," is the input key name of all the created workflows."))),(0,i.kt)("h3",{id:"add-recordentries"},"Add record/entries"),(0,i.kt)("p",null,"Add entries to specific form."),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"form_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"Sepecify form ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"field_key")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Body"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify field key and value.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST Request"',title:'"POST','Request"':!0},"https://<base_url>/wp-json/bitform/v1/entry/<form_id>\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "status": 200,\n  "code": 4000,\n  "message": "Data Added Successfully.",\n  "sucess": true\n}\n')))),(0,i.kt)("h3",{id:"edit-recordentries"},"Edit record/entries"),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access."),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_id")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"Sepecify form ID."),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"field_key_1")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Body"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the value for the field."),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"field_key_2")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Body"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the value for the field."),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"field_key")," is form field key, e.g: ",(0,i.kt)("inlineCode",{parentName:"p"},"bf1-2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST/PUT Request"',title:'"POST/PUT','Request"':!0},"https://<base_url>/wp-json/bitform/v1/entry_update/<form_id>\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "code": 4000,\n  "message": "Data Updated Successfully",\n  "sucess": true\n}\n')))),(0,i.kt)("h3",{id:"delete-recordentries"},"Delete record/entries"),(0,i.kt)(c,{defaultValue:"Request",values:[{label:"Request",value:"Request"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"Request",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Bitform-Api-Key")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify your secret key to get access."),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_id")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"Sepecify form ID."),(0,i.kt)("td",{parentName:"tr",align:null},"required")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="DELETE Request"',title:'"DELETE','Request"':!0},"https://<base_url>/wp-json/bitform/v1/entry_delete/<form_id>\n"))),(0,i.kt)(g,{value:"Response",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "code": 4000,\n  "message": "Data Updated Successfully",\n  "sucess": true\n}\n')))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"api-status-codes"},"API Status Codes"),(0,i.kt)("p",null,"The success or failure of an API request is conveyed by the code and message in its response."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Http Status Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"HTTP Status"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Message"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4000"),(0,i.kt)("td",{parentName:"tr",align:null},"Successfully data submitted")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3910"),(0,i.kt)("td",{parentName:"tr",align:null},"No forms available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3920"),(0,i.kt)("td",{parentName:"tr",align:null},"No fields available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3710"),(0,i.kt)("td",{parentName:"tr",align:null},"No field named {field} found. Please check and try again.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3120"),(0,i.kt)("td",{parentName:"tr",align:null},"Data type mismatch")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"center"},"OK"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3970"),(0,i.kt)("td",{parentName:"tr",align:null},"The get records API can fetch up to 200 records per request. You\u2019ll have to use the from parameter in your requests to fetch records 1-200, 201-400, and so on")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not Found"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3030"),(0,i.kt)("td",{parentName:"tr",align:null},"The API request\u2019s body content is missing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"404")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not Found"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3100"),(0,i.kt)("td",{parentName:"tr",align:null},"No Entry with ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"404")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not Found"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3200"),(0,i.kt)("td",{parentName:"tr",align:null},"No Form with ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"404")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not Found"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3130"),(0,i.kt)("td",{parentName:"tr",align:null},"No form was found. Please check and try again")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"422")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Validation Error"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3070"),(0,i.kt)("td",{parentName:"tr",align:null},"Data validation failure")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Watch a demo tutorial here!")),(0,i.kt)(w,{youtube:!0,src:"IauMUSQvrqw",mdxType:"Video"}),(0,i.kt)("h4",{id:"-let-us-know-if-you-have-any-feedback-or-any-api-request-at-supportbitpresspro"},"\ud83d\udd90 Let us know if you have any feedback or any API request at ",(0,i.kt)("inlineCode",{parentName:"h4"},"support@bitpress.pro"),"."))}I.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);