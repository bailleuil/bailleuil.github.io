;var hmx_privacy='{}';(function(){function B(a){for(var d=d^-1,b=0,l=a.length;b<l;b++)d=d>>>8^z[(d^a.charCodeAt(b))&255];return(d^-1)>>>0}function w(){return("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6)}function C(a){var d=[];if(document.cookie)for(var b=document.cookie.split(";"),l=0,c=b.length;l<c;l++){var e=b[l].split("=");e[0]=e[0].replace(/^ /,"");a===e[0].replace(/^ /,"")&&d.push(e[1])}return d}function D(a){var d=-1!==a.indexOf("|")?a.indexOf("|"):a.length;return B(a.substring(0,24)).toString(16).toUpperCase()===
a.substring(24,d)}function y(a,d){-1===a.indexOf(d)&&a.push(d)}function A(a,d,b,l,c){document.cookie=a+"="+d+"; domain="+b+" ; path="+l+" ; expires="+c}function E(){var a="";try{a=JSON.stringify(c[1])}catch(d){a='{"created":'+c[1].created+',"updated":'+c[1].updated+',"tag":"'+hmxtagidcust+'-2.22-6","count":'+nbGenerated+',"etag":'+c[1].etag+"}"}try{a=c[0]+"|"+q.encode(a)}catch(d){a=c[0]+"|"}return a}function G(){var a="";try{a="undefined"!==typeof navigator.languages&&0<navigator.languages.length?
-1!==navigator.languages[0].indexOf("-")||2>navigator.languages.length?navigator.languages[0]:navigator.languages[1]:navigator.language||navigator.browserLanguage,a=q.encode(a)}catch(d){}return a}function H(){var a=0,d=!1;if("undefined"===typeof customvar_holimetrix){var b="",l=!1;if(document.cookie){var f=C("C360i"),e,p;e=0;for(p=f.length;e<p;e++)if(D(f[e])){var u=f[e].split("|");try{u[1]=q.decode(u[1])}catch(n){u[1]="{}"}if(0<c.length){if(c[0]!==u[0]){d=!0;try{var m=JSON.parse(c[1]);JSON.parse(u[1]).created<
m.created?(y(v,c[0]),c=u,b=c[0]):y(v,u[0])}catch(n){y(v,u[0])}}}else c=u,b=c[0]}f=C("C360");if(0<f.length)for(l=!0,e=0,p=f.length;e<p;e++)D(f[e])&&(""!==b?b!==f[e]&&(d=!0,y(v,f[e])):(b=f[e],c[0]=b))}""===b&&(a=1,b=(w()+w()+w()+w()).toUpperCase(),e=("00000000"+B(b).toString(16).toUpperCase()).slice(-8),b+=e,c[0]=b);p=new Date;e=document.domain.split(".");if("undefined"===typeof c[1])c[1]={};else try{c[1]=JSON.parse(c[1])}catch(n){c[1]={}}"object"!==typeof c[1]&&(c[1]={});f="number"===typeof c[1].count?
parseInt(c[1].count,10)+1:1;c[1].created=c[1].created||p.getTime();c[1].updated=p.getTime();c[1].tag=""+hmxtagidcust+"-2.22-6";c[1].count=f;p=(new Date(p.getTime()+32832E6)).toGMTString();for(f=e.length-1;0<=f;f--)A("C360i",E(),"."+e.slice(f).join("."),"/",p),l&&A("C360",b,e.slice(f).join("."),"/","Thu, 01 Jan 1970 00:00:01 GMT");l&&(document.cookie="C360="+b+"; path=/ ; expires=Thu, 01 Jan 1970 00:00:01 GMT;");customvar_holimetrix=b+"-"+w()+w()}a="&cgen="+a;b=l="";p=e=0;for(var t in k.pixelarg)if("function"!==
typeof k.pixelarg[t]){try{a=a+"&"+t+"="+q.encode(k.pixelarg[t])}catch(n){a=a+"&"+t+"="}"step"===t?p=1:"custom_referrer"===t&&(e=1)}if(d)try{a=a+"&cold="+q.encode(v.join(","))}catch(n){}try{b=window.self!==window.top?parent.document.referrer:document.referrer}catch(n){b=document.referrer}"undefined"===typeof b&&(b="");d="";try{d=window.self!==window.top?window.top.location.href:window.location.href}catch(n){d=window.location.href}"undefined"===typeof d&&(d="");if(!p){if(e)l=k.pixelarg.custom_referrer;
else try{l=parent.document.URL}catch(n){l=document.URL}a=a+"&step="+I(l,b)}try{b.length&&(b=q.encode(b))}catch(n){b=""}try{d.length&&(d=q.encode(d))}catch(n){d=""}l=G();e=new Date;var g,r;try{g=q.encode(e.getTimezoneOffset())}catch(n){g=""}try{r=(r=Intl.DateTimeFormat().resolvedOptions().timeZone)?q.encode(r):""}catch(n){r=""}try{var h=new Image(1,1);h.src="//u360.d-bi.fr/000000000263.gif?c="+customvar_holimetrix+a+"&hmxtagid="+hmxtagidcust+"-2.22-6&u="+d+"&hmxts="+e.getTime()+"&hmxtzoffset="+g+"&hmxtzname="+
r+"&navlang="+l+"&r="+b}catch(n){if(window.opener){var x="https://portal.holimetrix.com/";if(-1!=location.search.indexOf("hmxdebug=on")||-1!=document.cookie.indexOf("hmxdebug=on")){g={action:"exception",exception:n};try{window.opener.postMessage(g,x)}catch(z){}}}}finally{if(J(),window.opener)if(x="https://portal.holimetrix.com/",-1!=location.search.indexOf("hmxdebug=off")){g=new Date;g.setTime(g.getTime()-1);document.cookie="hmxdebug=on; path=/ ; expires="+g.toGMTString();g={action:"debugOff",active_sec:0};
try{window.opener.postMessage(g,x)}catch(n){}}else if(-1!=location.search.indexOf("hmxdebug=on")||-1!=document.cookie.indexOf("hmxdebug=on")){g=new Date;g.setTime(g.getTime()+18E5);document.cookie="hmxdebug=on; path=/ ; expires="+g.toGMTString();g=customvar_holimetrix.split("&",2);g=g[0].split("-",2);g={action:"logPixel",active_sec:1800,pixel:h?h.src:"undefined",cookie:g[0],args:{url:d,referer:b,page_id:g[1]}};h=a.split("&");for(t in h)h.hasOwnProperty(t)&&0<h[t].length&&(r=h[t].split("=",2),"cgen"!=
r[0]&&"perfSite"!=r[0]&&"perfScript"!=r[0]&&(g.args[r[0]]=r[1]));try{window.opener.postMessage(g,x)}catch(n){}window.addEventListener("beforeunload",function(){var a={action:"changePage"};try{window.opener.postMessage(a,x)}catch(b){}})}}}function J(){if(1<c.length&&"object"===typeof c[1]){var a=k.document.createElement("script"),d=k.document.getElementsByTagName("script")[0];a.async=1;a.src="https://u360.d-bi.fr/e.js";d.parentNode.insertBefore(a,d)}}function I(a,d){document.createElement("a").href=
a;document.createElement("a").href=d;try{return q.encode("other")}catch(b){return""}}if("undefined"===typeof hmxtagidcust)"undefined"!==typeof console&&console.error("HMX tag was called directly. Please use the provided js.");else{for(var q={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var d="",b,c,f,e,h,k,m=0;for(a=q._utf8_encode(a);m<a.length;)b=a.charCodeAt(m++),c=a.charCodeAt(m++),f=a.charCodeAt(m++),e=b>>2,b=(b&3)<<4|c>>4,h=(c&15)<<2|f>>6,k=f&
63,isNaN(c)?h=k=64:isNaN(f)&&(k=64),d=d+this._keyStr.charAt(e)+this._keyStr.charAt(b)+this._keyStr.charAt(h)+this._keyStr.charAt(k);return d},decode:function(a){a=String(a).replace(/=+$/,"");if(1==a.length%4)return"";for(var d=0,b,c,f=0,e="";c=a.charAt(f++);~c&&(b=d%4?64*b+c:c,d++%4)?e+=String.fromCharCode(255&b>>(-2*d&6)):0)c=this._keyStr.indexOf(c);return e},_utf8_encode:function(a){a=String(a).replace(/\r\n/g,"\n");for(var d="",b=0;b<a.length;b++){var c=a.charCodeAt(b);128>c?d+=String.fromCharCode(c):
(127<c&&2048>c?d+=String.fromCharCode(c>>6|192):(d+=String.fromCharCode(c>>12|224),d+=String.fromCharCode(c>>6&63|128)),d+=String.fromCharCode(c&63|128))}return d}},z=[],c=[],v=[],m=0;256>m;m++){for(var h=m,F=0;8>F;F++)h=h&1?3988292384^h>>>1:h>>>1;z[m]=h}var k=window;k.pixelarg=[];k.HmxEntryPoint=function(a){if(0<a.length)if("send"===a[0])H();else if("set"===a[0])k.pixelarg[a[1]]=a[2];else if("e"===a[0]&&(a=a[1],1<c.length&&"object"===typeof c[1]&&"undefined"!==typeof a&&(c[1].etag!==a||0===c[1].count%
50))){var d,b=!1;c[1].etag!==a&&(d=c[1].etag,b=!0);c[1].etag=a;try{(new Image(1,1)).src="https://u360.d-bi.fr/e.gif?aid=000000000263&c="+c[0]+"&e="+c[1].etag+"&d="+q.encode(document.domain)+("undefined"!==typeof d?"&eold="+d:"")+(0<v.length?"&cold="+v.join(","):"")}catch(l){}if(b)for(d=new Date,d.setTime(d.getTime()+32832E6),a=document.domain.split("."),b=a.length-1;0<=b;b--)A("C360i",E(),"."+a.slice(b).join("."),"/",d.toGMTString())}};m=k[k.ObjHmx].cmd;if("undefined"!==typeof m&&"number"===typeof m.length)for(h=
0;h<m.length;h++)k.HmxEntryPoint(m[h]);k[k.ObjHmx]=function(){k.HmxEntryPoint(arguments)};Array.prototype.indexOf||(Array.prototype.indexOf=function(a,d){var b;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),f=c.length>>>0;if(0===f)return-1;b=+d||0;Infinity===Math.abs(b)&&(b=0);if(b>=f)return-1;for(b=Math.max(0<=b?b:f-Math.abs(b),0);b<f;){if(b in c&&c[b]===a)return b;b++}return-1})}})(window);
