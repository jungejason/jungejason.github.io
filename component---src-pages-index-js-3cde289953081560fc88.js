(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),i=a(148),o=a(143),u="1514753661";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return console.table(t),r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},t.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path,style:{marginBottom:"1rem"}},r.a.createElement(o.Link,{to:t.path},t.title))})))}},142:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(145)),i=n(a(146)),o=n(a(7)),u=n(a(52)),s=n(a(53)),l=n(a(4)),c=n(a(0)),d=a(23),f=a(143);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var a;a=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,u.default)((0,u.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var h=p(a);return c.default.createElement(d.Link,(0,i.default)({to:h,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:l,replace:m})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var h=c.default.forwardRef(function(e,t){return c.default.createElement(v,(0,i.default)({innerRef:t},e))});t.default=h;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(142),s=a.n(u);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(144),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},145:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},146:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},147:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(54),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(143),u=(a(150),a(151)),s=a.n(u),l=function(e){var t=e.data;t.site.siteMetadata.title,t.site.siteMetadata.description;return i.a.createElement("div",null,i.a.createElement("div",{className:s.a.container},i.a.createElement("div",{className:s.a.left},i.a.createElement("div",{className:s.a.item},"WebBoost")),i.a.createElement("div",{className:s.a.middle},i.a.createElement("div",{className:s.a.item},"Blog"),i.a.createElement("div",{className:s.a.item},"About")),i.a.createElement("div",{className:s.a.right},i.a.createElement("div",{className:s.a.item},"Right"))))};t.a=function(){return i.a.createElement(o.StaticQuery,{query:"3501179355",render:function(e){return i.a.createElement(l,{data:e})},data:n})}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"WebBoost",description:"Help to Learn and Improve!"}}}}},150:function(e,t,a){},151:function(e,t,a){e.exports={container:"Header-module--container--1n00k",left:"Header-module--left--3BvZf",middle:"Header-module--middle--3sTiL",right:"Header-module--right--3Vqze",item:"Header-module--item--dpSz0"}}}]);
//# sourceMappingURL=component---src-pages-index-js-3cde289953081560fc88.js.map