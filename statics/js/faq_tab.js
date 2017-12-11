// 通用滑动门
function scrollDoor(){
}
scrollDoor.prototype = {
sd : function(menus,divs,openClass,closeClass){
var _this = this;
if(menus.length != divs.length)
{
alert("菜单层数量和内容层数量不一样!");
return false;
}
for(var i = 0 ; i < menus.length ; i++)
{
_this.$(menus[i]).value = i;
_this.$(menus[i]).onmouseover = function(){
for(var j = 0 ; j < menus.length ; j++)
{
_this.$(menus[j]).className = closeClass;
_this.$(divs[j]).style.display = "none";
}
_this.$(menus[this.value]).className = openClass;
_this.$(divs[this.value]).style.display = "block";
}
}
},
$ : function(oid){
if(typeof(oid) == "string")
return document.getElementById(oid);
return oid;
}
}
function loadScrollDoor(){
var SDmodel = new scrollDoor();
SDmodel.sd(["mm01","mm02","mm03"],["cc01","cc02","cc03"],"sd01","sd02");<!--搜索
}
<!--FAQ效果-->
// JavaScript Document
var lastFaqClick=null;//上次点击的faq
function loadFaq(faqid){
var faq=document.getElementById(faqid);
var dls=faq.getElementsByTagName("dl");
for (var i=0,dl;dl=dls[i];i++){
var dt=dl.getElementsByTagName("dt")[0];//取得标题
dt.id = "faq_dt_"+(Math.random()*100);
dt.onclick=function(){
var p=this.parentNode;//取得父节点
if (lastFaqClick!=null&&lastFaqClick.id!=this.id){
var dds=lastFaqClick.parentNode.getElementsByTagName("dd");
for (var i=0,dd;dd=dds[i];i++)
dd.style.display='none';
}
lastFaqClick=this;
var dds=p.getElementsByTagName("dd");//取得该父节点所有的子节点，也就是所有的答案
var tmpDisplay='none';
if (gs(dds[0],'display')=='none')
tmpDisplay='block';
for (var i=0;i<dds.length;i++)
dds[i].style.display=tmpDisplay;
}
}
}
/**
*取得元素的真实css属性
*written in 06.7 sheneyan
*/
function gs(d,a){
if (d.currentStyle){
var curVal=d.currentStyle[a]
}else{
var curVal=document.defaultView.getComputedStyle(d, null)[a]
}
return curVal;
}
window.onload = function(){
loadScrollDoor();
loadFaq("faq1");
loadFaq("faq2");
loadFaq("faq3");
loadFaq("faq4");
} 