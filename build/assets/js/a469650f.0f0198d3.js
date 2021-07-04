(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[1989],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=i,p=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(p,a(a({ref:t},f),{},{components:r})):n.createElement(p,a({ref:t},f))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},367:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(e){var t=e.src,r=e.w,i=e.h,o=e.alt;return n.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:r,height:i,alt:o})}},7366:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return c}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=r(367),l=["components"],s={id:"monthfield",title:"Bit from - Month field",sidebar_label:"Month field",slug:"/wpbitform-monthfield"},d={unversionedId:"Fields/monthfield",id:"Fields/monthfield",isDocsHomePage:!1,title:"Bit from - Month field",description:"Week field in Form Builder is used to collect a week based information.",source:"@site/docs/Fields/Monthfield.mdx",sourceDirName:"Fields",slug:"/wpbitform-monthfield",permalink:"/docs/wpbitform-monthfield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Fields/Monthfield.mdx",version:"current",sidebar_label:"Month field",frontMatter:{id:"monthfield",title:"Bit from - Month field",sidebar_label:"Month field",slug:"/wpbitform-monthfield"},sidebar:"someSidebar",previous:{title:"Bit from - Date-Time field",permalink:"/docs/wpbitform-date-timefield"},next:{title:"Bit from - Color Picker field",permalink:"/docs/wpbitform-colorpickerfield"}},f=[{value:"\u2699 General Settings :",id:"-general-settings-",children:[{value:"1.Field Key",id:"1field-key",children:[]},{value:"2.Field Label",id:"2field-label",children:[]},{value:"3.Admin Label",id:"3admin-label",children:[]},{value:"3.Admin Label",id:"3admin-label-1",children:[]},{value:"4.Required",id:"4required",children:[]}]}],m={toc:f};function c(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Week field"))," in Form Builder is used to collect a week based information."),(0,o.kt)("h2",{id:"-general-settings-"},"\u2699 General Settings :"),(0,o.kt)("h3",{id:"1field-key"},"1.Field Key"),(0,o.kt)("p",null,"The Field Key is unique for all fields. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"bf4-1"))," an example of field key. bf means ",(0,o.kt)("strong",{parentName:"p"},"bit form")," , 4 represent ",(0,o.kt)("strong",{parentName:"p"},"form id")," , 1 represent ",(0,o.kt)("strong",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Success/Error Messages, Web Hooks, Redirect Page, Email Templates, Workflow & Integrations."))),(0,o.kt)("h3",{id:"2field-label"},"2.Field Label"),(0,o.kt)("p",null,"You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,o.kt)("h3",{id:"3admin-label"},"3.Admin Label"),(0,o.kt)("p",null,"This field is used for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,o.kt)(a.Z,{src:"Field-Types/Week-Field-Bit-Form",alt:"Form-Field",w:"1900",h:"400",mdxType:"Image"}),(0,o.kt)("h3",{id:"3admin-label-1"},"3.Admin Label"),(0,o.kt)("p",null,"This field is used for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,o.kt)("h3",{id:"4required"},"4.Required"),(0,o.kt)("p",null,"By enabling this option, you can make the field required for the user if you need it. Also you can set an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Error message"))," if you want the field required. Also you can set message as your requirements."))}c.isMDXComponent=!0}}]);