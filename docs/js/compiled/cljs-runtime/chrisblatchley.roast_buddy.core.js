goog.provide('chrisblatchley.roast_buddy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('chrisblatchley.roast_buddy.events');
goog.require('chrisblatchley.roast_buddy.views');
goog.require('chrisblatchley.roast_buddy.config');
chrisblatchley.roast_buddy.core.dev_setup = (function chrisblatchley$roast_buddy$core$dev_setup(){
if(chrisblatchley.roast_buddy.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
chrisblatchley.roast_buddy.core.mount_root = (function chrisblatchley$roast_buddy$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chrisblatchley.roast_buddy.views.main_panel], null),document.getElementById("app"));
});
chrisblatchley.roast_buddy.core.init = (function chrisblatchley$roast_buddy$core$init(){
var G__43940_43941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chrisblatchley.roast-buddy.events","initialize-db","chrisblatchley.roast-buddy.events/initialize-db",-1408916336)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43940_43941) : re_frame.core.dispatch_sync.call(null,G__43940_43941));

chrisblatchley.roast_buddy.core.dev_setup();

return chrisblatchley.roast_buddy.core.mount_root();
});

//# sourceMappingURL=chrisblatchley.roast_buddy.core.js.map
