goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51588 = arguments.length;
var i__4790__auto___51589 = (0);
while(true){
if((i__4790__auto___51589 < len__4789__auto___51588)){
args__4795__auto__.push((arguments[i__4790__auto___51589]));

var G__51590 = (i__4790__auto___51589 + (1));
i__4790__auto___51589 = G__51590;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51318){
var G__51320 = cljs.core.first(seq51318);
var seq51318__$1 = cljs.core.next(seq51318);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51320,seq51318__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51333 = cljs.core.seq(sources);
var chunk__51334 = null;
var count__51335 = (0);
var i__51336 = (0);
while(true){
if((i__51336 < count__51335)){
var map__51347 = chunk__51334.cljs$core$IIndexed$_nth$arity$2(null,i__51336);
var map__51347__$1 = (((((!((map__51347 == null))))?(((((map__51347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51347):map__51347);
var src = map__51347__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51349){var e_51595 = e51349;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51595);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51595.message)].join('')));
}

var G__51596 = seq__51333;
var G__51597 = chunk__51334;
var G__51598 = count__51335;
var G__51599 = (i__51336 + (1));
seq__51333 = G__51596;
chunk__51334 = G__51597;
count__51335 = G__51598;
i__51336 = G__51599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51333);
if(temp__5735__auto__){
var seq__51333__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51333__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51333__$1);
var G__51600 = cljs.core.chunk_rest(seq__51333__$1);
var G__51601 = c__4609__auto__;
var G__51602 = cljs.core.count(c__4609__auto__);
var G__51603 = (0);
seq__51333 = G__51600;
chunk__51334 = G__51601;
count__51335 = G__51602;
i__51336 = G__51603;
continue;
} else {
var map__51352 = cljs.core.first(seq__51333__$1);
var map__51352__$1 = (((((!((map__51352 == null))))?(((((map__51352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51352):map__51352);
var src = map__51352__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51355){var e_51604 = e51355;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51604);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51604.message)].join('')));
}

var G__51605 = cljs.core.next(seq__51333__$1);
var G__51606 = null;
var G__51607 = (0);
var G__51608 = (0);
seq__51333 = G__51605;
chunk__51334 = G__51606;
count__51335 = G__51607;
i__51336 = G__51608;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51359 = cljs.core.seq(js_requires);
var chunk__51361 = null;
var count__51362 = (0);
var i__51363 = (0);
while(true){
if((i__51363 < count__51362)){
var js_ns = chunk__51361.cljs$core$IIndexed$_nth$arity$2(null,i__51363);
var require_str_51609 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51609);


var G__51610 = seq__51359;
var G__51611 = chunk__51361;
var G__51612 = count__51362;
var G__51613 = (i__51363 + (1));
seq__51359 = G__51610;
chunk__51361 = G__51611;
count__51362 = G__51612;
i__51363 = G__51613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51359);
if(temp__5735__auto__){
var seq__51359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51359__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51359__$1);
var G__51614 = cljs.core.chunk_rest(seq__51359__$1);
var G__51615 = c__4609__auto__;
var G__51616 = cljs.core.count(c__4609__auto__);
var G__51617 = (0);
seq__51359 = G__51614;
chunk__51361 = G__51615;
count__51362 = G__51616;
i__51363 = G__51617;
continue;
} else {
var js_ns = cljs.core.first(seq__51359__$1);
var require_str_51619 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51619);


var G__51620 = cljs.core.next(seq__51359__$1);
var G__51621 = null;
var G__51622 = (0);
var G__51623 = (0);
seq__51359 = G__51620;
chunk__51361 = G__51621;
count__51362 = G__51622;
i__51363 = G__51623;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__51372 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__51372) : callback.call(null,G__51372));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__51375){
var map__51376 = p__51375;
var map__51376__$1 = (((((!((map__51376 == null))))?(((((map__51376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51376):map__51376);
var msg = map__51376__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51378(s__51379){
return (new cljs.core.LazySeq(null,(function (){
var s__51379__$1 = s__51379;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51379__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51384 = cljs.core.first(xs__6292__auto__);
var map__51384__$1 = (((((!((map__51384 == null))))?(((((map__51384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51384):map__51384);
var src = map__51384__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51384__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51384__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__51379__$1,map__51384,map__51384__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51376,map__51376__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51378_$_iter__51380(s__51381){
return (new cljs.core.LazySeq(null,((function (s__51379__$1,map__51384,map__51384__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51376,map__51376__$1,msg,info,reload_info){
return (function (){
var s__51381__$1 = s__51381;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51381__$1);
if(temp__5735__auto____$1){
var s__51381__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51381__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51381__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51383 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51382 = (0);
while(true){
if((i__51382 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__51382);
cljs.core.chunk_append(b__51383,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51625 = (i__51382 + (1));
i__51382 = G__51625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51383),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51378_$_iter__51380(cljs.core.chunk_rest(s__51381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51383),null);
}
} else {
var warning = cljs.core.first(s__51381__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51378_$_iter__51380(cljs.core.rest(s__51381__$2)));
}
} else {
return null;
}
break;
}
});})(s__51379__$1,map__51384,map__51384__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51376,map__51376__$1,msg,info,reload_info))
,null,null));
});})(s__51379__$1,map__51384,map__51384__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51376,map__51376__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51378(cljs.core.rest(s__51379__$1)));
} else {
var G__51629 = cljs.core.rest(s__51379__$1);
s__51379__$1 = G__51629;
continue;
}
} else {
var G__51630 = cljs.core.rest(s__51379__$1);
s__51379__$1 = G__51630;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__51387_51631 = cljs.core.seq(warnings);
var chunk__51388_51632 = null;
var count__51389_51633 = (0);
var i__51390_51634 = (0);
while(true){
if((i__51390_51634 < count__51389_51633)){
var map__51395_51635 = chunk__51388_51632.cljs$core$IIndexed$_nth$arity$2(null,i__51390_51634);
var map__51395_51636__$1 = (((((!((map__51395_51635 == null))))?(((((map__51395_51635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51395_51635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51395_51635):map__51395_51635);
var w_51637 = map__51395_51636__$1;
var msg_51638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51395_51636__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51395_51636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51395_51636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51395_51636__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51641)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51639),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51640),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51638__$1)].join(''));


var G__51642 = seq__51387_51631;
var G__51643 = chunk__51388_51632;
var G__51644 = count__51389_51633;
var G__51645 = (i__51390_51634 + (1));
seq__51387_51631 = G__51642;
chunk__51388_51632 = G__51643;
count__51389_51633 = G__51644;
i__51390_51634 = G__51645;
continue;
} else {
var temp__5735__auto___51646 = cljs.core.seq(seq__51387_51631);
if(temp__5735__auto___51646){
var seq__51387_51647__$1 = temp__5735__auto___51646;
if(cljs.core.chunked_seq_QMARK_(seq__51387_51647__$1)){
var c__4609__auto___51648 = cljs.core.chunk_first(seq__51387_51647__$1);
var G__51649 = cljs.core.chunk_rest(seq__51387_51647__$1);
var G__51650 = c__4609__auto___51648;
var G__51651 = cljs.core.count(c__4609__auto___51648);
var G__51652 = (0);
seq__51387_51631 = G__51649;
chunk__51388_51632 = G__51650;
count__51389_51633 = G__51651;
i__51390_51634 = G__51652;
continue;
} else {
var map__51397_51653 = cljs.core.first(seq__51387_51647__$1);
var map__51397_51654__$1 = (((((!((map__51397_51653 == null))))?(((((map__51397_51653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51397_51653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51397_51653):map__51397_51653);
var w_51655 = map__51397_51654__$1;
var msg_51656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51397_51654__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51397_51654__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51397_51654__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51397_51654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51659)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51657),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51658),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51656__$1)].join(''));


var G__51661 = cljs.core.next(seq__51387_51647__$1);
var G__51662 = null;
var G__51663 = (0);
var G__51664 = (0);
seq__51387_51631 = G__51661;
chunk__51388_51632 = G__51662;
count__51389_51633 = G__51663;
i__51390_51634 = G__51664;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__51374_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51374_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__51423){
var map__51424 = p__51423;
var map__51424__$1 = (((((!((map__51424 == null))))?(((((map__51424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51424):map__51424);
var msg = map__51424__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51434 = cljs.core.seq(updates);
var chunk__51436 = null;
var count__51437 = (0);
var i__51438 = (0);
while(true){
if((i__51438 < count__51437)){
var path = chunk__51436.cljs$core$IIndexed$_nth$arity$2(null,i__51438);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51517_51665 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51522_51666 = null;
var count__51523_51667 = (0);
var i__51524_51668 = (0);
while(true){
if((i__51524_51668 < count__51523_51667)){
var node_51669 = chunk__51522_51666.cljs$core$IIndexed$_nth$arity$2(null,i__51524_51668);
var path_match_51670 = shadow.cljs.devtools.client.browser.match_paths(node_51669.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51670)){
var new_link_51671 = (function (){var G__51529 = node_51669.cloneNode(true);
G__51529.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51670),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51529;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51670], 0));

goog.dom.insertSiblingAfter(new_link_51671,node_51669);

goog.dom.removeNode(node_51669);


var G__51672 = seq__51517_51665;
var G__51673 = chunk__51522_51666;
var G__51674 = count__51523_51667;
var G__51675 = (i__51524_51668 + (1));
seq__51517_51665 = G__51672;
chunk__51522_51666 = G__51673;
count__51523_51667 = G__51674;
i__51524_51668 = G__51675;
continue;
} else {
var G__51677 = seq__51517_51665;
var G__51678 = chunk__51522_51666;
var G__51679 = count__51523_51667;
var G__51680 = (i__51524_51668 + (1));
seq__51517_51665 = G__51677;
chunk__51522_51666 = G__51678;
count__51523_51667 = G__51679;
i__51524_51668 = G__51680;
continue;
}
} else {
var temp__5735__auto___51683 = cljs.core.seq(seq__51517_51665);
if(temp__5735__auto___51683){
var seq__51517_51684__$1 = temp__5735__auto___51683;
if(cljs.core.chunked_seq_QMARK_(seq__51517_51684__$1)){
var c__4609__auto___51685 = cljs.core.chunk_first(seq__51517_51684__$1);
var G__51686 = cljs.core.chunk_rest(seq__51517_51684__$1);
var G__51687 = c__4609__auto___51685;
var G__51688 = cljs.core.count(c__4609__auto___51685);
var G__51689 = (0);
seq__51517_51665 = G__51686;
chunk__51522_51666 = G__51687;
count__51523_51667 = G__51688;
i__51524_51668 = G__51689;
continue;
} else {
var node_51690 = cljs.core.first(seq__51517_51684__$1);
var path_match_51691 = shadow.cljs.devtools.client.browser.match_paths(node_51690.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51691)){
var new_link_51692 = (function (){var G__51530 = node_51690.cloneNode(true);
G__51530.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51691),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51530;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51691], 0));

goog.dom.insertSiblingAfter(new_link_51692,node_51690);

goog.dom.removeNode(node_51690);


var G__51693 = cljs.core.next(seq__51517_51684__$1);
var G__51694 = null;
var G__51695 = (0);
var G__51696 = (0);
seq__51517_51665 = G__51693;
chunk__51522_51666 = G__51694;
count__51523_51667 = G__51695;
i__51524_51668 = G__51696;
continue;
} else {
var G__51699 = cljs.core.next(seq__51517_51684__$1);
var G__51700 = null;
var G__51701 = (0);
var G__51702 = (0);
seq__51517_51665 = G__51699;
chunk__51522_51666 = G__51700;
count__51523_51667 = G__51701;
i__51524_51668 = G__51702;
continue;
}
}
} else {
}
}
break;
}


var G__51703 = seq__51434;
var G__51704 = chunk__51436;
var G__51705 = count__51437;
var G__51706 = (i__51438 + (1));
seq__51434 = G__51703;
chunk__51436 = G__51704;
count__51437 = G__51705;
i__51438 = G__51706;
continue;
} else {
var G__51710 = seq__51434;
var G__51711 = chunk__51436;
var G__51712 = count__51437;
var G__51713 = (i__51438 + (1));
seq__51434 = G__51710;
chunk__51436 = G__51711;
count__51437 = G__51712;
i__51438 = G__51713;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51434);
if(temp__5735__auto__){
var seq__51434__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51434__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51434__$1);
var G__51718 = cljs.core.chunk_rest(seq__51434__$1);
var G__51719 = c__4609__auto__;
var G__51720 = cljs.core.count(c__4609__auto__);
var G__51721 = (0);
seq__51434 = G__51718;
chunk__51436 = G__51719;
count__51437 = G__51720;
i__51438 = G__51721;
continue;
} else {
var path = cljs.core.first(seq__51434__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51532_51722 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51536_51723 = null;
var count__51537_51724 = (0);
var i__51538_51725 = (0);
while(true){
if((i__51538_51725 < count__51537_51724)){
var node_51726 = chunk__51536_51723.cljs$core$IIndexed$_nth$arity$2(null,i__51538_51725);
var path_match_51727 = shadow.cljs.devtools.client.browser.match_paths(node_51726.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51727)){
var new_link_51730 = (function (){var G__51548 = node_51726.cloneNode(true);
G__51548.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51727),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51548;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51727], 0));

goog.dom.insertSiblingAfter(new_link_51730,node_51726);

goog.dom.removeNode(node_51726);


var G__51732 = seq__51532_51722;
var G__51733 = chunk__51536_51723;
var G__51734 = count__51537_51724;
var G__51735 = (i__51538_51725 + (1));
seq__51532_51722 = G__51732;
chunk__51536_51723 = G__51733;
count__51537_51724 = G__51734;
i__51538_51725 = G__51735;
continue;
} else {
var G__51736 = seq__51532_51722;
var G__51737 = chunk__51536_51723;
var G__51738 = count__51537_51724;
var G__51739 = (i__51538_51725 + (1));
seq__51532_51722 = G__51736;
chunk__51536_51723 = G__51737;
count__51537_51724 = G__51738;
i__51538_51725 = G__51739;
continue;
}
} else {
var temp__5735__auto___51740__$1 = cljs.core.seq(seq__51532_51722);
if(temp__5735__auto___51740__$1){
var seq__51532_51741__$1 = temp__5735__auto___51740__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51532_51741__$1)){
var c__4609__auto___51742 = cljs.core.chunk_first(seq__51532_51741__$1);
var G__51743 = cljs.core.chunk_rest(seq__51532_51741__$1);
var G__51744 = c__4609__auto___51742;
var G__51745 = cljs.core.count(c__4609__auto___51742);
var G__51746 = (0);
seq__51532_51722 = G__51743;
chunk__51536_51723 = G__51744;
count__51537_51724 = G__51745;
i__51538_51725 = G__51746;
continue;
} else {
var node_51747 = cljs.core.first(seq__51532_51741__$1);
var path_match_51748 = shadow.cljs.devtools.client.browser.match_paths(node_51747.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51748)){
var new_link_51749 = (function (){var G__51550 = node_51747.cloneNode(true);
G__51550.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51748),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51550;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51748], 0));

goog.dom.insertSiblingAfter(new_link_51749,node_51747);

goog.dom.removeNode(node_51747);


var G__51750 = cljs.core.next(seq__51532_51741__$1);
var G__51751 = null;
var G__51752 = (0);
var G__51753 = (0);
seq__51532_51722 = G__51750;
chunk__51536_51723 = G__51751;
count__51537_51724 = G__51752;
i__51538_51725 = G__51753;
continue;
} else {
var G__51754 = cljs.core.next(seq__51532_51741__$1);
var G__51755 = null;
var G__51756 = (0);
var G__51757 = (0);
seq__51532_51722 = G__51754;
chunk__51536_51723 = G__51755;
count__51537_51724 = G__51756;
i__51538_51725 = G__51757;
continue;
}
}
} else {
}
}
break;
}


var G__51760 = cljs.core.next(seq__51434__$1);
var G__51761 = null;
var G__51762 = (0);
var G__51763 = (0);
seq__51434 = G__51760;
chunk__51436 = G__51761;
count__51437 = G__51762;
i__51438 = G__51763;
continue;
} else {
var G__51764 = cljs.core.next(seq__51434__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51434 = G__51764;
chunk__51436 = G__51765;
count__51437 = G__51766;
i__51438 = G__51767;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__51556){
var map__51557 = p__51556;
var map__51557__$1 = (((((!((map__51557 == null))))?(((((map__51557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51557):map__51557);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__51561,done){
var map__51563 = p__51561;
var map__51563__$1 = (((((!((map__51563 == null))))?(((((map__51563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51563):map__51563);
var msg = map__51563__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51565){
var map__51566 = p__51565;
var map__51566__$1 = (((((!((map__51566 == null))))?(((((map__51566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51566):map__51566);
var src = map__51566__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51566__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e51568){var e = e51568;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__51569,done){
var map__51570 = p__51569;
var map__51570__$1 = (((((!((map__51570 == null))))?(((((map__51570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51570):map__51570);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__51572){
var map__51573 = p__51572;
var map__51573__$1 = (((((!((map__51573 == null))))?(((((map__51573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51573):map__51573);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51576,done){
var map__51577 = p__51576;
var map__51577__$1 = (((((!((map__51577 == null))))?(((((map__51577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51577):map__51577);
var msg = map__51577__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51579_51811 = type;
var G__51579_51812__$1 = (((G__51579_51811 instanceof cljs.core.Keyword))?G__51579_51811.fqn:null);
switch (G__51579_51812__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__51581 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__51581.cljs$core$IFn$_invoke$arity$1 ? fexpr__51581.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__51581.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e51586){var e = e51586;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51834 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51834)){
var s_51836 = temp__5735__auto___51834;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_51836.onclose = (function (e){
return null;
}));

s_51836.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
