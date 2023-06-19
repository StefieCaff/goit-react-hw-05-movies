(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[384],{6024:function(n,e,t){"use strict";t.d(e,{r:function(){return r},y:function(){return i}});var r="cc8aceddc1acb4be5d6024b16563f8b2",i="https://image.tmdb.org/t/p/w500"},2506:function(n,e,t){"use strict";t.d(e,{P:function(){return d}});var r,i,a=t(168),o=t(6444),p=t(2007),c=t(184),s=function(n){var e=n.children,t=n.className;return(0,c.jsx)("div",{className:t,children:e})};s.propTopes={children:p.node.isRequired,className:p.string};var d=(0,o.ZP)(s)(r||(r=(0,a.Z)(["\n  max-width: 320px;\n  margin: 0 10px;\n  \n  @media screen and (min-width:768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 1200px;\n  }\n"])));(0,o.ZP)(s)(i||(i=(0,a.Z)(["\n    margin: 0;\n\n"])))},3309:function(n,e,t){"use strict";t.d(e,{P:function(){return p}});var r,i=t(168),a=t(6444),o=t(184),p=(0,a.ZP)((function(n){var e=n.children,t=n.className;return(0,o.jsx)("section",{className:t,children:e})}))(r||(r=(0,i.Z)(["\n{\n  padding-top: 10px;\n  padding-bottom: 30px;\n\n  @media screen and (min-width:1200px) {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n"])))},9384:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(9439),i=t(2791),a=t(5861),o=t(7757),p=t.n(o),c=t(1243),s=t(6024);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var d=function(){var n=(0,a.Z)(p().mark((function n(){var e,t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat("trending/movie/day","?api_key=").concat(s.r));case 3:return e=n.sent,t=e.data,r=t.results,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.log("Something went wrong with API request",n.t0.message);case 12:case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),u=t(671),x=t(3309),l=t(2506),h=t(1087),f=t(8497),m=t(184),g=function(){var n=(0,i.useState)([]),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,i.useEffect)((function(){var n=!0;return d().then((function(e){n&&a(e)})),function(){return n=!1}}),[]),(0,m.jsx)(x.P,{children:(0,m.jsxs)(l.P,{children:[(0,m.jsx)(u.wh,{children:"Today's Trending Movies"}),(0,m.jsx)(u.yT,{children:(0,m.jsx)("ul",{children:t.map((function(n,e){return(0,m.jsx)("li",{children:(0,m.jsx)(h.rU,{to:"./movies/".concat(n.id),children:(0,m.jsxs)(f.r,{children:[(0,m.jsx)("img",{src:s.y+n.poster_path,alt:""}),(0,m.jsxs)(u.X0,{children:[n.title?n.title:n.original_title,(0,m.jsx)("p",{children:n.release_date?new Date(n.release_date).getFullYear():"---"})]})]})})},e)}))})})]})})}},671:function(n,e,t){"use strict";t.d(e,{X0:function(){return s},wh:function(){return d},yT:function(){return c}});var r,i,a,o=t(168),p=t(6444),c=p.ZP.div(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 10px 0 10px;\n    \n    @media (min-width: 768px) {\n            margin: 0 15px 0 16px;\n    }\n    @media (min-width: 1024px) {\n            margin: 10px 25px 0 25px;\n    }\n    \n    ul{\n        display: flex;\n        flex-wrap: wrap;\n        gap: 10px;\n        @media (min-width: 768px) {\n            gap: 15px;\n        }\n        @media (min-width: 1024px) {\n            gap: 20px;\n        }\n    }\n\n    li {\n        width: 300px;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n        transition: box-shadow, .9s;\n        &:hover,\n        &:focus{\n            box-shadow:\n            rgba(240, 46, 170, 0.4) 0px 5px,\n            rgba(240, 46, 170, 0.3) 0px 10px,\n            rgba(240, 46, 170, 0.2) 0px 15px,\n            rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;\n        }\n\n        @media (min-width: 768px) {\n            width: 235px;\n        }\n        @media (min-width: 1024px) {\n            width: 310px;\n        }\n    }\n"]))),s=p.ZP.h3(i||(i=(0,o.Z)(["\n    margin: 5px;\n    font-weight: bold;\n    font-size: 18px;\n\n    p {\n        font-size: 15px;\n        color: #E14FF3;\n    }\n"]))),d=p.ZP.h1(a||(a=(0,o.Z)(["\n    text-align: center;\n    margin-bottom: 10px;\n    font-size: 20px;\n    text-align: left;\n    color: grey;\n"])))},8497:function(n,e,t){"use strict";t.d(e,{g:function(){return p},r:function(){return c}});var r,i,a=t(168),o=t(6444),p=o.ZP.div(r||(r=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 20px;\n\n    h1 {\n        position: absolute;\n        left: -10000px;\n        width: 1px;\n        height: 1px;\n        overflow: hidden;\n    }\n\n    ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 10px;\n        @media(min-width:768px) {\n            gap: 20px;\n        }   \n    }\n"]))),c=o.ZP.div(i||(i=(0,a.Z)(["\n    padding-bottom: 5px;\n    background-color: #fff;\n\n     img {\n        width: 300px;\n        height: auto;\n        margin-bottom: 5px;\n        border-bottom: .5px solid #F4F5FF;;\n        @media(min-width:768px) {\n            width: 300px;\n            height: 425px;\n        }\n    }\n    \n"])))},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,a,o){if(o!==r){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=384.1d4dead7.chunk.js.map