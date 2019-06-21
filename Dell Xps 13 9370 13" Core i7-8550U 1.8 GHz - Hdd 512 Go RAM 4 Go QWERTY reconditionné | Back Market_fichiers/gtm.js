
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"551",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return a.reduce(function(a,b){return a.concat(b.id)},[])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return a.reduce(function(a,b){return a.concat(b.category)},[])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return a.reduce(function(a,b){return a.concat(b.model)},[])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return a.reduce(function(a,b){return a.concat(b.brand)},[])})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",5],8,16],",c=0,d;var a=0;for(d=b.length;a\u003Cd;a++)c+=parseInt(b[a].price);return c})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(a){a=a.split(\"|\");var e={utmcsr:\"source\",utmcmd:\"medium\",utmccn:\"campaign\",utmcct:\"content\",utmctr:\"keyword\"},d={},b;for(b=0;b\u003Ca.length;b++){var c=a[b].split(\"\\x3d\");var f=c[0];c=c[1];d[e[f]]=c}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",5],8,16],";return b.map(function(a){return{item:\"eu_\"+a.id,price:Number(a.price),quantity:Number(a.quantity)}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],".toString();return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],",b=3;a=a.splice(0,b);return a.reduce(function(a,b){return a.concat(b.id)},[])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a.reduce(function(a,b){return a.concat(b.id)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a.reduce(function(a,b){return a.concat(b.quantity)},[]).join()})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".replace(\".html\",\"\").split(\"\/\")[1]})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BM_Advertising"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"false\"==",["escape",["macro",19],8,16],"?!1:!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BM_Analytics"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"false\"==",["escape",["macro",21],8,16],"?!1:!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BM_User_Experience"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"false\"==",["escape",["macro",23],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".split(\"\/\")[2]})();"]
    },{
      "function":"__vis",
      "vtp_elementSelector":"#adyen-encrypted-from \u003E ul \u003E li.to-repeat.payment-container.radioline-item \u003E label \u003E div.inner-form \u003E div.payment-simulation-block",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a){return a.hasAttribute(\"data-market\")?a.getAttribute(\"data-market\"):a.parentNode\u0026\u0026b(a.parentNode)}return b(",["escape",["macro",31],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";s\u0026\u0026(a=new Date,a.setFullYear(a.getFullYear()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=2,b=5,h=[{name:\"EMAIL\",regex:\/.{8}@.{6}\/gi,group:\"\"},{name:\"SELF-EMAIL\",regex:\/[^\\\/]{8}(@|%40)(?=backmarket\\.fr)[^\\\/]{6}\/gi,group:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=)|(phone_number))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((first_name=)|(last_name=)|(userrname=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"}],\nk=\"_ga_originalSendHitTask\";return function(a){window[k]=window[k]||a.get(\"sendHitTask\");\"number\"===typeof c\u0026\u0026a.set(\"dimension\"+c,a.get(\"clientId\"));\"number\"===typeof b\u0026\u0026a.set(\"dimension\"+b,a.get(\"hitType\"));a.set(\"sendHitTask\",function(a){var c=a,b=window[k],l=!0;try{if(\"undefined\"!==typeof h\u0026\u0026h.length){for(var d=a.get(\"hitPayload\").split(\"\\x26\"),e=0;e\u003Cd.length;e++){var f=d[e].split(\"\\x3d\");try{var g=decodeURIComponent(decodeURIComponent(f[1]))}catch(m){g=decodeURIComponent(f[1])}h.forEach(function(a){g=\ng.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});f[1]=encodeURIComponent(g);d[e]=f.join(\"\\x3d\")}a.set(\"hitPayload\",d.join(\"\\x26\"),!0)}l\u0026\u0026b(a)}catch(m){b(c)}})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"user_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",36],8,16],"){var a=new Date;a.setTime(a.getTime()+63072E6);a=\"expires\\x3d\"+a.toGMTString();document.cookie=\"user_id\\x3d\"+",["escape",["macro",36],8,16],"+\"; \"+a+\"; path\\x3d\/\";return ",["escape",["macro",36],8,16],"}if(",["escape",["macro",37],8,16],")return ",["escape",["macro",37],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",39],8,16],".split(\"_\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",39],8,16],".replace(\/[^0-9]\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(1E3*",["escape",["macro",43],8,16],".split(\".\")[3]),b={year:\"numeric\",month:\"numeric\",day:\"numeric\"};return a.toLocaleDateString([],b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"5503\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"6602\":\"5503\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",43],8,16],",c=1E3*Number(a.split(\".\").pop()),b=33696E6,d=(new Date).getTime(),e=(new Date(c)).getTime();a=e+b;var f=Math.round((a-d)\/1E3);return f}catch(g){return b\/1E3}})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\".backmarket.fr\",b=",["escape",["macro",47],8,16],",c=",["escape",["macro",21],8,16],"||\"true\",d=",["escape",["macro",19],8,16],"||\"true\",e=",["escape",["macro",23],8,16],"||\"true\";return JSON.stringify({consentRecord:[a,b,c,d,e]})})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"story.backmarket.fr\"===",["escape",["macro",49],8,16],")return\"blog\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],".split(\"\/\").slice(-1)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"MyCustomTrustBadge\");return a?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_override",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"hmx\"===",["escape",["macro",54],8,16],"?\"bra\":\"non_bra\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"random"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderID"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isPastrami"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",50],
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"commission"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buyback_orderID"
    },{
      "function":"__c",
      "vtp_value":"backmarket.fr,story.backmarket.fr"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"search_page\"==",["escape",["macro",62],8,16],"||\"story.backmarket.fr\"!=",["escape",["macro",49],8,16],"?",["escape",["macro",51],8,16],".slice(25):",["escape",["macro",17],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","true","value","1"],["map","key","false","value","0"]]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",26],
      "vtp_map":["list",["map","key","sav","value","sav"],["map","key","sourcing","value","sourcing"],["map","key","profil","value","profil"],["map","key","others","value","others"],["map","key","orders","value","orders"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"avis\"===",["escape",["macro",52],8,16],"?\"reviewpage\":",["escape",["macro",62],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",18],
      "vtp_defaultValue":["macro",62],
      "vtp_map":["list",["map","key","revendre","value","buy_back"],["map","key","register","value","register"],["map","key","password_reset","value","password_reset"],["map","key","mentions-legales","value","legal"],["map","key","faq","value","faq"],["map","key","dashboard","value",["macro",72]],["map","key","boutique","value",["macro",73]],["map","key","smartphones-reconditionnes","value",["macro",73]],["map","key","avis","value",["macro",73]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clientType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"landingPage\"==",["escape",["macro",62],8,16],")return ",["escape",["macro",76],8,16],";if(\"product\"==",["escape",["macro",62],8,16],")return ",["escape",["macro",77],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pm",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",79],
      "vtp_map":["list",["map","key","0","value","card"],["map","key","1","value","paypal"],["map","key","2","value","sofort"],["map","key","3","value","giropay"],["map","key","4","value","klarna_pay_later"],["map","key","5","value","oney_3x"],["map","key","6","value","oney_4x"],["map","key","7","value","klarna_slice_it"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buybackType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",81],
      "vtp_map":["list",["map","key","bb_normal","value","classic"],["map","key","bb_alert","value","alert"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",36],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".[0-9]*","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",49],
      "vtp_defaultValue":"UA-55864326-1",
      "vtp_map":["list",["map","key","backmarket.fr","value","UA-55864326-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",67],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",34]],["map","fieldName","userId","value",["macro",38]],["map","fieldName","page","value",["macro",68]],["map","fieldName","cookieExpires","value",["macro",46]],["map","fieldName","allowAdFeatures","value",["macro",20]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackerName":"fr",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",69]],["map","index","3","dimension",["macro",30]],["map","index","4","dimension",["macro",29]],["map","index","6","dimension",["macro",57]],["map","index","7","dimension",["template",["macro",70],"_",["macro",71]]],["map","index","8","dimension",["macro",38]],["map","index","9","dimension",["macro",44]],["map","index","10","dimension",["macro",74]],["map","index","11","dimension",["macro",75]],["map","index","12","dimension",["macro",48]],["map","index","13","dimension",["macro",78]],["map","index","15","dimension",["macro",80]],["map","index","22","dimension",["macro",49]],["map","index","23","dimension",["macro",82]],["map","index","30","dimension",["macro",83]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.model"
    },{
      "function":"__d",
      "vtp_elementSelector":"#main_container \u003E div \u003E div \u003E h2,#main_container \u003E div \u003E div \u003E div.top-title \u003E h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"button#create-alert,span.come-back-text,h1.no-product-title,div.m-product-buyblock.alert",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"+",["escape",["macro",25],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",89],8,16],".split(\"#\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"null\"===",["escape",["macro",88],8,16],"||\"undefined\"===",["escape",["macro",90],8,16],"?!1:!0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension24"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotalQuantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__r"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",74],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","sav|sourcing|profil|others|orders|blog|credit_card_update_success|credit_card_update|faq|legal|password_reset|register|cookies|reviewform|buy_back_thank_you_page|buy_back|reviews_page|reviewpage|about_us|cgv|data_protection|buyback_merchant_update_cc","value","other"],["map","key","i6s_landing|shop|devialet_home|dyson_home|landing_page_cpo|landingPage","value","landing"],["map","key","product_page|product_merchant|devialet_product|dyson_product|product","value","product"],["map","key","search_page","value","search"],["map","key","cart|hello|funnelSignup|funnelLogin|shipping_address|billing_address|confirmation_address|payment|thank_you_page","value","funnel"],["map","key","home","value","home"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",74],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","i6s_landing|shop|devialet_home|dyson_home|landing_page_cpo|landingPage","value","landing"],["map","key","product_page|product_merchant|devialet_product|dyson_product|product","value","product"],["map","key","search_page","value","search"],["map","key","cart","value","cart"],["map","key","home","value","home"],["map","key","sav|sourcing|profil|others|orders|credit_card_update_success|credit_card_update","value","account management"],["map","key","blog","value","blog"],["map","key","faq","value","faq"],["map","key","legal|about_us|cgv","value","about us"],["map","key","password_reset|register","value","registration"],["map","key","buy_back_thank_you_page|buy_back","value","buyback"],["map","key","data_protection|cookies","value","info"],["map","key","reviews_page|reviewpage|reviewform","value","review"],["map","key","reviewform|buyback_merchant_update_cc","value","other"],["map","key","thank_you_page","value","purchase"],["map","key","hello|funnelSignup|funnelLogin|shipping_address|billing_address|confirmation_address|payment","value","checkout"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",106]],["map","index","2","group",["macro",107]],["map","index","3","group",["macro",78]]],
      "vtp_autoLinkDomains":["macro",67],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",34]],["map","fieldName","userId","value",["macro",38]],["map","fieldName","page","value",["macro",68]],["map","fieldName","cookieExpires","value",["macro",46]],["map","fieldName","allowAdFeatures","value",["macro",20]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackerName":"fr",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",69]],["map","index","3","dimension",["macro",30]],["map","index","4","dimension",["macro",29]],["map","index","6","dimension",["macro",57]],["map","index","7","dimension",["template",["macro",70],"_",["macro",71]]],["map","index","8","dimension",["macro",38]],["map","index","9","dimension",["macro",44]],["map","index","10","dimension",["macro",74]],["map","index","11","dimension",["macro",75]],["map","index","12","dimension",["macro",48]],["map","index","13","dimension",["macro",78]],["map","index","15","dimension",["macro",80]],["map","index","22","dimension",["macro",49]],["map","index","30","dimension",["macro",83]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",32],7],"\".replace(\/\\\\'|'\/g,'\"').replace(\/\\s\/g,\"\").replace(\/(\\w+:)|(\\w+ :)\/g,function(a){return'\"'+a.substring(0,a.length-1)+'\":'});return JSON.parse(b).action})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",32],7],"\".replace(\/\\\\'|'\/g,'\"').replace(\/\\s\/g,\"\").replace(\/(\\w+:)|(\\w+ :)\/g,function(a){return'\"'+a.substring(0,a.length-1)+'\":'});return JSON.parse(b).label})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.name"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",105],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",111],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","buyback_img","value","brand"],["map","key","buyback_img_size buyback_img_2","value","model"],["map","key","col-md-2 sav_livraison_circle_pull_up sav_livraison_circle","value","shipping"],["map","key","btn bb_btn buyback_recevoir_btn ng-binding","value","btn_receive"],["map","key","btn bb_btn bb_btn_go bb_loggin next-step","value","btn_sign_in"],["map","key","btn bb_btn bb_btn_go bb_loggin","value","btn_sign_up"],["map","key","btn bb_btn bb_btn_go bb_btn_next","value","btn_next_bank"],["map","key","btn bb_btn bb_btn_go|btn bb_btn bb_btn_go bb_loggin","value","btn_ sold"],["map","key","a-button primary submit-pro","value","btn_send_pro"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",112],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","tablette|mobile|autre|^pro$","value","funnel \u003E Step 1"],["map","key","brand|model|storage|unlock|screen_state|coque_state|functionnal_state|btn_receive","value","funnel \u003E Step 2"],["map","key","btn_sign_in|btn_sign_up|phone|confirm_password|password","value","funnel \u003E Step 3"],["map","key","iban|bic|btn_next_bank|birthdate_day|birthdate_month|birthdate_year|gender|nationality|street|street2|city|postal_code|country","value","funnel \u003E Step 4"],["map","key","shipping|btn_ sold|btn_send_pro","value","funnel \u003E Step 5"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.brand"
    },{
      "function":"__c",
      "vtp_value":"783393745082203"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"s",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"EUR"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.dimension24"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions.0.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.category"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionIdYtb"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URLSearchParams(\"",["escape",["macro",90],7],"\");return a=a.get(\"utm_source\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".source})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],".includes(\"dclid\")\u0026\u0026",["escape",["macro",90],8,16],".includes(\"utm_source\")?",["escape",["macro",131],8,16],":",["escape",["macro",132],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".campaign})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".medium})();"]
    },{
      "function":"__c",
      "vtp_value":"a5180e890c988.js"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzzses"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".content})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".keyword})();"]
    },{
      "function":"__c",
      "vtp_value":"24623"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BM_Banner_Dismissed"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",110],8,16],"==\"searchbar_clic\"||\"searchbar_suggestion_product\"||\"searchbar_suggestion_all\")return ",["escape",["macro",110],8,16],";return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/email-reflex.com\/tags\/sell.php?source=1399\u0026amount=",["escape",["macro",58],12],"\u0026panierId=",["escape",["macro",59],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":54
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":153
    },{
      "function":"__awct",
      "setup_tags":["list",["tag",3,0]],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",59],
      "vtp_conversionValue":["macro",63],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"820619352",
      "vtp_currencyCode":"EUR",
      "vtp_conversionLabel":"VBKrCLCXt3sQ2NCmhwM",
      "vtp_url":["macro",64],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":156
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"820619352",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",64],
      "tag_id":158
    },{
      "function":"__awct",
      "setup_tags":["list",["tag",3,0]],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",66],
      "vtp_conversionValue":["macro",63],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"820619352",
      "vtp_currencyCode":"EUR",
      "vtp_conversionLabel":"6BpLCJyYt3sQ2NCmhwM",
      "vtp_url":["macro",64],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":159
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",59],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":190
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"addToCart",
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"detail",
      "vtp_eventLabel":["macro",92],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":199
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5118187",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":200
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_goalValue":["macro",63],
      "vtp_eventCategory":"Ecommerce",
      "vtp_tagId":"5118187",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":"Revenue",
      "tag_id":201
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"outOfStock",
      "vtp_eventLabel":["template","{",["macro",51]],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":202
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"removeFromCart",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":209
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site_quality",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"javascript_error",
      "vtp_eventLabel":["template",["macro",95],"\u003E",["macro",96]],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":236
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site_quality",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"gottferdam_error",
      "vtp_eventLabel":["template",["macro",51],"\u003E",["macro",97]],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":391
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"visit0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"globa0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8662968",
      "vtp_ordinalStandard":["macro",60],
      "vtp_url":["macro",64],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":490
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_revenue":["macro",63],
      "vtp_enableConversionLinker":true,
      "vtp_quantity":["macro",98],
      "vtp_countingMethod":"ITEM_SOLD",
      "vtp_orderId":["macro",59],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"salel0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sales0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"DATA_LAYER",
      "vtp_advertiserId":"8662968",
      "vtp_countingMethodIsItemSold":true,
      "vtp_url":["macro",64],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":491
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_revenue":["macro",63],
      "vtp_enableConversionLinker":true,
      "vtp_quantity":["macro",98],
      "vtp_countingMethod":"ITEM_SOLD",
      "vtp_orderId":["macro",66],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"buyba0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"buyba0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8662968",
      "vtp_countingMethodIsItemSold":true,
      "vtp_url":["macro",64],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":492
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",99],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",100],
      "vtp_eventLabel":["macro",101],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":509
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/ad.doubleclick.net\/ddm\/adj\/N929323.197812NSO.CODESRV\/B21296346.222792175;sz=1x2;ord=",["escape",["macro",102],3],";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":510
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"checkout",
      "vtp_eventLabel":["template","reach_",["macro",103]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":511
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/email-reflex.com\/tags\/categorie.php?source=1399\u0026cid=",["escape",["macro",76],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":522
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/email-reflex.com\/tags\/cart.php?source=1399\u0026cp=",["escape",["macro",15],12],"\u0026qt=",["escape",["macro",16],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":523
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/email-reflex.com\/tags\/exclude.php?source=1399",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":524
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/email-reflex.com\/tags\/target.php?source=1399",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":525
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/email-reflex.com\/tags\/target.php?source=1399\u0026pid=",["escape",["macro",104],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":526
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.vendremonmobile.com\/tracker-convert.php?cId=58",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",60],
      "tag_id":527
    },{
      "function":"__paused",
      "vtp_originalTagType":"crto",
      "tag_id":555
    },{
      "function":"__paused",
      "vtp_originalTagType":"crto",
      "tag_id":556
    },{
      "function":"__paused",
      "vtp_originalTagType":"crto",
      "tag_id":557
    },{
      "function":"__paused",
      "vtp_originalTagType":"crto",
      "tag_id":558
    },{
      "function":"__paused",
      "vtp_originalTagType":"crto",
      "tag_id":559
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",58],
      "vtp_eventCategory":"Buy Back",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"submissionConfirmed",
      "vtp_eventLabel":["macro",66],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":566
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"forms",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"trocaphone\u003Esubmitted",
      "vtp_eventLabel":["macro",26],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":579
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",81,2]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026ni","value",["macro",42]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":580
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"clic",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",109],
      "vtp_eventLabel":["macro",110],
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":583
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Profitable Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"time on page more than 1 minute",
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":585
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",62],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"product list \u003E side filter",
      "vtp_eventLabel":["template",["macro",40]," \u003E ",["macro",41]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":593
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Buy Back",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",113],
      "vtp_eventLabel":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":603
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":605
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":610
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":611
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1216704_101",
      "tag_id":616
    },{
      "function":"__cl",
      "tag_id":617
    },{
      "function":"__jel",
      "tag_id":618
    },{
      "function":"__hl",
      "tag_id":619
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"button#create-alert,span.come-back-text,h1.no-product-title,div.m-product-buyblock.alert",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"1216704_728",
      "tag_id":620
    },{
      "function":"__cl",
      "tag_id":621
    },{
      "function":"__cl",
      "tag_id":622
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1216704_981",
      "tag_id":623
    },{
      "function":"__cl",
      "tag_id":624
    },{
      "function":"__cl",
      "tag_id":625
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:\"",["escape",["macro",104],7],"\",content_category:\"",["escape",["macro",77],7],"\",value:\"",["escape",["macro",114],7],"\",name:\"",["escape",["macro",115],7],"\",brand:\"",["escape",["macro",116],7],"\",currency:\"EUR\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_type:\"product\",content_ids:\"",["escape",["macro",117],7],"\",content_category:\"",["escape",["macro",118],7],"\",value:\"",["escape",["macro",119],7],"\",model:\"",["escape",["macro",86],7],"\",brand:\"",["escape",["macro",120],7],"\",currency:\"EUR\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "setup_tags":["list",["tag",54,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_type:\"product\",content_ids:\"",["escape",["macro",1],7],"\",content_category:\"",["escape",["macro",2],7],"\",value:\"",["escape",["macro",58],7],"\",commission:\"",["escape",["macro",63],7],"\",name:\"",["escape",["macro",3],7],"\",brand:\"",["escape",["macro",4],7],"\",currency:\"EUR\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",121],7],"\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",121],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,b,c,d){\"undefined\"==typeof hmxtagidcust\u0026\u0026(hmxtagidcust=\"2\",a.ObjHmx=b,a[b]=a[b]||function(){(a[b].cmd=a[b].cmd||[]).push(arguments)},c=e.createElement(\"script\"),d=e.getElementsByTagName(\"script\")[0],c.async=1,c.src=\"\/\/u360.d-bi.fr\/hmx\"+f+\".js\",d.parentNode.insertBefore(c,d))})(window,document,\"000000000263\",\"hmx\");hmx(\"send\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "setup_tags":["list",["tag",55,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ehmx(\"set\",\"step\",\"order\");hmx(\"set\",\"orderid\",",["escape",["macro",59],8,16],");hmx(\"set\",\"conversionvalue\",",["escape",["macro",58],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{window.setTimeout(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/halc.iadvize.com\/iadvize.js?sid\\x3d",["escape",["macro",45],7],"\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)},15E3)}catch(a){}})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar idzTrans={cartAmount:\"",["escape",["macro",58],7],"\",tID:\"",["escape",["macro",59],7],"\"};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,b,c,d){\"undefined\"==typeof hmxtagidcust\u0026\u0026(hmxtagidcust=\"2\",a.ObjHmx=b,a[b]=a[b]||function(){(a[b].cmd=a[b].cmd||[]).push(arguments)},c=e.createElement(\"script\"),d=e.getElementsByTagName(\"script\")[0],c.async=1,c.src=\"\/\/u360.d-bi.fr\/hmx\"+f+\".js\",d.parentNode.insertBefore(c,d))})(window,document,\"000000000263\",\"hmx\");hmx(\"set\",\"step\",\"clic_atc\");hmx(\"send\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "setup_tags":["list",["tag",57,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar idzCustomData={page_type:\"",["escape",["macro",62],7],"\",cust_name:\"\",cust_firstname:\"\",cust_phonenumber:\"\",cust_email:\"",["escape",["macro",122],7],"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,b,c,d){\"undefined\"==typeof hmxtagidcust\u0026\u0026(hmxtagidcust=\"2\",a.ObjHmx=b,a[b]=a[b]||function(){(a[b].cmd=a[b].cmd||[]).push(arguments)},c=e.createElement(\"script\"),d=e.getElementsByTagName(\"script\")[0],c.async=1,c.src=\"\/\/u360.d-bi.fr\/hmx\"+f+\".js\",d.parentNode.insertBefore(c,d))})(window,document,\"000000000263\",\"hmx\");hmx(\"set\",\"step\",\"clic_welcomeback\");hmx(\"send\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,b,c,d){\"undefined\"==typeof hmxtagidcust\u0026\u0026(hmxtagidcust=\"2\",a.ObjHmx=b,a[b]=a[b]||function(){(a[b].cmd=a[b].cmd||[]).push(arguments)},c=e.createElement(\"script\"),d=e.getElementsByTagName(\"script\")[0],c.async=1,c.src=\"\/\/u360.d-bi.fr\/hmx\"+f+\".js\",d.parentNode.insertBefore(c,d))})(window,document,\"000000000263\",\"hmx\");hmx(\"set\",\"step\",\"clic_enchante\");hmx(\"send\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar revenue=",["escape",["macro",58],8,16],",cookie_name=\"c_ltv\",cookie_duration=365;if(null==readCookie(cookie_name))fbq(\"trackCustom\",\"LTV\",{value:parseFloat(revenue),page:",["escape",["macro",51],8,16],"});else{var old_revenue=readCookie(cookie_name);revenue=parseFloat(old_revenue)+parseFloat(revenue);fbq(\"trackCustom\",\"LTV\",{value:parseFloat(revenue),page:",["escape",["macro",51],8,16],"});eraseCookie(cookie_name)}createCookie(cookie_name,revenue,cookie_duration);\nfunction createCookie(c,d,b){if(b){var a=new Date;a.setTime(a.getTime()+33696E6*b);b=\"; expires\\x3d\"+a.toGMTString()}else b=\"\";document.cookie=c+\"\\x3d\"+d+b+\"; path\\x3d\/\"}function readCookie(c){c+=\"\\x3d\";for(var d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return null}function eraseCookie(c){createCookie(c,\"\",-1)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "setup_tags":["list",["tag",54,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"BuyBack\",{value:",["escape",["macro",58],8,16],",currency:\"",["escape",["macro",124],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"cdn.early-birds.fr\/tenants\/backmarket\/earlybirds-full.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":487
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"ecommerce:addTransaction\",{id:\"",["escape",["macro",59],7],"\",revenue:\"",["escape",["macro",58],7],"\",shipping:\"\",tax:\"\"}]);window._uxa.push([\"ecommerce:send\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":519
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")){var ecom=",["escape",["macro",125],8,16],",pagecat=",["escape",["macro",76],8,16],",cartcontent=",["escape",["macro",10],8,16],",ScarabQueue=ScarabQueue||[];(function(a){if(!document.getElementById(a)){var b=document.createElement(\"script\");b.id=a;b.src=\"\/\/cdn.scarabresearch.com\/js\/164B28677D573355\/scarab-v2.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})(\"scarab-js-api\");",["escape",["macro",36],8,16],"\u0026\u0026ScarabQueue.push([\"setCustomerId\",\n\"eu_compte_",["escape",["macro",36],7],"\"]);ecom\u0026\u0026ecom.detail\u0026\u0026ScarabQueue.push([\"view\",\"eu_",["escape",["macro",104],7],"\"]);pagecat\u0026\u0026\"undefined\"!=typeof pagecat\u0026\u0026\"\"!=pagecat\u0026\u0026ScarabQueue.push([\"category\",pagecat]);ecom\u0026\u0026ecom.checkout\u0026\u0026ScarabQueue.push([\"cart\",cartcontent]);if(ecom\u0026\u0026ecom.purchase){for(var emarsys_purchase_command={orderId:\"eu_\"+ecom.purchase.actionField.id,items:[]},i=0;i\u003Cecom.purchase.products.length;i++)emarsys_purchase_command.items.push({item:\"eu_\"+ecom.purchase.products[i].id,quantity:ecom.purchase.products[i].quantity,\nprice:ecom.purchase.products[i].price});ScarabQueue.push([\"purchase\",emarsys_purchase_command])}ScarabQueue.push([\"go\"])};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":537
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"gtm-__utmzz-cookie-replicator\" type=\"text\/gtmscript\"\u003E(function(g){function w(c){var e=[\"source\",\"medium\",\"campaign\",\"term\",\"content\"];e=new RegExp(\"(utm_(\"+e.join(\"|\")+\")|(d|g)clid)\\x3d.*?([^\\x26#]*|$)\",\"gi\");c=c.match(e);var l;if(c){var a={};var b=c.length;for(l=0;l\u003Cb;l++)(e=c[l].split(\"\\x3d\"))\u0026\u0026(a[e[0]]=e[1])}return a}function x(c){if(c){var e={\"daum.net\":{p:\"q\",n:\"daum\"},\"eniro.se\":{p:\"search_word\",n:\"eniro \"},\"naver.com\":{p:\"query\",n:\"naver \"},\"yahoo.com\":{p:\"p\",n:\"yahoo\"},\"msn.com\":{p:\"q\",n:\"msn\"},\"bing.com\":{p:\"q\",n:\"live\"},\"aol.com\":{p:\"q\",n:\"aol\"},\n\"lycos.com\":{p:\"q\",n:\"lycos\"},\"ask.com\":{p:\"q\",n:\"ask\"},\"altavista.com\":{p:\"q\",n:\"altavista\"},\"search.netscape.com\":{p:\"query\",n:\"netscape\"},\"cnn.com\":{p:\"query\",n:\"cnn\"},\"about.com\":{p:\"terms\",n:\"about\"},\"mamma.com\":{p:\"query\",n:\"mama\"},\"alltheweb.com\":{p:\"q\",n:\"alltheweb\"},\"voila.fr\":{p:\"rdata\",n:\"voila\"},\"search.virgilio.it\":{p:\"qs\",n:\"virgilio\"},\"baidu.com\":{p:\"wd\",n:\"baidu\"},\"alice.com\":{p:\"qs\",n:\"alice\"},\"yandex.com\":{p:\"text\",n:\"yandex\"},\"najdi.org.mk\":{p:\"q\",n:\"najdi\"},\"seznam.cz\":{p:\"q\",\nn:\"seznam\"},\"search.com\":{p:\"q\",n:\"search\"},\"wp.pl\":{p:\"szukaj \",n:\"wirtulana polska\"},\"online.onetcenter.org\":{p:\"qt\",n:\"o*net\"},\"szukacz.pl\":{p:\"q\",n:\"szukacz\"},\"yam.com\":{p:\"k\",n:\"yam\"},\"pchome.com\":{p:\"q\",n:\"pchome\"},\"kvasir.no\":{p:\"q\",n:\"kvasir\"},\"sesam.no\":{p:\"q\",n:\"sesam\"},\"ozu.es\":{p:\"q\",n:\"ozu \"},\"terra.com\":{p:\"query\",n:\"terra\"},\"mynet.com\":{p:\"q\",n:\"mynet\"},\"ekolay.net\":{p:\"q\",n:\"ekolay\"},\"rambler.ru\":{p:\"words\",n:\"rambler\"},google:{p:\"q\",n:\"google\"}},a=g.createElement(\"a\"),b={};a.href=\nc;-1\u003Ca.hostname.indexOf(\"google\")\u0026\u0026(m=\"google\");e[m]?(c=e[m],e=new RegExp(c.p+\"\\x3d.*?([^\\x26#]*|$)\",\"gi\"),a=a.search.match(e),b.source=c.n,b.medium=\"organic\",b.term=(a?a[0].split(\"\\x3d\")[1]:\"\")||\"(not provided)\"):m!==n\u0026\u0026(b.source=a.hostname,b.medium=\"referral\");return b}}function u(c,a,b,d,f){c=c+\"\\x3d\"+a+\";\";b\u0026\u0026(c+=\"Expires\\x3d\"+b.toGMTString()+\";\");d\u0026\u0026(c+=\"Path\\x3d\"+d+\";\");f\u0026\u0026(c+=\"Domain\\x3d\"+f+\";\");g.cookie=c}function q(a){var b=\"; \"+g.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(1\u003Ca.length)return a.pop().split(\";\")[0]}\nfunction v(a){if(a){var b=g.createElement(\"a\");b.href=a;try{return b.hostname.match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]}catch(l){}}}var p=g.referrer,b={utmcsr:\"(direct)\",utmcmd:\"(none)\",utmccn:\"(not set)\"},r=g.location.hostname,n=v(r),m=v(g.referrer),k=q(\"__utmzzses\");r=new Date(+new Date+15552E6);var a=g.location.search.replace(\"?\",\"\"),h=g.location.hash.replace(\"#\",\"\");a=w(a+\"#\"+h);var d=x(p);h=q(\"__utmz\")||q(\"__utmzz\");p=[];var t={utm_source:\"utmcsr\",utm_medium:\"utmcmd\",utm_campaign:\"utmccn\",\nutm_content:\"utmcct\",utm_term:\"utmctr\",gclid:\"utmgclid\",dclid:\"utmdclid\"},f;k\u0026\u0026m===n\u0026\u0026(d=a=null);if(a\u0026\u0026(a.utm_source||a.gclid||a.dclid)){for(f in a)\"undefined\"!==typeof a[f]\u0026\u0026(k=t[f],b[k]=a[f]);if(a.gclid||a.dclid)b.utmcsr=\"google\",b.utmcmd=b.utmgclid?\"cpc\":\"cpm\"}else if(d)b.utmcsr=d.source,b.utmcmd=d.medium,d.term\u0026\u0026(b.utmctr=d.term);else if(h)for(b={},h=h.split(\"|\"),t=h.length,d=0;d\u003Ct;d++)k=h[d].split(\"\\x3d\"),a=k[0].split(\".\").pop(),b[a]=k[1];for(f in b)\"undefined\"!==typeof b[f]\u0026\u0026p.push(f+\"\\x3d\"+\nb[f]);u(\"__utmzz\",p.join(\"|\"),r,\"\/\",n);u(\"__utmzzses\",1,null,\"\/\",n)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":546
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"CategoryLandingPage\",{content_type:\"product\",content_ids:\"",["escape",["macro",12],7],"\",content_category:\"",["escape",["macro",76],7],"\",value:\"",["escape",["macro",126],7],"\",name:\"",["escape",["macro",127],7],"\",brand:\"",["escape",["macro",128],7],"\",currency:\"EUR\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":568
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{window.setTimeout(function(){dataLayer.push({event:\"afterLoad\"})},15E3)}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":574
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",33],8,16],"(\"random\",Math.floor(10*Math.random()),1,\"\/\",\".backmarket.fr\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":584
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._abtasty=window._abtasty||[];window._abtasty.push([\"transaction\",\"buybackOk\",",["escape",["macro",66],8,16],",",["escape",["macro",58],8,16],",",["escape",["macro",98],8,16],"]);window._abtasty.push([\"eco\",\"category\",",["escape",["macro",129],8,16],"]);window._abtasty.push([\"eco\",\"commission\",",["escape",["macro",63],8,16],"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":586
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3d\";\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":597
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3dcategorie\";\nwindow.ema_critere+=\"\\x26crt_category\\x3d",["escape",["macro",76],7],"\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":598
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3dproduit\";\nwindow.ema_critere+=\"\\x26crt_product\\x3d",["escape",["macro",104],7],"\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":599
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3dpanier\";\nwindow.ema_critere+=\"\\x26crt_listproduct\\x3d",["escape",["macro",15],7],"\";window.ema_lead_id=\"\\x3cLeadID\\x3e\";window.ema_critere+=\"\\x26crt_conversion_amount\\x3d",["escape",["macro",6],7],"\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":600
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3dconversion\";\nwindow.ema_lead_id=\"",["escape",["macro",59],7],"\";window.ema_critere+=\"\\x26crt_conversion_amount\\x3d",["escape",["macro",58],7],"\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":601
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003E(function(a,b,d){var c=b.createElement(\"script\");b=b.getElementsByTagName(\"script\")[0];c.async=!0;c.src=d+\"?t\\x3d\"+Math.round((new Date).getTime()\/72E5);b.parentNode.insertBefore(c,b);a.ema_critere=\"\";a.w_emasend=function(){void 0!==a.emasend\u0026\u0026void 0!==a.ema_id_site?a.emasend():setTimeout(a.w_emasend,200)};setTimeout(a.w_emasend,10)})(window,document,\"https:\/\/atout.email-match.com\/emafunc.js\");window.ema_id_site=2097;window.ema_critere=\"\";window.ema_critere+=\"\\x26crt_page\\x3d\";window.ema_email=\"",["escape",["macro",122],7],"\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":604
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",80,2]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"sessionIdYtb\",poc=Math.floor(1E8+9E8*Math.random()),cookieValue=poc,expirationTime=1800;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);date=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+date+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":615
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",133]],["map","key","u3","value",["macro",134]],["map","key","u4","value",["macro",135]],["map","key","u5","value",["macro",55]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pocyt",
      "vtp_useImageTag":false,
      "vtp_activityTag":"allse0",
      "vtp_ordinalType":"SESSION",
      "vtp_sessionId":["macro",130],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8662968",
      "vtp_ordinalIsSession":true,
      "vtp_url":["macro",64],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":613
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];var c=[];try{if(\"undefined\"!==typeof dataLayer)for(var a=0;a\u003CdataLayer.length;a++){if(\"undefined\"!==typeof dataLayer[a].source)var g=\"eb\"==dataLayer[a].source.received?1:0;window._uxa.push([\"setCustomVariable\",1,\"page_type\",dataLayer[a].pageType,3]);void 0!==dataLayer[a].email\u0026\u00260\u003CdataLayer[a].email.length\u0026\u0026window._uxa.push([\"setCustomVariable\",2,\"user_logged\",\"true\",3]);window._uxa.push([\"setCustomVariable\",3,\"client_type\",dataLayer[a].clientType,3]);if(void 0!==\ndataLayer[a].ecommerce\u0026\u0026(void 0!==dataLayer[a].ecommerce.detail\u0026\u0026(window._uxa.push([\"setCustomVariable\",4,\"products_brand\",dataLayer[a].ecommerce.detail.products[0].brand,3]),window._uxa.push([\"setCustomVariable\",5,\"products_cateory\",dataLayer[a].ecommerce.detail.products[0].category,3]),window._uxa.push([\"setCustomVariable\",6,\"products_model\",dataLayer[a].ecommerce.detail.products[0].model,3]),window._uxa.push([\"setCustomVariable\",7,\"products_price\",dataLayer[a].ecommerce.detail.products[0].price,\n3]),window._uxa.push([\"setCustomVariable\",8,\"products_variant\",dataLayer[a].ecommerce.detail.products[0].variant,3]),window._uxa.push([\"setCustomVariable\",9,\"dimension19\",dataLayer[a].ecommerce.detail.products[0].dimension19,3]),window._uxa.push([\"setCustomVariable\",14,\"shipping_delay\",dataLayer[a].ecommerce.detail.products[0].shipping_options[0].delay,3]),window._uxa.push([\"setCustomVariable\",15,\"shipping_price\",dataLayer[a].ecommerce.detail.products[0].shipping_options[0].price,3]),window._uxa.push([\"setCustomVariable\",\n16,\"shipping_shipper\",dataLayer[a].ecommerce.detail.products[0].shipping_options[0].shipper,3])),void 0!==dataLayer[a].ecommerce.checkout)){window._uxa.push([\"setCustomVariable\",10,\"checkout_step\",dataLayer[a].ecommerce.checkout.actionField.step,3]);for(var f=0;f\u003CdataLayer[a].ecommerce.checkout.products.length;f++)c.push(dataLayer[a].ecommerce.checkout.products[f].model),window._uxa.push([\"setCustomVariable\",11,\"all_model_products\",c.join(\"|\"),3]);window._uxa.push([\"setCustomVariable\",12,\"nbr_cart\",\ndataLayer[a].ecommerce.checkout.products.length,3])}window._uxa.push([\"setCustomVariable\",13,\"Earlybirds\",g,3])}}catch(h){}try{if(\"object\"==typeof window.ABTasty.results){window._uxa=window._uxa||[];c=\"\";for(var b in window.ABTasty.results)if(window.ABTasty.results.hasOwnProperty(b)){var e=window.ABTasty.results[b],d;for(d in e)e.hasOwnProperty(d)\u0026\u0026\"variationID\"===d\u0026\u0026null!==e[d]\u0026\u0026(c+=\"[\"+b+\"\\x3d\"+e[d]+\"]\")}window._uxa.push([\"setCustomVariable\",20,\"ABTasty\",c])}}catch(h){}\"undefined\"===typeof CS_CONF?\n(window._uxa.push([\"setPath\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),b=document.createElement(\"script\"),b.type=\"text\/javascript\",b.async=!0,b.src=\"\/\/t.contentsquare.net\/uxa\/",["escape",["macro",136],7],"\",document.getElementsByTagName(\"head\")[0].appendChild(b)):window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":518
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"[5-9]"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"(^landingPage$)|(^product$)"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"story.backmarket.fr"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"replaceState"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^cart$)|(^hello$)|(^login$)|(^signup$)|(^shippingaddress$)|(^shippingfacturationaddress$)|(^confirmationaddress$)|(^payment$)|(^purchase$)|(^home$)|(^product$)|(^landingPage$)|(^dyson_home$)|(^dyson_product$)|(^devialet_home$)|(^devialet_product$)|(^category_page_done$)|(^category_page_done$)|(^product_merchant$)|(^shop$)|(^buyback_confirm$)|(^reviewform$)|(^data_protection$)|(^cgv$)|(^about_us$)|(^cookies$)|(^orders$)"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"(^cart$)|(^hello$)|(^login$)|(^signup$)|(^shippingaddress$)|(^shippingfacturationaddress$)|(^confirmationaddress$)|(^payment$)|(^purchase$)|(^home$)|(^product$)|(^landingPage$)|(^dyson_home$)|(^dyson_product$)|(^devialet_home$)|(^devialet_product$)|(^category_page_done$)|(^category_page_done$)|(^product_merchant$)|(^shop$)|(^buyback_confirm$)|(^reviewform$)|(^data_protection$)|(^cgv$)|(^about_us$)|(^cookies$)|(^orders$)|(^blog$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"buyback_confirm"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"addToCart"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"Gottferdam|404"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"product"
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)1216704_728($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",94],
      "arg1":"SUPPRIMER"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"cart"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.pageError"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"[0-4]"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"gottferdam|404",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"iAdvize"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"^cart$|hello|login|signup|shippingaddress|shippingfacturationaddress|confirmationaddress|payment"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"landingPage"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"cart"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"[0-9]"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"home"
    },{
      "function":"_cn",
      "arg0":["macro",105],
      "arg1":"ValidateButton_2dDFo BaseButton_3MlAl"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"reviewform"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"blog"
    },{
      "function":"_re",
      "arg0":["macro",105],
      "arg1":"storageItem|color\\-select"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"replaceState"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)1216704_981($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",31],
      "arg1":":checked"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"landingPage|shop",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":".+"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"vendre"
    },{
      "function":"_re",
      "arg0":["macro",113],
      "arg1":"^funnel \u003E Step [1-5]$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",53],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^cart$)|(^home$)|(^product$)|(^landingPage$)|(^dyson_home$)|(^dyson_product$)|(^devialet_product)|(^category_page_done$)|(^product_merchant$)|(^shop$)|(^reviewform$)|(^data_protection$)|(^orders$)"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"(^cart$)|(^login$)|(^signup$)|(^home$)|(^product$)|(^landingPage$)|(^dyson_home$)|(^dyson_product$)|(^category_page_done$)|(^product_merchant$)|(^shop$)|(^buyback_confirm$)|(^reviewform$)|(^data_protection$)|(^cgv$)|(^about_us$)|(^cookies$)|(^orders$)|(^devialet_home$)|(^devialet_product$)|(^i6s_landing$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"revendre|faq|qui\\-sommes\\-nous|dashboard|register|vendre"
    },{
      "function":"_re",
      "arg0":["macro",62],
      "arg1":"hello|funnelLogin|funnelSignup|confirmation_address|shipping_address|billing_address|payment|devialet_home|i6s_landing"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"https:\/\/www.backmarket.fr\/register"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"[0-3]"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"registration_form"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)1216704_101($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"login"
    },{
      "function":"_eq",
      "arg0":["macro",123],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"signup"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",130],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"backmarket"
    }],
  "rules":[
    [["if",0],["add",0,2,5,9,15,22,30,38,53,56,58,63,66,77],["block",55]],
    [["if",4,6],["unless",5],["add",1,55]],
    [["if",8],["unless",7],["add",1,55]],
    [["if",10],["unless",9],["add",3,8,14,18,33,54,57,60,65,67]],
    [["if",12],["unless",11],["add",3,8,14,18,33,54,57,60,65,67]],
    [["if",13],["add",4,16,25,31,64,72],["block",53]],
    [["if",15],["add",6,52,59]],
    [["if",17],["unless",9,16],["add",7,24,27,51,75,70]],
    [["if",19,20],["add",10]],
    [["if",21,22,23],["add",11]],
    [["if",24],["add",12]],
    [["if",12,26],["add",13]],
    [["if",27],["add",17]],
    [["if",28],["add",19]],
    [["if",29],["unless",16],["add",20,28,69,74]],
    [["if",30],["add",21,29,76]],
    [["if",32],["add",23,26,73]],
    [["if",23,33,34],["add",32]],
    [["if",8,35],["add",33]],
    [["if",17,36,37],["add",33]],
    [["if",23],["unless",38],["add",34]],
    [["if",39,40],["add",35]],
    [["if",23,41,42,43],["add",36]],
    [["if",23,44,45],["add",37]],
    [["if",46,47],["unless",9],["add",39]],
    [["if",12,46],["unless",48],["add",39]],
    [["if",2,50],["add",40]],
    [["if",8,51],["add",41]],
    [["if",8],["add",42,43,44,45,46,47,49,50,68]],
    [["if",8,52],["add",48]],
    [["if",56,57],["unless",55],["add",61]],
    [["if",58],["add",61]],
    [["if",12,59],["add",62]],
    [["if",60],["add",62]],
    [["if",8,61],["add",71]],
    [["if",15,31],["add",78]],
    [["if",8,62],["unless",63],["add",79]],
    [["if",1,2],["block",0,1,2,3,4,8,9,14,15,16,18,20,21,22,23,24,25,26,27,28,29,30,51,52,53,54,64,67,69,73,74,75,76,77,78]],
    [["if",2,3],["block",0,20,21,22,23]],
    [["if",2,14],["block",5,6,7,10,11,12,13,17,19,31,32,33,35,36,55,56,59,61,62,66]],
    [["if",2,18],["block",7,20,24,27,28,51,69,74,75]],
    [["if",2,25],["block",12,73,74,75,76,77,78]],
    [["if",2,31],["block",21,76]],
    [["if",12,49],["block",39]],
    [["if",2,53],["block",57,58,60,65,72]],
    [["if",2,54],["block",60]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c=new oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},oa=function(){this.prefix="gtm.";this.values={}};oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};oa.prototype.get=function(a){return this.values[this.prefix+a]};oa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var f=window,u=document,Ia=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Pa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){f.setTimeout(a,0)},Ta=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Va=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Xa=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Za={},$a=function(a,b){Za[a]=Za[a]||[];Za[a][b]=!0},bb=function(a){for(var b=[],c=Za[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||$a("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
hb=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||$a("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.Cb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Ua},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Cb:1*k[0]||1,Ua:1*k[1]||1}))}}return c}
var qb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,rb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return rb.test(document.location.hostname)||"/"===b&&qb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;tb[3]=function(a){return String(a).replace(wb,vb)};var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};tb[7]=function(a){return String(a).replace(Ab,Cb)};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Jb=/['()]/g,Kb=function(a){return"%"+a.charCodeAt(0).toString(16)};tb[12]=function(a){var b=
encodeURIComponent(String(a));Jb.lastIndex=0;return Jb.test(b)?b.replace(Jb,Kb):b};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.wc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.qf(d,k))}catch(v){b.Pd&&b.Pd(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.rb);d.push(p)}return Wb&&m?Wb.tf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Vf(a))return Wb.eg(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Bd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Zc:a("convert_case_to"),$c:a("convert_false_to"),ad:a("convert_null_to"),bd:a("convert_true_to"),cd:a("convert_undefined_to"),ra:a("function"),Fe:a("instance_name"),Ge:a("live_only"),He:a("malware_disabled"),Ie:a("metadata"),Og:a("original_vendor_template_id"),Je:a("once_per_event"),rd:a("once_per_load"),sd:a("setup_tags"),td:a("tag_id"),ud:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.i="GTM-WB77QG";yc.vb="651";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.i+"&cv=551",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Oa(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Xf()||0>=Wc--?($a("GTM",1),Uc[Rc]=!0):(Vc.pg(),Qa(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.vb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Xf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},pg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=String(b[dc.ra]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Tc=Tc?Tc+"."+e:"&tr="+e;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new oa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new oa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&$a("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&$a("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&$a("GTM",3);
d?$a("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&$a("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){$a("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=pa(e,l||[]);r&&$a("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(w=pa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={qf:function(a,b){b[dc.Zc]&&"string"===typeof a&&(a=1==b[dc.Zc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.ad)&&null===a&&(a=b[dc.ad]);b.hasOwnProperty(dc.cd)&&void 0===a&&(a=b[dc.cd]);b.hasOwnProperty(dc.bd)&&!0===a&&(a=b[dc.bd]);b.hasOwnProperty(dc.$c)&&!1===a&&(a=b[dc.$c]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)A(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)A(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;d(yc.i,Ld[a]),e=!0;!e&&d(yc.i)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return A(function(){var c=!1;b(yc.i,Ld[a]),c=!0;!c&&b(yc.i)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Xe:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||$a("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){var b=zc.consumeError;if(!b||!ha(b))return;var c=[];if(a instanceof Error){b(ie({message:a.message},c));return}ia(a)&&b(ie({message:a},c));};function ie(a,b){a.containerId=yc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.sd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{K:g,P:1===k.Bd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.He])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.td]),v[dc.Ie]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var z=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){z(C)}}}
var g=Sb[a],h=b.K,k=b.P,l=b.terminate;if(c.wc(g))return null;var m=$b(g[dc.ud],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{K:h,P:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Bd?l:p}if(g[dc.rd]||g[dc.Je]){var t=g[dc.rd]?Tb:c.Ag,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.K;k=w.P}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{K:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},P:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ta[d]){var e=Sb[d];if(e[dc.Ge])continue;var g=b.add();try{var h=ke(d,{K:g,P:g,terminate:g},a,d);h?c.push({ce:d,b:bc(e),Bf:h}):(qe(d,a),g())}catch(l){g()}}b.Xe();c.sort(re);for(var k=0;k<c.length;k++)c[k].Bf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ce,k=b.ce;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.wc(Sb[d])?"3":"4",g=$b(Sb[d][dc.sd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.ud],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event",1);td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,wc:Ad(c),Ta:[],Ag:[],Pd:function(p){$a("GTM",6);je(p)}};h.Ta=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ta.length;m++)if(h.Ta[m]){var n=Sb[m];if(n&&!l[n[dc.ra]])return!0}return!1};var G={Sb:"event_callback",Ub:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,ze=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}},Be=function(a){for(var b={},c=0;c<a.length;++c){var d=ze(a[c]);d&&(b[d.id]=d)}Ae(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Ae(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.fa[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ce=null,De={},Ee={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Sb]&&(c.eventCallback=b[G.Sb]),b[G.Ub]&&(c.eventTimeout=b[G.Ub]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Qe=function(a){return Pe?u.querySelectorAll(a):null},Re=function(a,b){if(!Pe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Se=!1;if(u.querySelectorAll)try{var Te=u.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==u.documentElement&&(Se=!0)}catch(a){}var Pe=Se;var $e=function(a){if(Ze(a))return a;this.Hg=a};$e.prototype.If=function(){return this.Hg};var Ze=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};$e.prototype.getUntrustedUpdateValue=$e.prototype.If;var af=!1,bf=[];function cf(){if(!af){af=!0;for(var a=0;a<bf.length;a++)A(bf[a])}}var df=function(a){af?A(a):bf.push(a)};var ef=[],ff=!1,gf=function(a){return f["dataLayer"].push(a)},hf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},kf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});Dc||(Dc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=jf(a);
Fc=null;return e};function jf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.i,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var lf=function(){for(var a=!1;!ff&&0<ef.length;){ff=!0;delete hd.eventModel;kd();var b=ef.shift();if(null!=b){var c=Ze(b);if(c){var d=b;b=Ze(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){ff=!1;continue}}a=kf(b)||a}}finally{c&&kd(!0)}}ff=!1}
return!a},mf=function(){var a=lf();try{var b=yc.i,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},nf=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});df(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $e(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ef.push.apply(ef,d);if(300<this.length)for($a("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return lf()&&h};ef.push.apply(ef,a.slice(0));A(mf)};var of;var Kf={};Kf.rb=new String("undefined");
var Lf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kf.rb?b:a[d]);return c.join("")}};Lf.prototype.toString=function(){return this.resolve("undefined")};Lf.prototype.valueOf=Lf.prototype.toString;Kf.Ke=Lf;Kf.fc={};Kf.tf=function(a){return new Lf(a)};var Mf={};Kf.qg=function(a,b){var c=Jc();Mf[c]=[a,b];return c};Kf.zd=function(a){var b=a?0:1;return function(c){var d=Mf[c];if(d&&"function"===typeof d[b])d[b]();Mf[c]=void 0}};Kf.Vf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kf.eg=function(a){if(a===Kf.rb)return a;var b=Jc();Kf.fc[b]=a;return'google_tag_manager["'+yc.i+'"].macro('+b+")"};Kf.Zf=function(a,b,c){a instanceof Kf.Ke&&(a=a.resolve(Kf.qg(b,c)),b=fa);return{uc:a,K:b}};var Nf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Of=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pf=function(a,b,c){Of(a)[b]=c},Qf=function(a,b,c,d){var e=Of(a),g=xa(e,b,d);e[b]=c(g)},Rf=function(a,b,c){var d=Of(a);return xa(d,b,c)};var Sf=function(){for(var a=Ia.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Vf=function(a,b,c,d){var e=Tf(b);return lb(a,e,Uf(c),d)},Tf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b){var c=""+Tf(a),d=Uf(b);1<d&&(c+="-"+d);return c};var Xf=["1"],Yf={},bg=function(a,b,c,d){var e=Zf(a);Yf[e]||$f(e,b,c)||(ag(e,Sf(),b,c,d),$f(e,b,c))};function ag(a,b,c,d,e){var g;g=["1",Wf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function $f(a,b,c){var d=Vf(a,b,c,Xf);d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Rc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Rc]||(g[a[h].Rc]=[]),g[a[h].Rc].push({timestamp:k[1],Ff:k[2]}))}return g};function dg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var eg,gg,hg=function(a){eg=eg||fg();gg=gg||dg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[p])}return b.join("")},ig=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||
dg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;function kg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var og=function(){var a=lg,b=mg,c=ng(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ra(u,"mousedown",d);Ra(u,"keyup",d);Ra(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},ng=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var pg=/(.*?)\*(.*?)\*(.*)/,qg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rg=/^(?:www\.|m\.|amp\.)+/,sg=/([^?#]+)(\?[^#]*)?(#.*)?/,tg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",ug(e),e].join("*")},ug=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=wg(d)||{};var e=gb(b,"fragment").match(tg);a.fragment=wg(e&&e[3]||
"")||{}}},wg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=pg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ug(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ig(t[q+1]);return p}}}}catch(r){}};
function yg(a,b,c){function d(m){var n=m,p=tg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function zg(a,b,c){for(var d={},e={},g=ng().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=vg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=yg(l,a.action);Ya.test(w)&&(a.action=w)}}}else Ag(l,a,!1)}if(!c&&Aa(e)){var v=vg(e);Ag(v,a,!0)}}function Ag(a,b,c){if(b.href){var d=yg(a,b.href,void 0===c?!1:c);Ya.test(d)&&(b.href=d)}}
var lg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||zg(e,e.hostname,!1)}}catch(h){}},mg=function(a){try{if(a.action){var b=gb(hb(a.action),"host");zg(a,b,!0)}}catch(c){}},Bg=function(a,b,c,d){og();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};ng().decorators.push(e)},Cg=function(){var a=u.location.hostname,b=qg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(rg,"")===e.replace(rg,"")},Dg=function(a,b){return!1===a?!1:a||b||Cg()};var Eg={};var Fg=/^\w+$/,Gg=/^[\w-]+$/,Hg=/^~?[\w-]+$/,Ig={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Jg(a){return a&&"string"==typeof a&&a.match(Fg)?a:"_gcl"}var Lg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Kg(b,c,d)};
function Kg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Gg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Eg.gtm_3pds?0:Eg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Mg(a,b,c){function d(p,t){var q=Ng(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Jg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Qd?7776E3:b.Qd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.nh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Ng=function(a,b){var c=Ig[a];if(void 0!==c)return b+c},Og=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Pg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Qg=function(a,b,c,d,e){if(ka(b)){var g=Jg(e);Bg(function(){for(var h={},k=0;k<a.length;++k){var l=Ng(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Rg=function(a){return a.filter(function(b){return Hg.test(b)})},Sg=function(a){for(var b=["aw","dc"],c=Jg(a&&a.prefix),d={},e=0;e<b.length;e++)Ig[b[e]]&&(d[b[e]]=Ig[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Og(l),n={};n[g]=[Pg(l)];Mg(n,a,m)}})};var Tg=/^\d+\.fls\.doubleclick\.net$/;function Ug(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Tg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Vg(a,b){if("aw"==a||"dc"==a){var c=Ug("gcl"+a);if(c)return c.split(".")}var d=Jg(b);if("_gcl"==d){var e;e=Lg()[a]||[];if(0<e.length)return e}var g=Ng(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Pg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Rg(k)}else h=k}else h=k}else h=[];return h}
var Wg=function(){var a=Ug("gac");if(a)return decodeURIComponent(a);var b=cg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Ff);g=Rg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Xg=function(a,b,c,d,e){bg(b,c,d,e);var g=Yf[Zf(b)],h=Lg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Qa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Zf(b),r=Yf[q];r&&ag(q,r,c,d,e)}};var Yg;if(3===yc.vb.length)Yg="g";else{var Zg="G";Yg=Zg}
var $g={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Yg,OPT:"o"},ah=function(a){var b=yc.i.split("-"),c=b[0].toUpperCase(),d=$g[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===yc.vb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+yc.vb+e};
var bh=function(a){return!(void 0===a||null===a||0===(a+"").length)},ch=function(a,b){var c;if(2===b.N)return a("ord",na(1E11,1E13)),!0;if(3===b.N)return a("ord","1"),a("num",na(1E11,1E13)),!0;if(4===b.N)return bh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.N)c="1";else if(6===b.N)c=b.Lc;else return!1;bh(c)&&a("qty",c);bh(b.yb)&&a("cost",b.yb);bh(b.transactionId)&&a("ord",b.transactionId);return!0},dh=encodeURIComponent,eh=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:dh(p)))}var d=a.oc,e=a.protocol;e+=a.Ib?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+dh(d)+(";type="+dh(a.sc))+(";cat="+dh(a.Oa));var g=a.vf||{};ra(g,function(n,p){e+=";"+dh(n)+"="+dh(p+"")});if(ch(c,a)){bh(a.Nb)&&c("u",a.Nb);bh(a.Mb)&&c("tran",a.Mb);c("gtm",ah());!1===a.Te&&c("npa","1");if(a.mc){var h=Vg("dc",a.wa);h&&h.length&&c("gcldc",h.join("."));var k=Vg("aw",a.wa);k&&k.length&&c("gclaw",k.join("."));var l=Wg();l&&c("gac",l);bg(a.wa,void 0,a.rf,a.sf);
var m=Yf[Zf(a.wa)];m&&c("auiddc",m)}bh(a.Hc)&&c("prd",a.Hc,!0);ra(a.Uc,function(n,p){c(n,p)});e+=b||"";bh(a.Gb)&&c("~oref",a.Gb);a.Ib?Pa(e+"?",a.K):Qa(e+"?",a.K,a.P)}else A(a.P)};var hh=!!f.MutationObserver,ih=void 0,jh=function(a){if(!ih){var b=function(){var c=u.body;if(c)if(hh)(new MutationObserver(function(){for(var e=0;e<ih.length;e++)A(ih[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ra(c,"DOMNodeInserted",function(){d||(d=!0,A(function(){d=!1;for(var e=0;e<ih.length;e++)A(ih[e])}))})}};ih=[];u.body?b():A(b)}ih.push(a)};
var zh=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};$a("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ah=function(a){var b=zh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Bh=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};var Ch=[],Dh=!(!f.IntersectionObserver||!f.IntersectionObserverEntry),Eh=function(a,b,c){for(var d=new f.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<Ch.length;g++)if(!Ch[g])return Ch[g]=d,g;return Ch.push(d)-1},Fh=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:wa()};A(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Ah(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Gh=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Dh){var e=!1;A(function(){e||Fh(a,b,c)()});return Eh(function(g){e=!0;for(var h={Ea:0};h.Ea<g.length;h={Ea:h.Ea},h.Ea++)A(function(k){return function(){return a(g[k.Ea])}}(h))},b,c)}return f.setInterval(Fh(a,b,c),1E3)},Hh=function(a){Dh?0<=a&&a<Ch.length&&Ch[a]&&(Ch[a].disconnect(),Ch[a]=void 0):f.clearInterval(a)};var Jh=f.clearTimeout,Kh=f.setTimeout,H=function(a,b,c){if(Oe()){b&&A(b)}else return Na(a,b,c)},Lh=function(){return new Date},Mh=function(){return f.location.href},Nh=function(a){return gb(hb(a),"fragment")},Oh=function(a){return fb(hb(a))},Ph=null;
var Qh=function(a,b){return ld(a,b||2)},Rh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return gf(a)},Sh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Th=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Uh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Qd:d},g=Lg();Mg(g,e);Sg(e)},Vh=function(a,b,c,d,e){var g=xg(),h=ng();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Jg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Ig[p]){var t=Ng(p,m),q=k[t];if(q){var r=Math.min(Og(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Og(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Mg(Kg(k.gclid,k.gclsrc),z);},Wh=function(a,b,c,d,e){Qg(a,b,c,d,e);},
Xh=function(a,b){if(Oe()){b&&A(b)}else Pa(a,b)},Yh=function(a){return!!Rf(a,"init",!1)},Zh=function(a){Pf(a,"init",!0)},$h=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))},ai=function(a,b){var c=a[b];return c};
var ci=Kf.Zf;var di=new oa,ei=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},fi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(fi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=di.get(q);r||(r=new RegExp(c,t),di.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ei(b,c)}return!1};var hi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ii={},ji=encodeURI,L=encodeURIComponent,ki=Qa;var li=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var mi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};ii.Wf=function(){var a=!1;a=!0;return a};var ni=function(){var a=!1;return a};var Xi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Yi=function(){this.c=1;this.e=[];this.p=null};function Zi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Yi}var $i=function(a,b){Zi(a).p=b},aj=function(a){var b=Zi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var cj=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var rj=window,sj=document,tj=function(a){var b=rj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===rj["ga-disable-"+a])return!0;try{var c=rj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",sj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return sj.getElementById("__gaOptOutExtension")?!0:!1};var Aj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,void 0));aj(a)},Bj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,!0))},zj=function(a){if(1===Zi(a).c&&(Zi(a).c=2,!Oe())){var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Dj=function(a,b){},Cj=function(a,
b){};var Y={a:{}};
Y.a.vis=["google"],function(){var a={};(function(b){Y.__vis=b;Y.__vis.g="vis";Y.__vis.h=!0;Y.__vis.b=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],g=Number(Lh());if(e&&250>g-e.time)return e.value;e={time:g,value:null};var h=b.vtp_outputMethod,k=null;if("CSS"==b.vtp_selectorType){var l=Qe(b.vtp_elementSelector);l&&0<l.length&&(k=l[0])}else k=
u.getElementById(b.vtp_elementId);if(k)switch(h){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=Ah(k)>=m&&!Bh(k);break;case "PERCENT":e.value=0,Bh(k)||(e.value=Math.round(1E3*Ah(k))/10)}a[c]=e;return e.value})}();
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.b=0})(function(){return"551"})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;eh(b,c)}(function(b){Y.__flc=b;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=mi(b.vtp_customVariable||[],"key","value")||{},e={Oa:b.vtp_activityTag,mc:c,wa:b.vtp_conversionCookiePrefix||void 0,yb:void 0,N:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,oc:b.vtp_advertiserId,sc:b.vtp_groupTag,P:b.vtp_gtmOnFailure,K:b.vtp_gtmOnSuccess,Gb:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Lc:void 0,Ib:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Mb:b.vtp_transactionVariable,transactionId:void 0,Nb:b.vtp_userVariable,Uc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){H("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([mi(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Sd();H("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=mi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:ah()})||b()}else b()},b)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Qe(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=u.getElementById(a.vtp_elementId);b&&(c=d?Ta(b,d):Ua(b));return va(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Qh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Oh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Nf(c,"gtm.click");Rh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Yh("cl")){var c=K("document");Ra(c,"click",a,!0);Zh("cl")}A(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Th(a.vtp_name,Qh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;eh(b,c)}(function(b){Y.__fls=b;Y.__fls.g="fls";Y.__fls.h=!0;Y.__fls.b=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(p){p=p||[];for(var t=[],q=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],r=0;r<p.length;r++)for(var w=0;w<q.length;w++){var v=q[w],y=p[r][v[1]];void 0!==y&&t.push(v[0]+(r+1)+
":"+L(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(Qh("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),g=0;g<e.length;g++){var h=e[g].split(":");h[1]=h[1]&&L(h[1])||"";e[g]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=mi(b.vtp_customVariable||[],
"key","value")||{},m={Oa:b.vtp_activityTag,mc:k,wa:b.vtp_conversionCookiePrefix||void 0,yb:b.vtp_revenue,N:"ITEM_SOLD"===b.vtp_countingMethod?6:5,oc:b.vtp_advertiserId,sc:b.vtp_groupTag,P:b.vtp_gtmOnFailure,K:b.vtp_gtmOnSuccess,Gb:b.vtp_useImageTag?void 0:b.vtp_url,Hc:c,protocol:"",Lc:b.vtp_quantity,Ib:!b.vtp_useImageTag,Mb:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Nb:b.vtp_userVariable,Uc:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){H("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,K("google_attr").build([mi(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return na(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Qh("gtm.url",1))||Mh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Oh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Qh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.Cc&&b.Ec>=b.Cc)b.vc&&K("self").clearInterval(b.vc);else{b.Ec++;var c=Lh().getTime();Rh({event:b.S,"gtm.timerId":b.vc,"gtm.timerEventNumber":b.Ec,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Cc,"gtm.timerStartTime":b.be,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.be,"gtm.triggers":b.Fg})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){A(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={S:b.vtp_eventName,
Ec:0,interval:Number(b.vtp_interval),Cc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Fg:String(b.vtp_uniqueTriggerId||"0"),be:Lh().getTime()};c.vc=K("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(mi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(m.vtp_contentGroup,"index","group"),g);Ha(mi(m.vtp_dimension,"index","dimension"),h);Ha(mi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(mi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(c.vtp_contentGroup,
"index","group"),g);Ha(mi(c.vtp_dimension,"index","dimension"),h);Ha(mi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(U){var N=[].slice.call(arguments,0);N[0]=t+N[0];p.apply(window,N)},y=function(U,N){return void 0===N?N:U(N)},x=function(U,N){if(N)for(var Z in N)N.hasOwnProperty(Z)&&v("set",U+Z,N[Z])},z=function(){
var U=function(Db,sb,tc){if(!Ga(sb))return!1;for(var uc=xa(Object(sb),tc,[]),Fe=0;uc&&Fe<uc.length;Fe++)v(Db,uc[Fe]);return!!uc&&0<uc.length},N;if(c.vtp_useEcommerceDataLayer){var Z=!1;Z||(N=Qh("ecommerce",1))}else c.vtp_ecommerceMacroData&&(N=c.vtp_ecommerceMacroData.ecommerce);if(!Ga(N))return;N=Object(N);var qa=xa(e,"currencyCode",N.currencyCode);
void 0!==qa&&v("set","&cu",qa);U("ec:addImpression",N,"impressions");if(U("ec:addPromo",N[N.promoClick?"promoClick":"promoView"],"promotions")&&N.promoClick){v("ec:setAction","promo_click",N.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Ja=0;Ja<Ba.length;Ja++){var ab=N[Ba[Ja]];if(ab){U("ec:addProduct",ab,"products");v("ec:setAction",Ba[Ja],ab.actionField);break}}},
B=function(U,N,Z){var qa=0;if(U)for(var Ba in U)if(U.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(U[Ba]):U[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);N[Ba]=Ja;qa++}return qa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",ah(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(U,N){void 0!==
c[N]&&v("set",U,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var U=e&&e.hitCallback;ha(U)&&U();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");c.vtp_autoLinkDomains&&$d(t,c.vtp_autoLinkDomains,!!c.vtp_useHashAutoLink,!!c.vtp_decorateFormsAutoLink);}if(!a){var V=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(V="internal/"+V);a=!0;var ea=D("https:","http:",
"//www.google-analytics.com/"+V,e&&e.forceSSL);H(ea,function(){var U=Xd();U&&U.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else A(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();

Y.a.jel=["google"],function(){(function(a){Y.__jel=a;Y.__jel.g="jel";Y.__jel.h=!0;Y.__jel.b=0})(function(a){if(!Yh("jel")){var b=K("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Rh({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Zh("jel")}A(a.vtp_gtmOnSuccess)})}();


Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.b=0})(function(){return yc.i})}();

Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){A(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Cg())&&
Vh(a,h,k,l));Uh(e,c,d);Xg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Wh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.aev=["google"],function(){function a(m,n){var p=!1,t;var q=ud(m,"gtm");if(!q)return;p=!0;t=q[n];p||(t=Qh("gtm."+n,1));return t}function b(m,n,p,t){t||(t="element");var q=m+"."+n,r;if(h.hasOwnProperty(q))r=h[q];else{var w=a(m,t);if(w&&(r=p(w),h[q]=r,k.push(q),35<k.length)){var v=k.shift();delete h[v]}}return r}function c(m,n,p){var t=a(m,l[n]);return void 0!==t?t:p}function d(m,n){if(!m)return!1;
var p=e(Mh());ka(n)||(n=String(n||"").replace(/\s+/g,"").split(","));for(var t=[p],q=0;q<n.length;q++)if(n[q]instanceof RegExp){if(n[q].test(m))return!1}else{var r=n[q];if(0!=r.length){if(0<=e(m).indexOf(r))return!1;t.push(e(r))}}return!li(m,t)}function e(m){g.test(m)||(m="http://"+m);return gb(hb(m),"HOST",!0)}var g=/^https?:\/\//i,h={},k=[],l={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",
HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(m){Y.__aev=m;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(m){var n=m.vtp_gtmEventId,p=m.vtp_defaultValue,t=m.vtp_varType;switch(t){case "TAG_NAME":var q=a(n,"element");return q&&q.tagName||p;case "TEXT":return b(n,t,Ua)||p;case "URL":var r;a:{var w=String(a(n,"elementUrl")||p||""),v=hb(w),y=String(m.vtp_component||"URL");switch(y){case "URL":r=
w;break a;case "IS_OUTBOUND":r=d(w,m.vtp_affiliatedDomains);break a;default:r=gb(v,y,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var x;if(void 0===m.vtp_attribute)x=c(n,t,p);else{var z=m.vtp_attribute,B=a(n,"element");x=B&&Ta(B,z)||p||""}return x;case "MD":var C=m.vtp_mdValue,E=b(n,"MD",xh);return C&&E?yh(E,C)||p:E||p;default:return c(n,t,p)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[dc.ra]=null;c[dc.Fe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Mh()}function b(g,h){Ra(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Oh(l),D:Nh(l)})})}function c(g,h){Ra(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Oh(l),D:Nh(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Oh(Mh()),
D:Nh(Mh())})}}catch(n){}}function e(){var g={source:null,state:K("history").state||null,url:Oh(Mh()),D:Nh(Mh())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Rh(m)}}}(function(g){Y.__hl=g;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(g){var h=K("self");if(!Yh("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Zh("hl")}A(g.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Sd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ah()},m=function(t){return function(q,r,w){var v="DATA_LAYER"==t?Qh(w):k[r];v&&(l[q]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,H("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=K(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{H("//bat.bing.com/bat.js",function(){var h=hi(K("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){A(b.vtp_gtmOnFailure)}})}();
Y.a.fsl=[],function(){function a(){var e=K("document"),g=c(),h=HTMLFormElement.prototype.submit;Ra(e,"click",function(k){var l=k.target;if(l&&(l=Wa(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ta(l,"value")){var m;(m=l.form?l.form.tagName?l.form:u.getElementById(l.form):Wa(l,["form"],100))&&g.store(m,l)}},!1);Ra(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=!0;if(d(l,function(){if(p){var t=g.get(l),
q;t&&(q=e.createElement("input"),q.type="hidden",q.name=t.name,q.value=t.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n))p=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k){var l=Rf("fsl",h?"nv.mwt":"mwt",0),m;m=h?Rf("fsl","nv.ids",[]):Rf("fsl","ids",[]);if(!m.length)return!0;var n=Nf(e,"gtm.formSubmit",m),p=e.action;p&&p.tagName&&(p=e.cloneNode(!1).action);n["gtm.elementUrl"]=p;if(k&&l){if(!Rh(n,hf(g),l))return!1}else Rh(n,function(){},l||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.g="fsl";Y.__fsl.h=!0;Y.__fsl.b=
0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};Qf("fsl","mwt",m,0);h||Qf("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};Qf("fsl","ids",n,[]);h||Qf("fsl","nv.ids",n,[]);Yh("fsl")||(a(),Zh("fsl"));A(e.vtp_gtmOnSuccess)})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=mi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){A(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){A(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=ci(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.uc,k=g.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Va(h),k,e)()}else Kh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();


Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.g="img";Y.__img.h=!0;Y.__img.b=0})(function(a){var b=Va('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}ki(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Qh("gtm.start"))||0;return Lh().getTime()-g}function c(g,h,k,l){function m(){if(!Bh(g.target)){h.has(e.ub)||h.set(e.ub,""+b());h.has(e.cc)||h.set(e.cc,""+b());var p=0;h.has(e.wb)&&(p=Number(h.get(e.wb)));p+=100;h.set(e.wb,""+p);if(p>=k){var t=Nf(g.target,"gtm.elementVisibility",[h.uid]),q=Ah(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.cc));
t["gtm.visibleLastTime"]=Number(h.get(e.ub));Rh(t);l()}}}if(!h.has(e.Ma)&&(0==k&&m(),!h.has(e.sa))){var n=K("self").setInterval(m,100);h.set(e.Ma,n)}}function d(g){g.has(e.Ma)&&(K("self").clearInterval(Number(g.get(e.Ma))),g.remove(e.Ma))}var e={Ma:"polling-id-",cc:"first-on-screen-",ub:"recent-on-screen-",wb:"total-visible-time-",sa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Y.__evl=g;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.b=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=Qe(m)}catch(F){}y=!!x&&w.length!=x.length}else if("ID"===l){var z=u.getElementById(m);z&&(x=[z],y=1!=w.length||w[0]!==z)}x||(x=[],y=0<w.length);if(y){for(var B=0;B<w.length;B++){var C=new a(w[B],
q);d(C)}w=[];for(var E=0;E<x.length;E++)w.push(x[E]);0<=v&&Hh(v);0<w.length&&(v=Gh(k,w,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.sa)||c(y,x,p,"ONCE"===r?function(){for(var z=0;z<w.length;z++){var B=new a(w[z],q);B.set(e.sa,"1");d(B)}Hh(v);if(n&&ih)for(var C=0;C<ih.length;C++)ih[C]===h&&ih.splice(C,1)}:function(){x.set(e.sa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.sa)&&(x.remove(e.sa),x.remove(e.wb)),x.remove(e.ub))}var l=g.vtp_selectorType,m;"ID"===l?m=String(g.vtp_elementId):
"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,w=[],v=-1;h();n&&jh(h);A(g.vtp_gtmOnSuccess)})}();

var Ej={};Ej.macro=function(a){if(Kf.fc.hasOwnProperty(a))return Kf.fc[a]},Ej.onHtmlSuccess=Kf.zd(!0),Ej.onHtmlFailure=Kf.zd(!1);Ej.dataLayer=md;Ej.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};Ej.bf=function(){zc[yc.i]=Ej;za(Ic,Y.a);Wb=Wb||Kf;Xb=Bd};
Ej.Rf=function(){Eg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.i]){var a=zc.zones;a&&a.unregisterChild(yc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=fi;Ej.bf();nf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ra(u,"DOMContentLoaded",Hd);Ra(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ra(f,"load",Hd)}af=!1;"complete"===u.readyState?cf():
Ra(f,"load",cf);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,Ej.Rf)();

})()
