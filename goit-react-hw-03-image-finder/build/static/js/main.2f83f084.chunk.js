(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(n,e,t){n.exports=t(47)},46:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(13),i=t.n(o),c=t(10),l=t(4),u=t(5),p=t(7),s=t(6),m={APIurl:"https://pixabay.com/api/",key:"18852537-a646493262a464008a7b16caa",perPage:12,get:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(this.APIurl,"?q=").concat(n,"&page=").concat(e,"&key=").concat(this.key,"&image_type=photo&orientation=horizontal&per_page=").concat(this.perPage)).then((function(n){return n.json()})).then((function(n){return n.hits}))}},g=t(1),f=t(2);function d(){var n=Object(g.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]);return d=function(){return n},n}function h(){var n=Object(g.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &::hover {\n    opacity: 1;\n  }\n']);return h=function(){return n},n}function b(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]);return b=function(){return n},n}function x(){var n=Object(g.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return x=function(){return n},n}var v=f.a.div(x()),y=f.a.form(b()),w=f.a.button(h()),k=f.a.input(d()),j=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={query:""},n.onSubmit=function(){},n.handlerInput=function(e){n.setState({query:e.target.value})},n.handlerSubmit=function(e){e.preventDefault();var t=n.state.query;n.props.onSubmit(t),n.setState({query:""})},n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(y,{onSubmit:this.handlerSubmit},r.a.createElement(w,{type:"submit"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement(k,{type:"text",onChange:this.handlerInput,value:this.state.query,autocomplete:"off",placeholder:"Search images and photos"}))))}}]),t}(a.Component);function E(){var n=Object(g.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &::hover \n    transform: scale(1.03);\n    cursor: zoom-in; \n"]);return E=function(){return n},n}function O(){var n=Object(g.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return O=function(){return n},n}var S=f.a.li(O()),C=f.a.img(E());function I(n){var e=n.webformatURL,t=n.largeImageURL,a=n.onClickImg;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement(C,{src:e,"data-large":t,onClick:a})))}function U(){var n=Object(g.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]);return U=function(){return n},n}var L=f.a.ul(U());function q(n){var e=n.images,t=n.onClickImg;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,e.map((function(n){return r.a.createElement(I,{key:n.webformatURL,webformatURL:n.webformatURL,largeImageURL:n.largeImageURL,onClickImg:t})}))))}function z(){var n=Object(g.a)(["\n padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 180px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n      &::hover,\n  &::focus {\n    background-color: #303f9f;\n      "]);return z=function(){return n},n}var F=f.a.button(z()),D=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.onScroll()}},{key:"render",value:function(){return r.a.createElement(F,{type:"button",onClick:this.props.onClick},"Load more")}}]),t}(a.Component),R=t(17),A=t.n(R);function K(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"]);return K=function(){return n},n}var M=f.a.div(K()),P=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(A.a,{type:"Grid",color:"#00BFFF",height:80,width:80,timeout:3e3}))}}]),t}(a.Component);function B(n){var e=n.message;return r.a.createElement("div",null,e)}function J(){var n=Object(g.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]);return J=function(){return n},n}function W(){var n=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]);return W=function(){return n},n}var _=f.a.div(W()),G=f.a.div(J()),H=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handlerKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlerKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlerKeyDown)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{onClick:this.handlerKeyDown},r.a.createElement(G,null,r.a.createElement("img",{src:this.props.imgUrl,alt:""}))))}}]),t}(a.Component);function N(){var n=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]);return N=function(){return n},n}var T=f.a.div(N()),Q=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={images:[],loading:!1,query:"",page:1,error:null,largeUrl:null},n.closeModal=function(){n.setState((function(n){return{largeUrl:null}}))},n.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},n.fetchImages=function(){var e=n.state,t=e.query,a=e.page;n.setState({loading:!0}),m.get(t,a).then((function(e){return n.setState((function(n){return{images:[].concat(Object(c.a)(n.images),Object(c.a)(e)),page:n.page+1}}))})).catch((function(e){return n.setState({error:e})})).finally((function(){return n.setState({loading:!1})}))},n.onFormSubmit=function(e){n.setState({query:e,images:[],page:1})},n.onClickImageLarge=function(e){n.setState({largeUrl:e.target.dataset.large})},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(n,e){e.query!==this.state.query&&this.fetchImages()}},{key:"render",value:function(){var n=this.state,e=n.images,t=n.loading,a=n.error,o=n.largeUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,r.a.createElement(j,{onSubmit:this.onFormSubmit}),a&&r.a.createElement(B,{message:"Whoops, something went wrong :".concat(a.message)}),e.length>0&&r.a.createElement(q,{images:e,onClickImg:this.onClickImageLarge}),t&&r.a.createElement(P,null),e.length>0&&!t&&r.a.createElement(D,{type:"button",onClick:this.fetchImages,onScroll:this.onScroll},"Load more")),o&&r.a.createElement(H,{imgUrl:o,onClose:this.closeModal}))}}]),t}(a.Component);t(46);i.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f83f084.chunk.js.map