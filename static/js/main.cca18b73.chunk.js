(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(86)},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(22),o=n(0),s=n.n(o),c=n(26),r=n.n(c),i=n(5),l=n(6),u=n(8),m=n(7),d=n(9),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="flat";"/"===e?t="diagonal":"/menu"===e&&(t="full"),this.props.setCutter(t)}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.cutter+" cutter"})}}]),t}(o.Component),p=n(87),f=(n(34),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={className:"",linkTo:"/"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="cross",n="/",a=e.split("/");"/"===e?(t="",n="/menu"):4===a.length&&(n="/"+a[1]+"/"+a[2],t="back"),this.setState({className:t,linkTo:n})}},{key:"render",value:function(){return s.a.createElement(p.a,{to:this.state.linkTo,className:this.state.className+" hamburger"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))}}]),t}(o.Component)),g=(n(38),function(e){return s.a.createElement("div",{className:"lang-selector",onClick:e.toggleLang},e.lang)}),v=(n(40),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={title:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t="Scrum.id",n=e.split("/");-1!==e.indexOf("questions")?t="Exam":n.length>=3&&(t=n[2].replace(/-/gi," ")),this.setState({title:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"title"},this.state.title)}}]),t}(o.Component)),E=(n(42),function(e){return s.a.createElement("div",{className:"menu"},s.a.createElement(p.a,{to:"/"},"Courses"),s.a.createElement(p.a,{to:"/"},"Articles"),s.a.createElement(p.a,{to:"/"},"About Us"),s.a.createElement("span",null,"v0.1"))}),y=(n(44),function(e){var t=e.items.map(function(t,n){var a=t.status<3?"green":"red";return s.a.createElement("tr",{key:n},s.a.createElement("td",null,t.total),s.a.createElement("td",null,t.title[e.lang]),s.a.createElement("td",{className:a},t.price[e.lang]))});return s.a.createElement("div",{className:"course shadow"},s.a.createElement("div",{className:"top shadow",style:{backgroundImage:"linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/"+e.link.en.toLowerCase()+".jpeg)"}},s.a.createElement("div",null,s.a.createElement("h1",null,e.title[e.lang]),s.a.createElement("p",null,e.content[e.lang]))),s.a.createElement("div",{className:"bottom"},s.a.createElement("span",null,"This section includes"),"  :",s.a.createElement("table",null,s.a.createElement("tbody",null,t)),s.a.createElement(p.a,{to:"/courses/"+e.link[e.lang],className:"blue btn shadow"},"Let's go!")))}),b=(n(46),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={courses:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/courses.json").then(function(e){return e.json()}).then(function(t){var n=t.data.map(function(t,n){return s.a.createElement(y,{title:t.title,status:t.status,items:t.items,content:t.content,link:t.link,key:n,lang:e.props.lang})});e.setState({courses:n})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"courses page"},this.state.courses)}}]),t}(o.Component)),k=n(16),O=n.n(k),N=(n(71),function(e){var t=1===e.category?"radio":"checkbox",n=e.answer===e.selection&&!0===e.selection?"true":e.answer!==e.selection&&!0===e.selection?"false":e.answer!==e.selection&&!1===e.selection?"miss":"",a=String.fromCharCode(65+e.i)+")";return s.a.createElement("label",{className:n+" option shadow"},s.a.createElement("input",{name:"option"+e.questionId,value:e.id,type:t,onClick:function(){return e.onChooseOption(e.questionId,e.id,e.category,e.i)}}),s.a.createElement("div",null,s.a.createElement("span",null,a)," ",e.content[e.lang]))}),j=(n(73),function(e){var t=e.options.map(function(t,n){return s.a.createElement(N,{lang:e.lang,questionId:e.id,id:t.id,content:t.content,key:t.id,i:n,selection:t.selection,answer:t.answer,category:e.category,onChooseOption:e.onChooseOption})}),n=e.feedback?s.a.createElement("div",{className:"feedback shadow"},s.a.createElement("span",{className:"label"},"Feedback"),s.a.createElement("p",null,e.feedback[e.lang])):"",a=e.feedback?s.a.createElement("span",{className:"label"},e.i+1,". Question "):"";return s.a.createElement("div",{className:"question","data-id":e.id},s.a.createElement("div",{className:"content shadow"},a,s.a.createElement("p",null,e.content[e.lang])),s.a.createElement("div",{className:"options"},t),n)}),w=(n(75),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={data:[],questions:s.a.createElement("div",{className:"message paper shadow center"},"\xb7\xb7\xb7 Please wait \xb7\xb7\xb7"),selections:{},position:0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/questions-"+this.props.match.params.section.toLowerCase()+"-"+this.props.match.params.id.toLowerCase()+".json").then(function(e){if(!e.ok)throw e;return e.text()}).then(function(t){var n=(t=JSON.parse(atob(t))).data;e.shuffleArray(n);var a=(n=n.slice(0,20)).map(function(t,n){return s.a.createElement(j,{lang:e.props.lang,key:n,id:t.id,content:t.content,options:t.options,category:t.category,onChooseOption:function(t,n,a,o){return e.onChooseOption(t,n,a,o)}})});e.setState({questions:a,data:n}),e.renderQuestion(),document.querySelector(".nav").style.display="block"}).catch(function(e){try{document.querySelector(".message ").innerHTML="&middot;&middot;&middot; UNDER DEVELOPMENT &middot;&middot;&middot;"}catch(t){console.log(t)}console.log(e)})}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}},{key:"onNavigate",value:function(e){var t=this,n=e&&this.state.position<this.state.questions.length-1?this.state.position+1:!e&&this.state.position>0?this.state.position-1:this.state.position;this.setState({position:n},function(){t.renderQuestion()})}},{key:"onChooseOption",value:function(e,t,n,a){var o=this,s=this.state.selections,c=this.state.data[this.state.position].options;if(1===n){for(var r=0;r<c.length;r++)c[r].selection=r===a;s[e]=[t]}else if(2===n){var i=document.querySelectorAll("[name=option"+e+"]:checked");s[e]=Array.prototype.map.call(i,function(e){return e.value});for(var l=0;l<c.length;l++)c[l].selection=-1!==s[e].indexOf(c[l].id);s[e].length||delete s[e]}this.setState({selections:s},function(){o.onFinish(),document.querySelector(".finish").style.display=Object.keys(s).length===o.state.questions.length?"block":"none"})}},{key:"renderQuestion",value:function(){for(var e=document.querySelectorAll(".question"),t=0;t<e.length;t++)e[t].style.display="none";for(var n=document.getElementsByClassName("question")[this.state.position].children[1],a=n.children.length;a>=0;a--)n.appendChild(n.children[Math.random()*a|0]);for(var o=0;o<n.children.length;o++)n.children[o].children[1].children[0].innerHTML=String.fromCharCode(65+o)+")";document.getElementsByClassName("question")[this.state.position].style.display="block",document.querySelector(".previous").style.display=0!==this.state.position?"block":"none",document.querySelector(".next").style.display=this.state.position!==this.state.questions.length-1?"block":"none"}},{key:"onFinish",value:function(){for(var e=this.state.data,t={score:0,questions:e,correct:0,incorrect:0,section:this.props.match.params.section},n=0;n<e.length;n++)for(var a=0;a<e[n].options.length;a++)if(!(e[n].options[a].answer===e[n].options[a].selection)){t.incorrect++;break}t.correct=e.length-t.incorrect,t.score=(t.correct/e.length*100).toFixed(2).replace(/[.,]00$/,""),localStorage.setItem("result",O.a.AES.encrypt(JSON.stringify(t),"result"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"questions page"},this.state.questions,s.a.createElement("div",{className:"clear nav"},s.a.createElement("div",{className:"previous shadow btn",onClick:function(){return e.onNavigate(0)}},"Prev"),s.a.createElement("div",{className:"page-number"},this.state.position+1," of ",Object.keys(this.state.questions).length),s.a.createElement("div",{className:"next shadow btn",onClick:function(){return e.onNavigate(1)}},"Next")),s.a.createElement(p.a,{className:"finish shadow btn green",onClick:function(){return e.onFinish()},to:"/result"},"Finish"))}}]),t}(o.Component)),C=(n(77),function(e){var t=e.chapters.map(function(t,n){return s.a.createElement(p.a,{key:n,to:"/courses/"+e.section+"/"+t.link[e.lang],className:"chapter clear"},s.a.createElement("div",{className:"name"},t.title[e.lang]),s.a.createElement("div",{className:"arrow"}))});return s.a.createElement("div",{className:"type-"+e.type.id+" section"},s.a.createElement("div",{className:"top shadow",style:{backgroundImage:"linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/"+e.section.toLowerCase()+".jpeg)"}},s.a.createElement("div",null,s.a.createElement("h1",null,e.title[e.lang]),s.a.createElement("p",null,e.type[e.lang]))),s.a.createElement("div",{className:"chapters shadow"},t))}),S=(n(79),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={sections:s.a.createElement("div",{className:"message paper shadow center"},"\xb7\xb7\xb7 Please wait \xb7\xb7\xb7"),data:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/sections-"+this.props.match.params.section.toLowerCase()+".json").then(function(e){if(!e.ok)throw e;return e.json()}).then(function(t){var n=t.data,a=n.map(function(t,n){return s.a.createElement(C,{lang:e.props.lang,title:t.title,key:n,type:t.type,chapters:t.chapters,section:e.props.match.params.section})});e.setState({sections:a,data:n},function(){e.onTypeToggle(null,1),document.querySelector(".type-toggle").classList.add("block"),e.props.setCutter("medium")})}).catch(function(e){e.text().then(function(e){console.warn(e),document.querySelector(".message ").innerHTML="&middot;&middot;&middot; UNDER DEVELOPMENT &middot;&middot;&middot;"})})}},{key:"onTypeToggle",value:function(e,t){document.querySelectorAll(".section").forEach(function(e){e.classList.remove("block"),e.classList.add("none")}),document.querySelectorAll(".section.type-"+t).forEach(function(e){e.classList.remove("none"),e.classList.add("block")});var n=document.querySelectorAll(".section.block");n[0].classList.add("first"),n[n.length-1].classList.add("last"),e&&(document.querySelectorAll(".type-toggle > div").forEach(function(e){e.classList.remove("active")}),e.target.classList.add("active"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"sections page"},s.a.createElement("div",{className:"type-toggle clear"},s.a.createElement("div",{onClick:function(t,n){return e.onTypeToggle(t,1)},className:"active"},"Exams"),s.a.createElement("div",{onClick:function(t,n){return e.onTypeToggle(t,2)}},"Lessons")),s.a.createElement("div",null,this.state.sections))}}]),t}(o.Component)),q=function(e){return s.a.createElement("div",{className:"div"},"ini div")},L=(n(81),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={result:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){try{var e=JSON.parse(O.a.AES.decrypt(localStorage.getItem("result"),"result").toString(O.a.enc.Utf8));this.setState({result:e})}catch(t){}}},{key:"render",value:function(){var e=this,t=this.state.result,n="please wait";if(t){var a=t.questions.map(function(t,n){return s.a.createElement(j,{lang:e.props.lang,key:n,id:n,i:n,content:t.content,options:t.options,feedback:t.feedback,categoryId:2,onChooseOption:function(){}})}),o=t.score>=85?"Congratulations, You passed this mock up exam!":"Oh no.. You fail this mock up exam!",c=t.score>=85?"green":"red";n=s.a.createElement("div",null,s.a.createElement("div",{className:"summary shadow"},s.a.createElement("div",{className:"clear"},s.a.createElement("span",null,"Title"),s.a.createElement("span",null,":"),s.a.createElement("span",null,t.section)),s.a.createElement("div",{className:"clear"},s.a.createElement("span",null,"Points"),s.a.createElement("span",null,":"),s.a.createElement("span",null,t.correct," of ",t.correct+t.incorrect)),s.a.createElement("div",{className:"clear"},s.a.createElement("span",null,"Percentage"),s.a.createElement("span",null,":"),s.a.createElement("span",null,t.score,"%")),s.a.createElement("div",{className:c+" message"},o)),s.a.createElement("div",null,a))}return s.a.createElement("div",{className:"result page"},n)}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(83);var T=n(88),x=n(90),M=n(89);r.a.render(s.a.createElement(function(){var e=Object(o.useState)(localStorage.getItem("lang")||"en"),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)("flat"),i=Object(a.a)(r,2),l=i[0],u=i[1];return s.a.createElement(T.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(x.a,{render:function(e){return s.a.createElement(h,Object.assign({},e,{cutter:l,setCutter:u}))}}),s.a.createElement("header",{className:"clear"},s.a.createElement(x.a,{render:function(e){return s.a.createElement(f,e)}}),s.a.createElement(x.a,{render:function(e){return s.a.createElement(v,e)}}),s.a.createElement(x.a,{render:function(e){return s.a.createElement(g,Object.assign({},e,{lang:n,toggleLang:function(){return function(e,t){e="en"===e?"bi":"en",localStorage.setItem("lang",e),t(e)}(n,c)}}))}})),s.a.createElement("div",{className:"pages"},s.a.createElement(M.a,null,s.a.createElement(x.a,{path:"/",render:function(e){return s.a.createElement(b,Object.assign({},e,{lang:n}))},exact:!0}),s.a.createElement(x.a,{path:"/menu",render:function(e){return s.a.createElement(E,Object.assign({},e,{lang:n}))}}),s.a.createElement(x.a,{path:"/result",render:function(e){return s.a.createElement(L,Object.assign({},e,{lang:n}))}}),s.a.createElement(x.a,{path:"/courses/:section/:id",render:function(e){return s.a.createElement(w,Object.assign({},e,{lang:n}))}}),s.a.createElement(x.a,{path:"/courses/:section",render:function(e){return s.a.createElement(S,Object.assign({},e,{lang:n,cutter:l,setCutter:u}))}}),s.a.createElement(x.a,{path:"/new",render:function(e){return s.a.createElement(q,Object.assign({},e,{lang:n}))}})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.cca18b73.chunk.js.map