(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(148),i=n(143),s=(n(149),n(150)),u=n.n(s);console.log("styles",u.a),console.log("styles.left",u.a.left);var l=function(e){var t=e.data,n=t.site.siteMetadata.title,a=t.site.siteMetadata.description;return r.a.createElement("div",null,r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.left},"WebBoost"),r.a.createElement("div",{style:{background:"#bbdefb",height:"50px"}},"Middle"),r.a.createElement("div",{style:{background:"#fff9c4",height:"50px"}},"Right")),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("h2",{style:{marginBottom:0}},n),r.a.createElement("p",{style:{marginTop:0,opacity:.5}},a)))},c=function(){return r.a.createElement(i.StaticQuery,{query:"3501179355",render:function(e){return r.a.createElement(l,{data:e})},data:o})};n.d(t,"query",function(){return d});var d="1514753661";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return console.table(t),r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},t.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path,style:{marginBottom:"1rem"}},r.a.createElement(i.Link,{to:t.path},t.title))})))}},142:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(145)),o=a(n(146)),i=a(n(7)),s=a(n(52)),u=a(n(53)),l=a(n(4)),c=a(n(0)),d=n(23),f=n(143);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var v={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),v=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var m=p(n);return c.default.createElement(d.Link,(0,o.default)({to:m,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:l,replace:v})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},v,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=c.default.forwardRef(function(e,t){return c.default.createElement(h,(0,o.default)({innerRef:t},e))});t.default=m;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(142),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(144),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},145:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},146:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},147:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{title:"WebBoost",description:"Help to Learn and Improve!"}}}}},149:function(e,t,n){},150:function(e,t,n){e.exports={container:"Header-module--container--1n00k",left:"Header-module--left--3BvZf"}}}]);
//# sourceMappingURL=component---src-pages-index-js-fedc72e731ca36c557f0.js.map