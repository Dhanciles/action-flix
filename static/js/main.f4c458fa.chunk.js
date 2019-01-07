(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},38:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(27),s=a.n(o),i=(a(38),a(7)),c=a(8),l=a(11),u=a(9),p=a(12),m=a(28),h=a(62),v=a(2),d=a.n(v),f=a(5),g=function(e){return{type:"IS_LOADING",isLoading:e}},E=function(e){return{type:"HAS_ERRORED",hasErrored:e}},b=function(e){return{type:"FETCH_DATA_SUCCESS",movies:e}},w=function(e,t,a){return{type:"SIGN_IN",id:e,name:t,userName:a}},O=a(10),N=(a(46),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target,r=a.name,n=a.value;e.setState(Object(m.a)({},r,n),function(){return e.enableButtons()})},e.enableButtons=function(){e.state.showSignIn&&""!==e.state.email&&""!==e.state.password?e.setState({disableButton:!1}):e.state.showSignIn||""===e.state.email||""===e.state.password||""===e.state.name||e.setState({disableButton:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,r=a.name,n=a.email,o=a.password;e.state.showSignIn?e.props.checkUserLogin(n,o):e.props.createNewUser(r,n,o),e.setState({name:"",email:"",password:""})},e.handleSignUp=function(t){t.preventDefault(),e.setState({showSignIn:!e.state.showSignIn}),e.props.errorAction(!1)},e.state={name:"",email:"",password:"",showSignIn:!0,disableButton:!0},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,r=e.password,o=e.showSignIn,s=o?"Sign In":"Sign Up",i=o?"New user? Sign up!":"Log in",c=o?"Please Log In":"Create Account",l=o?"email and password do not match":"email already exists";return this.props.user?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{className:"form-container"},n.a.createElement("div",{className:"inner-container"},n.a.createElement("article",{className:"message-container"},n.a.createElement("h1",null,"Welcome To Action Flix!"),n.a.createElement("h3",{className:"popup-message"},c)),n.a.createElement("form",{onSubmit:this.handleSubmit},o?"":n.a.createElement("input",{name:"name",value:t,placeholder:"Enter name ...",onChange:this.handleChange}),n.a.createElement("input",{name:"email",value:a,placeholder:"Email address",onChange:this.handleChange,className:"email-input"}),n.a.createElement("input",{name:"password",type:"password",value:r,placeholder:"Password",onChange:this.handleChange}),n.a.createElement("button",{className:"submit-sign-up",disabled:this.state.disableButton,onClick:this.handleSubmit},s),n.a.createElement("button",{className:"signin-toggle",onClick:this.handleSignUp},i),this.props.hasErrored?n.a.createElement("h3",{className:"error-message"},l):void 0)),n.a.createElement("div",{className:"login-side-page"},n.a.createElement("div",{className:"side-page-text"},n.a.createElement("h2",{className:"login-page-title"},"Action Flix"),n.a.createElement("h3",{className:"slogan"},"Everything you need to know in one place."),n.a.createElement("p",{className:"description"},"All-inclusive access to action films. Track your favorite movies. Stay up-to-date with new movies.")),n.a.createElement("div",{className:"circles-container"},n.a.createElement("div",{className:"circle-five"}),n.a.createElement("div",{className:"circle-six"}),n.a.createElement("div",{className:"circle-two"}),n.a.createElement("div",{className:"circle-one"}),n.a.createElement("div",{className:"circle-four"}),n.a.createElement("div",{className:"circle-three"}),n.a.createElement("div",{className:"large-circle"}))))}}]),t}(r.Component)),y=Object(O.b)(function(e){return{user:e.userId,hasErrored:e.hasErrored}},function(e){return{checkUserLogin:function(t,a){return e(function(e,t){return function(){var a=Object(f.a)(d.a.mark(function a(r){var n,o;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(g(!0)),a.next=4,fetch("http://localhost:3000/api/users",{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"}});case 4:if((n=a.sent).ok){a.next=8;break}throw r(g(!1)),Error(n.statusText);case 8:return r(g(!1)),a.next=11,n.json();case 11:o=a.sent,r(w(o.data.id,o.data.name)),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),r(E(!0));case 18:case"end":return a.stop()}},a,this,[[0,15]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))},createNewUser:function(t,a,r){return e(function(e,t,a){return function(){var r=Object(f.a)(d.a.mark(function r(n){var o,s;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(g(!0)),r.next=4,fetch("http://localhost:3000/api/users/new",{method:"POST",body:JSON.stringify({name:e,email:t,password:a}),headers:{"Content-Type":"application/json"}});case 4:if((o=r.sent).ok){r.next=8;break}throw n(g(!1)),Error(o.statusText);case 8:return n(g(!1)),r.next=11,o.json();case 11:s=r.sent,n(w(s.id,e)),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),n(E(!0));case 18:case"end":return r.stop()}},r,this,[[0,15]])}));return function(e){return r.apply(this,arguments)}}()}(t,a,r))},errorAction:function(t){return e(E(t))}}})(N),x=(a(49),a(63)),j=a(59),k=function(){return n.a.createElement(h.a,{to:"/"})},S=a(21),I=a.n(S),T=(a(53),a(65)),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).checkSignedIn=function(){""===a.props.userId?a.props.history.push("/login"):a.props.movies.find(function(e){return e.movieId===a.props.movieId}).favorite?(a.props.toggleFavorite(a.props.title),a.props.deleteFavorite(a.props.userId,a.props.movieId)):(a.props.addFavorite(a.props.movieId,a.props.userId,a.props.title,a.props.posterPath,a.props.releaseDate,a.props.voteAverage,a.props.overview),a.props.toggleFavorite(a.props.title))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.favorite?"../images/full-popcorn.svg":"../images/empty-popcorn.svg";return n.a.createElement("article",{className:"movie-card"},n.a.createElement("img",{className:"movie-img",src:this.props.posterPath,alt:"movie poster"}),n.a.createElement("div",{className:"movie-info-text"},n.a.createElement("div",{className:"movie-icon-container"},n.a.createElement("svg",{className:"movie-rating-chart",viewBox:"0 0 36 36"},n.a.createElement("path",{className:"outline-circle",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),n.a.createElement("path",{className:"circle",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(10*this.props.voteAverage,", 100")}),n.a.createElement("text",{textAnchor:"middle",x:"17",y:"22",className:"movie-rating"},this.props.voteAverage)),n.a.createElement("img",{className:"popcorn-icon",src:t,alt:"full popcorn",onClick:function(){return e.checkSignedIn()}})),n.a.createElement("h3",{className:"movie-title"},this.props.title),n.a.createElement("p",{className:"movie-release"},this.props.releaseDate),n.a.createElement("div",{className:"movie-description"},this.props.overview)))}}]),t}(r.Component),_=Object(O.b)(function(e,t){return{movies:e.movies,userId:e.userId,movieId:t.movieId,title:t.title,posterPath:t.posterPath,releaseDate:t.releaseDate,voteAverage:t.voteAverage,overview:t.overview,favorite:t.favorite}},function(e){return{addFavorite:function(t,a,r,n,o,s,i){return e(function(e,t,a,r,n,o,s){return function(){var i=Object(f.a)(d.a.mark(function i(c){var l;return d.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,c(g(!0)),i.next=4,fetch("http://localhost:3000/api/users/favorites/new",{method:"POST",body:JSON.stringify({movie_id:e,user_id:t,title:a,poster_path:r,release_date:n,vote_average:o,overview:s}),headers:{"Content-Type":"application/json"}});case 4:if((l=i.sent).ok){i.next=8;break}throw c(g(!1)),Error(l.statusText);case 8:c(g(!1)),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(0),c(E(!0));case 14:case"end":return i.stop()}},i,this,[[0,11]])}));return function(e){return i.apply(this,arguments)}}()}(t,a,r,n,o,s,i))},toggleFavorite:function(t){return e(function(e){return{type:"TOGGLE_FAVORITE",movieTitle:e}}(t))},deleteFavorite:function(t,a){return e(function(e,t){var a="http://localhost:3000/api/users/".concat(e,"/favorites/").concat(t);return function(){var r=Object(f.a)(d.a.mark(function r(n){var o;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(g(!0)),r.next=4,fetch(a,{method:"DELETE",body:JSON.stringify({user_id:e,movie_id:t}),headers:{"Content-Type":"application/json"}});case 4:if((o=r.sent).ok){r.next=8;break}throw n(g(!1)),Error(o.statusText);case 8:n(g(!1)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),n(E(!0));case 14:case"end":return r.stop()}},r,this,[[0,11]])}));return function(e){return r.apply(this,arguments)}}()}(t,a))}}})(Object(T.a)(A)),C=(a(55),function(){var e=Object(f.a)(d.a.mark(function e(t,a){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.results.map(function(e){var t=!1;return a&&a.forEach(function(a){a.title===e.title&&(t=!0)}),{movieId:e.id,posterPath:"http://image.tmdb.org/t/p/w185/".concat(e.poster_path),title:e.title,voteAverage:e.vote_average,releaseDate:e.release_date,overview:e.overview,favorite:t}}),e.abrupt("return",r);case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()),L=function(e){var t="http://localhost:3000/api/users/".concat(e,"/favorites");return function(){var e=Object(f.a)(d.a.mark(function e(a){var r,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(g(!0)),e.next=4,fetch(t);case 4:if((r=e.sent).ok){e.next=7;break}throw Error(r.statusText);case 7:return a(g(!1)),e.next=10,r.json();case 10:return n=e.sent,e.abrupt("return",n.data);case 14:e.prev=14,e.t0=e.catch(0),a(E(!0));case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t){return e.apply(this,arguments)}}()},F=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"8d54c10134c07bfb8e01ded9e30524be",t="https://api.themoviedb.org/3/discover/movie?api_key=".concat("8d54c10134c07bfb8e01ded9e30524be","&with_genres=28"),e.next=4,this.props.fetchMovies(t,this.props.userId);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.movies.filter(function(e){return!0===e.favorite}).map(function(e){return n.a.createElement(_,Object.assign({},e,{key:I()()}))});if(this.props.movies.length&&"/"===this.props.location){var t=this.props.movies.map(function(e){return n.a.createElement(_,Object.assign({},e,{key:I()()}))});return n.a.createElement("div",{className:"movie-container action-movies"},t)}return e.length>0&&"/favorites"===this.props.location?n.a.createElement("div",{className:"movie-container favorite-movies"},e):0===e.length&&"/favorites"===this.props.location?n.a.createElement("section",{className:"favorites-error"},n.a.createElement("h3",null,"Sorry, you have no favorites!"),n.a.createElement("p",null,"Please return to the homepage to add movies to your favorites")):this.props.isLoading?n.a.createElement("h1",{className:"loading"},"Loading..."):n.a.createElement("h3",{className:"server-error"},"404 Error")}}]),t}(r.Component),D=Object(O.b)(function(e){return{userId:e.userId,movies:e.movies,isLoading:e.isLoading,hasErrored:e.hasErrored}},function(e){return{fetchMovies:function(t,a){return e(function(e,t){return function(){var a=Object(f.a)(d.a.mark(function a(r){var n,o,s,i;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(g(!0)),a.next=4,fetch(e);case 4:if((n=a.sent).ok){a.next=7;break}throw Error(n.statusText);case 7:return r(g(!1)),a.next=10,n.json();case 10:if(o=a.sent,!t){a.next=15;break}return a.next=14,r(L(t));case 14:s=a.sent;case 15:return a.next=17,C(o,s);case 17:i=a.sent,r(b(i)),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(0),r(E(!0));case 24:case"end":return a.stop()}},a,this,[[0,21]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))},getFavorites:function(t){return e(L(t))}}})(F),R=a(64),U=(a(57),a(1)),G=a.n(U),P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleList=function(){e.setState({listOpen:!e.state.listOpen})},e.handleLogOut=function(){e.toggleList(),e.props.logUserOut(),e.props.resetFavorites(),e.props.history.push("/")},e.state={listOpen:!1,redirectHome:!1},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.listOpen?"../images/up-arrow.svg":"../images/down-arrow.svg",a=n.a.createElement("header",{className:"header"},n.a.createElement(R.a,{to:"/",className:"header-title-navlink"},n.a.createElement("h1",{className:"header-title"},"Action Flix")),n.a.createElement(R.a,{to:"/login"},n.a.createElement("button",{className:"login-btn"},"Login"))),r=n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header-title"},"Action Flix"),n.a.createElement("div",{className:"dropdown-wrapper"},n.a.createElement("div",{className:"dropdown-header"},n.a.createElement("div",{className:"dropdown-title",onClick:function(){return e.toggleList()}},n.a.createElement("h3",{className:"welcome-user"},"Hello ",this.props.name),n.a.createElement("img",{className:"arrow-icon",src:t,alt:"down arrow"}))),this.state.listOpen?n.a.createElement("article",{className:"dropdown-list"},n.a.createElement(R.a,{to:"/"},n.a.createElement("button",{className:"home-btn"},"Home")),n.a.createElement(R.a,{to:"/favorites"},n.a.createElement("button",{className:"favorites-btn"},"Favorites")),n.a.createElement("button",{className:"logout-btn",onClick:function(){return e.handleLogOut()}},"Sign Out")):null));return this.props.user?r:a}}]),t}(r.Component);P.proptypes={logOut:G.a.func.isRequired};var B=Object(O.b)(function(e){return{user:e.userId,name:e.userName}},function(e){return{logUserOut:function(){return e({type:"LOG_OUT"})},resetFavorites:function(){return e({type:"RESET_FAVORITES"})}}})(Object(T.a)(P)),H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={loginSelected:!1},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(B,null),n.a.createElement(x.a,null,n.a.createElement(j.a,{exact:!0,path:"/",render:function(){return n.a.createElement(D,{location:"/"})}}),n.a.createElement(j.a,{exact:!0,path:"/login",component:y}),n.a.createElement(j.a,{exact:!0,path:"/favorites",render:function(){return n.a.createElement(D,{location:"/favorites"})}}),n.a.createElement(j.a,{component:k})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(61),M=a(13),V=Object(M.combineReducers)({isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return t.isLoading;default:return e}},hasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HAS_ERRORED":return t.hasErrored;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_SUCCESS":return t.movies;case"TOGGLE_FAVORITE":return e.map(function(e){return e.title===t.movieTitle&&(e.favorite=!e.favorite),e});case"RESET_FAVORITES":return e.map(function(e){return e.favorite=!1,e});default:return e}},userId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return t.id;case"LOG_OUT":return"";default:return e}},userName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return t.name;default:return e}}}),W=a(31),q=a(32),$=Object(M.createStore)(V,Object(W.composeWithDevTools)(Object(M.applyMiddleware)(q.a))),z=n.a.createElement(O.a,{store:$},n.a.createElement(J.a,null,n.a.createElement(H,null)));s.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.f4c458fa.chunk.js.map