(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[1],{14:function(e,t,n){"use strict";t.a={getTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=39bf169d652a94822d0d5b446c64885a").then((function(e){return e.json()})).then((function(e){return e.results}))},searchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://api.themoviedb.org/3/search/movie?api_key=39bf169d652a94822d0d5b446c64885a&query=".concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}))},getMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=39bf169d652a94822d0d5b446c64885a")).then((function(e){return e.json()}))},getMovieCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=39bf169d652a94822d0d5b446c64885a")).then((function(e){return e.json()})).then((function(e){return e.cast}))},getMovieReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=39bf169d652a94822d0d5b446c64885a")).then((function(e){return e.json()})).then((function(e){return e.results}))}}},33:function(e,t,n){e.exports=n.p+"static/media/dfa4ec131cf975e7887ad4c36da126be.8521b40e.jpg"},34:function(e,t,n){e.exports=n(58)},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=n(6),l=n(2),u=n(3),s="/",p="/movies",m=n(4);function h(){var e=Object(u.a)(["\n  max-width: 100px;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n"]);return h=function(){return e},e}function v(){var e=Object(u.a)(["\n  color: teal;\n  &:hover {\n    text-decoration: underline;\n  }\n  &.active {\n    color: red;\n  }\n"]);return v=function(){return e},e}var f=Object(m.a)(i.c)(v()),d=m.a.ul(h()),b=function(){return r.a.createElement(d,null,r.a.createElement("li",null,r.a.createElement(f,{exact:!0,to:s},"Home")),r.a.createElement("li",null,r.a.createElement(f,{to:p},"Movies")))},E=function(){return r.a.createElement("header",null,r.a.createElement(b,null))};function g(){var e=Object(u.a)(["\n  max-width: 1170px;\n  padding: 20px;\n"]);return g=function(){return e},e}var y=m.a.div(g()),j=function(e){var t=e.children;return r.a.createElement(y,null,r.a.createElement(E,null),t)},O=n(12),x=n(8),k=n(9),w=n(11),M=n(10),S=n(32),C=n.n(S);function _(e){return C.a.parse(e)}var D=n(14);function I(){var e=Object(u.a)(["\n  padding-left: 30px;\n  padding-top: 30px;\n"]);return I=function(){return e},e}var q=m.a.ul(I()),A=function(e){Object(w.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={films:[]},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=_(this.props.location.search).query;D.a.getTrending(t).then((function(t){return e.setState({films:t})}))}},{key:"render",value:function(){var e=this,t=this.state.films,n=this.props.match;return r.a.createElement(r.a.Fragment,null,t.length>0&&r.a.createElement(q,null,t.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(i.b,{to:{pathname:"".concat(n.url,"movies/").concat(t.id),state:Object(O.a)({},e.props.location)}},t.title))}))))}}]),n}(a.Component),B=function(e){Object(w.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleInput=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(k.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Search"))}}]),n}(a.Component);function F(){var e=Object(u.a)(["\n  padding-left: 30px;\n  padding-top: 30px;\n"]);return F=function(){return e},e}var G=m.a.ul(F()),z=function(e){Object(w.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.fetchMovies=function(t){D.a.searchMovies(t).then((function(t){return e.setState({movies:t})}))},e.handleChangeQuery=function(t){e.props.history.push(Object(O.a)(Object(O.a)({},e.props.location),{},{search:"query=".concat(t)}))},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=_(this.props.location.search).query;e&&this.fetchMovies(e)}},{key:"componentDidUpdate",value:function(e,t){var n=_(e.location.search).query,a=_(this.props.location.search).query;n!==a&&this.fetchMovies(a)}},{key:"render",value:function(){var e=this,t=this.state.movies,n=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{onSubmit:this.handleChangeQuery}),t.length>0&&r.a.createElement(G,null,t.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(i.b,{to:{pathname:"".concat(n.url,"/").concat(t.id),state:Object(O.a)({},e.props.location)}},t.title))}))))}}]),n}(a.Component);function J(){var e=Object(u.a)(["\n  padding-top: 2px;\n  margin-top: 30px;\n  border-top: 1px solid gray;\n"]);return J=function(){return e},e}function Q(){var e=Object(u.a)(["\n  padding-left: 20px;\n  line-height: 2;\n"]);return Q=function(){return e},e}function R(){var e=Object(u.a)(["\n  display: flex;\n"]);return R=function(){return e},e}function T(){var e=Object(u.a)(["\n  padding-left: 30px;\n  margin-top: 30px;\n  border-top: 1px solid gray;\n"]);return T=function(){return e},e}function U(){var e=Object(u.a)(["\n  width: 20%;\n"]);return U=function(){return e},e}var H=m.a.img(U()),L=m.a.ul(T()),K=m.a.div(R()),N=m.a.div(Q()),P=m.a.div(J()),V=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,59))})),W=Object(a.lazy)((function(){return n.e(0).then(n.bind(null,60))})),X=function(e){Object(w.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:null},e.handleGoBack=function(){console.log("bac"),e.props.history.push(Object(O.a)({},e.props.location.state))},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;D.a.getMovieDetails(this.props.match.params.movieId).then((function(t){e.setState({movie:t})}))}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"Go Back"),r.a.createElement("br",null),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(H,{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}),r.a.createElement(N,null,r.a.createElement("h1",null,e.title," (",e.release_date.substr(0,4),")"),r.a.createElement("p",null,"User Score : ",10*e.vote_average,"%"),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,e.overview),r.a.createElement("h3",null,"Genres"),r.a.createElement("p",null,e.genres.map((function(e){return r.a.createElement("span",null,e.name," ")}))))),r.a.createElement(L,null,"Additional informaton",r.a.createElement("li",null,r.a.createElement(i.b,{to:{pathname:"".concat(t.url,"/cast")}},"Cast")),r.a.createElement("li",null,r.a.createElement(i.b,{to:{pathname:"".concat(t.url,"/reviews")}},"Reviews")))),r.a.createElement(a.Suspense,{fallback:r.a.createElement("h3",null,"Loading ...")},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/movies/:movieId/cast",exact:!0,component:W}),r.a.createElement(l.a,{path:"/movies/:movieId/reviews",exact:!0,component:V})))))}}]),n}(a.Component),Y=n(33),Z=n.n(Y);function $(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return $=function(){return e},e}var ee=m.a.div($()),te=function(){return r.a.createElement(ee,null,r.a.createElement("h1",null,"404"),r.a.createElement("img",{src:Z.a,alt:"cat detective",width:"320"}),r.a.createElement("p",null,"\u0423\u043f\u0441, \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0412\u044b \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0438\u0441\u044c. \u0412\u043e\u0442 ",r.a.createElement(i.b,{to:"/"},"cc\u044b\u043b\u043a\u0430")," \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."))};function ne(){return r.a.createElement(j,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:A}),r.a.createElement(l.a,{path:"/movies",exact:!0,component:z}),r.a.createElement(l.a,{path:"/movies/:movieId",exast:!0,component:X}),r.a.createElement(l.a,{component:te})))}n(57);o.a.render(r.a.createElement(i.a,null,r.a.createElement(ne,null)),document.getElementById("root"))}},[[34,3,4]]]);
//# sourceMappingURL=main.18db1407.chunk.js.map