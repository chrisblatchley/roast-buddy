goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49203 = coll;
var G__49204 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49203,G__49204) : shadow.dom.lazy_native_coll_seq.call(null,G__49203,G__49204));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49229 = arguments.length;
switch (G__49229) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49235 = arguments.length;
switch (G__49235) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49244 = arguments.length;
switch (G__49244) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49250 = arguments.length;
switch (G__49250) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49257 = arguments.length;
switch (G__49257) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49265 = arguments.length;
switch (G__49265) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49273){if((e49273 instanceof Object)){
var e = e49273;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49273;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49278 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49279 = null;
var count__49280 = (0);
var i__49281 = (0);
while(true){
if((i__49281 < count__49280)){
var el = chunk__49279.cljs$core$IIndexed$_nth$arity$2(null,i__49281);
var handler_49924__$1 = ((function (seq__49278,chunk__49279,count__49280,i__49281,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49278,chunk__49279,count__49280,i__49281,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49924__$1);


var G__49926 = seq__49278;
var G__49927 = chunk__49279;
var G__49928 = count__49280;
var G__49929 = (i__49281 + (1));
seq__49278 = G__49926;
chunk__49279 = G__49927;
count__49280 = G__49928;
i__49281 = G__49929;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49278);
if(temp__5735__auto__){
var seq__49278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49278__$1);
var G__49931 = cljs.core.chunk_rest(seq__49278__$1);
var G__49932 = c__4609__auto__;
var G__49933 = cljs.core.count(c__4609__auto__);
var G__49934 = (0);
seq__49278 = G__49931;
chunk__49279 = G__49932;
count__49280 = G__49933;
i__49281 = G__49934;
continue;
} else {
var el = cljs.core.first(seq__49278__$1);
var handler_49936__$1 = ((function (seq__49278,chunk__49279,count__49280,i__49281,el,seq__49278__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49278,chunk__49279,count__49280,i__49281,el,seq__49278__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49936__$1);


var G__49938 = cljs.core.next(seq__49278__$1);
var G__49939 = null;
var G__49940 = (0);
var G__49941 = (0);
seq__49278 = G__49938;
chunk__49279 = G__49939;
count__49280 = G__49940;
i__49281 = G__49941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49294 = arguments.length;
switch (G__49294) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49306 = cljs.core.seq(events);
var chunk__49307 = null;
var count__49308 = (0);
var i__49309 = (0);
while(true){
if((i__49309 < count__49308)){
var vec__49321 = chunk__49307.cljs$core$IIndexed$_nth$arity$2(null,i__49309);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49950 = seq__49306;
var G__49951 = chunk__49307;
var G__49952 = count__49308;
var G__49953 = (i__49309 + (1));
seq__49306 = G__49950;
chunk__49307 = G__49951;
count__49308 = G__49952;
i__49309 = G__49953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49306);
if(temp__5735__auto__){
var seq__49306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49306__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49306__$1);
var G__49955 = cljs.core.chunk_rest(seq__49306__$1);
var G__49956 = c__4609__auto__;
var G__49957 = cljs.core.count(c__4609__auto__);
var G__49958 = (0);
seq__49306 = G__49955;
chunk__49307 = G__49956;
count__49308 = G__49957;
i__49309 = G__49958;
continue;
} else {
var vec__49325 = cljs.core.first(seq__49306__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49325,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49961 = cljs.core.next(seq__49306__$1);
var G__49962 = null;
var G__49963 = (0);
var G__49964 = (0);
seq__49306 = G__49961;
chunk__49307 = G__49962;
count__49308 = G__49963;
i__49309 = G__49964;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49328 = cljs.core.seq(styles);
var chunk__49329 = null;
var count__49330 = (0);
var i__49331 = (0);
while(true){
if((i__49331 < count__49330)){
var vec__49340 = chunk__49329.cljs$core$IIndexed$_nth$arity$2(null,i__49331);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49340,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49966 = seq__49328;
var G__49967 = chunk__49329;
var G__49968 = count__49330;
var G__49969 = (i__49331 + (1));
seq__49328 = G__49966;
chunk__49329 = G__49967;
count__49330 = G__49968;
i__49331 = G__49969;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49328);
if(temp__5735__auto__){
var seq__49328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49328__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49328__$1);
var G__49971 = cljs.core.chunk_rest(seq__49328__$1);
var G__49972 = c__4609__auto__;
var G__49973 = cljs.core.count(c__4609__auto__);
var G__49974 = (0);
seq__49328 = G__49971;
chunk__49329 = G__49972;
count__49330 = G__49973;
i__49331 = G__49974;
continue;
} else {
var vec__49345 = cljs.core.first(seq__49328__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49977 = cljs.core.next(seq__49328__$1);
var G__49978 = null;
var G__49979 = (0);
var G__49980 = (0);
seq__49328 = G__49977;
chunk__49329 = G__49978;
count__49330 = G__49979;
i__49331 = G__49980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49352_49981 = key;
var G__49352_49982__$1 = (((G__49352_49981 instanceof cljs.core.Keyword))?G__49352_49981.fqn:null);
switch (G__49352_49982__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49992 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_49992,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_49992,"aria-");
}
})())){
el.setAttribute(ks_49992,value);
} else {
(el[ks_49992] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49374){
var map__49375 = p__49374;
var map__49375__$1 = (((((!((map__49375 == null))))?(((((map__49375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49375):map__49375);
var props = map__49375__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49380 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49380,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49380,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49380,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49383 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49383,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49383;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49385 = arguments.length;
switch (G__49385) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49391){
var vec__49392 = p__49391;
var seq__49393 = cljs.core.seq(vec__49392);
var first__49394 = cljs.core.first(seq__49393);
var seq__49393__$1 = cljs.core.next(seq__49393);
var nn = first__49394;
var first__49394__$1 = cljs.core.first(seq__49393__$1);
var seq__49393__$2 = cljs.core.next(seq__49393__$1);
var np = first__49394__$1;
var nc = seq__49393__$2;
var node = vec__49392;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49396 = nn;
var G__49397 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49396,G__49397) : create_fn.call(null,G__49396,G__49397));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49399 = nn;
var G__49400 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49399,G__49400) : create_fn.call(null,G__49399,G__49400));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49404 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(1),null);
var seq__49409_50029 = cljs.core.seq(node_children);
var chunk__49410_50030 = null;
var count__49411_50031 = (0);
var i__49412_50032 = (0);
while(true){
if((i__49412_50032 < count__49411_50031)){
var child_struct_50034 = chunk__49410_50030.cljs$core$IIndexed$_nth$arity$2(null,i__49412_50032);
var children_50035 = shadow.dom.dom_node(child_struct_50034);
if(cljs.core.seq_QMARK_(children_50035)){
var seq__49434_50038 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50035));
var chunk__49436_50039 = null;
var count__49437_50040 = (0);
var i__49438_50041 = (0);
while(true){
if((i__49438_50041 < count__49437_50040)){
var child_50044 = chunk__49436_50039.cljs$core$IIndexed$_nth$arity$2(null,i__49438_50041);
if(cljs.core.truth_(child_50044)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50044);


var G__50046 = seq__49434_50038;
var G__50047 = chunk__49436_50039;
var G__50048 = count__49437_50040;
var G__50049 = (i__49438_50041 + (1));
seq__49434_50038 = G__50046;
chunk__49436_50039 = G__50047;
count__49437_50040 = G__50048;
i__49438_50041 = G__50049;
continue;
} else {
var G__50051 = seq__49434_50038;
var G__50052 = chunk__49436_50039;
var G__50053 = count__49437_50040;
var G__50054 = (i__49438_50041 + (1));
seq__49434_50038 = G__50051;
chunk__49436_50039 = G__50052;
count__49437_50040 = G__50053;
i__49438_50041 = G__50054;
continue;
}
} else {
var temp__5735__auto___50056 = cljs.core.seq(seq__49434_50038);
if(temp__5735__auto___50056){
var seq__49434_50057__$1 = temp__5735__auto___50056;
if(cljs.core.chunked_seq_QMARK_(seq__49434_50057__$1)){
var c__4609__auto___50058 = cljs.core.chunk_first(seq__49434_50057__$1);
var G__50059 = cljs.core.chunk_rest(seq__49434_50057__$1);
var G__50060 = c__4609__auto___50058;
var G__50061 = cljs.core.count(c__4609__auto___50058);
var G__50062 = (0);
seq__49434_50038 = G__50059;
chunk__49436_50039 = G__50060;
count__49437_50040 = G__50061;
i__49438_50041 = G__50062;
continue;
} else {
var child_50063 = cljs.core.first(seq__49434_50057__$1);
if(cljs.core.truth_(child_50063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50063);


var G__50064 = cljs.core.next(seq__49434_50057__$1);
var G__50065 = null;
var G__50066 = (0);
var G__50067 = (0);
seq__49434_50038 = G__50064;
chunk__49436_50039 = G__50065;
count__49437_50040 = G__50066;
i__49438_50041 = G__50067;
continue;
} else {
var G__50069 = cljs.core.next(seq__49434_50057__$1);
var G__50070 = null;
var G__50071 = (0);
var G__50072 = (0);
seq__49434_50038 = G__50069;
chunk__49436_50039 = G__50070;
count__49437_50040 = G__50071;
i__49438_50041 = G__50072;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50035);
}


var G__50073 = seq__49409_50029;
var G__50074 = chunk__49410_50030;
var G__50075 = count__49411_50031;
var G__50076 = (i__49412_50032 + (1));
seq__49409_50029 = G__50073;
chunk__49410_50030 = G__50074;
count__49411_50031 = G__50075;
i__49412_50032 = G__50076;
continue;
} else {
var temp__5735__auto___50080 = cljs.core.seq(seq__49409_50029);
if(temp__5735__auto___50080){
var seq__49409_50081__$1 = temp__5735__auto___50080;
if(cljs.core.chunked_seq_QMARK_(seq__49409_50081__$1)){
var c__4609__auto___50082 = cljs.core.chunk_first(seq__49409_50081__$1);
var G__50083 = cljs.core.chunk_rest(seq__49409_50081__$1);
var G__50084 = c__4609__auto___50082;
var G__50085 = cljs.core.count(c__4609__auto___50082);
var G__50086 = (0);
seq__49409_50029 = G__50083;
chunk__49410_50030 = G__50084;
count__49411_50031 = G__50085;
i__49412_50032 = G__50086;
continue;
} else {
var child_struct_50087 = cljs.core.first(seq__49409_50081__$1);
var children_50088 = shadow.dom.dom_node(child_struct_50087);
if(cljs.core.seq_QMARK_(children_50088)){
var seq__49446_50089 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50088));
var chunk__49448_50090 = null;
var count__49449_50091 = (0);
var i__49450_50092 = (0);
while(true){
if((i__49450_50092 < count__49449_50091)){
var child_50095 = chunk__49448_50090.cljs$core$IIndexed$_nth$arity$2(null,i__49450_50092);
if(cljs.core.truth_(child_50095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50095);


var G__50096 = seq__49446_50089;
var G__50097 = chunk__49448_50090;
var G__50098 = count__49449_50091;
var G__50099 = (i__49450_50092 + (1));
seq__49446_50089 = G__50096;
chunk__49448_50090 = G__50097;
count__49449_50091 = G__50098;
i__49450_50092 = G__50099;
continue;
} else {
var G__50101 = seq__49446_50089;
var G__50102 = chunk__49448_50090;
var G__50103 = count__49449_50091;
var G__50104 = (i__49450_50092 + (1));
seq__49446_50089 = G__50101;
chunk__49448_50090 = G__50102;
count__49449_50091 = G__50103;
i__49450_50092 = G__50104;
continue;
}
} else {
var temp__5735__auto___50105__$1 = cljs.core.seq(seq__49446_50089);
if(temp__5735__auto___50105__$1){
var seq__49446_50110__$1 = temp__5735__auto___50105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49446_50110__$1)){
var c__4609__auto___50112 = cljs.core.chunk_first(seq__49446_50110__$1);
var G__50113 = cljs.core.chunk_rest(seq__49446_50110__$1);
var G__50114 = c__4609__auto___50112;
var G__50115 = cljs.core.count(c__4609__auto___50112);
var G__50116 = (0);
seq__49446_50089 = G__50113;
chunk__49448_50090 = G__50114;
count__49449_50091 = G__50115;
i__49450_50092 = G__50116;
continue;
} else {
var child_50117 = cljs.core.first(seq__49446_50110__$1);
if(cljs.core.truth_(child_50117)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50117);


var G__50118 = cljs.core.next(seq__49446_50110__$1);
var G__50119 = null;
var G__50120 = (0);
var G__50121 = (0);
seq__49446_50089 = G__50118;
chunk__49448_50090 = G__50119;
count__49449_50091 = G__50120;
i__49450_50092 = G__50121;
continue;
} else {
var G__50123 = cljs.core.next(seq__49446_50110__$1);
var G__50124 = null;
var G__50125 = (0);
var G__50126 = (0);
seq__49446_50089 = G__50123;
chunk__49448_50090 = G__50124;
count__49449_50091 = G__50125;
i__49450_50092 = G__50126;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50088);
}


var G__50127 = cljs.core.next(seq__49409_50081__$1);
var G__50128 = null;
var G__50129 = (0);
var G__50130 = (0);
seq__49409_50029 = G__50127;
chunk__49410_50030 = G__50128;
count__49411_50031 = G__50129;
i__49412_50032 = G__50130;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49468 = cljs.core.seq(node);
var chunk__49469 = null;
var count__49470 = (0);
var i__49471 = (0);
while(true){
if((i__49471 < count__49470)){
var n = chunk__49469.cljs$core$IIndexed$_nth$arity$2(null,i__49471);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50135 = seq__49468;
var G__50136 = chunk__49469;
var G__50137 = count__49470;
var G__50138 = (i__49471 + (1));
seq__49468 = G__50135;
chunk__49469 = G__50136;
count__49470 = G__50137;
i__49471 = G__50138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49468);
if(temp__5735__auto__){
var seq__49468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49468__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49468__$1);
var G__50139 = cljs.core.chunk_rest(seq__49468__$1);
var G__50140 = c__4609__auto__;
var G__50141 = cljs.core.count(c__4609__auto__);
var G__50142 = (0);
seq__49468 = G__50139;
chunk__49469 = G__50140;
count__49470 = G__50141;
i__49471 = G__50142;
continue;
} else {
var n = cljs.core.first(seq__49468__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50144 = cljs.core.next(seq__49468__$1);
var G__50145 = null;
var G__50146 = (0);
var G__50147 = (0);
seq__49468 = G__50144;
chunk__49469 = G__50145;
count__49470 = G__50146;
i__49471 = G__50147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49483 = arguments.length;
switch (G__49483) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49489 = arguments.length;
switch (G__49489) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49502 = arguments.length;
switch (G__49502) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50166 = arguments.length;
var i__4790__auto___50167 = (0);
while(true){
if((i__4790__auto___50167 < len__4789__auto___50166)){
args__4795__auto__.push((arguments[i__4790__auto___50167]));

var G__50168 = (i__4790__auto___50167 + (1));
i__4790__auto___50167 = G__50168;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49517_50169 = cljs.core.seq(nodes);
var chunk__49518_50170 = null;
var count__49519_50171 = (0);
var i__49520_50172 = (0);
while(true){
if((i__49520_50172 < count__49519_50171)){
var node_50173 = chunk__49518_50170.cljs$core$IIndexed$_nth$arity$2(null,i__49520_50172);
fragment.appendChild(shadow.dom._to_dom(node_50173));


var G__50174 = seq__49517_50169;
var G__50175 = chunk__49518_50170;
var G__50176 = count__49519_50171;
var G__50177 = (i__49520_50172 + (1));
seq__49517_50169 = G__50174;
chunk__49518_50170 = G__50175;
count__49519_50171 = G__50176;
i__49520_50172 = G__50177;
continue;
} else {
var temp__5735__auto___50178 = cljs.core.seq(seq__49517_50169);
if(temp__5735__auto___50178){
var seq__49517_50180__$1 = temp__5735__auto___50178;
if(cljs.core.chunked_seq_QMARK_(seq__49517_50180__$1)){
var c__4609__auto___50181 = cljs.core.chunk_first(seq__49517_50180__$1);
var G__50182 = cljs.core.chunk_rest(seq__49517_50180__$1);
var G__50183 = c__4609__auto___50181;
var G__50184 = cljs.core.count(c__4609__auto___50181);
var G__50185 = (0);
seq__49517_50169 = G__50182;
chunk__49518_50170 = G__50183;
count__49519_50171 = G__50184;
i__49520_50172 = G__50185;
continue;
} else {
var node_50186 = cljs.core.first(seq__49517_50180__$1);
fragment.appendChild(shadow.dom._to_dom(node_50186));


var G__50187 = cljs.core.next(seq__49517_50180__$1);
var G__50188 = null;
var G__50189 = (0);
var G__50190 = (0);
seq__49517_50169 = G__50187;
chunk__49518_50170 = G__50188;
count__49519_50171 = G__50189;
i__49520_50172 = G__50190;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49515){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49515));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49521_50194 = cljs.core.seq(scripts);
var chunk__49522_50195 = null;
var count__49523_50196 = (0);
var i__49524_50197 = (0);
while(true){
if((i__49524_50197 < count__49523_50196)){
var vec__49534_50198 = chunk__49522_50195.cljs$core$IIndexed$_nth$arity$2(null,i__49524_50197);
var script_tag_50199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49534_50198,(0),null);
var script_body_50200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49534_50198,(1),null);
eval(script_body_50200);


var G__50201 = seq__49521_50194;
var G__50202 = chunk__49522_50195;
var G__50203 = count__49523_50196;
var G__50204 = (i__49524_50197 + (1));
seq__49521_50194 = G__50201;
chunk__49522_50195 = G__50202;
count__49523_50196 = G__50203;
i__49524_50197 = G__50204;
continue;
} else {
var temp__5735__auto___50205 = cljs.core.seq(seq__49521_50194);
if(temp__5735__auto___50205){
var seq__49521_50206__$1 = temp__5735__auto___50205;
if(cljs.core.chunked_seq_QMARK_(seq__49521_50206__$1)){
var c__4609__auto___50208 = cljs.core.chunk_first(seq__49521_50206__$1);
var G__50209 = cljs.core.chunk_rest(seq__49521_50206__$1);
var G__50210 = c__4609__auto___50208;
var G__50211 = cljs.core.count(c__4609__auto___50208);
var G__50212 = (0);
seq__49521_50194 = G__50209;
chunk__49522_50195 = G__50210;
count__49523_50196 = G__50211;
i__49524_50197 = G__50212;
continue;
} else {
var vec__49540_50214 = cljs.core.first(seq__49521_50206__$1);
var script_tag_50215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540_50214,(0),null);
var script_body_50216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540_50214,(1),null);
eval(script_body_50216);


var G__50217 = cljs.core.next(seq__49521_50206__$1);
var G__50218 = null;
var G__50219 = (0);
var G__50220 = (0);
seq__49521_50194 = G__50217;
chunk__49522_50195 = G__50218;
count__49523_50196 = G__50219;
i__49524_50197 = G__50220;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49543){
var vec__49544 = p__49543;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49544,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49544,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49548 = arguments.length;
switch (G__49548) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49555 = cljs.core.seq(style_keys);
var chunk__49556 = null;
var count__49557 = (0);
var i__49558 = (0);
while(true){
if((i__49558 < count__49557)){
var it = chunk__49556.cljs$core$IIndexed$_nth$arity$2(null,i__49558);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50230 = seq__49555;
var G__50231 = chunk__49556;
var G__50232 = count__49557;
var G__50233 = (i__49558 + (1));
seq__49555 = G__50230;
chunk__49556 = G__50231;
count__49557 = G__50232;
i__49558 = G__50233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49555);
if(temp__5735__auto__){
var seq__49555__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49555__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49555__$1);
var G__50235 = cljs.core.chunk_rest(seq__49555__$1);
var G__50236 = c__4609__auto__;
var G__50237 = cljs.core.count(c__4609__auto__);
var G__50238 = (0);
seq__49555 = G__50235;
chunk__49556 = G__50236;
count__49557 = G__50237;
i__49558 = G__50238;
continue;
} else {
var it = cljs.core.first(seq__49555__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50239 = cljs.core.next(seq__49555__$1);
var G__50240 = null;
var G__50241 = (0);
var G__50242 = (0);
seq__49555 = G__50239;
chunk__49556 = G__50240;
count__49557 = G__50241;
i__49558 = G__50242;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k49566,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__49575 = k49566;
var G__49575__$1 = (((G__49575 instanceof cljs.core.Keyword))?G__49575.fqn:null);
switch (G__49575__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49566,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__49578){
var vec__49579 = p__49578;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49565){
var self__ = this;
var G__49565__$1 = this;
return (new cljs.core.RecordIter((0),G__49565__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49567,other49568){
var self__ = this;
var this49567__$1 = this;
return (((!((other49568 == null)))) && ((this49567__$1.constructor === other49568.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49567__$1.x,other49568.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49567__$1.y,other49568.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49567__$1.__extmap,other49568.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__49565){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__49601 = cljs.core.keyword_identical_QMARK_;
var expr__49602 = k__4447__auto__;
if(cljs.core.truth_((pred__49601.cljs$core$IFn$_invoke$arity$2 ? pred__49601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49602) : pred__49601.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49602)))){
return (new shadow.dom.Coordinate(G__49565,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49601.cljs$core$IFn$_invoke$arity$2 ? pred__49601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49602) : pred__49601.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49602)))){
return (new shadow.dom.Coordinate(self__.x,G__49565,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__49565),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__49565){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49565,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49570){
var extmap__4478__auto__ = (function (){var G__49612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49570,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49570)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49612);
} else {
return G__49612;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49570),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49570),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k49618,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__49622 = k49618;
var G__49622__$1 = (((G__49622 instanceof cljs.core.Keyword))?G__49622.fqn:null);
switch (G__49622__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49618,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__49624){
var vec__49625 = p__49624;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49625,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49625,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49617){
var self__ = this;
var G__49617__$1 = this;
return (new cljs.core.RecordIter((0),G__49617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49619,other49620){
var self__ = this;
var this49619__$1 = this;
return (((!((other49620 == null)))) && ((this49619__$1.constructor === other49620.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49619__$1.w,other49620.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49619__$1.h,other49620.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49619__$1.__extmap,other49620.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__49617){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__49630 = cljs.core.keyword_identical_QMARK_;
var expr__49631 = k__4447__auto__;
if(cljs.core.truth_((pred__49630.cljs$core$IFn$_invoke$arity$2 ? pred__49630.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49631) : pred__49630.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49631)))){
return (new shadow.dom.Size(G__49617,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49630.cljs$core$IFn$_invoke$arity$2 ? pred__49630.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49631) : pred__49630.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49631)))){
return (new shadow.dom.Size(self__.w,G__49617,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__49617),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__49617){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49617,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49621){
var extmap__4478__auto__ = (function (){var G__49645 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49621,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49621)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49645);
} else {
return G__49645;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49621),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49621),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__50283 = (i + (1));
var G__50284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50283;
ret = G__50284;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49662){
var vec__49663 = p__49662;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49669 = arguments.length;
switch (G__49669) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50287 = ps;
var G__50288 = (i + (1));
el__$1 = G__50287;
i = G__50288;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49687 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49692_50291 = cljs.core.seq(props);
var chunk__49693_50292 = null;
var count__49694_50293 = (0);
var i__49695_50294 = (0);
while(true){
if((i__49695_50294 < count__49694_50293)){
var vec__49706_50296 = chunk__49693_50292.cljs$core$IIndexed$_nth$arity$2(null,i__49695_50294);
var k_50297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49706_50296,(0),null);
var v_50298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49706_50296,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50297);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50297),v_50298);


var G__50299 = seq__49692_50291;
var G__50300 = chunk__49693_50292;
var G__50301 = count__49694_50293;
var G__50302 = (i__49695_50294 + (1));
seq__49692_50291 = G__50299;
chunk__49693_50292 = G__50300;
count__49694_50293 = G__50301;
i__49695_50294 = G__50302;
continue;
} else {
var temp__5735__auto___50303 = cljs.core.seq(seq__49692_50291);
if(temp__5735__auto___50303){
var seq__49692_50304__$1 = temp__5735__auto___50303;
if(cljs.core.chunked_seq_QMARK_(seq__49692_50304__$1)){
var c__4609__auto___50305 = cljs.core.chunk_first(seq__49692_50304__$1);
var G__50306 = cljs.core.chunk_rest(seq__49692_50304__$1);
var G__50307 = c__4609__auto___50305;
var G__50308 = cljs.core.count(c__4609__auto___50305);
var G__50309 = (0);
seq__49692_50291 = G__50306;
chunk__49693_50292 = G__50307;
count__49694_50293 = G__50308;
i__49695_50294 = G__50309;
continue;
} else {
var vec__49712_50310 = cljs.core.first(seq__49692_50304__$1);
var k_50311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712_50310,(0),null);
var v_50312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712_50310,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50311);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50311),v_50312);


var G__50313 = cljs.core.next(seq__49692_50304__$1);
var G__50314 = null;
var G__50315 = (0);
var G__50316 = (0);
seq__49692_50291 = G__50313;
chunk__49693_50292 = G__50314;
count__49694_50293 = G__50315;
i__49695_50294 = G__50316;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49720 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(1),null);
var seq__49724_50318 = cljs.core.seq(node_children);
var chunk__49726_50319 = null;
var count__49727_50320 = (0);
var i__49728_50321 = (0);
while(true){
if((i__49728_50321 < count__49727_50320)){
var child_struct_50326 = chunk__49726_50319.cljs$core$IIndexed$_nth$arity$2(null,i__49728_50321);
if((!((child_struct_50326 == null)))){
if(typeof child_struct_50326 === 'string'){
var text_50327 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50327),child_struct_50326].join(''));
} else {
var children_50329 = shadow.dom.svg_node(child_struct_50326);
if(cljs.core.seq_QMARK_(children_50329)){
var seq__49757_50330 = cljs.core.seq(children_50329);
var chunk__49759_50331 = null;
var count__49760_50332 = (0);
var i__49761_50333 = (0);
while(true){
if((i__49761_50333 < count__49760_50332)){
var child_50334 = chunk__49759_50331.cljs$core$IIndexed$_nth$arity$2(null,i__49761_50333);
if(cljs.core.truth_(child_50334)){
node.appendChild(child_50334);


var G__50335 = seq__49757_50330;
var G__50336 = chunk__49759_50331;
var G__50337 = count__49760_50332;
var G__50338 = (i__49761_50333 + (1));
seq__49757_50330 = G__50335;
chunk__49759_50331 = G__50336;
count__49760_50332 = G__50337;
i__49761_50333 = G__50338;
continue;
} else {
var G__50339 = seq__49757_50330;
var G__50340 = chunk__49759_50331;
var G__50341 = count__49760_50332;
var G__50342 = (i__49761_50333 + (1));
seq__49757_50330 = G__50339;
chunk__49759_50331 = G__50340;
count__49760_50332 = G__50341;
i__49761_50333 = G__50342;
continue;
}
} else {
var temp__5735__auto___50343 = cljs.core.seq(seq__49757_50330);
if(temp__5735__auto___50343){
var seq__49757_50344__$1 = temp__5735__auto___50343;
if(cljs.core.chunked_seq_QMARK_(seq__49757_50344__$1)){
var c__4609__auto___50345 = cljs.core.chunk_first(seq__49757_50344__$1);
var G__50346 = cljs.core.chunk_rest(seq__49757_50344__$1);
var G__50347 = c__4609__auto___50345;
var G__50348 = cljs.core.count(c__4609__auto___50345);
var G__50349 = (0);
seq__49757_50330 = G__50346;
chunk__49759_50331 = G__50347;
count__49760_50332 = G__50348;
i__49761_50333 = G__50349;
continue;
} else {
var child_50350 = cljs.core.first(seq__49757_50344__$1);
if(cljs.core.truth_(child_50350)){
node.appendChild(child_50350);


var G__50351 = cljs.core.next(seq__49757_50344__$1);
var G__50352 = null;
var G__50353 = (0);
var G__50354 = (0);
seq__49757_50330 = G__50351;
chunk__49759_50331 = G__50352;
count__49760_50332 = G__50353;
i__49761_50333 = G__50354;
continue;
} else {
var G__50355 = cljs.core.next(seq__49757_50344__$1);
var G__50356 = null;
var G__50357 = (0);
var G__50358 = (0);
seq__49757_50330 = G__50355;
chunk__49759_50331 = G__50356;
count__49760_50332 = G__50357;
i__49761_50333 = G__50358;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50329);
}
}


var G__50359 = seq__49724_50318;
var G__50360 = chunk__49726_50319;
var G__50361 = count__49727_50320;
var G__50362 = (i__49728_50321 + (1));
seq__49724_50318 = G__50359;
chunk__49726_50319 = G__50360;
count__49727_50320 = G__50361;
i__49728_50321 = G__50362;
continue;
} else {
var G__50363 = seq__49724_50318;
var G__50364 = chunk__49726_50319;
var G__50365 = count__49727_50320;
var G__50366 = (i__49728_50321 + (1));
seq__49724_50318 = G__50363;
chunk__49726_50319 = G__50364;
count__49727_50320 = G__50365;
i__49728_50321 = G__50366;
continue;
}
} else {
var temp__5735__auto___50368 = cljs.core.seq(seq__49724_50318);
if(temp__5735__auto___50368){
var seq__49724_50369__$1 = temp__5735__auto___50368;
if(cljs.core.chunked_seq_QMARK_(seq__49724_50369__$1)){
var c__4609__auto___50370 = cljs.core.chunk_first(seq__49724_50369__$1);
var G__50371 = cljs.core.chunk_rest(seq__49724_50369__$1);
var G__50372 = c__4609__auto___50370;
var G__50373 = cljs.core.count(c__4609__auto___50370);
var G__50374 = (0);
seq__49724_50318 = G__50371;
chunk__49726_50319 = G__50372;
count__49727_50320 = G__50373;
i__49728_50321 = G__50374;
continue;
} else {
var child_struct_50375 = cljs.core.first(seq__49724_50369__$1);
if((!((child_struct_50375 == null)))){
if(typeof child_struct_50375 === 'string'){
var text_50376 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50376),child_struct_50375].join(''));
} else {
var children_50377 = shadow.dom.svg_node(child_struct_50375);
if(cljs.core.seq_QMARK_(children_50377)){
var seq__49776_50378 = cljs.core.seq(children_50377);
var chunk__49778_50379 = null;
var count__49779_50380 = (0);
var i__49780_50381 = (0);
while(true){
if((i__49780_50381 < count__49779_50380)){
var child_50382 = chunk__49778_50379.cljs$core$IIndexed$_nth$arity$2(null,i__49780_50381);
if(cljs.core.truth_(child_50382)){
node.appendChild(child_50382);


var G__50384 = seq__49776_50378;
var G__50385 = chunk__49778_50379;
var G__50386 = count__49779_50380;
var G__50387 = (i__49780_50381 + (1));
seq__49776_50378 = G__50384;
chunk__49778_50379 = G__50385;
count__49779_50380 = G__50386;
i__49780_50381 = G__50387;
continue;
} else {
var G__50391 = seq__49776_50378;
var G__50392 = chunk__49778_50379;
var G__50393 = count__49779_50380;
var G__50394 = (i__49780_50381 + (1));
seq__49776_50378 = G__50391;
chunk__49778_50379 = G__50392;
count__49779_50380 = G__50393;
i__49780_50381 = G__50394;
continue;
}
} else {
var temp__5735__auto___50395__$1 = cljs.core.seq(seq__49776_50378);
if(temp__5735__auto___50395__$1){
var seq__49776_50396__$1 = temp__5735__auto___50395__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49776_50396__$1)){
var c__4609__auto___50397 = cljs.core.chunk_first(seq__49776_50396__$1);
var G__50398 = cljs.core.chunk_rest(seq__49776_50396__$1);
var G__50399 = c__4609__auto___50397;
var G__50400 = cljs.core.count(c__4609__auto___50397);
var G__50401 = (0);
seq__49776_50378 = G__50398;
chunk__49778_50379 = G__50399;
count__49779_50380 = G__50400;
i__49780_50381 = G__50401;
continue;
} else {
var child_50402 = cljs.core.first(seq__49776_50396__$1);
if(cljs.core.truth_(child_50402)){
node.appendChild(child_50402);


var G__50403 = cljs.core.next(seq__49776_50396__$1);
var G__50404 = null;
var G__50405 = (0);
var G__50406 = (0);
seq__49776_50378 = G__50403;
chunk__49778_50379 = G__50404;
count__49779_50380 = G__50405;
i__49780_50381 = G__50406;
continue;
} else {
var G__50407 = cljs.core.next(seq__49776_50396__$1);
var G__50408 = null;
var G__50409 = (0);
var G__50410 = (0);
seq__49776_50378 = G__50407;
chunk__49778_50379 = G__50408;
count__49779_50380 = G__50409;
i__49780_50381 = G__50410;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50377);
}
}


var G__50411 = cljs.core.next(seq__49724_50369__$1);
var G__50412 = null;
var G__50413 = (0);
var G__50414 = (0);
seq__49724_50318 = G__50411;
chunk__49726_50319 = G__50412;
count__49727_50320 = G__50413;
i__49728_50321 = G__50414;
continue;
} else {
var G__50415 = cljs.core.next(seq__49724_50369__$1);
var G__50416 = null;
var G__50417 = (0);
var G__50418 = (0);
seq__49724_50318 = G__50415;
chunk__49726_50319 = G__50416;
count__49727_50320 = G__50417;
i__49728_50321 = G__50418;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50419 = arguments.length;
var i__4790__auto___50420 = (0);
while(true){
if((i__4790__auto___50420 < len__4789__auto___50419)){
args__4795__auto__.push((arguments[i__4790__auto___50420]));

var G__50421 = (i__4790__auto___50420 + (1));
i__4790__auto___50420 = G__50421;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49807){
var G__49808 = cljs.core.first(seq49807);
var seq49807__$1 = cljs.core.next(seq49807);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49808,seq49807__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49823 = arguments.length;
switch (G__49823) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__47572__auto___50423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_49841){
var state_val_49842 = (state_49841[(1)]);
if((state_val_49842 === (1))){
var state_49841__$1 = state_49841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49841__$1,(2),once_or_cleanup);
} else {
if((state_val_49842 === (2))){
var inst_49838 = (state_49841[(2)]);
var inst_49839 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49841__$1 = (function (){var statearr_49846 = state_49841;
(statearr_49846[(7)] = inst_49838);

return statearr_49846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49841__$1,inst_49839);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47537__auto__ = null;
var shadow$dom$state_machine__47537__auto____0 = (function (){
var statearr_49851 = [null,null,null,null,null,null,null,null];
(statearr_49851[(0)] = shadow$dom$state_machine__47537__auto__);

(statearr_49851[(1)] = (1));

return statearr_49851;
});
var shadow$dom$state_machine__47537__auto____1 = (function (state_49841){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_49841);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e49852){var ex__47540__auto__ = e49852;
var statearr_49853_50424 = state_49841;
(statearr_49853_50424[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_49841[(4)]))){
var statearr_49855_50425 = state_49841;
(statearr_49855_50425[(1)] = cljs.core.first((state_49841[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50426 = state_49841;
state_49841 = G__50426;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
shadow$dom$state_machine__47537__auto__ = function(state_49841){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47537__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47537__auto____1.call(this,state_49841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47537__auto____0;
shadow$dom$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47537__auto____1;
return shadow$dom$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_49860 = f__47573__auto__();
(statearr_49860[(6)] = c__47572__auto___50423);

return statearr_49860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
