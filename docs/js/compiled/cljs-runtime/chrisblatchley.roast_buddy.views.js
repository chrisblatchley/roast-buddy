goog.provide('chrisblatchley.roast_buddy.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('chrisblatchley.roast_buddy.subs');
goog.require('chrisblatchley.roast_buddy.roasts');
chrisblatchley.roast_buddy.views.past_roasts = (function chrisblatchley$roast_buddy$views$past_roasts(){
var roasts = (function (){var G__43920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chrisblatchley.roast-buddy.subs","roasts","chrisblatchley.roast-buddy.subs/roasts",-24350802)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43920) : re_frame.core.subscribe.call(null,G__43920));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"my roasts"], null),((cljs.core.empty_QMARK_(cljs.core.deref(roasts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"nothing yet!"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43921){
var map__43922 = p__43921;
var map__43922__$1 = (((((!((map__43922 == null))))?(((((map__43922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43922):map__43922);
var roast = map__43922__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-roast","load-roast",205604709),roast], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43924) : re_frame.core.dispatch.call(null,G__43924));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),name], null)], null);
}),cljs.core.deref(roasts))], null))], null);
});
chrisblatchley.roast_buddy.views.data_rows = (function chrisblatchley$roast_buddy$views$data_rows(p__43925){
var map__43926 = p__43925;
var map__43926__$1 = (((((!((map__43926 == null))))?(((((map__43926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43926):map__43926);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43926__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"temp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"RoR"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43928){
var map__43929 = p__43928;
var map__43929__$1 = (((((!((map__43929 == null))))?(((((map__43929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43929):map__43929);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43929__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43929__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
var ror = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43929__$1,new cljs.core.Keyword(null,"ror","ror",-1486355300));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),temp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),ror], null)], null);
}),data)], null)], null);
});
chrisblatchley.roast_buddy.views.temperature_component = (function chrisblatchley$roast_buddy$views$temperature_component(){
var temperature = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43931_SHARP_){
return cljs.core.reset_BANG_(temperature,p1__43931_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-temp","record-temp",1928739344),cljs.core.deref(temperature)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43932) : re_frame.core.dispatch.call(null,G__43932));
})], null),"record temp"], null)], null);
});
chrisblatchley.roast_buddy.views.current_roast = (function chrisblatchley$roast_buddy$views$current_roast(){
var roast = (function (){var G__43934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chrisblatchley.roast-buddy.subs","current-roast","chrisblatchley.roast-buddy.subs/current-roast",109373086)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43934) : re_frame.core.subscribe.call(null,G__43934));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"current roast: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43933_SHARP_){
var G__43935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-name","update-name",2109423264),p1__43933_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43935) : re_frame.core.dispatch.call(null,G__43935));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(roast))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(function (){var G__43936 = chrisblatchley.roast_buddy.roasts.status(cljs.core.deref(roast));
var G__43936__$1 = (((G__43936 instanceof cljs.core.Keyword))?G__43936.fqn:null);
switch (G__43936__$1) {
case "ready":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-roast","start-roast",1965974992),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(roast))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43937) : re_frame.core.dispatch.call(null,G__43937));
})], null),"start"], null);

break;
case "started":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finish-roast","finish-roast",1793848793),new cljs.core.Keyword(null,"done","done",-889844188)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43938) : re_frame.core.dispatch.call(null,G__43938));
})], null),"stop"], null);

break;
case "finished":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__43939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-roast","new-roast",1712214877),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43939) : re_frame.core.dispatch.call(null,G__43939));
})], null),"new"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43936__$1)].join('')));

}
})()], null),chrisblatchley.roast_buddy.views.data_rows(cljs.core.deref(roast)),chrisblatchley.roast_buddy.views.temperature_component()], null);
});
chrisblatchley.roast_buddy.views.main_panel = (function chrisblatchley$roast_buddy$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Roast-buddy!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),chrisblatchley.roast_buddy.views.past_roasts(),chrisblatchley.roast_buddy.views.current_roast()], null)], null);
});

//# sourceMappingURL=chrisblatchley.roast_buddy.views.js.map
