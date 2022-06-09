goog.provide('chrisblatchley.roast_buddy.roasts');
goog.require('cljs.core');
chrisblatchley.roast_buddy.roasts.create_roast = (function chrisblatchley$roast_buddy$roasts$create_roast(name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"started-at","started-at",1318767912),(new Date())], null);
});
chrisblatchley.roast_buddy.roasts.record_temp = (function chrisblatchley$roast_buddy$roasts$record_temp(roast,current_temp){
var map__43740 = cljs.core.last(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(roast));
var map__43740__$1 = (((((!((map__43740 == null))))?(((((map__43740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43740):map__43740);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43740__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43740__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
var now = Date.now();
var d_time = ((now - time) / (1000));
var d_temp = (current_temp - temp);
var ror = (d_temp / d_time);
var seconds_elapsed = (((now - new cljs.core.Keyword(null,"started-at","started-at",1318767912).cljs$core$IFn$_invoke$arity$1(roast)) / (1000)) | (0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(roast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),seconds_elapsed,new cljs.core.Keyword(null,"temp","temp",1791541284),current_temp,new cljs.core.Keyword(null,"ror","ror",-1486355300),ror], null));
});
chrisblatchley.roast_buddy.roasts.roasting_QMARK_ = (function chrisblatchley$roast_buddy$roasts$roasting_QMARK_(roast){
return (((!((new cljs.core.Keyword(null,"started-at","started-at",1318767912).cljs$core$IFn$_invoke$arity$1(roast) == null)))) && ((new cljs.core.Keyword(null,"finished-at","finished-at",560511419).cljs$core$IFn$_invoke$arity$1(roast) == null)));
});
chrisblatchley.roast_buddy.roasts.status = (function chrisblatchley$roast_buddy$roasts$status(roast){
if((!((new cljs.core.Keyword(null,"finished-at","finished-at",560511419).cljs$core$IFn$_invoke$arity$1(roast) == null)))){
return new cljs.core.Keyword(null,"finished","finished",-1018867731);
} else {
if((!((new cljs.core.Keyword(null,"started-at","started-at",1318767912).cljs$core$IFn$_invoke$arity$1(roast) == null)))){
return new cljs.core.Keyword(null,"started","started",585705024);
} else {
return new cljs.core.Keyword(null,"ready","ready",1086465795);

}
}
});
chrisblatchley.roast_buddy.roasts.finish_roast = (function chrisblatchley$roast_buddy$roasts$finish_roast(roast){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(roast,new cljs.core.Keyword(null,"finished-at","finished-at",560511419),(new Date()));
});

//# sourceMappingURL=chrisblatchley.roast_buddy.roasts.js.map
