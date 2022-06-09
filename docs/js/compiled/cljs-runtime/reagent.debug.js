goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49897__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49898__i = 0, G__49898__a = new Array(arguments.length -  0);
while (G__49898__i < G__49898__a.length) {G__49898__a[G__49898__i] = arguments[G__49898__i + 0]; ++G__49898__i;}
  args = new cljs.core.IndexedSeq(G__49898__a,0,null);
} 
return G__49897__delegate.call(this,args);};
G__49897.cljs$lang$maxFixedArity = 0;
G__49897.cljs$lang$applyTo = (function (arglist__49899){
var args = cljs.core.seq(arglist__49899);
return G__49897__delegate(args);
});
G__49897.cljs$core$IFn$_invoke$arity$variadic = G__49897__delegate;
return G__49897;
})()
);

(o.error = (function() { 
var G__49902__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49903__i = 0, G__49903__a = new Array(arguments.length -  0);
while (G__49903__i < G__49903__a.length) {G__49903__a[G__49903__i] = arguments[G__49903__i + 0]; ++G__49903__i;}
  args = new cljs.core.IndexedSeq(G__49903__a,0,null);
} 
return G__49902__delegate.call(this,args);};
G__49902.cljs$lang$maxFixedArity = 0;
G__49902.cljs$lang$applyTo = (function (arglist__49904){
var args = cljs.core.seq(arglist__49904);
return G__49902__delegate(args);
});
G__49902.cljs$core$IFn$_invoke$arity$variadic = G__49902__delegate;
return G__49902;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
