goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52694 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52695 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52695);

try{try{var seq__52696 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52697 = null;
var count__52698 = (0);
var i__52699 = (0);
while(true){
if((i__52699 < count__52698)){
var vec__52706 = chunk__52697.cljs$core$IIndexed$_nth$arity$2(null,i__52699);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(1),null);
var temp__5733__auto___52765 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52765)){
var effect_fn_52766 = temp__5733__auto___52765;
(effect_fn_52766.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52766.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52766.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52767 = seq__52696;
var G__52768 = chunk__52697;
var G__52769 = count__52698;
var G__52770 = (i__52699 + (1));
seq__52696 = G__52767;
chunk__52697 = G__52768;
count__52698 = G__52769;
i__52699 = G__52770;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52696);
if(temp__5735__auto__){
var seq__52696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52696__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52696__$1);
var G__52771 = cljs.core.chunk_rest(seq__52696__$1);
var G__52772 = c__4609__auto__;
var G__52773 = cljs.core.count(c__4609__auto__);
var G__52774 = (0);
seq__52696 = G__52771;
chunk__52697 = G__52772;
count__52698 = G__52773;
i__52699 = G__52774;
continue;
} else {
var vec__52709 = cljs.core.first(seq__52696__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52709,(1),null);
var temp__5733__auto___52775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52775)){
var effect_fn_52776 = temp__5733__auto___52775;
(effect_fn_52776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52777 = cljs.core.next(seq__52696__$1);
var G__52778 = null;
var G__52779 = (0);
var G__52780 = (0);
seq__52696 = G__52777;
chunk__52697 = G__52778;
count__52698 = G__52779;
i__52699 = G__52780;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52385__auto___52781 = re_frame.interop.now();
var duration__52386__auto___52782 = (end__52385__auto___52781 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52386__auto___52782,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52385__auto___52781);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52694);
}} else {
var seq__52713 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52714 = null;
var count__52715 = (0);
var i__52716 = (0);
while(true){
if((i__52716 < count__52715)){
var vec__52723 = chunk__52714.cljs$core$IIndexed$_nth$arity$2(null,i__52716);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52723,(1),null);
var temp__5733__auto___52783 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52783)){
var effect_fn_52784 = temp__5733__auto___52783;
(effect_fn_52784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52784.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52785 = seq__52713;
var G__52786 = chunk__52714;
var G__52787 = count__52715;
var G__52788 = (i__52716 + (1));
seq__52713 = G__52785;
chunk__52714 = G__52786;
count__52715 = G__52787;
i__52716 = G__52788;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52713);
if(temp__5735__auto__){
var seq__52713__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52713__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52713__$1);
var G__52790 = cljs.core.chunk_rest(seq__52713__$1);
var G__52791 = c__4609__auto__;
var G__52792 = cljs.core.count(c__4609__auto__);
var G__52793 = (0);
seq__52713 = G__52790;
chunk__52714 = G__52791;
count__52715 = G__52792;
i__52716 = G__52793;
continue;
} else {
var vec__52726 = cljs.core.first(seq__52713__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52726,(1),null);
var temp__5733__auto___52795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52795)){
var effect_fn_52796 = temp__5733__auto___52795;
(effect_fn_52796.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52796.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52796.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52797 = cljs.core.next(seq__52713__$1);
var G__52798 = null;
var G__52799 = (0);
var G__52800 = (0);
seq__52713 = G__52797;
chunk__52714 = G__52798;
count__52715 = G__52799;
i__52716 = G__52800;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52730 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52731 = null;
var count__52732 = (0);
var i__52733 = (0);
while(true){
if((i__52733 < count__52732)){
var map__52740 = chunk__52731.cljs$core$IIndexed$_nth$arity$2(null,i__52733);
var map__52740__$1 = (((((!((map__52740 == null))))?(((((map__52740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52740):map__52740);
var effect = map__52740__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52740__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52740__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52730,chunk__52731,count__52732,i__52733,map__52740,map__52740__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52730,chunk__52731,count__52732,i__52733,map__52740,map__52740__$1,effect,ms,dispatch))
,ms);
}


var G__52801 = seq__52730;
var G__52802 = chunk__52731;
var G__52803 = count__52732;
var G__52804 = (i__52733 + (1));
seq__52730 = G__52801;
chunk__52731 = G__52802;
count__52732 = G__52803;
i__52733 = G__52804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52730);
if(temp__5735__auto__){
var seq__52730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52730__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52730__$1);
var G__52805 = cljs.core.chunk_rest(seq__52730__$1);
var G__52806 = c__4609__auto__;
var G__52807 = cljs.core.count(c__4609__auto__);
var G__52808 = (0);
seq__52730 = G__52805;
chunk__52731 = G__52806;
count__52732 = G__52807;
i__52733 = G__52808;
continue;
} else {
var map__52743 = cljs.core.first(seq__52730__$1);
var map__52743__$1 = (((((!((map__52743 == null))))?(((((map__52743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52743):map__52743);
var effect = map__52743__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52743__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52743__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52730,chunk__52731,count__52732,i__52733,map__52743,map__52743__$1,effect,ms,dispatch,seq__52730__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52730,chunk__52731,count__52732,i__52733,map__52743,map__52743__$1,effect,ms,dispatch,seq__52730__$1,temp__5735__auto__))
,ms);
}


var G__52811 = cljs.core.next(seq__52730__$1);
var G__52812 = null;
var G__52813 = (0);
var G__52814 = (0);
seq__52730 = G__52811;
chunk__52731 = G__52812;
count__52732 = G__52813;
i__52733 = G__52814;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52745 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52746 = null;
var count__52747 = (0);
var i__52748 = (0);
while(true){
if((i__52748 < count__52747)){
var event = chunk__52746.cljs$core$IIndexed$_nth$arity$2(null,i__52748);
re_frame.router.dispatch(event);


var G__52817 = seq__52745;
var G__52818 = chunk__52746;
var G__52819 = count__52747;
var G__52820 = (i__52748 + (1));
seq__52745 = G__52817;
chunk__52746 = G__52818;
count__52747 = G__52819;
i__52748 = G__52820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52745);
if(temp__5735__auto__){
var seq__52745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52745__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52745__$1);
var G__52821 = cljs.core.chunk_rest(seq__52745__$1);
var G__52822 = c__4609__auto__;
var G__52823 = cljs.core.count(c__4609__auto__);
var G__52824 = (0);
seq__52745 = G__52821;
chunk__52746 = G__52822;
count__52747 = G__52823;
i__52748 = G__52824;
continue;
} else {
var event = cljs.core.first(seq__52745__$1);
re_frame.router.dispatch(event);


var G__52825 = cljs.core.next(seq__52745__$1);
var G__52826 = null;
var G__52827 = (0);
var G__52828 = (0);
seq__52745 = G__52825;
chunk__52746 = G__52826;
count__52747 = G__52827;
i__52748 = G__52828;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52761 = cljs.core.seq(value);
var chunk__52762 = null;
var count__52763 = (0);
var i__52764 = (0);
while(true){
if((i__52764 < count__52763)){
var event = chunk__52762.cljs$core$IIndexed$_nth$arity$2(null,i__52764);
clear_event(event);


var G__52829 = seq__52761;
var G__52830 = chunk__52762;
var G__52831 = count__52763;
var G__52832 = (i__52764 + (1));
seq__52761 = G__52829;
chunk__52762 = G__52830;
count__52763 = G__52831;
i__52764 = G__52832;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52761);
if(temp__5735__auto__){
var seq__52761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52761__$1);
var G__52833 = cljs.core.chunk_rest(seq__52761__$1);
var G__52834 = c__4609__auto__;
var G__52835 = cljs.core.count(c__4609__auto__);
var G__52836 = (0);
seq__52761 = G__52833;
chunk__52762 = G__52834;
count__52763 = G__52835;
i__52764 = G__52836;
continue;
} else {
var event = cljs.core.first(seq__52761__$1);
clear_event(event);


var G__52837 = cljs.core.next(seq__52761__$1);
var G__52838 = null;
var G__52839 = (0);
var G__52840 = (0);
seq__52761 = G__52837;
chunk__52762 = G__52838;
count__52763 = G__52839;
i__52764 = G__52840;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
