"use strict";(self.webpackChunkjungejason_blog=self.webpackChunkjungejason_blog||[]).push([[969],{5390:function(e,t,n){var l=n(7294),a=n(1883);t.Z=e=>{let t,{tags:n}=e;return t=n?n.reduce(((e,t)=>(e.push(l.createElement(a.Link,{to:"/tag/"+t},t)),e.push(", "),e)),[]):"None",l.createElement("i",null,l.createElement("small",null,"tags:"," ",t))}},3450:function(e,t,n){n.r(t);var l=n(4578),a=n(1883),r=n(7294),o=n(8678),s=n(8183),i=n(9175),c=n(5390);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){const{tag:e}=this.props.pageContext,t=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.edges;return r.createElement(o.Z,{location:this.props.location,title:t},r.createElement(s.Z,{title:"Tag for "+e}),r.createElement("h1",null,"Posts for tag #",e),r.createElement("strong",null,r.createElement(a.Link,{to:"/tags"},"All Tags")),n.map((e=>{let{node:t}=e;const n=t.frontmatter.title||t.fields.slug;return r.createElement("div",{key:t.fields.slug},r.createElement("h3",{style:{marginBottom:(0,i.qZ)(1/4)}},r.createElement(a.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.createElement("small",null,t.frontmatter.date),r.createElement("br",null),r.createElement(c.Z,{tags:t.frontmatter.tags||[]}),r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})))},t}(r.Component);t.default=u}}]);
//# sourceMappingURL=component---src-templates-tag-js-17964a486fc885abfe45.js.map