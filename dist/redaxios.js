var e=function e(t){function r(e,t,n){var a,o={};if(Array.isArray(e))return e.concat(t);for(a in e)o[n?a.toLowerCase():a]=e[a];for(a in t){var i=n?a.toLowerCase():a,u=t[a];o[i]=i in o&&"object"==typeof u?r(o[i],u,"headers"===i):u}return o}function n(e,n,a,o){"string"!=typeof e&&(e=(n=e).url);var i,u={config:n},c=r(t,n),s={},f=o||c.data;(c.transformRequest||[]).map(function(e){f=e(f,c.headers)||f}),f&&"object"==typeof f&&"function"!=typeof f.append&&(f=JSON.stringify(f),s["content-type"]="application/json");try{i="undefined"!=typeof document&&document.cookie.match(RegExp("(^|; )"+c.xsrfCookieName+"=([^;]*)"))}catch(e){}if(i&&(s[c.xsrfHeaderName]=decodeURIComponent(i[2])),c.auth&&(s.authorization=c.auth),c.baseURL&&(e=e.replace(/^(?!.*\/\/)\/?(.*)$/,c.baseURL+"/$1")),c.params){var p=~e.indexOf("?")?"&":"?";e+=p+(c.paramsSerializer?c.paramsSerializer(c.params):new URLSearchParams(c.params))}return(c.fetch||fetch)(e,{method:a||c.method,body:f,headers:r(c.headers,s,!0),credentials:c.withCredentials?"include":"same-origin"}).then(function(e){for(var t in e)"function"!=typeof e[t]&&(u[t]=e[t]);var r=c.validateStatus?c.validateStatus(e.status):e.ok;return"stream"==c.responseType?(u.data=e.body,u):e[c.responseType||"text"]().then(function(e){u.data=e,u.data=JSON.parse(e)}).catch(Object).then(function(){return r?u:Promise.reject(u)})})}return t=t||{},n.request=n,n.get=function(e,t){return n(e,t,"get")},n.delete=function(e,t){return n(e,t,"delete")},n.head=function(e,t){return n(e,t,"head")},n.options=function(e,t){return n(e,t,"options")},n.post=function(e,t,r){return n(e,r,"post",t)},n.put=function(e,t,r){return n(e,r,"put",t)},n.patch=function(e,t,r){return n(e,r,"patch",t)},n.all=Promise.all.bind(Promise),n.spread=function(e){return function(t){return e.apply(this,t)}},n.CancelToken="function"==typeof AbortController?AbortController:Object,n.defaults=t,n.create=e,n}();module.exports=e;
//# sourceMappingURL=redaxios.js.map
