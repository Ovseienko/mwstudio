(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(t,e,c){t.exports={gallery:"_3BO2r",icon:"_26NIP"}},161:function(t,e,c){"use strict";c.r(e);var n,a,l,r=c(0),m=c.n(r),i=c(8),o=c.n(i),u=c(70),h=c(14),s=c(10),E=(c(85),c(163)),p=c(164);a=n||(n={}),function(t){t.ADD_TODO="ADD_TODO",t.EDIT_TODO="EDIT_TODO",t.DELETE_TODO="DELETE_TODO",t.COMPLETE_TODO="COMPLETE_TODO",t.COMPLETE_ALL="COMPLETE_ALL",t.CLEAR_COMPLETED="CLEAR_COMPLETED"}(l=a.Type||(a.Type={})),a.addTodo=Object(p.a)(l.ADD_TODO),a.editTodo=Object(p.a)(l.EDIT_TODO),a.deleteTodo=Object(p.a)(l.DELETE_TODO),a.completeTodo=Object(p.a)(l.COMPLETE_TODO),a.completeAll=Object(p.a)(l.COMPLETE_ALL),a.clearCompleted=Object(p.a)(l.CLEAR_COMPLETED);var d,v=function(){return(v=Object.assign||function(t){for(var e,c=1,n=arguments.length;c<n;c++)for(var a in e=arguments[c])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},f=function(){for(var t=0,e=0,c=arguments.length;e<c;e++)t+=arguments[e].length;var n=Array(t),a=0;for(e=0;e<c;e++)for(var l=arguments[e],r=0,m=l.length;r<m;r++,a++)n[a]=l[r];return n},g=Object(E.a)(((d={})[n.Type.ADD_TODO]=function(t,e){return e.payload&&e.payload.text?f([{id:t.reduce((function(t,e){return Math.max(e.id||1,t)}),0)+1,completed:!1,text:e.payload.text}],t):t},d[n.Type.DELETE_TODO]=function(t,e){return t.filter((function(t){return t.id!==e.payload}))},d[n.Type.EDIT_TODO]=function(t,e){return t.map((function(t){return t&&e&&e.payload&&(t.id||0)===e.payload.id?v(v({},t),{text:e.payload.text}):t}))},d[n.Type.COMPLETE_TODO]=function(t,e){return t.map((function(t){return t.id===e.payload?v(v({},t),{completed:!t.completed}):t}))},d[n.Type.COMPLETE_ALL]=function(t,e){return t.map((function(t){return v(v({},t),{completed:!0})}))},d[n.Type.CLEAR_COMPLETED]=function(t,e){return t.filter((function(t){return!1===t.completed}))},d),[{id:1,text:"Use Redux",completed:!1}]),O=Object(s.combineReducers)({todos:g}),b=function(t){return function(t){return function(e){return t(e)}}},y=c(47);var T,L,M=c(25),w=c(63),z=Object(h.a)(),_=(L=Object(s.applyMiddleware)(y.a,b),Object(s.createStore)(O,T,L));o.a.render(m.a.createElement(u.a,{store:_},m.a.createElement(M.b,{history:z},m.a.createElement(w.a,null))),document.getElementById("root"))},63:function(t,e,c){"use strict";(function(t){c.d(e,"a",(function(){return i}));var n=c(0),a=c.n(n),l=c(25),r=c(71),m=c(68),i=Object(m.hot)(t)((function(){return a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",component:r.a}))}))}).call(this,c(46)(t))},7:function(t,e,c){t.exports={mv:"_3kI3I",name:"_7CuUI",subname:"_3JchI",banner:"_18daU","banner-text":"_8pFvw",projects:"_1uUN1",about:"vcguT",contacts:"kWQEM",map:"_2gfqs",info:"_30SmU",footer:"_3WSwu",services:"_3q3oJ","service-items":"_3QxFe"}},71:function(t,e,c){"use strict";var n,a=c(0),l=c.n(a),r=c(7),m=c(64),i=c(31),o=(c(157),n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var c in e)e.hasOwnProperty(c)&&(t[c]=e[c])})(t,e)},function(t,e){function c(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}),u=function(){return(u=Object.assign||function(t){for(var e,c=1,n=arguments.length;c<n;c++)for(var a in e=arguments[c])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},h=function(t){function e(e){var c=t.call(this,e)||this;return c.openLightbox=function(t,e){e.photo;var n=e.index;c.setState({viewerIsOpen:!0,currentImage:n})},c.closeLightbox=function(){c.setState({viewerIsOpen:!1,currentImage:0})},c.state={viewerIsOpen:!1,currentImage:0,featuredImages:e.images},c.galleryContainer=a.createRef(),c}return o(e,t),e.prototype.render=function(){var t=this.state,e=t.viewerIsOpen,c=t.currentImage;return a.createElement("div",{ref:this.galleryContainer},a.createElement(m.a,{photos:this.props.images,onClick:this.openLightbox,margin:4}),a.createElement(i.b,null,e?a.createElement(i.a,{onClose:this.closeLightbox},a.createElement(i.c,{currentIndex:c,views:this.props.images.map((function(t){return u(u({},t),{srcset:t.src,caption:t.alt,source:t.src})}))})):null))},e}(a.Component),s=function(){return l.a.createElement("div",{className:"icon icon--project"},l.a.createElement("svg",{viewBox:"0 0 64 64",width:"40px",height:"40px"},l.a.createElement("path",{d:"m11.70703 29.60645c-.28613-.28613-.71582-.37305-1.08984-.2168-.37403.1543-.61719.51953-.61719.92383v22.68652c0 .55273.44727 1 1 1h22.68652c.4043 0 .76953-.24316.92383-.61719.15527-.37402.06934-.80371-.2168-1.08984zm.29297 3.12109 6 6v13.27246h-6zm8 19.27246v-11.27246l11.27246 11.27246z"}),l.a.createElement("path",{d:"m54.70703 2.29297c-.1875-.1875-.44141-.29297-.70703-.29297h-35c-.55273 0-1 .44727-1 1v21.58594l-14.29297-14.29297c-.28613-.28613-.71582-.37207-1.08984-.2168-.37403.1543-.61719.51953-.61719.92383v50c0 .55273.44727 1 1 1h50c.4043 0 .76953-.24316.92383-.61719.15527-.37402.06934-.80371-.2168-1.08984l-6.29297-6.29297h3.58594 10c.55273 0 1-.44727 1-1v-35-8c0-.26562-.10547-.51953-.29297-.70703zm-50.70703 57.70703v-46.58594l4.58594 4.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 1.58594 1.58594-1.29297 1.29297 1.41406 1.41406 1.29297-1.29297 4.58594 4.58594zm21-45h4v20.58594l-4-4zm.61816-2 1.38184-2.76367 1.38184 2.76367zm12.39844 20.11328 1.7041-5.11328h2.55859l1.7041 5.11328-1.58862 15.86743-3.10498-3.10498zm3.9834-11.11328v-4.51312l2.82715 4.52386-2.39337 3.98926h-2.86755l-2.39337-3.98926 2.82714-4.52386v4.51312zm2.22198 28.80792 1.77313-17.70831c.01367-.14062-.00195-.28223-.04688-.41602l-1.85437-5.56305 2.76355-4.6059c.19336-.32227.18945-.72559-.00977-1.04492l-5-8c-.36523-.58398-1.33008-.58398-1.69531 0l-5 8c-.19922.31934-.20312.72266-.00977 1.04492l2.76355 4.6059-1.85437 5.56305c-.04492.13379-.06055.27539-.04688.41602l1.052 10.54321-6.05686-6.05688v-23.58594c0-.15527-.03613-.30859-.10547-.44727l-3-6c-.33984-.67773-1.44922-.67773-1.78906 0l-3 6c-.06934.13868-.10547.292-.10547.44727v15.58594l-3-3v-22.58594h33.58594l5 5h-3.58594v-2h-2v3c0 .55273.44727 1 1 1h6v6h-9c-.55273 0-1 .44727-1 1v34h-4.58594zm7.77802 1.19208v-33h8v3h-2v2h2v3h-2v2h2v3h-2v2h2v3h-2v2h2v3h-2v2h2v3h-2v2h2v3z"}),l.a.createElement("path",{d:"m6 56h2v2h-2z"}),l.a.createElement("path",{d:"m10 56h2v2h-2z"}),l.a.createElement("path",{d:"m14 56h2v2h-2z"})))},E=function(){return l.a.createElement("div",{className:"icon icon--client=srvice"},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 496 496",width:"40px",height:"40px"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M402.524,432l-18.52-55.568c-6.472-19.4-22.984-33.72-43.112-37.384l-53.464-9.728v-4.144\n\t\t\tc9.304-5.4,17.4-12.624,23.848-21.176h16.152c13.232,0,24-10.768,24-24v-96c0-57.344-46.656-104-104-104s-104,46.656-104,104v56\n\t\t\tc0,15.424,10.968,28.328,25.512,31.336c4.488,22.992,18.856,42.448,38.488,53.84v4.144l-53.472,9.728\n\t\t\tc-20.12,3.664-36.64,17.984-43.104,37.384l-3.2,9.608l-27.248-27.248c-3.12-3.12-3.12-8.2,0-11.32l31.6-31.592l-59.312-59.312\n\t\t\tL16.98,292.28c-10.576,10.576-16.4,24.64-16.4,39.6s5.824,29.016,16.4,39.592l108.12,108.12C135.676,490.168,149.74,496,164.7,496\n\t\t\tc14.96,0,29.016-5.832,39.344-16.168l38.968-35.704L230.86,432H402.524z M335.428,280c0,4.416-3.592,8-8,8H320.7\n\t\t\tc2.32-5.288,4.08-10.864,5.216-16.664c3.424-0.712,6.576-2.072,9.512-3.784V280z M327.428,253.776v-27.552\n\t\t\tc4.76,2.776,8,7.88,8,13.776S332.188,251,327.428,253.776z M167.428,253.776c-4.76-2.776-8-7.88-8-13.776s3.24-11,8-13.776\n\t\t\tV253.776z M167.428,200v9.136c-2.848,0.744-5.52,1.864-8,3.312V184c0-48.52,39.48-88,88-88s88,39.48,88,88v28.448\n\t\t\tc-2.48-1.448-5.152-2.576-8-3.312V200h-8c-23.656,0-45.896-9.216-62.632-25.944l-9.368-9.368l-9.368,9.368\n\t\t\tC221.324,190.784,199.084,200,175.428,200H167.428z M183.428,256v-40.304c24.024-1.808,46.424-11.72,64-28.432\n\t\t\tc17.576,16.712,39.976,26.632,64,28.432V256c0,11.664-3.184,22.576-8.656,32h-55.344v16h42.192c-11.28,9.928-26.024,16-42.192,16\n\t\t\tC212.14,320,183.428,291.288,183.428,256z M271.428,332.312v0.376l-24,24l-24-24v-0.376c7.584,2.384,15.64,3.688,24,3.688\n\t\t\tS263.844,334.696,271.428,332.312z M126.02,381.488c4.616-13.856,16.416-24.088,30.792-26.712l55.92-10.16l34.696,34.696\n\t\t\tl34.688-34.688l55.912,10.16c14.376,2.624,26.176,12.848,30.792,26.712L380.332,416H214.86l-31.16-31.16l-34.624,31.32\n\t\t\tc-3.016,3.032-8.288,3.032-11.312,0l-17.472-17.472L126.02,381.488z M52.684,279.192l36.688,36.688l-8.688,8.688L43.996,287.88\n\t\t\tL52.684,279.192z M192.964,468.296c-7.552,7.536-17.6,11.704-28.28,11.704c-10.68,0-20.728-4.168-28.288-11.72L28.276,360.168\n\t\t\tc-7.552-7.552-11.712-17.6-11.712-28.28c0-10.688,4.16-20.736,11.712-28.288l4.4-4.4l36.688,36.688l-0.288,0.288\n\t\t\tc-9.352,9.36-9.352,24.584,0,33.944l57.368,57.368c4.536,4.528,10.56,7.032,16.976,7.032s12.44-2.496,16.68-6.752l0.6-0.536\n\t\t\tl36.856,36.856L192.964,468.296z M209.364,453.256l-36.776-36.776l10.568-9.552l36.712,36.712L209.364,453.256z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M471.428,0h-112c-13.232,0-24,10.768-24,24v64c0,13.232,10.768,24,24,24h21.368l-8.272,48.248l77.2-48.248h21.704\n\t\t\tc13.232,0,24-10.768,24-24V24C495.428,10.768,484.66,0,471.428,0z M479.428,88c0,4.408-3.592,8-8,8h-26.296l-50.808,31.752\n\t\t\tL399.772,96h-40.344c-4.408,0-8-3.592-8-8V24c0-4.408,3.592-8,8-8h112c4.408,0,8,3.592,8,8V88z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("rect",{x:"367.428",y:"32",width:"96",height:"16"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("rect",{x:"367.428",y:"64",width:"64",height:"16"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("rect",{x:"447.428",y:"64",width:"16",height:"16"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M247.428,24C142.9,24,52.86,96.304,29.452,197.16l-15.16-25.272l-13.72,8.232l28.12,46.856l46.856-28.12l-8.232-13.72\n\t\t\tl-21.68,13.008C68.308,105.88,151.276,40,247.428,40c21.016,0,41.752,3.12,61.632,9.28L313.796,34\n\t\t\tC292.38,27.36,270.052,24,247.428,24z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M491.54,177.136l-46.856-28.12l-28.112,46.864l13.72,8.232l14-23.336c7.368,21.56,11.136,44.112,11.136,67.224\n\t\t\tc0,47.576-16.48,94.088-46.392,130.96l12.424,10.08c32.224-39.712,49.968-89.808,49.968-141.04\n\t\t\tc0-24.472-3.944-48.368-11.632-71.248l23.512,14.104L491.54,177.136z"})))))},p=function(){return l.a.createElement("div",{className:"icon icon--qualityn"},l.a.createElement("svg",{viewBox:"-41 0 374 374.10622",width:"40px",height:"40px"},l.a.createElement("path",{d:"m287.664062 75.746094-140.605468-74.921875c-2.085938-1.113281-4.585938-1.097657-6.65625.039062l-136.714844 74.921875c-2.242188 1.230469-3.6328125 3.582032-3.6328125 6.140625v97.867188c.0820315 80.449219 47.7460935 153.230469 121.4570315 185.460937l18.976562 8.269532c1.773438.773437 3.792969.777343 5.570313.007812l21.382812-9.234375c75.078125-31.53125 123.921875-105.015625 123.929688-186.445313v-95.925781c0-2.585937-1.425782-4.964843-3.707032-6.179687zm-10.292968 102.105468c-.015625 75.816407-45.503906 144.226563-115.410156 173.566407l-.046876.023437-18.621093 8.039063-16.179688-7.058594c-68.613281-30-112.984375-97.742187-113.0625-172.628906v-93.722657l129.761719-71.117187 133.558594 71.167969zm0 0"}),l.a.createElement("path",{d:"m92.167969 175.253906c-2.511719-2.941406-6.929688-3.289062-9.871094-.777344-2.941406 2.507813-3.289063 6.929688-.777344 9.867188l36.976563 43.300781c2.46875 2.890625 6.792968 3.285157 9.738281.886719l86.117187-70.0625c3-2.4375 3.453126-6.847656 1.011719-9.847656-2.4375-2.996094-6.847656-3.453125-9.847656-1.011719l-80.8125 65.742187zm0 0"})))},d=function(){return l.a.createElement("div",{className:"icon icon--guarantee"},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 512 512",width:"40px",height:"40px"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M229.436,146.32l-4.953-59.442c-0.324-3.887-3.573-6.877-7.474-6.877h-7.499V72.5c0-12.407-10.093-22.5-22.5-22.5\n\t\t\ts-22.5,10.093-22.5,22.5v7.501h-7.499c-3.853,0-7.079,2.919-7.463,6.753l-6.001,60c-0.211,2.109,0.48,4.208,1.902,5.779\n\t\t\tc1.422,1.571,3.442,2.467,5.561,2.467h70.998c0.007,0,0.013,0,0.02,0c4.142,0,7.5-3.358,7.5-7.5\n\t\t\tC229.528,147.099,229.496,146.704,229.436,146.32z M179.51,72.5c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5v7.501h-15V72.5z\n\t\t\t M159.297,140.001l4.501-45h46.31l3.749,45H159.297z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M428.454,66.75c-0.018-0.183-0.05-0.361-0.081-0.539c-0.011-0.063-0.017-0.127-0.029-0.189\n\t\t\tc-0.042-0.212-0.097-0.42-0.158-0.626c-0.008-0.027-0.013-0.056-0.021-0.083c-0.064-0.21-0.14-0.415-0.221-0.617\n\t\t\tc-0.009-0.024-0.017-0.048-0.026-0.072c-0.08-0.193-0.171-0.381-0.267-0.565c-0.017-0.032-0.03-0.066-0.047-0.098\n\t\t\tc-0.092-0.171-0.194-0.337-0.299-0.5c-0.028-0.043-0.051-0.088-0.08-0.131c-0.105-0.156-0.219-0.305-0.335-0.453\n\t\t\tc-0.035-0.045-0.066-0.093-0.102-0.137c-0.156-0.189-0.32-0.372-0.494-0.545L366.3,2.198c-0.173-0.173-0.355-0.338-0.545-0.494\n\t\t\tc-0.049-0.04-0.102-0.074-0.151-0.113c-0.143-0.112-0.287-0.223-0.438-0.324c-0.047-0.032-0.097-0.058-0.145-0.088\n\t\t\tc-0.159-0.101-0.319-0.201-0.485-0.29c-0.037-0.02-0.075-0.035-0.112-0.054c-0.181-0.093-0.364-0.183-0.552-0.261\n\t\t\tc-0.027-0.011-0.055-0.019-0.082-0.029c-0.199-0.08-0.401-0.155-0.608-0.218c-0.03-0.009-0.061-0.015-0.091-0.023\n\t\t\tc-0.204-0.059-0.409-0.114-0.619-0.156c-0.063-0.013-0.128-0.018-0.191-0.029c-0.177-0.031-0.355-0.062-0.537-0.08\n\t\t\tC361.496,0.013,361.246,0,360.995,0H91.009c-4.142,0-7.5,3.358-7.5,7.5v453.475c0,4.142,3.358,7.5,7.5,7.5h169.999\n\t\t\tc4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H98.509V15h254.986v52.498c0,4.142,3.358,7.5,7.5,7.5h52.496v378.477\n\t\t\th-42.483c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h49.983c4.142,0,7.5-3.358,7.5-7.5V67.498\n\t\t\tC428.491,67.247,428.479,66.997,428.454,66.75z M368.495,59.998V25.607l34.39,34.391H368.495z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M360.995,213.493H151.007c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h209.988c4.142,0,7.5-3.358,7.5-7.5\n\t\t\tC368.495,216.851,365.137,213.493,360.995,213.493z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M360.995,253.502H151.007c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h209.988c4.142,0,7.5-3.358,7.5-7.5\n\t\t\tC368.495,256.86,365.137,253.502,360.995,253.502z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M360.995,293.501H151.007c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h209.988c4.142,0,7.5-3.358,7.5-7.5\n\t\t\tC368.495,296.859,365.137,293.501,360.995,293.501z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M241.001,333.501h-89.994c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h89.994c4.142,0,7.5-3.358,7.5-7.5\n\t\t\tC248.501,336.859,245.143,333.501,241.001,333.501z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M368.507,406.002c0-28.949-23.551-52.5-52.5-52.5c-28.949,0-52.5,23.551-52.5,52.5c0,16.683,7.832,31.563,20.002,41.186\n\t\t\tV504.5c0,0.08,0.009,0.157,0.012,0.237c0.005,0.153,0.009,0.305,0.023,0.458c0.01,0.107,0.027,0.212,0.041,0.318\n\t\t\tc0.019,0.137,0.037,0.274,0.063,0.41c0.022,0.114,0.051,0.226,0.078,0.338c0.03,0.125,0.059,0.25,0.096,0.373\n\t\t\tc0.035,0.118,0.076,0.232,0.117,0.348c0.04,0.114,0.079,0.229,0.125,0.342c0.049,0.12,0.104,0.235,0.159,0.352\n\t\t\tc0.049,0.104,0.096,0.209,0.15,0.312c0.065,0.123,0.136,0.24,0.207,0.359c0.055,0.092,0.108,0.185,0.167,0.275\n\t\t\tc0.083,0.126,0.174,0.246,0.264,0.367c0.049,0.065,0.091,0.133,0.142,0.197c0.01,0.013,0.022,0.023,0.032,0.036\n\t\t\tc0.168,0.208,0.346,0.407,0.535,0.595c0.053,0.053,0.111,0.099,0.166,0.15c0.137,0.129,0.277,0.255,0.424,0.374\n\t\t\tc0.088,0.071,0.179,0.135,0.27,0.202c0.123,0.09,0.246,0.178,0.373,0.26c0.096,0.062,0.193,0.12,0.292,0.177\n\t\t\tc0.133,0.078,0.269,0.15,0.407,0.22c0.094,0.047,0.188,0.094,0.285,0.137c0.153,0.069,0.31,0.13,0.468,0.189\n\t\t\tc0.086,0.032,0.171,0.066,0.258,0.094c0.177,0.059,0.359,0.107,0.542,0.152c0.073,0.018,0.145,0.04,0.218,0.056\n\t\t\tc0.202,0.044,0.408,0.075,0.616,0.102c0.058,0.007,0.115,0.02,0.173,0.026c0.245,0.026,0.494,0.039,0.746,0.041\n\t\t\tc0.019,0,0.038,0.003,0.057,0.003c0.008,0,0.015-0.002,0.023-0.002c0.366-0.001,0.723-0.037,1.074-0.088\n\t\t\tc0.076-0.011,0.15-0.021,0.226-0.035c0.357-0.063,0.704-0.151,1.041-0.263c0.062-0.021,0.122-0.045,0.183-0.067\n\t\t\tc0.359-0.13,0.709-0.28,1.041-0.461c0.012-0.006,0.023-0.015,0.035-0.021c0.35-0.193,0.679-0.417,0.991-0.662\n\t\t\tc0.022-0.017,0.046-0.028,0.068-0.045l20.314-16.251l20.313,16.251c0.021,0.017,0.044,0.027,0.065,0.044\n\t\t\tc0.314,0.246,0.645,0.47,0.995,0.664c0.011,0.006,0.021,0.014,0.032,0.02c0.332,0.182,0.683,0.332,1.043,0.462\n\t\t\tc0.061,0.022,0.12,0.046,0.181,0.066c0.337,0.112,0.685,0.2,1.042,0.264c0.075,0.013,0.149,0.023,0.225,0.034\n\t\t\tc0.352,0.052,0.709,0.087,1.075,0.088c0.008,0,0.015,0.002,0.023,0.002c0.018,0,0.038-0.003,0.056-0.003\n\t\t\tc0.252-0.002,0.501-0.015,0.747-0.041c0.057-0.006,0.113-0.019,0.169-0.026c0.209-0.027,0.417-0.059,0.619-0.103\n\t\t\tc0.072-0.016,0.143-0.037,0.214-0.055c0.185-0.045,0.368-0.094,0.547-0.153c0.085-0.028,0.168-0.062,0.253-0.092\n\t\t\tc0.16-0.06,0.318-0.122,0.473-0.191c0.095-0.042,0.188-0.089,0.282-0.136c0.139-0.07,0.276-0.143,0.41-0.221\n\t\t\tc0.098-0.057,0.195-0.115,0.291-0.177c0.127-0.083,0.251-0.17,0.373-0.26c0.091-0.067,0.182-0.131,0.271-0.202\n\t\t\tc0.147-0.118,0.286-0.245,0.423-0.373c0.055-0.051,0.113-0.098,0.166-0.151c0.19-0.188,0.367-0.388,0.536-0.596\n\t\t\tc0.01-0.012,0.022-0.022,0.032-0.035c0.051-0.063,0.092-0.131,0.141-0.195c0.091-0.121,0.182-0.242,0.266-0.369\n\t\t\tc0.059-0.09,0.111-0.183,0.167-0.274c0.071-0.119,0.143-0.237,0.208-0.36c0.054-0.102,0.101-0.206,0.149-0.31\n\t\t\tc0.055-0.117,0.11-0.233,0.159-0.354c0.046-0.113,0.085-0.228,0.125-0.342c0.041-0.115,0.082-0.23,0.117-0.348\n\t\t\tc0.037-0.124,0.066-0.249,0.096-0.374c0.027-0.112,0.056-0.223,0.078-0.337c0.026-0.137,0.044-0.274,0.063-0.411\n\t\t\tc0.014-0.105,0.031-0.21,0.041-0.317c0.014-0.153,0.018-0.306,0.023-0.459c0.003-0.079,0.012-0.156,0.012-0.236l-0.002-57.311\n\t\t\tC360.675,437.565,368.507,422.685,368.507,406.002z M320.802,478.731c0-0.001-0.001-0.001-0.001-0.002l-0.106-0.085\n\t\t\tc-0.055-0.043-0.113-0.079-0.168-0.121c-0.133-0.101-0.266-0.2-0.404-0.291c-0.081-0.053-0.164-0.1-0.247-0.15\n\t\t\tc-0.127-0.076-0.253-0.153-0.384-0.221c-0.103-0.054-0.208-0.102-0.313-0.15c-0.113-0.053-0.226-0.107-0.341-0.153\n\t\t\tc-0.122-0.05-0.246-0.092-0.369-0.135c-0.103-0.036-0.206-0.073-0.31-0.104c-0.131-0.039-0.263-0.071-0.396-0.103\n\t\t\tc-0.102-0.024-0.205-0.05-0.308-0.071c-0.13-0.025-0.26-0.044-0.391-0.062c-0.11-0.016-0.221-0.032-0.332-0.043\n\t\t\tc-0.12-0.012-0.239-0.017-0.359-0.023c-0.125-0.006-0.249-0.012-0.374-0.012c-0.106,0-0.211,0.006-0.317,0.011\n\t\t\tc-0.138,0.006-0.276,0.012-0.414,0.026c-0.094,0.009-0.187,0.023-0.28,0.036c-0.147,0.02-0.294,0.042-0.44,0.07\n\t\t\tc-0.087,0.018-0.174,0.039-0.261,0.06c-0.147,0.035-0.293,0.07-0.439,0.114c-0.092,0.028-0.182,0.06-0.273,0.092\n\t\t\tc-0.135,0.046-0.27,0.093-0.403,0.147c-0.107,0.043-0.211,0.094-0.316,0.142c-0.112,0.052-0.224,0.103-0.335,0.161\n\t\t\tc-0.126,0.066-0.249,0.141-0.373,0.215c-0.085,0.052-0.171,0.1-0.255,0.155c-0.138,0.091-0.271,0.191-0.405,0.292\n\t\t\tc-0.055,0.042-0.112,0.077-0.166,0.12l-0.104,0.084c-0.001,0.001-0.003,0.002-0.005,0.004l-12.704,10.164v-33.402\n\t\t\tc5.477,1.942,11.364,3.01,17.498,3.01c6.134,0,12.021-1.067,17.499-3.01l0.001,33.399L320.802,478.731z M316.007,443.502\n\t\t\tc-20.678,0-37.5-16.822-37.5-37.5c0-20.678,16.822-37.5,37.5-37.5c20.678,0,37.5,16.822,37.5,37.5\n\t\t\tC353.507,426.68,336.685,443.502,316.007,443.502z"}))),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M316.008,383.501c-12.407,0-22.5,10.093-22.5,22.5s10.093,22.5,22.5,22.5c12.407,0,22.5-10.093,22.5-22.5\n\t\t\tC338.508,393.594,328.415,383.501,316.008,383.501z M316.008,413.501c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5\n\t\t\ts7.5,3.364,7.5,7.5S320.144,413.501,316.008,413.501z"})))))},v=c.p+"56dc9d77ba6d7409214e9828ff3f0b05.jpg",f=c.p+"7b650537060a68e1a682226c2a914f4e.jpg",g=c.p+"07ff8d71ab679a46360e644ce9dbc747.jpg",O=c.p+"aa4cb5a54a53a9390f540b2d9b5fbcc2.jpg",b=c.p+"623f587f3e834b957f36e6b04439005a.jpg",y=c.p+"4eab7587142e4ca116e5c27c4a93f3f1.jpg",T=c.p+"7fefbffe00b1dd2aaddc0e03a4c0c382.jpg",L=(c.p,c.p+"56dc9d77ba6d7409214e9828ff3f0b05.jpg");c.d(e,"a",(function(){return w}));var M=[{src:v,width:1,height:1,alt:"Мебьель для кухни"},{src:O,width:1,height:1,alt:"Мебьель для кухни"},{src:y,width:1,height:1,alt:"Мебьель для кухни"},{src:f,width:3,height:4,alt:"Мебьель для кухни"},{src:g,width:3,height:4,alt:"Мебьель для кухни"},{src:L,width:1,height:1,alt:"Мебьель для кухни"},{src:b,width:1,height:1,alt:"Мебьель для кухни"},{src:T,width:1,height:1,alt:"Мебьель для кухни"}],w=function(){return a.createElement("div",{className:r.mv},a.createElement("h1",{className:r.name},"MW STUDIO"),a.createElement("p",{className:r.subname},"Metal and wood furniture"),a.createElement("div",{className:r.banner},a.createElement("div",{className:r["banner-text"]},a.createElement("h2",null,"СОВРЕМЕННАЯ МЕБЕЛЬ"),a.createElement("h4",null,"для комфортной жизни"))),a.createElement("h2",{className:r.about},"О нас"),a.createElement("div",{className:r.services},a.createElement("div",{className:r["service-items"]},a.createElement("div",{className:""},a.createElement(s,null),a.createElement("p",null,"ПРОЕКТ"),a.createElement("div",null,"Предлагаем комплексные решения с сопроводительной документацией.")),a.createElement("div",{className:""},a.createElement(p,null),a.createElement("p",null,"КАЧЕСТВО"),a.createElement("div",null,"Мы используем только те материалы, в качесте которых мы уверенны.")),a.createElement("div",{className:""},a.createElement(E,null),a.createElement("p",null,"СВЯЗЬ"),a.createElement("div",null,"Мы всегда на связи. Общение с Вами - в радость.")),a.createElement("div",{className:""},a.createElement(d,null),a.createElement("p",null,"ГАРАНТИЯ"),a.createElement("div",null,"Не беспокойтесь. Предоставляем гарантию на устанавливаемую нашей компанией мебель."))),a.createElement("img",{src:b,alt:"Деревянная мебель"})),a.createElement("div",{className:r.projects},a.createElement("h2",null,"Наши работы"),a.createElement("div",{className:r["projects-slider"]},a.createElement(h,{images:M}))),a.createElement("div",{className:r.contacts},a.createElement("div",{className:r.info},a.createElement("h5",null,"КОНТАКТЫ"),a.createElement("p",null,"г.Киев, Полтавская 10, офис 7"),a.createElement("p",{style:{fontWeight:"bold"}},"mwstudiokyiv@gmail.com"),a.createElement("p",null,"+38 095 439 3611")),a.createElement("div",{className:r.map},a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2195991607387!2d30.484442215689793!3d50.455635294872415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce62d8365a65%3A0x11c6b5c0c231d5bf!2z0YPQuy4g0J_QvtC70YLQsNCy0YHQutCw0Y8sIDEwLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1596806066679!5m2!1sru!2sua",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0,"aria-hidden":"false"}))),a.createElement("div",{className:r.footer},"©2020 by MW Studio. Proudly created by Valentina Ovseienko"))}}},[[161,1,2]]]);