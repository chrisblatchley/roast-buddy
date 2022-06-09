goog.provide('chrisblatchley.roast_buddy.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('chrisblatchley.roast_buddy.db');
goog.require('chrisblatchley.roast_buddy.roasts');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chrisblatchley.roast-buddy.events","initialize-db","chrisblatchley.roast-buddy.events/initialize-db",-1408916336),(function (_,___$1){
return chrisblatchley.roast_buddy.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-roast","new-roast",1712214877),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-roast","current-roast",773183144),chrisblatchley.roast_buddy.roasts.create_roast("default"));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-roast","load-roast",205604709),(function (db,p__43745){
var vec__43747 = p__43745;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43747,(0),null);
var roast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43747,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-roast","current-roast",773183144),roast);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-roast","start-roast",1965974992),(function (db,p__43751){
var vec__43752 = p__43751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43752,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43752,(1),null);
var new_roast = chrisblatchley.roast_buddy.roasts.create_roast(name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-roast","current-roast",773183144),new_roast);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-name","update-name",2109423264),(function (db,p__43757){
var vec__43759 = p__43757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43759,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43759,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-roast","current-roast",773183144),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"record-temp","record-temp",1928739344),(function (db,p__43763){
var vec__43765 = p__43763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43765,(0),null);
var temp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43765,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-roast","current-roast",773183144)], null),(function (p1__43762_SHARP_){
return chrisblatchley.roast_buddy.roasts.record_temp(p1__43762_SHARP_,temp);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"finish-roast","finish-roast",1793848793),(function (db,p__43770){
var vec__43772 = p__43770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(1),null);
var finished_roast = chrisblatchley.roast_buddy.roasts.finish_roast(new cljs.core.Keyword(null,"current-roast","current-roast",773183144).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roasts","roasts",1696292796)], null),cljs.core.conj,finished_roast),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-roast","current-roast",773183144)], null),finished_roast);
}));

//# sourceMappingURL=chrisblatchley.roast_buddy.events.js.map
