(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[9514],{33485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var a=n(67294),o=n(3905),r=n(39962),i=n(27401),l=n(58448),s=n(22122),c=n(19756),d=n(86010),u=n(82433),p=n(69729),m=n(93301),h=n(5717),b=n(92511),f=n(2735),y=n(32827),g=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},v=n(16416),k=n(56681),E=n(66585),C="sidebar_15mo",_="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",N="sidebarLogo_3h0W",S="menu_Bmed",I="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R",j="sidebarMenuIcon_fgN0",B="sidebarMenuCloseIcon_1lpH",A=["items"],P=["item","onItemClick","collapsible","activePath"],R=["item","onItemClick","activePath","collapsible"],D=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},M=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,A);return t.map((function(e,t){return a.createElement(w,(0,s.Z)({key:t,item:e},n))}))}));function w(e){switch(e.item.type){case"category":return a.createElement(O,e);case"link":default:return a.createElement(W,e)}}function O(e){var t,n=e.item,o=e.onItemClick,r=e.collapsible,i=e.activePath,l=(0,c.Z)(e,P),p=n.items,m=n.label,h=D(n,i),b=(0,u.D9)(h),f=(0,a.useState)((function(){return!!r&&(!h&&n.collapsed)})),y=f[0],g=f[1],v=(0,a.useRef)(null),k=(0,a.useState)(void 0),E=k[0],C=k[1],_=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=v.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!b&&y&&g(!1)}),[h,b,y]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),E||_(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[E]);return 0===p.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":y})},a.createElement("a",(0,s.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&h},t[I]=!r,t)),onClick:r?Z:void 0,href:r?"#":void 0},l),m),a.createElement("ul",{className:"menu__list",ref:v,style:{height:E},onTransitionEnd:function(){y||_(!1)}},a.createElement(M,{items:p,tabIndex:y?"-1":"0",onItemClick:o,collapsible:r,activePath:i})))}function W(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=(e.collapsible,(0,c.Z)(e,R)),i=t.href,l=t.label,u=D(t,o);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(b.Z,(0,s.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:i},(0,f.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},r),(0,f.Z)(i)?l:a.createElement("span",null,l,a.createElement(k.Z,null))))}function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(g,{className:L}))}function z(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(j,B)},"\xd7"):a.createElement(v.Z,{className:j,height:24,width:24}))}var F=function(e){var t,n,o=e.path,r=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,c=e.isHidden,b=function(){var e=(0,u.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),f=(0,u.LU)(),g=f.navbar.hideOnScroll,v=f.hideableSidebar,k=(0,u.nT)().isClosed,I=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var o=(0,m.Z)();return(0,a.useEffect)((function(){o===m.D.desktop&&n(!1)}),[o]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=I.showResponsiveSidebar,L=I.closeResponsiveSidebar,j=I.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(C,(t={},t[_]=g,t[Z]=c,t))},g&&a.createElement(y.Z,{tabIndex:-1,className:N}),a.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":x},n[T]=!k&&b,n)),"aria-label":(0,E.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(z,{responsiveSidebarOpened:x,onClick:j}),a.createElement("ul",{className:"menu__list"},a.createElement(M,{items:r,onItemClick:L,collapsible:l,activePath:o}))),v&&a.createElement(H,{onClick:s}))},U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(87410).Z,theme:U};function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var V=/\r\n|\r|\n/,Y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=J({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=J({},n,{backgroundColor:null}),o};function Q(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var X=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),K(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),K(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=J({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==o&&(r.style=void 0!==r.style?J({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),K(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(l))}})),K(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,i=J({},Q(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?J({},i.style,o):o),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),K(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,i=0,l=[],s=[l];i>-1;){for(;(r=a[i]++)<o[i];){var c=void 0,d=t[i],u=n[i][r];if("string"==typeof u?(d=i>0?d:["plain"],c=u):(d=G(d,u.type),u.alias&&(d=G(d,u.alias)),c=u.content),"string"==typeof c){var p=c.split(V),m=p.length;l.push({types:d,content:p[0]});for(var h=1;h<m;h++)Y(l),s.push(l=[]),l.push({types:d,content:p[h]})}else i++,t.push(d),n.push(c),a.push(0),o.push(c.length)}i--,t.pop(),n.pop(),a.pop(),o.pop()}return Y(l),s}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var ee=n(87594),te=n.n(ee),ne={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(48002),oe=function(){var e=(0,u.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||ne,a=e.darkTheme||n;return t?a:n},re="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",le="codeBlockTitle_eoMF",se="codeBlock_23N8",ce="codeBlockWithTitle_2JqI",de="copyButton_Ue-o",ue="codeBlockLines_39YC",pe=/{([\d,-]+)}/,me=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function he(e){var t=e.children,n=e.className,o=e.metastring,r=e.title,i=(0,u.LU)().prism,l=(0,a.useState)(!1),c=l[0],p=l[1],m=(0,a.useState)(!1),h=m[0],b=m[1];(0,a.useEffect)((function(){b(!0)}),[]);var f=(0,u.bc)(o)||r,y=(0,a.useRef)(null),g=[],v=oe(),k=Array.isArray(t)?t.join(""):t;if(o&&pe.test(o)){var C=o.match(pe)[1];g=te()(C).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);var Z=k.replace(/\n$/,"");if(0===g.length&&void 0!==_){for(var N,S="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return me(["js","jsBlock"]);case"jsx":case"tsx":return me(["js","jsBlock","jsx"]);case"html":return me(["js","jsBlock","html"]);case"python":case"py":return me(["python"]);default:return me()}}(_),T=k.replace(/\n$/,"").split("\n"),x=0;x<T.length;){var L=x+1,j=T[x].match(I);if(null!==j){switch(j.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=L+",";break;case"highlight-start":N=L;break;case"highlight-end":S+=N+"-"+(L-1)+","}T.splice(x,1)}else x+=1}g=te()(S),Z=T.join("\n")}var B=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(Z),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(X,(0,s.Z)({},$,{key:String(h),theme:v,code:Z,language:_}),(function(e){var t,n=e.className,o=e.style,r=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:re},f&&a.createElement("div",{style:o,className:le},f),a.createElement("div",{className:(0,d.Z)(ie,_)},a.createElement("pre",{tabIndex:0,className:(0,d.Z)(n,se,"thin-scrollbar",(t={},t[ce]=f,t)),style:o},a.createElement("code",{className:ue},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,s.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,s.Z)({key:t},l({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,d.Z)(de,"clean-btn"),onClick:B},c?a.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be=n(35607),fe={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(he,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(he,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,be.Z)("h1"),h2:(0,be.Z)("h2"),h3:(0,be.Z)("h3"),h4:(0,be.Z)("h4"),h5:(0,be.Z)("h5"),h6:(0,be.Z)("h6")},ye=n(48177),ge=n(5977),ve={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function ke(e){var t,n,i,s,c,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,b=(0,r.Z)(),f=b.siteConfig,y=b.isClient,v=m.pluginId,k=m.version,C=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,o=n.permalinkToSidebar,r=n.docsSidebars,i=o[a.path]||o[(t=a.path,t.endsWith("/")?t:t+"/")]||o[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:r[i],sidebarName:i}}({versionMetadata:m,currentDocRoute:p}),_=C.sidebarName,Z=C.sidebar,N=(0,a.useState)(!1),S=N[0],I=N[1],T=(0,a.useState)(!1),x=T[0],L=T[1],j=(0,a.useCallback)((function(){x&&L(!1),I(!S)}),[x]);return a.createElement(l.Z,{key:y,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:k,tag:(0,u.os)(v,k)}},a.createElement("div",{className:ve.docPage},Z&&a.createElement("aside",{className:(0,d.Z)(ve.docSidebarContainer,(t={},t[ve.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve.docSidebarContainer)&&S&&L(!0)}},a.createElement(F,{key:_,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(i=f.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:j,isHidden:x}),x&&a.createElement("div",{className:ve.collapsedDocSidebar,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:j,onClick:j},a.createElement(g,{className:ve.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(ve.docMainContainer,(s={},s[ve.docMainContainerEnhanced]=S||!Z,s))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,(c={},c[ve.docItemWrapperEnhanced]=S,c))},a.createElement(o.Zo,{components:fe},h)))))}var Ee=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,ge.LX)(o.pathname,e)}));return r?a.createElement(ke,{currentDocRoute:r,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(ye.default,e)}},35607:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return m}});var a=n(19756),o=n(22122),r=n(67294),i=n(86010),l=n(66585),s=n(82433),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=["id"],p=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,o.Z)({},t,{id:void 0,className:d}),t.children))},m=function(e){return"h1"===e?p:(t=e,function(e){var n,o=e.id,d=(0,a.Z)(e,u),p=(0,s.LU)().navbar.hideOnScroll;return o?r.createElement(t,d,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[c]=!p,n)),id:o}),d.children,r.createElement("a",{className:"hash-link",href:"#"+o,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,d)});var t}},87594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);