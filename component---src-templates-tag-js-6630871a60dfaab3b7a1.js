(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ccoC:function(t,e,a){"use strict";a.r(e);var n=a("dI71"),r=a("Wbzz"),l=a("q1tI"),o=a.n(l),s=a("Bl7J"),c=a("vrFN"),i=a("p3AD"),m=a("d+8V");let u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){const{tag:t}=this.props.pageContext,e=this.props.data.site.siteMetadata.title,a=this.props.data.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"Tag for "+t}),o.a.createElement("h1",null,"Posts for tag #",t),o.a.createElement("strong",null,o.a.createElement(r.Link,{to:"/tags"},"All Tags")),a.map(t=>{let{node:e}=t;const a=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(i.a)(1/4)}},o.a.createElement(r.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("br",null),o.a.createElement(m.a,{tags:e.frontmatter.tags||[]}),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(o.a.Component);e.default=u},"d+8V":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");e.a=t=>{let e,{tags:a}=t;return e=a?a.reduce((t,e)=>(t.push(r.a.createElement(l.Link,{to:"/tag/"+e},e)),t.push(", "),t),[]):"None",r.a.createElement("i",null,r.a.createElement("small",null,"tags:"," ",e))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-6630871a60dfaab3b7a1.js.map