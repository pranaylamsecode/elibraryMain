/*! For license information please see 863.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[863],{44863:function(t,e,r){r.r(e);r(67294);var n=r(14416),o=r(71321),a=r(58298),i=r(79655),s=r(45697),c=r.n(s),u=r(98595),l=r(10267),f=r(51252),p=r(56941),h=r(91121),d=r(15538),m=r(97975),v=r(5260),y=r(19207),g=r(775),w=r(74819),x=r(24324),b=r(55124),E=r(90560),S=r(2212),R=r(68013),_=r(48521),j=function(t){var e=t.handleSubmit,r=t.invalid,n=t.isSubmitted,a=t.forgotPassword;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S.Z,{}),(0,_.jsxs)("div",{className:"login-form flex-row align-items-center",children:[(0,_.jsx)(w.Z,{title:"Forgot Password"}),(0,_.jsx)(u.Z,{children:(0,_.jsx)(l.Z,{className:"justify-content-center",children:(0,_.jsx)(f.Z,{md:"6",xs:"12",children:(0,_.jsx)(p.Z,{className:"p-3",children:(0,_.jsx)(h.Z,{children:n?(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:"text-center login_links",children:[(0,_.jsx)("p",{children:(0,b.PV)("forgot-password.email.note")}),(0,_.jsx)(i.rU,{to:g.Z5.MEMBER_LOGIN,color:"link",children:(0,b.PV)("forgot-password.link.go-back.title")})]})}):(0,_.jsxs)(d.Z,{onSubmit:e((function(t){t.url=y.N.URL+"/#"+g.Z5.MEMBER_RESET_PASSWORD,a(t)})),children:[(0,_.jsx)("h2",{children:(0,b.PV)("forgot-password.title")}),(0,_.jsx)("p",{className:"text-muted",children:(0,b.PV)("forgot-password.note")}),(0,_.jsx)(o.Z,{name:"email",type:"email",placeholder:"profile.input.email.label",groupText:"icon-envelope",component:x.Z}),(0,_.jsx)("div",{className:"d-flex justify-content-center",children:(0,_.jsx)(l.Z,{children:(0,_.jsx)(f.Z,{className:"mt-2 d-flex justify-content-end",children:(0,_.jsx)(m.Z,{color:"",disabled:r,className:"frontend-btn",children:(0,_.jsxs)("span",{children:[" ",(0,b.PV)("global.input.submit-btn.label")]})})})})}),(0,_.jsx)("div",{className:"d-flex justify-content-center login_links",children:(0,_.jsx)(i.rU,{to:g.Z5.MEMBER_LOGIN,className:"px-0 mt-2 text-right text-decoration-none",children:(0,b.PV)("global.input.cancel-btn.label")})})]})})})})})})]}),(0,_.jsx)(R.Z,{})]})};j.propTypes={invalid:c().bool,isSubmitted:c().bool,forgotPassword:c().func,handleSubmit:c().func};var L=(0,a.Z)({form:"forgotPasswordForm",validate:v.Z})(j);e.default=(0,n.$j)((function(t){return{isSubmitted:!!t.auth.isSubmitted}}),{forgotPassword:E.gF})(L)},5260:function(t,e,r){var n=r(55124);e.Z=function(t){var e={};t.email||(e.email=(0,n.PV)("profile.input.email-required.validate.label"));return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email),t.password||(e.password=(0,n.PV)("profile.input.password-required.validate.label")),t.password&&t.password.length<8&&(e.password=(0,n.PV)("profile.input.password-invalid.validate.label")),t.confirm_password!==t.password&&(e.confirm_password=(0,n.PV)("profile.input.confirm-password.validate.label")),e}},90560:function(t,e,r){r.d(e,{gF:function(){return x},x4:function(){return w},l9:function(){return E},c0:function(){return b}});var n=r(775),o=r(9669),a=r.n(o),i=r(93548),s=r(19207).N.URL+"/api",c=a().create({baseURL:s});i.Z.setupInterceptors(c,!0,!1);var u=c,l=r(31209),f=r(48037),p=r(55124),h=r(59910),d=r(545);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),s=new L(o||[]);return n(i,"_invoke",{value:S(t,r,s)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var y={};c(y,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(O([])));w&&w!==e&&r.call(w,a)&&(y=w);var x=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,s){var c=l(t[n],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==m(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,s)}))}s(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function R(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,R(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=c(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function y(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){y(a,n,o,i,s,"next",t)}function s(t){y(a,n,o,i,s,"throw",t)}i(void 0)}))}}var w=function(t,e){return function(){var r=g(v().mark((function r(o){var a,i;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return localStorage.setItem("isMemberLogout",!1),a=t.email,i=t.password,r.next=4,u.post(n.BC.MEMBER_LOGIN,{email:a,password:i}).then((function(r){r&&(r.data.data.user.membership_plan_name?0==JSON.parse(localStorage.getItem("isReset"))?e(-1):e("/"):1==JSON.parse(localStorage.getItem("isReset"))?e("/"):e(n.Z5.MEMBER_PLAN)),t.remember_me?localStorage.setItem("currentMember",btoa(JSON.stringify(t))):(0,p.Nr)("currentMember")&&localStorage.removeItem("currentMember"),localStorage.setItem(n.nk.MEMBER,r.data.data.token),localStorage.removeItem(n.eJ.IS_MEMBER_LOGOUT),o((0,h.$l)(n.Fe.MEMBER,r.data.data.user)),o({type:n.Sk.LOGIN,payload:r.data.data}),localStorage.setItem("isReset",!1)})).catch((function(t){var e=t.response;e&&o((0,f.fz)({text:e.data.message,type:n.rW.ERROR}))}));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},x=function(t){return function(){var e=g(v().mark((function e(r){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.post(n.BC.MEMBER_FORGOT_PASSWORD,t).then((function(t){t&&(r({type:n.Sk.FORGOT_PASSWORD,payload:!0}),r((0,f.fz)({text:(0,p.PV)("forgot-password.success.message")})))})).catch((function(t){var e=t.response;e&&r((0,f.fz)({text:e.data.message,type:n.rW.ERROR}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(t,e){return function(){var r=g(v().mark((function r(o){return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.Z.post(n.BC.MEMBER_RESET_PASSWORD,t).then((function(r){r&&(localStorage.setItem("isReset",!0),o({type:n.Sk.RESET_PASSWORD,payload:t}),o((0,f.fz)({text:(0,p.PV)("reset-password.success.message")}))),e(n.Z5.MEMBER_LOGIN)})).catch((function(t){var e=t.response;e&&o((0,f.fz)({text:e.data.message,type:n.rW.ERROR}))}));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},E=function(t,e){return function(){var r=g(v().mark((function r(o){var a,i,s,c,l;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o((0,d.K)(!0)),a=t.email,i=t.password,s=t.first_name,c=t.last_name,l=t.phone,r.next=4,u.post(n.BC.MEMBER_REGISTRATION,{email:a,password:i,first_name:s,last_name:c,phone:l}).then((function(t){t&&(e(n.Z5.MEMBER_LOGIN),o({type:n.Sk.REGISTRATION,payload:t.data.data}),o((0,f.fz)({text:(0,p.PV)("registration.success.message")})),o((0,d.K)(!1)))})).catch((function(t){var e=t.response;e&&(o((0,f.fz)({text:e.data.message,type:n.rW.ERROR})),o((0,d.K)(!1)))}));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=863.js.map