(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(87)},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e){e.exports={"This module includes":"Modul ini meliputi","Let's go!":"Ayo Mulai!",Exams:"Soal",Lessons:"Materi",Next:"Lanjut",Previous:"Kembali",Finish:"Selesai",of:"dari",Question:"Pertanyaan",Feedback:"Penjelasan","You fail the mock up exam":"Anda tidak lulus latihan soal ini","You passed the mock up exam":"Anda lulus latihan soal ini",Module:"Modul",Points:"Poin",Score:"Nilai"}},87:function(e,t,n){"use strict";n.r(t);var a=n(22),s=n(0),o=n.n(s),c=n(26),i=n.n(c),r=n(5),l=n(6),u=n(8),m=n(7),d=n(9),p=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="flat";"/"===e?t="diagonal":"/menu"===e&&(t="full"),this.props.setCutter(t)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.cutter+" cutter"})}}]),t}(s.Component),h=n(88),f=(n(34),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={className:"",linkTo:"/"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="cross",n="/",a=e.split("/");"/"===e?(t="",n="/menu"):4===a.length&&(n="/"+a[1]+"/"+a[2],t="back"),this.setState({className:t,linkTo:n})}},{key:"render",value:function(){return o.a.createElement(h.a,{to:this.state.linkTo,className:this.state.className+" hamburger"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}}]),t}(s.Component)),v=(n(38),function(e){return o.a.createElement("div",{className:"lang-selector",style:{backgroundImage:"url(/"+e.lang+".svg)"},onClick:e.toggleLang})}),g=(n(40),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={title:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="Scrum.id",n=e.split("/");-1!==e.indexOf("questions")?t="Exam":n.length>=3&&(t=n[2].replace(/-/gi," ")),this.setState({title:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"title"},this.state.title)}}]),t}(s.Component)),E=(n(42),function(e){return o.a.createElement("div",{className:"menu"},o.a.createElement(h.a,{to:"/"},"Courses"),o.a.createElement(h.a,{to:"/"},"Articles"),o.a.createElement(h.a,{to:"/"},"About Us"),o.a.createElement("span",null,"v0.1"))}),y=(n(44),function(e){var t=e.ts("Let's go!"),n=e.items.map(function(t,n){var a=t.status<3?"green":"red";return o.a.createElement("tr",{key:n},o.a.createElement("td",null,t.total),o.a.createElement("td",null,e.ts(e.title)),o.a.createElement("td",{className:a},e.ts(t.price)))});return o.a.createElement("div",{className:"course shadow"},o.a.createElement("div",{className:"top shadow",style:{backgroundImage:"linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/"+e.link.en.toLowerCase()+".jpeg)"}},o.a.createElement("div",null,o.a.createElement("h1",null,e.ts(e.title)),o.a.createElement("p",null,e.ts(e.content)))),o.a.createElement("div",{className:"bottom"},o.a.createElement("span",null,e.ts("This module includes")),"  :",o.a.createElement("table",null,o.a.createElement("tbody",null,n)),o.a.createElement(h.a,{to:"/courses/"+e.ts(e.link),className:"blue btn shadow"},t)))}),b=(n(46),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/courses.json").then(function(e){return e.json()}).then(function(t){e.setState({data:t.data})})}},{key:"render",value:function(){var e=this,t=this.state.data?this.state.data.map(function(t,n){return o.a.createElement(y,{title:t.title,status:t.status,items:t.items,content:t.content,link:t.link,key:n,lang:e.props.lang,ts:e.props.ts})}):o.a.createElement("div",{className:"message paper shadow center"},"\xb7\xb7\xb7 Please wait \xb7\xb7\xb7");return o.a.createElement("div",{className:"courses page"},t)}}]),t}(s.Component)),k=n(16),N=n.n(k),O=(n(71),function(e){var t=1===e.category?"radio":"checkbox",n=e.answer===e.selection&&!0===e.selection?"true":e.answer!==e.selection&&!0===e.selection?"false":e.answer!==e.selection&&!1===e.selection?"miss":"",a=String.fromCharCode(65+e.i)+")";return o.a.createElement("label",{className:n+" option shadow"},o.a.createElement("input",{name:"option"+e.questionId,value:e.id,type:t,onClick:function(){return e.onChooseOption(e.questionId,e.id,e.category,e.i)}}),o.a.createElement("div",null,o.a.createElement("span",null,a)," ",e.ts(e.content)))}),j=(n(73),function(e){var t=e.options.map(function(t,n){return o.a.createElement(O,{ts:e.ts,questionId:e.id,id:t.id,content:t.content,key:t.id,i:n,selection:t.selection,answer:t.answer,category:e.category,onChooseOption:e.onChooseOption})}),n=e.feedback?o.a.createElement("div",{className:"feedback shadow"},o.a.createElement("span",{className:"label"},e.ts("Feedback")),o.a.createElement("p",null,e.ts(e.feedback))):"",a=e.feedback?o.a.createElement("span",{className:"label"},e.i+1,". ",e.ts("Question")," "):"";return o.a.createElement("div",{className:"question","data-id":e.id},o.a.createElement("div",{className:"content shadow"},a,o.a.createElement("p",null,e.ts(e.content))),o.a.createElement("div",{className:"options"},t),n)}),w=(n(75),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={data:[],questions:o.a.createElement("div",{className:"message paper shadow center"},"\xb7\xb7\xb7 Please wait \xb7\xb7\xb7"),selections:{},position:0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/questions-"+this.props.match.params.section.toLowerCase()+"-"+this.props.match.params.id.toLowerCase()+".json").then(function(e){if(!e.ok)throw e;return e.text()}).then(function(t){var n=(t=JSON.parse(atob(t))).data;e.shuffleArray(n);var a=(n=n.slice(0,20)).map(function(t,n){return o.a.createElement(j,{ts:e.props.ts,key:n,id:t.id,content:t.content,options:t.options,category:t.category,onChooseOption:function(t,n,a,s){return e.onChooseOption(t,n,a,s)}})});e.setState({questions:a,data:n}),e.renderQuestion(),document.querySelector(".nav").style.display="block"}).catch(function(e){try{document.querySelector(".message ").innerHTML="&middot;&middot;&middot; UNDER DEVELOPMENT &middot;&middot;&middot;"}catch(t){console.log(t)}console.log(e)})}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}},{key:"onNavigate",value:function(e){var t=this,n=e&&this.state.position<this.state.questions.length-1?this.state.position+1:!e&&this.state.position>0?this.state.position-1:this.state.position;this.setState({position:n},function(){t.renderQuestion()})}},{key:"onChooseOption",value:function(e,t,n,a){var s=this,o=this.state.selections,c=this.state.data[this.state.position].options;if(1===n){for(var i=0;i<c.length;i++)c[i].selection=i===a;o[e]=[t]}else if(2===n){var r=document.querySelectorAll("[name=option"+e+"]:checked");o[e]=Array.prototype.map.call(r,function(e){return e.value});for(var l=0;l<c.length;l++)c[l].selection=-1!==o[e].indexOf(c[l].id);o[e].length||delete o[e]}this.setState({selections:o},function(){s.onFinish(),document.querySelector(".finish").style.display=Object.keys(o).length===s.state.questions.length?"block":"none"})}},{key:"renderQuestion",value:function(){for(var e=document.querySelectorAll(".question"),t=0;t<e.length;t++)e[t].style.display="none";for(var n=document.getElementsByClassName("question")[this.state.position].children[1],a=n.children.length;a>=0;a--)n.appendChild(n.children[Math.random()*a|0]);for(var s=0;s<n.children.length;s++)n.children[s].children[1].children[0].innerHTML=String.fromCharCode(65+s)+")";document.getElementsByClassName("question")[this.state.position].style.display="block",document.querySelector(".previous").style.display=0!==this.state.position?"block":"none",document.querySelector(".next").style.display=this.state.position!==this.state.questions.length-1?"block":"none"}},{key:"onFinish",value:function(){for(var e=this.state.data,t={score:0,questions:e,correct:0,incorrect:0,section:this.props.match.params.section},n=0;n<e.length;n++)for(var a=0;a<e[n].options.length;a++)if(!(e[n].options[a].answer===e[n].options[a].selection)){t.incorrect++;break}t.correct=e.length-t.incorrect,t.score=(t.correct/e.length*100).toFixed(2).replace(/[.,]00$/,""),localStorage.setItem("result",N.a.AES.encrypt(JSON.stringify(t),"result"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"questions page"},this.state.questions,o.a.createElement("div",{className:"clear nav"},o.a.createElement("div",{className:"previous shadow btn",onClick:function(){return e.onNavigate(0)}},this.props.ts("Previous")),o.a.createElement("div",{className:"page-number"},this.state.position+1," ",this.props.ts("of")," ",Object.keys(this.state.questions).length),o.a.createElement("div",{className:"next shadow btn",onClick:function(){return e.onNavigate(1)}},this.props.ts("Next"))),o.a.createElement(h.a,{className:"finish shadow btn green",onClick:function(){return e.onFinish()},to:"/result"},this.props.ts("Finish")))}}]),t}(s.Component)),C=(n(77),function(e){var t=e.chapters.map(function(t,n){return o.a.createElement(h.a,{key:n,to:"/courses/"+e.section+"/"+t.link.en,className:"chapter clear"},o.a.createElement("div",{className:"name"},e.ts(t.title)),o.a.createElement("div",{className:"arrow"}))});return o.a.createElement("div",{className:"type-"+e.type.id+" section"},o.a.createElement("div",{className:"top shadow",style:{backgroundImage:"linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/"+e.section.toLowerCase()+".jpeg)"}},o.a.createElement("div",null,o.a.createElement("h1",null,e.ts(e.title)),o.a.createElement("p",null,e.ts(e.type)))),o.a.createElement("div",{className:"chapters shadow"},t))}),S=(n(79),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={data:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/sections-"+this.props.match.params.section.toLowerCase()+".json").then(function(e){if(!e.ok)throw e;return e.json()}).then(function(t){e.setState({data:t.data},function(){e.onTypeToggle(null,1),document.querySelector(".type-toggle").classList.add("block"),e.props.setCutter("medium")})}).catch(function(e){try{document.querySelector(".message ").innerHTML="&middot;&middot;&middot; UNDER DEVELOPMENT &middot;&middot;&middot;"}catch(t){console.log(t)}console.log(e)})}},{key:"onTypeToggle",value:function(e,t){document.querySelectorAll(".section").forEach(function(e){e.classList.remove("block"),e.classList.add("none")}),document.querySelectorAll(".section.type-"+t).forEach(function(e){e.classList.remove("none"),e.classList.add("block")});var n=document.querySelectorAll(".section.block");n[0].classList.add("first"),n[n.length-1].classList.add("last"),e&&(document.querySelectorAll(".type-toggle > div").forEach(function(e){e.classList.remove("active")}),e.target.classList.add("active"))}},{key:"render",value:function(){var e=this,t=this.state.data?this.state.data.map(function(t,n){return o.a.createElement(C,{ts:e.props.ts,title:t.title,key:n,type:t.type,chapters:t.chapters,section:e.props.match.params.section})}):o.a.createElement("div",{className:"message paper shadow center"},"\xb7\xb7\xb7 Please wait \xb7\xb7\xb7");return o.a.createElement("div",{className:"sections page"},o.a.createElement("div",{className:"type-toggle clear"},o.a.createElement("div",{onClick:function(t,n){return e.onTypeToggle(t,1)},className:"active"},this.props.ts("Exams")),o.a.createElement("div",{onClick:function(t,n){return e.onTypeToggle(t,2)}},this.props.ts("Lessons"))),o.a.createElement("div",null,t))}}]),t}(s.Component)),q=function(e){return o.a.createElement("div",{className:"div"},"ini div")},L=(n(81),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={result:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){try{var e=JSON.parse(N.a.AES.decrypt(localStorage.getItem("result"),"result").toString(N.a.enc.Utf8));this.setState({result:e})}catch(t){}}},{key:"render",value:function(){var e=this,t=this.state.result,n="please wait";if(t){var a=t.questions.map(function(t,n){return o.a.createElement(j,{ts:e.props.ts,key:n,id:n,i:n,content:t.content,options:t.options,feedback:t.feedback,categoryId:2,onChooseOption:function(){}})}),s=t.score>=85?this.props.ts("You passed the mock up exam")+" :)":this.props.ts("You fail the mock up exam")+" :(",c=t.score>=85?"green":"red";n=o.a.createElement("div",null,o.a.createElement("div",{className:"summary shadow"},o.a.createElement("div",{className:"clear"},o.a.createElement("span",null,this.props.ts("Module")),o.a.createElement("span",null,":"),o.a.createElement("span",null,t.section)),o.a.createElement("div",{className:"clear"},o.a.createElement("span",null,this.props.ts("Points")),o.a.createElement("span",null,":"),o.a.createElement("span",null,t.correct," ",this.props.ts("of")," ",t.correct+t.incorrect)),o.a.createElement("div",{className:"clear"},o.a.createElement("span",null,this.props.ts("Score")),o.a.createElement("span",null,":"),o.a.createElement("span",null,t.score,"%")),o.a.createElement("div",{className:c+" message"},s)),o.a.createElement("div",null,a))}return o.a.createElement("div",{className:"result page"},n)}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(83);var M=n(89),x=n(91),T=n(90);i.a.render(o.a.createElement(function(){var e=Object(s.useState)(localStorage.getItem("lang")||"en"),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)("flat"),l=Object(a.a)(r,2),u=l[0],m=l[1],d=n(85);function h(e){var t;return"object"===typeof e?t=e[c]?e[c]:e.en:(t=d[e]&&"en"!==c?d[e]:e,d[e]||console.warn(e)),t}function y(){c="en"===c?"bi":"en",localStorage.setItem("lang",c),i(c)}return o.a.createElement(M.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(x.a,{render:function(e){return o.a.createElement(p,Object.assign({},e,{cutter:u,setCutter:m}))}}),o.a.createElement("header",{className:"clear"},o.a.createElement(x.a,{render:function(e){return o.a.createElement(f,e)}}),o.a.createElement(x.a,{render:function(e){return o.a.createElement(g,e)}}),o.a.createElement(x.a,{render:function(e){return o.a.createElement(v,Object.assign({},e,{lang:c,toggleLang:y}))}})),o.a.createElement("div",{className:"pages"},o.a.createElement(T.a,null,o.a.createElement(x.a,{path:"/",render:function(e){return o.a.createElement(b,Object.assign({},e,{ts:h}))},exact:!0}),o.a.createElement(x.a,{path:"/menu",render:function(e){return o.a.createElement(E,Object.assign({},e,{ts:h}))}}),o.a.createElement(x.a,{path:"/result",render:function(e){return o.a.createElement(L,Object.assign({},e,{ts:h}))}}),o.a.createElement(x.a,{path:"/courses/:section/:id",render:function(e){return o.a.createElement(w,Object.assign({},e,{ts:h}))}}),o.a.createElement(x.a,{path:"/courses/:section",render:function(e){return o.a.createElement(S,Object.assign({},e,{ts:h,cutter:u,setCutter:m}))}}),o.a.createElement(x.a,{path:"/new",render:function(e){return o.a.createElement(q,Object.assign({},e,{ts:h}))}})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);