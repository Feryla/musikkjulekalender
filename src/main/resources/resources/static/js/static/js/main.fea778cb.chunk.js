(this.webpackJsonpmjkfront=this.webpackJsonpmjkfront||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(36),i=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(11),s=n(12),u=n(14),c=n(13),d=n(15),m=n(37),p=n(5),g=n(3),f=n(8),h=n.n(f),b=n(32),v=n.n(b),E=n(4);function k(){var e=Object(g.a)(["\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n"]);return k=function(){return e},e}function y(){var e=Object(g.a)(["\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n"]);return y=function(){return e},e}function j(){var e=Object(g.a)(["\n  font-size: 2rem;\n  margin-bottom: 1rem;\n"]);return j=function(){return e},e}var O=E.b.h1(j()),S=E.b.h2(y());E.b.h3(k());function x(e){return r.a.createElement(S,null,h()(e.unixDate).format("DD. MMMM"))}var D=n(66),w=n.n(D),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{src:this.props.link,controls:!0,style:{width:"100%"}})}}]),t}(r.a.Component),C=n(67),M=n.n(C),A=n(68),_=n.n(A),T=(n(89),function(){return fetch("".concat("/api","/admin/alldata")).then((function(e){return e.json()})).then((function(e){return e}))});function R(){var e=Object(g.a)(["\n  width: 100%;\n"]);return R=function(){return e},e}function B(){var e=Object(g.a)(["\n  width: 300px;\n  height: 140px;\n"]);return B=function(){return e},e}var Y=E.b.textarea(B()),V=E.b.input(R()),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={description:n.props.day.description,optionalSolutionVideo:n.props.day.optionalSolutionVideo,solutionArtist:n.props.day.solutionArtist,solutionSong:n.props.day.solutionSong,link:n.props.day.link,revealDate:h()(n.props.day.revealDate).toDate(),solutionDate:h()(n.props.day.solutionDate).toDate(),addSolution:"",confirmDelete:!1,file:{},feedback:"",solutions:n.props.solutions},n.changeRevealDate=n.changeRevealDate.bind(Object(p.a)(n)),n.changeSolutionDate=n.changeSolutionDate.bind(Object(p.a)(n)),n.changeDescription=n.changeDescription.bind(Object(p.a)(n)),n.changeSolutionArtist=n.changeSolutionArtist.bind(Object(p.a)(n)),n.changeSolutionSong=n.changeSolutionSong.bind(Object(p.a)(n)),n.changeLink=n.changeLink.bind(Object(p.a)(n)),n.changeOptionalSolutionVideo=n.changeOptionalSolutionVideo.bind(Object(p.a)(n)),n.saveChanges=n.saveChanges.bind(Object(p.a)(n)),n.addSolutionChange=n.addSolutionChange.bind(Object(p.a)(n)),n.addSolution=n.addSolution.bind(Object(p.a)(n)),n.createMarkup=n.createMarkup.bind(Object(p.a)(n)),n.deleteDay=n.deleteDay.bind(Object(p.a)(n)),n.onDrop=n.onDrop.bind(Object(p.a)(n)),n.upload=n.upload.bind(Object(p.a)(n)),n.deleteSolution=n.deleteSolution.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeRevealDate",value:function(e){this.setState({revealDate:e})}},{key:"changeSolutionDate",value:function(e){this.setState({solutionDate:e})}},{key:"changeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"changeSolutionArtist",value:function(e){this.setState({solutionArtist:e.target.value})}},{key:"changeSolutionSong",value:function(e){this.setState({solutionSong:e.target.value})}},{key:"changeOptionalSolutionVideo",value:function(e){this.setState({optionalSolutionVideo:e.target.value})}},{key:"changeLink",value:function(e){this.setState({link:e.target.value})}},{key:"saveChanges",value:function(){var e,t=this,n=this.state,a=n.link,r=n.description,l=n.optionalSolutionVideo,i=n.solutionArtist,o=n.solutionSong,s=n.revealDate,u=n.solutionDate,c={link:a,description:r,optionalSolutionVideo:l,solutionArtist:i,solutionSong:o,revealDate:s.valueOf(),solutionDate:u.valueOf(),revealDateAsString:h()(s).format("YYYY-MM-DD"),id:this.props.day.id};(e=c,fetch("".concat("/api","/admin/update"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(){T(),t.setState({feedback:"Dag oppdatert med hell!"})})).catch((function(){t.setState({feedback:"Noe gikk fryktelig galt under lagring"})}))}},{key:"addSolutionChange",value:function(e){this.setState({addSolution:e.target.value})}},{key:"addSolution",value:function(e){var t,n,a=this;""!==this.state.addSolution?(this.setState((function(e){var t=[a.state.addSolution].concat(Object(m.a)(e.solutions));return console.log("New soluitions: ",t),{addSolution:"",solutions:[a.state.addSolution].concat(Object(m.a)(e.solutions))}})),t=this.props.day.id,n=this.state.addSolution,fetch("".concat("/api","/admin/addsolution/").concat(t,"/").concat(n),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))):this.setState({feedback:"L\xf8sning er tom!"})}},{key:"createMarkup",value:function(){return{__html:this.state.optionalSolutionVideo}}},{key:"deleteSolution",value:function(e,t){this.setState((function(e){return{feedback:"Deleting day",solutions:e.solutions.filter((function(e){return e!==t}))}})),function(e,t){fetch("".concat("/api","/admin/deletesolution/").concat(e,"/").concat(encodeURIComponent(t)),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}(e,t)}},{key:"deleteDay",value:function(){var e;this.state.confirmDelete?(e=this.props.day.id,fetch("".concat("/api","/admin/day/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))):this.setState({confirmDelete:!0})}},{key:"onDrop",value:function(e){this.setState({file:e[0]})}},{key:"upload",value:function(){var e=_.a.post("/api/admin/upload/"+this.props.day.revealDateAsString);e.query({filename:this.state.file.name}),e.attach("file",this.state.file);var t=this;e.end((function(e,n){n&&T(),t.setState({file:{}})}))}},{key:"abortUpload",value:function(){this.setState({file:{}})}},{key:"render",value:function(){var e=r.a.createElement("p",null,"Fil som blir lastet opp: ",this.state.file.name,r.a.createElement("button",{onClick:this.upload},"Last opp"),r.a.createElement("button",{onClick:this.abortUpload},"Avbryt opplasting"));return r.a.createElement("div",{style:{border:"1px solid black",borderRadius:"5px",margin:"5px",padding:"5px"}},r.a.createElement(x,{unixDate:this.props.day.revealDateAsString}),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Kalender \xe5pner"),r.a.createElement("td",null,r.a.createElement(v.a,{selected:this.state.revealDate,onChange:this.changeRevealDate}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Dag avsluttes"),r.a.createElement("td",null,r.a.createElement(v.a,{selected:this.state.solutionDate,onChange:this.changeSolutionDate}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Beskrivelse"),r.a.createElement("td",null,r.a.createElement(Y,{type:"text",onChange:this.changeDescription,value:this.state.description}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Artist"),r.a.createElement("td",null,r.a.createElement(V,{type:"text",onChange:this.changeSolutionArtist,value:this.state.solutionArtist}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sang"),r.a.createElement("td",null,r.a.createElement(V,{type:"text",onChange:this.changeSolutionSong,value:this.state.solutionSong}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Video"),r.a.createElement("td",null,r.a.createElement("p",null,'G\xe5 inn p\xe5 youtubevideoen, trykk "share", velg Embed, og lim inn hele sulamitten i feltet under'),r.a.createElement(V,{type:"text",onChange:this.changeOptionalSolutionVideo,value:this.state.optionalSolutionVideo}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Link"),r.a.createElement("td",null,r.a.createElement(V,{readOnly:!0,disabled:!0,type:"text",onChange:this.changeLink,value:this.state.link}))))),r.a.createElement("ul",null,this.state.solutions.map((function(e){var t=this;return r.a.createElement("li",{key:e},"L\xf8sning: ",e,r.a.createElement("button",{onClick:function(){return t.deleteSolution(t.props.day.id,e)}},"Slett"))}),this)),r.a.createElement("input",{type:"text",value:this.state.addSolution,placeholder:"Legg til l\xf8sning",onChange:this.addSolutionChange}),r.a.createElement("button",{onClick:this.addSolution},"Legg til"),r.a.createElement(M.a,{ref:"dropzone",className:"dropzone",onDrop:this.onDrop},r.a.createElement("p",null,"Last opp l\xe5t")),this.state.file.name?e:"",r.a.createElement("p",null,r.a.createElement("span",null,this.state.optionalSolutionVideo?r.a.createElement("span",{className:"youtube",dangerouslySetInnerHTML:this.createMarkup()}):"")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.saveChanges},"Lagre endringer"),r.a.createElement("button",{onClick:this.deleteDay},"Slett dag"),this.state.confirmDelete?"Bekreft":"",r.a.createElement("div",null,this.state.feedback)),r.a.createElement(L,{link:this.state.link})))}}]),t}(r.a.Component);H.defaultProps={solutions:[]};var U=H,I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={description:"",optionalSolutionVideo:"",solutionArtist:"",solutionSong:"",link:"",revealDate:h()().toDate(),solutionDate:h()().toDate()},n.changeRevealDate=n.changeRevealDate.bind(Object(p.a)(n)),n.changeSolutionDate=n.changeSolutionDate.bind(Object(p.a)(n)),n.changeDescription=n.changeDescription.bind(Object(p.a)(n)),n.changeSolutionArtist=n.changeSolutionArtist.bind(Object(p.a)(n)),n.changeSolutionSong=n.changeSolutionSong.bind(Object(p.a)(n)),n.changeLink=n.changeLink.bind(Object(p.a)(n)),n.addDay=n.addDay.bind(Object(p.a)(n)),n.changeOptionalSolutionVideo=n.changeOptionalSolutionVideo.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeRevealDate",value:function(e){this.setState({revealDate:e}),console.log("New date: ",e)}},{key:"changeSolutionDate",value:function(e){this.setState({solutionDate:e}),console.log("New date: ",e)}},{key:"changeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"changeSolutionArtist",value:function(e){this.setState({solutionArtist:e.target.value})}},{key:"changeSolutionSong",value:function(e){this.setState({solutionSong:e.target.value})}},{key:"changeOptionalSolutionVideo",value:function(e){this.setState({optionalSolutionVideo:e.target.value})}},{key:"changeLink",value:function(e){this.setState({link:e.target.value})}},{key:"addDay",value:function(){var e,t={link:this.state.link,description:this.state.description,optionalSolutionVideo:this.state.optionalSolutionVideo,solutionArtist:this.state.solutionArtist,solutionSong:this.state.solutionSong,revealDate:this.state.revealDate.valueOf(),solutionDate:this.state.solutionDate.valueOf(),revealDateAsString:h()(this.state.revealDate).format("YYYY-MM-DD")};console.log("Save object: ",t),e=t,fetch("".concat("/api","/admin/day"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e})),T()}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 pane"},r.a.createElement(O,null,"Legg til dag"),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Kalender \xe5pner"),r.a.createElement("td",null,r.a.createElement(v.a,{selected:this.state.revealDate,onChange:this.changeRevealDate}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Dag avsluttes"),r.a.createElement("td",null,r.a.createElement(v.a,{selected:this.state.solutionDate,onChange:this.changeSolutionDate}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sang/Fasit"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",onChange:this.changeSolutionSong,value:this.state.solutionSong}))))),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.addDay},"Legg til dag"))))}}]),t}(r.a.Component),P=r.a.createContext({days:[],setDays:function(){return[]},answers:[],setAnswers:function(){return[]},date:"",setDate:function(){},today:null,setToday:function(){},user:{},setUser:function(){},userResult:{},setUserResult:function(){},topList:[],setTopList:function(){return[]},solutions:[],setSolutions:function(){return[]}});var z=function(){var e=Object(a.useContext)(P),t=e.days,n=e.solutions,l=e.setDays,i=e.setAnswers,o=e.setDate,s=e.setToday,u=e.setUser,c=e.setUserResult,d=e.setTopList,m=e.setSolutions;return Object(a.useEffect)((function(){T().then((function(e){var t=e.days,n=e.date,a=e.user,r=e.answers,p=e.today,g=e.userResult,f=e.topList,h=e.solutions;l(t),o(n),u(a),i(r),s(p),c(g),d(f),m(h)}))}),[i,o,l,s,u,c,d,m]),r.a.createElement("div",{style:{backgroundColor:"white",flexWrap:"wrap",margin:"5px auto",maxWidth:"980px"}},t.map((function(e,t){var a=n.filter((function(t){return t.day===e.id})).map((function(e){return e.solution}));return r.a.createElement(U,{key:e.revealDate+a.length,day:e,solutions:a})})),r.a.createElement(I,null))},N=n(10),F=function(e){var t=e.children,n=Object(a.useState)([]),l=Object(N.a)(n,2),i=l[0],o=l[1],s=Object(a.useState)([]),u=Object(N.a)(s,2),c=u[0],d=u[1],m=Object(a.useState)(""),p=Object(N.a)(m,2),g=p[0],f=p[1],h=Object(a.useState)(null),b=Object(N.a)(h,2),v=b[0],E=b[1],k=Object(a.useState)(null),y=Object(N.a)(k,2),j=y[0],O=y[1],S=Object(a.useState)(null),x=Object(N.a)(S,2),D=x[0],w=x[1],L=Object(a.useState)([]),C=Object(N.a)(L,2),M=C[0],A=C[1],_=Object(a.useState)([]),T=Object(N.a)(_,2),R={days:i,setDays:o,answers:c,setAnswers:d,date:g,setDate:f,today:v,setToday:E,user:j,setUser:O,userResult:D,setUserResult:w,topList:M,setTopList:A,solutions:T[0],setSolutions:T[1]};return r.a.createElement(P.Provider,{value:R},t)},W=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(z,null))}}]),t}(r.a.Component),J=r.a.createContext({days:[],setDays:function(){return[]},answers:[],setAnswers:function(){return[]},date:"",setDate:function(){},today:null,setToday:function(){},user:{},setUser:function(){},userResult:{},setUserResult:function(){},topList:[],setTopList:function(){return[]}}),G=function(e){var t=e.children,n=Object(a.useState)([]),l=Object(N.a)(n,2),i=l[0],o=l[1],s=Object(a.useState)([]),u=Object(N.a)(s,2),c=u[0],d=u[1],m=Object(a.useState)(""),p=Object(N.a)(m,2),g=p[0],f=p[1],h=Object(a.useState)(null),b=Object(N.a)(h,2),v=b[0],E=b[1],k=Object(a.useState)(null),y=Object(N.a)(k,2),j=y[0],O=y[1],S=Object(a.useState)(null),x=Object(N.a)(S,2),D=x[0],w=x[1],L=Object(a.useState)([]),C=Object(N.a)(L,2),M={days:i,setDays:o,answers:c,setAnswers:d,date:g,setDate:f,today:v,setToday:E,user:j,setUser:O,userResult:D,setUserResult:w,topList:C[0],setTopList:C[1]};return r.a.createElement(J.Provider,{value:M},t)};function K(){var e=Object(g.a)(["\n  font-size: 1.2rem;\n  padding: 10px;\n  min-width: 75px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  text-align: center;\n  text-decoration: none;\n  overflow-wrap: break-word;\n  border-radius: 5px;\n  box-shadow: 0px 2px 8px black;\n  background-color: white;\n  margin-left: 10px;\n  border: 0;\n"]);return K=function(){return e},e}var X=E.b.button(K());function q(e){return{__html:e}}function Q(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),l=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{dangerouslySetInnerHTML:q(e.day.description),style:{marginBottom:"1rem",paddingBottom:"1rem",textAlign:"left"}}),l?r.a.createElement("div",{style:{marginBottom:"2rem"}},e.day.solutionArtist," - ",e.day.solutionSong,e.day.optionalSolutionVideo?r.a.createElement("span",{className:"youtube",dangerouslySetInnerHTML:q(e.day.optionalSolutionVideo)}):""):r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(X,{style:{marginBottom:"2rem"},onClick:function(){return i(!0)}},"Vis fasit")),r.a.createElement(L,{link:e.day.link}))}function $(){var e=Object(g.a)(["\n  padding: 1rem;\n  border: 1px solid black;\n  width: calc(50% - 10px);\n  margin: 5px;\n  text-align: center;\n  padding-bottom: 2rem;\n\n  @media screen and (max-width: 450px) {\n    width: calc(100% - 10px);\n  }\n"]);return $=function(){return e},e}var Z=E.b.div($()),ee=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="";return e=this.props.day.revealDateAsString===this.props.date?r.a.createElement("div",null,"Dette er i dag!"):null!==this.props.day.solutionArtist?r.a.createElement(Q,{day:this.props.day}):r.a.createElement("p",null,"Luke ikke \xe5pnet"),r.a.createElement(Z,null,r.a.createElement(x,{unixDate:this.props.day.revealDateAsString,style:{marginBottom:"1rem"}}),e)}}]),t}(r.a.Component);function te(){var e=Object(g.a)(["\n  width: 50%;\n  padding: 20px;\n  border: 2px solid black;\n  text-align: left;\n  border-radius: 10px;\n  margin: 5px;\n  font-size: 1.5rem;\n\n  @media screen and (max-width: 450px) {\n    width: 100%;\n    margin: 0;\n    border: 0;\n  }\n"]);return te=function(){return e},e}var ne=E.b.div(te());function ae(){var e=Object(g.a)(["\n  width: calc(100% - 10px);\n"]);return ae=function(){return e},e}var re=Object(E.b)(ne)(ae()),le=function(){var e=Object(a.useContext)(J),t=e.days,n=e.setDays,l=e.answers,i=e.setAnswers,o=e.date,s=e.setDate,u=e.today,c=e.setToday,d=e.user,m=e.setUser,p=e.setUserResult,g=e.setTopList;return Object(a.useEffect)((function(){fetch("".concat("/api","/alldata")).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){var t=e.days,a=e.date,r=e.user,l=e.answers,o=e.today,u=e.userResult,d=e.topList;n(t),s(a),m(r),i(l),c(o),p(u),g(d)}))}),[i,s,n,c,m,p,g]),r.a.createElement(re,null,r.a.createElement(O,null,"L\xf8sninger"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},t.filter((function(e){return e.realDate!==new Date(o).getDate().toString()})).map((function(e,t){return r.a.createElement(ee,{key:e.id,answers:l,user:d,today:u,date:o,day:e})}))))},ie=n(31);function oe(){var e=Object(g.a)(["\n  background-color: white;\n  text-align: center;\n  margin: 1rem auto;\n  width: 33rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n"]);return oe=function(){return e},e}var se=E.b.footer(oe()),ue=function(){return r.a.createElement(se,null,r.a.createElement("p",null,"Laget av Tobias Rus\xe5s Olsen."),r.a.createElement(ie.b,{to:"/om"},"Om musikkjulekalenderen"))},ce=function(){return r.a.createElement("div",{style:{textAlign:"center",paddingBottom:"2rem",marginTop:"2rem"}},r.a.createElement("div",{className:"fb-page","data-href":"https://www.facebook.com/musikkjulekalender/","data-tabs":"timeline","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},r.a.createElement("blockquote",{cite:"https://www.facebook.com/musikkjulekalender/",className:"fb-xfbml-parse-ignore"},r.a.createElement("a",{href:"https://www.facebook.com/musikkjulekalender/"},"Musikkjulekalender.no"))))};function de(){var e=Object(g.a)(["\n  width: 70px;\n  margin: 10px 0;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px #888888;\n  transition: 0.2s ease-in-out;\n  height: 50px;\n  background-color: #fff;\n\n  &:hover {\n    background-color: rgba(143, 0, 0, 0.822);\n    color: white;\n    transform: translateY(-2px);\n  }\n\n  &:checked {\n    background-color: rgba(143, 0, 0, 0.822);\n    color: white;\n    transform: translateY(1px);\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(g.a)(["\n  height: 5rem;\n  text-align: center;\n  margin: 1rem 0;\n  width: 40rem;\n"]);return me=function(){return e},e}function pe(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return pe=function(){return e},e}var ge=E.b.div(pe()),fe=E.b.input(me()),he=E.b.button(de()),be=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={guess:"",feedback:"",correctAnswer:void 0},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.submit=n.submit.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"submit",value:function(e){var t,n=this;e.preventDefault(),(t=this.state.guess,fetch("".concat("/api","/answer?guess=").concat(t),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){var t=e.correct,a=e.feedback;t?n.setState({correctAnswer:!0,feedback:a}):n.setState({feedback:a})}))}},{key:"handleChange",value:function(e){this.setState({guess:e.target.value})}},{key:"getDescription",value:function(e){return{__html:e}}},{key:"render",value:function(){var e=void 0;this.props.answers&&(e=this.props.answers.find((function(e){return e.correctSongAnswer&&e.day===this.props.today}),this));var t="";return t=e&&e.correctSongAnswer?r.a.createElement("div",null,r.a.createElement("p",{style:{marginBottom:"1rem"}},"Du har allerede svart rett p\xe5 denne oppgaven!"),r.a.createElement("p",null,"Svaret var:",e.guessedSong)):this.state.guess&&this.state.correctAnswer?r.a.createElement("p",null,"Gratulerer, det var rett!"):r.a.createElement("form",{onSubmit:this.submit,styled:{maxWidth:"300px"}},r.a.createElement(ge,null,r.a.createElement(fe,{placeholder:"Sang",onChange:this.handleChange,value:this.state.guess}),r.a.createElement(he,{type:"submit"},"Gjett!")),r.a.createElement("p",null,this.state.status?this.state.status:""," ")),r.a.createElement("div",{style:{maxWidth:"500px"}},r.a.createElement("p",{style:{marginBottom:"2rem"},dangerouslySetInnerHTML:this.getDescription(this.props.day.description)}),r.a.createElement(L,{link:this.props.day.link}),this.props.user?t:r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null,r.a.createElement(fe,{disabled:!0,placeholder:"Sang"}),r.a.createElement(he,{type:"submit",disabled:!0},"Gjett!")),r.a.createElement("p",null,"Logg inn for \xe5 besvare (se menyen)")))}}]),t}(r.a.Component);function ve(){var e=Object(a.useContext)(J),t=e.days,n=e.date,l=e.today,i=e.answers,o=e.user,s=t.filter((function(e){return e.revealDateAsString===n})),u=1===s.length;return r.a.createElement(ne,null,r.a.createElement(O,null,"Dagens oppgave: ",h()(n).format("DD. MMMM")),r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",null,r.a.createElement(be,{key:s[0].revealDateAsInt,today:l,date:n,day:s[0],answers:i,user:o})):r.a.createElement("p",null,"Ingen oppgave i dag")))}function Ee(){var e=Object(g.a)(["\n  background-color: white;\n  display: block;\n  border-radius: 5px;\n  margin: 0px auto;\n  max-width: 980px;\n"]);return Ee=function(){return e},e}var ke=E.b.div(Ee());function ye(){var e=Object(g.a)(["\n  list-style-type: none;\n"]);return ye=function(){return e},e}var je=E.b.li(ye());function Oe(e){var t=h()(e.user.time).format("HH:mm");return r.a.createElement(je,null,e.user.name,": ",t)}var Se=function(e){var t=e.userResult?e.userResult[e.day.revealDateAsString]:void 0;if(void 0===t)return null;var n="";if(t&&t.users&&t.users.length>0){var a=Object(m.a)(t.users);a.sort((function(e,t){return e.time>t.time?1:-1})),n=r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement(Oe,{key:t,user:e})})))}else n=r.a.createElement("div",null,"Ingen riktige svar");return r.a.createElement("div",null,r.a.createElement("p",{style:{marginBottom:"1rem"}},"Dette viser klokkeslettet oppgaven ble l\xf8st p\xe5 per bruker"),n)};function xe(){var e=Object(a.useContext)(J),t=e.days,n=e.today,l=e.userResult,i=t.filter((function(e,t){return e.id===n}));return r.a.createElement(ne,null,r.a.createElement(O,null,"Dagens beste: "),1===i.length?r.a.createElement(Se,{key:i[0].id,day:i[0],userResult:l}):r.a.createElement("p",null,"Ingen oppgave i dag"))}var De=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t="",n=this.props.answers.filter((function(t){return t.day===e.props.day.id&&t.correctSongAnswer}))[0];return t=n?r.a.createElement("div",null,h()(this.props.day.revealDate).format("DD. MMMM"),":"," ",n.guessedSong," var riktig svar!"):r.a.createElement("div",null,h()(this.props.day.revealDate).format("DD. MMMM"),": Du fant ikke riktig svar."),r.a.createElement("div",null,t)}}]),t}(r.a.Component);function we(){var e=Object(a.useContext)(J),t=e.days,n=e.user,l=e.answers,i=e.today,o=t.map((function(e,t){return e.solutionArtist||e.revealDateAsString===i?r.a.createElement(De,{key:t,day:e,user:n,answers:l}):null})),s=n?r.a.createElement("span",null,"Du er logget inn som ",r.a.createElement("strong",null,n.userName)):"",u=n?o:"Du m\xe5 v\xe6re logget inn for \xe5 f\xe5 score";return r.a.createElement(ne,null,r.a.createElement(O,null,"Dine resultater"),r.a.createElement("p",{style:{marginBottom:"1rem"}},s),r.a.createElement("div",null,u))}function Le(){var e=Object(g.a)(["\n  list-style-type: none;\n"]);return Le=function(){return e},e}var Ce=E.b.li(Le());function Me(e){return r.a.createElement(Ce,null,e.topListUser.user,": ",r.a.createElement("strong",null,e.topListUser.score))}function Ae(){var e=Object(a.useContext)(J),t=e.topList,n=e.user;return r.a.createElement(ne,null,r.a.createElement(O,null,"Toppscorelisten!"),r.a.createElement("ol",null,t.filter((function(e){return e.score>0})).map((function(e,t){return r.a.createElement(Me,{key:t,user:n,topListUser:e})}))))}function _e(){var e=Object(g.a)(["\n  height: 300px;\n  width: 232px;\n  margin: 0 auto;\n  animation: "," 180s infinite;\n  animation-direction: alternate;\n\n  @media screen and (max-width: 450px) {\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    border-radius: 50%;\n    animation: none;\n  }\n"]);return _e=function(){return e},e}function Te(){var e=Object(g.a)(["\n  text-align: center;\n  padding-top: 1rem;\n\n  @media screen and (max-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n  }\n"]);return Te=function(){return e},e}function Re(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n\n  @media screen and (max-width: 450px) {\n    flex-direction: column;\n  }\n"]);return Re=function(){return e},e}function Be(){var e=Object(g.a)(["\n  0% {\n    transform: translateX(0);\n  }\n\n  33% {\n    transform: translateX(200px);\n  }\n\n  66% {\n    transform: translateX(0);\n  }\n\n  100% {\n    transform: translateX(-200px);\n  }\n"]);return Be=function(){return e},e}var Ye=Object(E.c)(Be()),Ve=E.b.div(Re()),He=E.b.div(Te()),Ue=E.b.img(_e(),Ye),Ie=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null,r.a.createElement(He,null,r.a.createElement(O,null,"Musikkjulekalender!"),r.a.createElement(Ue,{src:"/static/images/santas.png",alt:"Julenisse"})),r.a.createElement(Ve,null,r.a.createElement(ve,null),r.a.createElement(we,null)),r.a.createElement(Ve,null,r.a.createElement(xe,null),r.a.createElement(Ae,null)),r.a.createElement(le,null),r.a.createElement(ce,null)),r.a.createElement(ue,null))}}]),t}(r.a.Component);function Pe(){var e=Object(g.a)(["\n  font-size: 1.2rem;\n"]);return Pe=function(){return e},e}var ze=Object(E.b)(ie.b)(Pe());function Ne(){var e=Object(g.a)(["\n  padding: 10px;\n  min-width: 75px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  text-align: center;\n  text-decoration: none;\n  overflow-wrap: break-word;\n  border-radius: 5px;\n  box-shadow: 0px 2px 8px black;\n  background-color: white;\n  margin-right: 10px;\n\n  &:visited,\n  &:link {\n    color: black;\n  }\n\n  @media screen and (max-width: 450px) {\n    margin-left: 0;\n  }\n"]);return Ne=function(){return e},e}function Fe(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 450px) {\n    justify-content: flex-start;\n    margin-bottom: 0;\n    margin-left: 1rem;\n  }\n"]);return Fe=function(){return e},e}function We(){var e=Object(g.a)(["\n  max-width: 980px;\n  margin: 10px auto;\n"]);return We=function(){return e},e}var Je=E.b.nav(We()),Ge=E.b.div(Fe()),Ke=Object(E.b)(ze)(Ne());function Xe(){var e=null!==Object(a.useContext)(J).user?r.a.createElement(Ke,{as:"a",href:"/logout",to:"/logout"},"Logg ut"):r.a.createElement(Ke,{to:"/login"},"Logg inn");return r.a.createElement(Je,null,r.a.createElement(Ge,null,r.a.createElement(Ke,{to:"/"},"Forsiden"),r.a.createElement(Ke,{to:"/om"},"Om"),e))}var qe=n(25);function Qe(){var e=Object(g.a)(["\n  margin-bottom: 2rem;\n  text-align: left;\n  padding: 1rem;\n"]);return Qe=function(){return e},e}function $e(){var e=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 2rem;\n"]);return $e=function(){return e},e}function Ze(){var e=Object(g.a)(["\n  background-color: linear-gradient(#e66465, #9198e5);\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 2rem;\n"]);return Ze=function(){return e},e}var et=E.b.div(Ze()),tt=E.b.img($e()),nt=E.b.div(Qe());function at(e){var t=e.name,n=e.image,a=e.children;return r.a.createElement(et,null,r.a.createElement(tt,{src:n,alt:t}),r.a.createElement(O,null,t),r.a.createElement(nt,null,a))}function rt(){var e=Object(g.a)(["\n  margin-bottom: 1rem;\n"]);return rt=function(){return e},e}function lt(){var e=Object(g.a)(["\n  padding-left: 1rem;\n  margin-left: 3rem;\n"]);return lt=function(){return e},e}var it=E.b.li(lt()),ot=E.b.ul(rt());function st(){var e=Object(g.a)(["\n  margin-bottom: 1rem;\n"]);return st=function(){return e},e}var ut=E.b.p(st());function ct(){var e=Object(g.a)(["\n  margin-bottom: 1rem;\n"]);return ct=function(){return e},e}function dt(){var e=Object(g.a)(["\n  font-size: 1.5rem;\n  padding: 2rem;\n"]);return dt=function(){return e},e}var mt=E.b.div(dt()),pt=E.b.p(ct()),gt=function(){return r.a.createElement(ke,null,r.a.createElement(mt,null,r.a.createElement(S,null,"Om kalenderen"),r.a.createElement(pt,null,"Hver dag \xe5pnes det en ny luke i kalenderen. Hver luke er et lydklipp, og din oppgave er \xe5 gjette hvilken l\xe5t som spilles!"),r.a.createElement(pt,null,"Du vil umiddelbart f\xe5 svar p\xe5 om du hadde riktig eller feil svar."),r.a.createElement(pt,null,"Vi har en toppscoreliste som viser hvem som leder konkurrensen, i tillegg til en dagsliste med de som har svart riktig p\xe5 dagens oppgave."),r.a.createElement(pt,null,"Den beste brukeren blir premiert med et krus for to, og et diplom!"),r.a.createElement(S,null,"Bidragsytere"),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(25rem, 1fr))",gridGap:"1rem",justifyItems:"center"}},r.a.createElement(at,{image:"/static/images/bjarte.png",name:"Bjarte"},r.a.createElement("p",{style:{marginBottom:"1rem"}},"Bjarte er en ekstremt dyktig og allsidig trommis, som spiller i flere band enn de fleste. Han spiller blant annet i/med:"),r.a.createElement(ot,null,r.a.createElement(it,null,"Jarle H Olsen Quadrasonic"),r.a.createElement(it,null,"Powerslaves"),r.a.createElement(it,null,"Jon Martin Skauge"),r.a.createElement(it,null,"Pretty Blue"),r.a.createElement(it,null,"Pitch Black Mentality"),r.a.createElement(it,null,"Preachers"),r.a.createElement(it,null,"Fastloaders"),r.a.createElement(it,null,"Stein Hauge Band,"),r.a.createElement(it,null,"Brutallica"),r.a.createElement(it,null,"og mange flere.")),r.a.createElement("p",null,"For mer detaljer, g\xe5 til\xa0",r.a.createElement("a",{href:"https://bjartekhelland.com/"},"bjartekhelland.com"),", der du ogs\xe5 kan se videoer, m.m.")),r.a.createElement(at,{image:"/static/images/stein.png",name:"Stein Henrik Olaussen"},r.a.createElement(ut,null,"Stein er en gitarist, bassist, trommis, vokalist, frontmann og generelt multiinstrumentalist. Han er mannen bak prosjektet Denver Mini, som hadde sin storhetstid p\xe5 midten av 2000-tallet, og spiller for \xf8yeblikket i band som V\xe6rbitt og Kalfaret."),r.a.createElement(ut,null,"N\xe5r Stein ikke spiller musikk, s\xe5 l\xf8per han. Og han l\xf8per langt, og fort. I \xe5r sprang han inn til 2:38:59 p\xe5 Berlin Maraton, en tid som er hinsides all fornuft.")),r.a.createElement(at,{image:"/static/images/skoyerfanden.png",name:"Tomas"},"Info kommer"),r.a.createElement(at,{image:"/static/images/skoyerfanden.png",name:"Sk\xf8yerfanden"},"Sk\xf8yerfanden. Ingen vet noe om denne skikkelsen."),r.a.createElement(at,{image:"/static/images/skoyerfanden.png",name:"Kim"},"Kim liker bass!"),r.a.createElement(at,{image:"/static/images/skoyerfanden.png",name:"Matt Weigand"},"Matt")),r.a.createElement(S,null,"Kontakt"),r.a.createElement(pt,null,"Den enkleste m\xe5ten \xe5 ta kontakt med folket bak kalenderen er \xe5 bruke v\xe5r"," ",r.a.createElement("a",{href:"https://www.facebook.com/musikkjulekalender"},"facebook-side")),r.a.createElement(pt,null,"Det er ogs\xe5 mulig \xe5 ta kontakt med mannen bak kalenderen - Tobias - p\xe5"," ",r.a.createElement("a",{href:"http://www.twitter.com/saiboten"},"twitter"))))};function ft(){var e=Object(g.a)(["\n  margin-left: 20px;\n"]);return ft=function(){return e},e}function ht(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n"]);return ht=function(){return e},e}function bt(){var e=Object(g.a)(["\n  text-align: center;\n  padding: 10px;\n"]);return bt=function(){return e},e}var vt=E.b.div(bt()),Et=E.b.div(ht()),kt=Object(E.b)(X)(ft());function yt(){return r.a.createElement(ke,null,r.a.createElement(vt,null,r.a.createElement(O,null,"Innlogging"),r.a.createElement(Et,null,r.a.createElement(kt,{onClick:function(){return window.location="/login/google"}},"Logg inn med Google"),r.a.createElement(kt,{onClick:function(){return window.location="/login/facebook"}},"Logg inn med Facebook"))))}function jt(){var e=Object(g.a)(['\n  html {\n      font-size: 62.5%; // 1 rem == 10px\n  }\n\n  *,\n  *::after,\n  *::before {\n      margin: 0;\n      padding: 0;\n      box-sizing: inherit;\n  }\n\n  body {\n      box-sizing: border-box;\n      background-color: #adc3de;\n      background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),\n        url("/static/images/s3.png");\n      z-index: 1;\n      animation: ',' 10s linear infinite;\n      font-family: "Rubik", sans-serif;\n  }\n']);return jt=function(){return e},e}function Ot(){var e=Object(g.a)(["\n  0% {\n    background-position: 0px 0px, 0px 0px, 0px 0px;\n  }\n  50% {\n    background-position: 500px 500px, 100px 200px, -100px 150px;\n  }\n  100% {\n    background-position: 500px 1000px, 200px 400px, -100px 300px;\n  }\n"]);return Ot=function(){return e},e}var St=Object(E.c)(Ot()),xt=Object(E.a)(jt(),St);h.a.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"ett \xe5r",yy:"%d \xe5r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),h.a.locale("nb"),document.getElementById("root")&&i.a.render(r.a.createElement((function(){return r.a.createElement(G,null,r.a.createElement(xt,{whiteColor:!0}),r.a.createElement(ie.a,null,r.a.createElement(Xe,{isLogged:!1}),r.a.createElement(qe.c,null,r.a.createElement(qe.a,{path:"/om"},r.a.createElement(gt,null)),r.a.createElement(qe.a,{path:"/login"},r.a.createElement(yt,null)),r.a.createElement(qe.a,{path:"/"},r.a.createElement(Ie,null)))))}),null),document.getElementById("root")),document.getElementById("admin")&&i.a.render(r.a.createElement(W,null),document.getElementById("admin")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,n){e.exports=n(135)}},[[73,1,2]]]);
//# sourceMappingURL=main.fea778cb.chunk.js.map