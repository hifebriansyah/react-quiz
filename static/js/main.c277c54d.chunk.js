(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(75)},33:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(25),s=n.n(i),c=n(7),r=n(8),l=n(10),u=n(9),m=n(11),h=(n(33),n(76)),d=function(e){var t=e.items.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.total),o.a.createElement("td",null,e.content),o.a.createElement("td",{className:"green"},e.price))});return o.a.createElement("div",{className:"exam"},o.a.createElement("div",{className:"top",style:{backgroundImage:"linear-gradient(rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.8)), url(/"+e.id+".jpg)"}},o.a.createElement("div",null,o.a.createElement("h1",null,e.name),o.a.createElement("p",null,e.content))),o.a.createElement("div",{className:"bottom"},o.a.createElement("span",null,"This section includes"),"  :",o.a.createElement("table",null,o.a.createElement("tbody",null,t)),o.a.createElement(h.a,{to:"/questions/"+e.link,className:"btn"},"Let's go!")))},p=(n(37),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={exams:[]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/exams.json").then(function(e){return e.json()}).then(function(t){var n=t.data.map(function(e,t){return o.a.createElement(d,{name:e.name,id:e.id,items:e.items,content:e.content,link:e.link,key:e.id})});e.setState({exams:n})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"menu page"},this.state.exams)}}]),t}(a.Component)),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={className:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t=this.state.class;t="/"===e?"diagonal":"flat",this.setState({className:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.className+" cutter"})}}]),t}(a.Component),v=n(15),y=n.n(v),E=(n(62),function(e){var t=1===e.categoryId?"radio":"checkbox";return o.a.createElement("label",{className:"option"},o.a.createElement("input",{name:"option"+e.questionId,value:e.id,type:t,onClick:function(){return e.onChooseOption(e.questionId,e.id,e.categoryId)}}),o.a.createElement("div",null,o.a.createElement("span",null)," ",e.content))}),g=(n(64),function(e){var t=e.options.map(function(t,n){return o.a.createElement(E,{questionId:e.id,id:t.id,content:t.content,key:t.id,categoryId:e.categoryId,onChooseOption:e.onChooseOption})});return o.a.createElement("div",{className:"question","data-id":e.id},o.a.createElement("p",null,e.eq,". ",e.content),o.a.createElement("div",{className:"options"},t))}),b=(n(66),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={data:[],questions:[],selections:{},position:0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/hifebriansyah/5f62028cf655a6b5af592986057d88ef/raw/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){var n=t.data;e.shuffleArray(n);var a=n.map(function(t,n){return o.a.createElement(g,{eq:n+1,key:t.id,id:t.id,content:t.content,options:t.options,categoryId:t.category.id,onChooseOption:function(t,n,a){return e.onChooseOption(t,n,a)}})});e.setState({questions:a,data:n}),e.renderQuestion()})}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}},{key:"onNavigate",value:function(e){var t=this,n=e&&this.state.position<this.state.questions.length-1?this.state.position+1:!e&&this.state.position>0?this.state.position-1:this.state.position;this.setState({position:n},function(){t.renderQuestion()})}},{key:"onChooseOption",value:function(e,t,n){var a=this,o=this.state.selections;if(o[e]=[t],2===n){var i=document.querySelectorAll("[name=option"+e+"]:checked");o[e]=Array.prototype.map.call(i,function(e){return e.value}),o[e].length||delete o[e]}this.setState({selections:o},function(){document.querySelector(".finish").style.display=Object.keys(o).length===a.state.questions.length?"block":"none"})}},{key:"renderQuestion",value:function(){for(var e=document.querySelectorAll(".question"),t=0;t<e.length;t++)e[t].style.display="none";for(var n=document.getElementsByClassName("question")[this.state.position].children[1],a=n.children.length;a>=0;a--)n.appendChild(n.children[Math.random()*a|0]);for(var o=0;o<n.children.length;o++)n.children[o].children[1].children[0].innerHTML=String.fromCharCode(65+o)+")";document.getElementsByClassName("question")[this.state.position].style.display="block",document.querySelector(".previous").style.display=0!==this.state.position?"block":"none",document.querySelector(".next").style.display=this.state.position!==this.state.questions.length-1?"block":"none"}},{key:"onFinish",value:function(){var e=encodeURIComponent(y.a.AES.encrypt(JSON.stringify(this.state.selections),"selections")),t=encodeURIComponent(y.a.AES.encrypt(JSON.stringify(this.state.data),"questions"));window.location.replace("/validate.html?selections="+e+"&questions="+t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"questions page"},this.state.questions,o.a.createElement("div",{className:"clear"},o.a.createElement("div",{className:"previous",onClick:function(){return e.onNavigate(0)}},"previous"),o.a.createElement("div",{className:"next",onClick:function(){return e.onNavigate(1)}},"next")),o.a.createElement("div",{className:"finish",onClick:function(){return e.onFinish()}},"finish"))}}]),t}(a.Component)),k=(n(68),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={className:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.onRouteChanged(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.onRouteChanged(this.props.location.pathname)}},{key:"onRouteChanged",value:function(e){var t=this.state.class;t="/"===e?"":"cross",this.setState({className:t})}},{key:"render",value:function(){return o.a.createElement(h.a,{to:"/",className:this.state.className+" hamburger"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}}]),t}(a.Component)),O=function(e){return o.a.createElement("div",{className:"div"},"ini div")},N=(n(70),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={result:null},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){try{var e=new URLSearchParams(window.location.search),t=JSON.parse(y.a.AES.decrypt(decodeURIComponent(e.get("result")),"result").toString(y.a.enc.Utf8));console.log(t)}catch(n){}}},{key:"render",value:function(){return o.a.createElement("div",{className:"result"})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(72);var j=n(77),C=n(79),q=n(78);s.a.render(o.a.createElement(function(){return o.a.createElement(j.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(C.a,{render:function(e){return o.a.createElement(f,e)}}),o.a.createElement(C.a,{render:function(e){return o.a.createElement(k,e)}}),o.a.createElement("div",{className:"pages"},o.a.createElement(q.a,null,o.a.createElement(C.a,{path:"/",exact:!0,component:p}),o.a.createElement(C.a,{path:"/result",component:N}),o.a.createElement(C.a,{path:"/questions/:id",component:b}),o.a.createElement(C.a,{path:"/new",component:O})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.c277c54d.chunk.js.map