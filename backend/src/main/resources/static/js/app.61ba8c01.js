(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0344":function(t,e,n){"use strict";var a=n("ccde"),s=n.n(a);s.a},"3a7d":function(t,e,n){},"500f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"id",attrs:{id:"app"}},[n("div"),n("keep-alive",[n("router-view")],1),n("div"),n("notifications",{attrs:{group:"foo"}})],1)},i=[],r={name:"App",components:{},computed:{}},o=r,c=n("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null),l=u.exports,d=(n("a434"),n("2f62"));a["default"].use(d["a"]);var h=new d["a"].Store({state:{tags:[],result:""},mutations:{SET_TAGS_TO_STATE:function(t,e){t.tags=e},REM_FROM_TAGS:function(t,e){t.tags.splice(e,1)},ClEAR:function(t){t.tags=[]},CHANGE:function(t,e){for(var n in t.result="",t.result+=e,e.length>0&&" "!==e[e.length-1]&&"\n"!==e[e.length-1]&&(t.result+="\n"),t.tags){var a="#"+t.tags[n]+" ";t.result+=a}}},actions:{GET_TAGS_FROM_API:function(t,e){var n=t.commit;n("SET_TAGS_TO_STATE",e)},REMOVE_FROM_TAGS:function(t,e){var n=t.commit;n("REM_FROM_TAGS",e)},CLEAR:function(t){var e=t.commit;e("ClEAR")},CHANGE_RESULT:function(t,e){var n=t.commit;n("CHANGE",e)}},getters:{TAGS:function(t){return t.tags},RESULT:function(t){return t.result}}}),f=h,p=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:{name:"instagram"}}},[n("div",{staticClass:"btn btn-dark"},[t._v("Instagram")])]),n("router-link",{attrs:{to:{name:"tik_tok"}}},[n("div",{staticClass:"btn btn-info"},[t._v("Tik Tok")])])],1)])},m=[],_={name:"Main",methods:{}},b=_,g=(n("c266"),Object(c["a"])(b,v,m,!1,null,null,null)),T=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:{name:"main"}}},[n("div",{staticClass:"btn"},[t._v("Назад")])]),n("br"),n("br"),n("h1",[t._v("TikTok")]),n("br"),n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("br"),n("div",{staticClass:"check_box"},[t._v(" Гапча мемонидми ако? "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.check)?t._i(t.check,null)>-1:t.check},on:{change:function(e){var n=t.check,a=e.target,s=!!a.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);a.checked?r<0&&(t.check=n.concat([i])):r>-1&&(t.check=n.slice(0,r).concat(n.slice(r+1)))}else t.check=s}}})]),n("br"),t.check?n("div",[n("br"),t._v(" Гапча: "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{id:"text-area",required:""},domProps:{value:t.text},on:{change:function(e){return e.preventDefault(),t.changeResult(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}},[t._v("{text}")])]),n("br"),n("div",{staticClass:"radio_button"},[t._v(" Хештегоя гапчатонки буроримми ако? "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.withPost,expression:"withPost"}],attrs:{type:"radio",id:"yes",value:"true"},domProps:{checked:t._q(t.withPost,"true")},on:{change:[function(e){t.withPost="true"},function(e){return e.preventDefault(),t.changeResult(e)}]}}),n("label",{attrs:{for:"yes"}},[t._v("Да")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.withPost,expression:"withPost"}],attrs:{type:"radio",id:"no",value:"false"},domProps:{checked:t._q(t.withPost,"false")},on:{change:[function(e){t.withPost="false"},function(e){return e.preventDefault(),t.changeResult(e)}]}}),n("label",{attrs:{for:"no"}},[t._v("Нет")])]),n("br"),n("br")]):t._e(),t._m(0),n("br"),t._m(1)]),t.answer?n("div",[n("TagsCatalog",{attrs:{text:t.text,withPost:t.withPost}})],1):t._e(),t.isReady?n("div",{staticClass:"div-result"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:this.RESULT,expression:"this.RESULT"}],staticClass:"result",attrs:{id:"result",readonly:""},domProps:{value:this.RESULT},on:{input:function(e){e.target.composing||t.$set(this,"RESULT",e.target.value)}}},[t._v("{this.RESULT}")])]):t._e(),n("div",[n("input",{attrs:{type:"hidden",id:"testing-code"},domProps:{value:this.RESULT}}),n("input",{staticClass:"btn btn-outline",attrs:{type:"button",value:"Таёр кун бача"},on:{click:t.copyToBuffer}})])],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div_tag"},[n("label",[t._v("Введите Hashtag :")]),n("div",{staticClass:"input_str"},[n("input",{staticClass:"str",attrs:{type:"text",id:"str",autocomplete:"off"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div_button"},[n("input",{staticClass:"button",attrs:{type:"submit",value:"Готово"}})])}],E=n("5530"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.TAGS.length?n("div",{staticClass:"block"},[n("br"),n("h1",{attrs:{align:"center"}},[t._v("Tags")]),this.TAGS.length?t._e():n("p",[t._v("...")]),n("div",{staticClass:"list"},t._l(this.TAGS,(function(e,a){return n("Tag",{key:e,attrs:{tags:e},on:{removeFromList:function(e){return t.removeFromList(a)}}})})),1)]):t._e()},w=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tag"},[n("p",[t._v("#"+t._s(t.tags)+" "),n("button",{staticClass:"btn-x btn btn-outline-danger",on:{click:t.removeFromList}},[t._v("x")])])])])},S=[],A={name:"Tag",props:{tags:{type:String,default:function(){return""}}},methods:{removeFromList:function(){this.$emit("removeFromList")}}},C=A,P=(n("8c27"),Object(c["a"])(C,R,S,!1,null,"6e56a07e",null)),O=P.exports,G={name:"TagsCatalog",components:{Tag:O},props:{text:{type:String,default:function(){return""}},withPost:{type:String,default:function(){return"true"}}},computed:Object(E["a"])({},Object(d["c"])(["TAGS"])),methods:Object(E["a"])(Object(E["a"])({},Object(d["b"])(["REMOVE_FROM_TAGS","CHANGE_RESULT"])),{},{changeResult:function(){"false"===this.withPost?this.CHANGE_RESULT(""):this.CHANGE_RESULT(this.text)},removeFromList:function(t){this.REMOVE_FROM_TAGS(t),this.changeResult()}})},L=G,j=(n("0344"),Object(c["a"])(L,k,w,!1,null,null,null)),U=j.exports,N={name:"TikTok",components:{TagsCatalog:U},computed:Object(E["a"])({},Object(d["c"])(["TAGS","RESULT"])),data:function(){return{check:!1,withPost:"true",text:"",answer:!1,isReady:!1}},methods:Object(E["a"])(Object(E["a"])({},Object(d["b"])(["GET_TAGS_FROM_API","CHANGE_RESULT"])),{},{changeResult:function(){"false"===this.withPost?this.CHANGE_RESULT(""):this.CHANGE_RESULT(this.text)},setList:function(t){this.GET_TAGS_FROM_API(t)},copyToBuffer:function(){var t=document.querySelector("#testing-code");t.setAttribute("type","text"),t.select();try{var e=document.execCommand("copy"),n=e?"successful":"unsuccessful";alert("Testing code was copied "+n)}catch(a){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},submit:function(){var t=this,e=document.getElementById("str").value,n=this.text.length;this.check||(n=0),""!==this.text&&"true"===this.withPost&&(this.isReady=!0),this.$axios({method:"post",url:"/tag",headers:{"Content-Type":"application/json",Accept:"application/json"},data:{tag:e,count:n,platform:"TikTok"}}).then((function(e){""===e.data?(t.answer=!1,t.$notify({group:"foo",type:"error",title:"Ако найофтим акун узр де",duration:5e3,speed:1e3,data:{}})):(t.isReady=!0,t.answer=!0,t.setList(e.data),t.changeResult())}))}})},M=N,$=(n("c84f"),Object(c["a"])(M,y,x,!1,null,"a355d17e",null)),F=$.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:{name:"main"}}},[n("div",{staticClass:"btn"},[t._v("Назад")])]),n("br"),n("br"),n("h1",[t._v("Instagram")]),n("br"),n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("br"),n("div",{staticClass:"check_box"},[t._v(" Гапча мемонидми ако? "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.check)?t._i(t.check,null)>-1:t.check},on:{change:function(e){var n=t.check,a=e.target,s=!!a.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);a.checked?r<0&&(t.check=n.concat([i])):r>-1&&(t.check=n.slice(0,r).concat(n.slice(r+1)))}else t.check=s}}})]),n("br"),t.check?n("div",[n("br"),t._v(" Гапча: "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{id:"text-area",required:""},domProps:{value:t.text},on:{change:function(e){return e.preventDefault(),t.changeResult(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}},[t._v("{text}")])]),n("br"),n("div",{staticClass:"radio_button"},[t._v(" Хештегоя гапчатонки буроримми ако? "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.withPost,expression:"withPost"}],attrs:{type:"radio",id:"yes",value:"true"},domProps:{checked:t._q(t.withPost,"true")},on:{change:[function(e){t.withPost="true"},function(e){return e.preventDefault(),t.changeResult(e)}]}}),n("label",{attrs:{for:"yes"}},[t._v("Да")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.withPost,expression:"withPost"}],attrs:{type:"radio",id:"no",value:"false"},domProps:{checked:t._q(t.withPost,"false")},on:{change:[function(e){t.withPost="false"},function(e){return e.preventDefault(),t.changeResult(e)}]}}),n("label",{attrs:{for:"no"}},[t._v("Нет")])]),n("br"),n("br")]):t._e(),t._m(0),n("br"),t._m(1)]),t.answer?n("div",[n("TagsCatalog",{attrs:{text:t.text,withPost:t.withPost}})],1):t._e(),t.isReady?n("div",{staticClass:"div-result"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:this.RESULT,expression:"this.RESULT"}],staticClass:"result",attrs:{id:"result",readonly:""},domProps:{value:this.RESULT},on:{input:function(e){e.target.composing||t.$set(this,"RESULT",e.target.value)}}},[t._v("{this.RESULT}")])]):t._e(),t.isReady?n("div",[n("input",{attrs:{type:"hidden",id:"testing-code"},domProps:{value:this.RESULT}}),n("input",{staticClass:"btn btn-outline",attrs:{type:"button",value:"Таёр кун бача"},on:{click:t.copyToBuffer}})]):t._e()],1)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div_tag"},[n("label",[t._v("Введите Hashtag :")]),n("div",{staticClass:"input_str"},[n("input",{staticClass:"str",attrs:{type:"text",id:"str",autocomplete:"off"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div_button"},[n("input",{staticClass:"button",attrs:{type:"submit",value:"Готово"}})])}],q={name:"Instagram",components:{TagsCatalog:U},computed:Object(E["a"])({},Object(d["c"])(["TAGS","RESULT"])),data:function(){return{check:!1,withPost:"true",text:"",answer:!1,isReady:!1}},methods:Object(E["a"])(Object(E["a"])({},Object(d["b"])(["GET_TAGS_FROM_API","CHANGE_RESULT"])),{},{changeResult:function(){"false"===this.withPost?this.CHANGE_RESULT(""):this.CHANGE_RESULT(this.text)},setList:function(t){this.GET_TAGS_FROM_API(t)},copyToBuffer:function(){var t=document.querySelector("#testing-code");t.setAttribute("type","text"),t.select();try{var e=document.execCommand("copy"),n=e?"successful":"unsuccessful";alert("Testing code was copied "+n)}catch(a){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},submit:function(){var t=this,e=document.getElementById("str").value,n=this.text.length;this.check||(n=0),""!==this.text&&"true"===this.withPost&&(this.isReady=!0),this.$axios({method:"post",url:"/tag",headers:{"Content-Type":"application/json",Accept:"application/json"},data:{tag:e,count:n,platform:"Instagram"}}).then((function(e){""===e.data?(t.answer=!1,t.$notify({group:"foo",type:"error",title:"Ако найофтим акун узр де",duration:5e3,speed:1e3,data:{}})):(t.isReady=!0,t.answer=!0,t.setList(e.data),t.changeResult())}))}})},D=q,B=(n("fe62"),Object(c["a"])(D,H,I,!1,null,"29ac2675",null)),V=B.exports;a["default"].use(p["a"]);var J=new p["a"]({mode:"history",routes:[{path:"/instagram",name:"instagram",component:V},{path:"/tik_tok",name:"tik_tok",component:F},{path:"/",name:"main",component:T},{path:"*",redirect:"/"}]}),z=J,K=n("bc3a"),Q=n.n(K),W=n("1e18"),X=(n("f9e3"),n("2dd8"),n("ee98")),Y=n.n(X);a["default"].config.productionTip=!1,a["default"].prototype.$axios=Q.a,a["default"].use(W["a"]),a["default"].use(Y.a),new a["default"]({render:function(t){return t(l)},store:f,router:z}).$mount("#app")},8466:function(t,e,n){},"8c27":function(t,e,n){"use strict";var a=n("8466"),s=n.n(a);s.a},c266:function(t,e,n){"use strict";var a=n("3a7d"),s=n.n(a);s.a},c84f:function(t,e,n){"use strict";var a=n("f3ee"),s=n.n(a);s.a},ccde:function(t,e,n){},f3ee:function(t,e,n){},fe62:function(t,e,n){"use strict";var a=n("500f"),s=n.n(a);s.a}});
//# sourceMappingURL=app.61ba8c01.js.map