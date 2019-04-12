(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,a){e.exports=a(55)},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(36),a(6)),i=a(5),l=a(8),m=a(7),u=a(9),h=(a(37),a(15)),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){window.location.href=window.location.origin?window.location.origin+"/":window.location.protocol+"/"+window.location.host+"/"},a.state={goHome:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return!0===this.state.goHome?r.a.createElement(h.a,{push:!0,to:"/"}):r.a.createElement("div",{className:"Nav",onClick:function(){e.handleClick()}},r.a.createElement("h1",{className:"title"}," ",r.a.createElement("i",{className:"fas fa-users fa-x"})," React Users Dashboard"))}}]),t}(n.Component),f=a(19),d=a.n(f),E=(a(46),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({toUser:!0})},a.state={toUser:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return!0===this.state.toUser?r.a.createElement(h.a,{push:!0,to:"/users/".concat(this.props.id)}):r.a.createElement("div",{className:"UserCard ",onClick:function(){return e.handleClick()}},r.a.createElement("div",{className:"profile-picture--container"},r.a.createElement("img",{className:"profile-picture",src:d.a,alt:"Normally an avatar but for this app the react logo"})),r.a.createElement("ul",{className:"overview--container"},r.a.createElement("li",{className:"name","data-hook":"name"},this.props.name),r.a.createElement("li",{className:"email","data-hook":"email"},this.props.email),r.a.createElement("li",{className:"phone","data-hook":"phone"},this.props.phone)))}}]),t}(n.Component)),b=(a(47),a(48),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("i",{className:"icon fas fa-cog fa-4x"}),r.a.createElement("h2",{className:"message"},"Loading"))}}]),t}(n.Component)),v=(a(49),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Error"},r.a.createElement("h2",{className:"message","data-hook":"error"},r.a.createElement("span",{className:"header"},"Error:")," ",this.props.error))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,users:[],filteredUsers:[],error:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"filterList",value:function(e){var t=this.state.users.slice();t=t.filter(function(t){return-1!==t.name.toLowerCase().search(e.target.value.toLowerCase())}),this.setState({filteredUsers:t})}},{key:"fetchUsers",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({users:t,filteredUsers:t,loading:!1})}).catch(function(t){return e.setState({error:t,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.filteredUsers,n=e.error;return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"filter-search--container "},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",className:"filter-search",placeholder:"search",onChange:this.filterList.bind(this)})),r.a.createElement("div",{className:"users--container"},n?r.a.createElement(v,{error:n}):t?r.a.createElement(b,null):a.map(function(e){var t=e.id,a=e.name,n=e.email,c=e.phone;return r.a.createElement(E,{key:e.id,name:a,email:n,phone:c,id:t})})))}}]),t}(n.Component),N=(a(50),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BasicInfo"},r.a.createElement("ul",null,r.a.createElement("li",{className:"info"},r.a.createElement("i",{className:"icon far fa-user-circle"})," ",this.props.username),r.a.createElement("li",{className:"info"},r.a.createElement("a",{href:"mailto:".concat(this.props.email)},r.a.createElement("i",{className:"icon far fa-envelope"})," ",this.props.email)),r.a.createElement("li",{className:"info"},r.a.createElement("a",{href:"tel:".concat(this.props.phone)},r.a.createElement("i",{className:"icon fas fa-phone"})," ",this.props.phone)),r.a.createElement("li",{className:"info"},r.a.createElement("a",{href:"http://".concat(this.props.website),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon fas fa-globe"})," ",this.props.website))))}}]),t}(n.Component)),O=(a(51),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CompanyInfo"},r.a.createElement("h1",{className:"company-name"},this.props.company.name),r.a.createElement("h4",{className:"company-phrase"},'-"',this.props.company.catchPhrase,'"'),r.a.createElement("p",{className:"company-bs"},this.props.company.bs))}}]),t}(n.Component)),y=(a(52),a(58)),g=a(59),k=a(57),w=a(60),C=a(16),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,user:[],error:null,lat:51.505,lng:-.09,zoom:13},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){return e.setState({user:t,loading:!1})}).catch(function(t){return e.setState({error:t,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.user,n=e.error;return r.a.createElement("div",{className:"UserPage"},r.a.createElement("div",{className:"return--container"},r.a.createElement(C.b,{className:"return",to:"/"},"back to users")),r.a.createElement("h1",{className:"title"},a.name),n?r.a.createElement(v,{error:n}):t?r.a.createElement(b,null):r.a.createElement("div",{className:"info--container"},r.a.createElement(N,{name:a.name,username:a.username,phone:a.phone,email:a.email,website:a.website}),r.a.createElement("div",{className:"profile-picture--container"},r.a.createElement("img",{className:"profile-picture",src:d.a,alt:"Normally an avatar but for this app the react logo"})),r.a.createElement(O,{company:a.company}),r.a.createElement("div",{className:"map--container"},r.a.createElement(y.a,{className:"map",center:a.address.geo,zoom:this.state.zoom},r.a.createElement(g.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(k.a,{position:a.address.geo},r.a.createElement(w.a,null,a.address.street," ",a.address.suite,r.a.createElement("br",null),a.address.city,r.a.createElement("br",null),a.address.zipcode))))))}}]),t}(n.Component),x=(a(53),a(54),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h2",{className:"message"},r.a.createElement("span",{className:"code"},"404: "),"page not found"))}}]),t}(n.Component)),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(C.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:j}),r.a.createElement(h.b,{path:"/users/:id",component:U}),r.a.createElement(h.b,{component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.ca7d15f3.chunk.js.map