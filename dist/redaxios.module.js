export default(function e(t){function n(e,t,r){var a,o={};if(Array.isArray(e))return e.concat(t);for(a in e)o[r?a.toLowerCase():a]=e[a];for(a in t){var i=r?a.toLowerCase():a,u=t[a];o[i]=i in o&&"object"==typeof u?n(o[i],u,"headers"===i):u}return o}function r(e,r,a,o){"string"!=typeof e&&(e=(r=e).url);var i,u={config:r},c=n(t,r),s={},f=o||c.data;(c.transformRequest||[]).map(function(e){f=e(f,c.headers)||f}),f&&"object"==typeof f&&"function"!=typeof f.append&&(f=JSON.stringify(f),s["content-type"]="application/json");try{i="undefined"!=typeof document&&document.cookie.match(RegExp("(^|; )"+c.xsrfCookieName+"=([^;]*)"))}catch(e){}if(i&&(s[c.xsrfHeaderName]=decodeURIComponent(i[2])),c.auth&&(s.authorization=c.auth),c.baseURL&&(e=e.replace(/^(?!.*\/\/)\/?(.*)$/,c.baseURL+"/$1")),c.params){var p=~e.indexOf("?")?"&":"?";e+=p+(c.paramsSerializer?c.paramsSerializer(c.params):new URLSearchParams(c.params))}return(c.fetch||fetch)(e,{method:a||c.method,body:f,headers:n(c.headers,s,!0),credentials:c.withCredentials?"include":"same-origin"}).then(function(e){for(var t in e)"function"!=typeof e[t]&&(u[t]=e[t]);var n=c.validateStatus?c.validateStatus(e.status):e.ok;return"stream"==c.responseType?(u.data=e.body,u):e[c.responseType||"text"]().then(function(e){u.data=e,u.data=JSON.parse(e)}).catch(Object).then(function(){return n?u:Promise.reject(u)})})}return t=t||{},r.request=r,r.get=function(e,t){return r(e,t,"get")},r.delete=function(e,t){return r(e,t,"delete")},r.head=function(e,t){return r(e,t,"head")},r.options=function(e,t){return r(e,t,"options")},r.post=function(e,t,n){return r(e,n,"post",t)},r.put=function(e,t,n){return r(e,n,"put",t)},r.patch=function(e,t,n){return r(e,n,"patch",t)},r.all=Promise.all.bind(Promise),r.spread=function(e){return function(t){return e.apply(this,t)}},r.CancelToken="function"==typeof AbortController?AbortController:Object,r.defaults=t,r.create=e,r}());
//# sourceMappingURL=redaxios.module.js.map
