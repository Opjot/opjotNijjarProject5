(this["webpackJsonpopjot-nijjar-teamify"]=this["webpackJsonpopjot-nijjar-teamify"]||[]).push([[0],{18:function(e,t,a){e.exports=a(39)},23:function(e,t,a){},24:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),o=a.n(l),s=(a(23),a(17)),c=a(5),i=a(6),m=a(8),u=a(7),p=a(9),h=(a(24),a(13)),d=a.n(h);d.a.initializeApp({apiKey:"AIzaSyAwnl3RtvbCeyQCc-wVAlrqhJ1AlhYDTOo",authDomain:"opjot-nijjar-project-5.firebaseapp.com",databaseURL:"https://opjot-nijjar-project-5.firebaseio.com",projectId:"opjot-nijjar-project-5",storageBucket:"opjot-nijjar-project-5.appspot.com",messagingSenderId:"468885992587",appId:"1:468885992587:web:2939484acfdd1ca542508e"});var f=d.a,j=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Teamify"),r.a.createElement("div",{className:"instructions"},r.a.createElement("h2",null,"Instruction"),r.a.createElement("p",null,"1. Insert names of all players into the text box one by one."),r.a.createElement("p",null,"2. click randomize!"),r.a.createElement("p",null,"3. You will receive two randomly generated teams.")))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Opjot S. Nijjar \u24b8 Copyright 2020"))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){(t.preventDefault(),""===e.state.userInput)?alert("Please enter a name!"):(f.database().ref().push(e.state.userInput),e.setState({userInput:""}))},e.removeName=function(e){f.database().ref().child(e).remove()},e.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t],r=e[a];e[t]=r,e[a]=n}return e},e.randomize=function(){var t=[],a=[],n=Object(s.a)(e.state.namesArray);e.shuffle(n).map((function(e,n){n%2===0?t.push(e):a.push(e)})),t.length===a.length?e.setState({teamOne:t,teamTwo:a,isHidden:!0}):alert("Please add an even number of players!")},e.state={namesArray:[],userInput:"",teamOne:[],teamTwo:[],random:null,isHidden:!1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({key:r,name:n[r]});e.setState({namesArray:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App wrapper"},r.a.createElement(j,null),r.a.createElement("main",null,r.a.createElement("div",{className:"formbut"},r.a.createElement("form",{action:"submit"},r.a.createElement("label",{htmlFor:"userNames"}," Please type player names. "),r.a.createElement("input",{type:"text",id:"userNames",onChange:this.handleChange,value:this.state.userInput}),r.a.createElement("button",{type:"submit",onClick:this.handleClick}," Add a name! ")),r.a.createElement("button",{className:"random",type:"submit",onClick:this.randomize},"Randomize!")),r.a.createElement("div",{className:"userNames"},r.a.createElement("div",{className:"name"},r.a.createElement("h3",null,"Names"),r.a.createElement("div",null,this.state.namesArray.map((function(t){return r.a.createElement("div",{className:"showName",key:t.key},r.a.createElement("p",null,t.name),r.a.createElement("button",{onClick:function(){return e.removeName(t.key)}}," Remove "))})))),r.a.createElement("div",{className:"team1"},this.state.isHidden&&r.a.createElement("h3",null,"Team 1"),this.state.teamOne.map((function(e){return r.a.createElement("div",{className:"teammates",key:e.key},r.a.createElement("p",null,e.name))}))),r.a.createElement("div",{className:"team2"},this.state.isHidden&&r.a.createElement("h3",null,"Team 2"),this.state.teamTwo.map((function(e){return r.a.createElement("div",{className:"teammates",key:e.key},r.a.createElement("p",null,e.name))}))))),r.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1000528f.chunk.js.map