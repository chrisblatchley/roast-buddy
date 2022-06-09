goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47630 = arguments.length;
switch (G__47630) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47631 = (function (f,blockable,meta47632){
this.f = f;
this.blockable = blockable;
this.meta47632 = meta47632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47633,meta47632__$1){
var self__ = this;
var _47633__$1 = this;
return (new cljs.core.async.t_cljs$core$async47631(self__.f,self__.blockable,meta47632__$1));
}));

(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47633){
var self__ = this;
var _47633__$1 = this;
return self__.meta47632;
}));

(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47632","meta47632",-559643906,null)], null);
}));

(cljs.core.async.t_cljs$core$async47631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47631");

(cljs.core.async.t_cljs$core$async47631.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47631.
 */
cljs.core.async.__GT_t_cljs$core$async47631 = (function cljs$core$async$__GT_t_cljs$core$async47631(f__$1,blockable__$1,meta47632){
return (new cljs.core.async.t_cljs$core$async47631(f__$1,blockable__$1,meta47632));
});

}

return (new cljs.core.async.t_cljs$core$async47631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47636 = arguments.length;
switch (G__47636) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47638 = arguments.length;
switch (G__47638) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47640 = arguments.length;
switch (G__47640) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49115 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49115) : fn1.call(null,val_49115));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49115) : fn1.call(null,val_49115));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47642 = arguments.length;
switch (G__47642) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___49132 = n;
var x_49134 = (0);
while(true){
if((x_49134 < n__4666__auto___49132)){
(a[x_49134] = x_49134);

var G__49135 = (x_49134 + (1));
x_49134 = G__49135;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47643 = (function (flag,meta47644){
this.flag = flag;
this.meta47644 = meta47644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47645,meta47644__$1){
var self__ = this;
var _47645__$1 = this;
return (new cljs.core.async.t_cljs$core$async47643(self__.flag,meta47644__$1));
}));

(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47645){
var self__ = this;
var _47645__$1 = this;
return self__.meta47644;
}));

(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47644","meta47644",1550431200,null)], null);
}));

(cljs.core.async.t_cljs$core$async47643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47643");

(cljs.core.async.t_cljs$core$async47643.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47643.
 */
cljs.core.async.__GT_t_cljs$core$async47643 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47643(flag__$1,meta47644){
return (new cljs.core.async.t_cljs$core$async47643(flag__$1,meta47644));
});

}

return (new cljs.core.async.t_cljs$core$async47643(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47646 = (function (flag,cb,meta47647){
this.flag = flag;
this.cb = cb;
this.meta47647 = meta47647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47648,meta47647__$1){
var self__ = this;
var _47648__$1 = this;
return (new cljs.core.async.t_cljs$core$async47646(self__.flag,self__.cb,meta47647__$1));
}));

(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47648){
var self__ = this;
var _47648__$1 = this;
return self__.meta47647;
}));

(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47647","meta47647",-1548615789,null)], null);
}));

(cljs.core.async.t_cljs$core$async47646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47646");

(cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47646.
 */
cljs.core.async.__GT_t_cljs$core$async47646 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47646(flag__$1,cb__$1,meta47647){
return (new cljs.core.async.t_cljs$core$async47646(flag__$1,cb__$1,meta47647));
});

}

return (new cljs.core.async.t_cljs$core$async47646(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47649_SHARP_){
var G__47651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47649_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47651) : fret.call(null,G__47651));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47650_SHARP_){
var G__47652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47650_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47652) : fret.call(null,G__47652));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49166 = (i + (1));
i = G__49166;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49171 = arguments.length;
var i__4790__auto___49172 = (0);
while(true){
if((i__4790__auto___49172 < len__4789__auto___49171)){
args__4795__auto__.push((arguments[i__4790__auto___49172]));

var G__49175 = (i__4790__auto___49172 + (1));
i__4790__auto___49172 = G__49175;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47655){
var map__47656 = p__47655;
var map__47656__$1 = (((((!((map__47656 == null))))?(((((map__47656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47656):map__47656);
var opts = map__47656__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47653){
var G__47654 = cljs.core.first(seq47653);
var seq47653__$1 = cljs.core.next(seq47653);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47654,seq47653__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47659 = arguments.length;
switch (G__47659) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47572__auto___49193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47683){
var state_val_47684 = (state_47683[(1)]);
if((state_val_47684 === (7))){
var inst_47679 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47685_49194 = state_47683__$1;
(statearr_47685_49194[(2)] = inst_47679);

(statearr_47685_49194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (1))){
var state_47683__$1 = state_47683;
var statearr_47686_49195 = state_47683__$1;
(statearr_47686_49195[(2)] = null);

(statearr_47686_49195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (4))){
var inst_47662 = (state_47683[(7)]);
var inst_47662__$1 = (state_47683[(2)]);
var inst_47663 = (inst_47662__$1 == null);
var state_47683__$1 = (function (){var statearr_47687 = state_47683;
(statearr_47687[(7)] = inst_47662__$1);

return statearr_47687;
})();
if(cljs.core.truth_(inst_47663)){
var statearr_47688_49196 = state_47683__$1;
(statearr_47688_49196[(1)] = (5));

} else {
var statearr_47689_49197 = state_47683__$1;
(statearr_47689_49197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (13))){
var state_47683__$1 = state_47683;
var statearr_47690_49198 = state_47683__$1;
(statearr_47690_49198[(2)] = null);

(statearr_47690_49198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (6))){
var inst_47662 = (state_47683[(7)]);
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47683__$1,(11),to,inst_47662);
} else {
if((state_val_47684 === (3))){
var inst_47681 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47683__$1,inst_47681);
} else {
if((state_val_47684 === (12))){
var state_47683__$1 = state_47683;
var statearr_47691_49199 = state_47683__$1;
(statearr_47691_49199[(2)] = null);

(statearr_47691_49199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (2))){
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47683__$1,(4),from);
} else {
if((state_val_47684 === (11))){
var inst_47672 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
if(cljs.core.truth_(inst_47672)){
var statearr_47692_49200 = state_47683__$1;
(statearr_47692_49200[(1)] = (12));

} else {
var statearr_47693_49201 = state_47683__$1;
(statearr_47693_49201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (9))){
var state_47683__$1 = state_47683;
var statearr_47694_49202 = state_47683__$1;
(statearr_47694_49202[(2)] = null);

(statearr_47694_49202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (5))){
var state_47683__$1 = state_47683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47695_49205 = state_47683__$1;
(statearr_47695_49205[(1)] = (8));

} else {
var statearr_47696_49207 = state_47683__$1;
(statearr_47696_49207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (14))){
var inst_47677 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47697_49211 = state_47683__$1;
(statearr_47697_49211[(2)] = inst_47677);

(statearr_47697_49211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (10))){
var inst_47669 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47698_49212 = state_47683__$1;
(statearr_47698_49212[(2)] = inst_47669);

(statearr_47698_49212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (8))){
var inst_47666 = cljs.core.async.close_BANG_(to);
var state_47683__$1 = state_47683;
var statearr_47699_49213 = state_47683__$1;
(statearr_47699_49213[(2)] = inst_47666);

(statearr_47699_49213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_47700 = [null,null,null,null,null,null,null,null];
(statearr_47700[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_47700[(1)] = (1));

return statearr_47700;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_47683){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47683);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47701){var ex__47540__auto__ = e47701;
var statearr_47702_49216 = state_47683;
(statearr_47702_49216[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47683[(4)]))){
var statearr_47703_49217 = state_47683;
(statearr_47703_49217[(1)] = cljs.core.first((state_47683[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49219 = state_47683;
state_47683 = G__49219;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_47683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_47683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47704 = f__47573__auto__();
(statearr_47704[(6)] = c__47572__auto___49193);

return statearr_47704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47705){
var vec__47706 = p__47705;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(1),null);
var job = vec__47706;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47572__auto___49220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47713){
var state_val_47714 = (state_47713[(1)]);
if((state_val_47714 === (1))){
var state_47713__$1 = state_47713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47713__$1,(2),res,v);
} else {
if((state_val_47714 === (2))){
var inst_47710 = (state_47713[(2)]);
var inst_47711 = cljs.core.async.close_BANG_(res);
var state_47713__$1 = (function (){var statearr_47715 = state_47713;
(statearr_47715[(7)] = inst_47710);

return statearr_47715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47713__$1,inst_47711);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_47716 = [null,null,null,null,null,null,null,null];
(statearr_47716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__);

(statearr_47716[(1)] = (1));

return statearr_47716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1 = (function (state_47713){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47713);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47717){var ex__47540__auto__ = e47717;
var statearr_47718_49225 = state_47713;
(statearr_47718_49225[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47713[(4)]))){
var statearr_47719_49228 = state_47713;
(statearr_47719_49228[(1)] = cljs.core.first((state_47713[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49230 = state_47713;
state_47713 = G__49230;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = function(state_47713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1.call(this,state_47713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47720 = f__47573__auto__();
(statearr_47720[(6)] = c__47572__auto___49220);

return statearr_47720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47721){
var vec__47722 = p__47721;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47722,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47722,(1),null);
var job = vec__47722;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___49236 = n;
var __49237 = (0);
while(true){
if((__49237 < n__4666__auto___49236)){
var G__47725_49238 = type;
var G__47725_49239__$1 = (((G__47725_49238 instanceof cljs.core.Keyword))?G__47725_49238.fqn:null);
switch (G__47725_49239__$1) {
case "compute":
var c__47572__auto___49241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49237,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = ((function (__49237,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function (state_47738){
var state_val_47739 = (state_47738[(1)]);
if((state_val_47739 === (1))){
var state_47738__$1 = state_47738;
var statearr_47740_49243 = state_47738__$1;
(statearr_47740_49243[(2)] = null);

(statearr_47740_49243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47739 === (2))){
var state_47738__$1 = state_47738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47738__$1,(4),jobs);
} else {
if((state_val_47739 === (3))){
var inst_47736 = (state_47738[(2)]);
var state_47738__$1 = state_47738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47738__$1,inst_47736);
} else {
if((state_val_47739 === (4))){
var inst_47728 = (state_47738[(2)]);
var inst_47729 = process(inst_47728);
var state_47738__$1 = state_47738;
if(cljs.core.truth_(inst_47729)){
var statearr_47741_49245 = state_47738__$1;
(statearr_47741_49245[(1)] = (5));

} else {
var statearr_47742_49246 = state_47738__$1;
(statearr_47742_49246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47739 === (5))){
var state_47738__$1 = state_47738;
var statearr_47743_49247 = state_47738__$1;
(statearr_47743_49247[(2)] = null);

(statearr_47743_49247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47739 === (6))){
var state_47738__$1 = state_47738;
var statearr_47744_49249 = state_47738__$1;
(statearr_47744_49249[(2)] = null);

(statearr_47744_49249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47739 === (7))){
var inst_47734 = (state_47738[(2)]);
var state_47738__$1 = state_47738;
var statearr_47745_49251 = state_47738__$1;
(statearr_47745_49251[(2)] = inst_47734);

(statearr_47745_49251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49237,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
;
return ((function (__49237,switch__47536__auto__,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_47746 = [null,null,null,null,null,null,null];
(statearr_47746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__);

(statearr_47746[(1)] = (1));

return statearr_47746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1 = (function (state_47738){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47738);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47747){var ex__47540__auto__ = e47747;
var statearr_47748_49252 = state_47738;
(statearr_47748_49252[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47738[(4)]))){
var statearr_47749_49253 = state_47738;
(statearr_47749_49253[(1)] = cljs.core.first((state_47738[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49254 = state_47738;
state_47738 = G__49254;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = function(state_47738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1.call(this,state_47738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__;
})()
;})(__49237,switch__47536__auto__,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
})();
var state__47574__auto__ = (function (){var statearr_47750 = f__47573__auto__();
(statearr_47750[(6)] = c__47572__auto___49241);

return statearr_47750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
});})(__49237,c__47572__auto___49241,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
);


break;
case "async":
var c__47572__auto___49256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49237,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = ((function (__49237,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function (state_47763){
var state_val_47764 = (state_47763[(1)]);
if((state_val_47764 === (1))){
var state_47763__$1 = state_47763;
var statearr_47765_49258 = state_47763__$1;
(statearr_47765_49258[(2)] = null);

(statearr_47765_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47764 === (2))){
var state_47763__$1 = state_47763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47763__$1,(4),jobs);
} else {
if((state_val_47764 === (3))){
var inst_47761 = (state_47763[(2)]);
var state_47763__$1 = state_47763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47763__$1,inst_47761);
} else {
if((state_val_47764 === (4))){
var inst_47753 = (state_47763[(2)]);
var inst_47754 = async(inst_47753);
var state_47763__$1 = state_47763;
if(cljs.core.truth_(inst_47754)){
var statearr_47766_49259 = state_47763__$1;
(statearr_47766_49259[(1)] = (5));

} else {
var statearr_47767_49260 = state_47763__$1;
(statearr_47767_49260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47764 === (5))){
var state_47763__$1 = state_47763;
var statearr_47768_49261 = state_47763__$1;
(statearr_47768_49261[(2)] = null);

(statearr_47768_49261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47764 === (6))){
var state_47763__$1 = state_47763;
var statearr_47769_49262 = state_47763__$1;
(statearr_47769_49262[(2)] = null);

(statearr_47769_49262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47764 === (7))){
var inst_47759 = (state_47763[(2)]);
var state_47763__$1 = state_47763;
var statearr_47770_49263 = state_47763__$1;
(statearr_47770_49263[(2)] = inst_47759);

(statearr_47770_49263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49237,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
;
return ((function (__49237,switch__47536__auto__,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_47771 = [null,null,null,null,null,null,null];
(statearr_47771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__);

(statearr_47771[(1)] = (1));

return statearr_47771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1 = (function (state_47763){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47763);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47772){var ex__47540__auto__ = e47772;
var statearr_47773_49266 = state_47763;
(statearr_47773_49266[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47763[(4)]))){
var statearr_47774_49267 = state_47763;
(statearr_47774_49267[(1)] = cljs.core.first((state_47763[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49268 = state_47763;
state_47763 = G__49268;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = function(state_47763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1.call(this,state_47763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__;
})()
;})(__49237,switch__47536__auto__,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
})();
var state__47574__auto__ = (function (){var statearr_47775 = f__47573__auto__();
(statearr_47775[(6)] = c__47572__auto___49256);

return statearr_47775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
});})(__49237,c__47572__auto___49256,G__47725_49238,G__47725_49239__$1,n__4666__auto___49236,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47725_49239__$1)].join('')));

}

var G__49269 = (__49237 + (1));
__49237 = G__49269;
continue;
} else {
}
break;
}

var c__47572__auto___49270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47797){
var state_val_47798 = (state_47797[(1)]);
if((state_val_47798 === (7))){
var inst_47793 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47799_49271 = state_47797__$1;
(statearr_47799_49271[(2)] = inst_47793);

(statearr_47799_49271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (1))){
var state_47797__$1 = state_47797;
var statearr_47800_49272 = state_47797__$1;
(statearr_47800_49272[(2)] = null);

(statearr_47800_49272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (4))){
var inst_47778 = (state_47797[(7)]);
var inst_47778__$1 = (state_47797[(2)]);
var inst_47779 = (inst_47778__$1 == null);
var state_47797__$1 = (function (){var statearr_47801 = state_47797;
(statearr_47801[(7)] = inst_47778__$1);

return statearr_47801;
})();
if(cljs.core.truth_(inst_47779)){
var statearr_47802_49274 = state_47797__$1;
(statearr_47802_49274[(1)] = (5));

} else {
var statearr_47803_49275 = state_47797__$1;
(statearr_47803_49275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (6))){
var inst_47783 = (state_47797[(8)]);
var inst_47778 = (state_47797[(7)]);
var inst_47783__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47785 = [inst_47778,inst_47783__$1];
var inst_47786 = (new cljs.core.PersistentVector(null,2,(5),inst_47784,inst_47785,null));
var state_47797__$1 = (function (){var statearr_47804 = state_47797;
(statearr_47804[(8)] = inst_47783__$1);

return statearr_47804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47797__$1,(8),jobs,inst_47786);
} else {
if((state_val_47798 === (3))){
var inst_47795 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47797__$1,inst_47795);
} else {
if((state_val_47798 === (2))){
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47797__$1,(4),from);
} else {
if((state_val_47798 === (9))){
var inst_47790 = (state_47797[(2)]);
var state_47797__$1 = (function (){var statearr_47805 = state_47797;
(statearr_47805[(9)] = inst_47790);

return statearr_47805;
})();
var statearr_47806_49276 = state_47797__$1;
(statearr_47806_49276[(2)] = null);

(statearr_47806_49276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (5))){
var inst_47781 = cljs.core.async.close_BANG_(jobs);
var state_47797__$1 = state_47797;
var statearr_47807_49277 = state_47797__$1;
(statearr_47807_49277[(2)] = inst_47781);

(statearr_47807_49277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (8))){
var inst_47783 = (state_47797[(8)]);
var inst_47788 = (state_47797[(2)]);
var state_47797__$1 = (function (){var statearr_47808 = state_47797;
(statearr_47808[(10)] = inst_47788);

return statearr_47808;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47797__$1,(9),results,inst_47783);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_47809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__);

(statearr_47809[(1)] = (1));

return statearr_47809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1 = (function (state_47797){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47797);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47810){var ex__47540__auto__ = e47810;
var statearr_47811_49282 = state_47797;
(statearr_47811_49282[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47797[(4)]))){
var statearr_47812_49283 = state_47797;
(statearr_47812_49283[(1)] = cljs.core.first((state_47797[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49284 = state_47797;
state_47797 = G__49284;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = function(state_47797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1.call(this,state_47797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47813 = f__47573__auto__();
(statearr_47813[(6)] = c__47572__auto___49270);

return statearr_47813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


var c__47572__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47851){
var state_val_47852 = (state_47851[(1)]);
if((state_val_47852 === (7))){
var inst_47847 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
var statearr_47853_49285 = state_47851__$1;
(statearr_47853_49285[(2)] = inst_47847);

(statearr_47853_49285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (20))){
var state_47851__$1 = state_47851;
var statearr_47854_49286 = state_47851__$1;
(statearr_47854_49286[(2)] = null);

(statearr_47854_49286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (1))){
var state_47851__$1 = state_47851;
var statearr_47855_49287 = state_47851__$1;
(statearr_47855_49287[(2)] = null);

(statearr_47855_49287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (4))){
var inst_47816 = (state_47851[(7)]);
var inst_47816__$1 = (state_47851[(2)]);
var inst_47817 = (inst_47816__$1 == null);
var state_47851__$1 = (function (){var statearr_47856 = state_47851;
(statearr_47856[(7)] = inst_47816__$1);

return statearr_47856;
})();
if(cljs.core.truth_(inst_47817)){
var statearr_47857_49288 = state_47851__$1;
(statearr_47857_49288[(1)] = (5));

} else {
var statearr_47858_49289 = state_47851__$1;
(statearr_47858_49289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (15))){
var inst_47829 = (state_47851[(8)]);
var state_47851__$1 = state_47851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47851__$1,(18),to,inst_47829);
} else {
if((state_val_47852 === (21))){
var inst_47842 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
var statearr_47859_49290 = state_47851__$1;
(statearr_47859_49290[(2)] = inst_47842);

(statearr_47859_49290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (13))){
var inst_47844 = (state_47851[(2)]);
var state_47851__$1 = (function (){var statearr_47860 = state_47851;
(statearr_47860[(9)] = inst_47844);

return statearr_47860;
})();
var statearr_47861_49291 = state_47851__$1;
(statearr_47861_49291[(2)] = null);

(statearr_47861_49291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (6))){
var inst_47816 = (state_47851[(7)]);
var state_47851__$1 = state_47851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47851__$1,(11),inst_47816);
} else {
if((state_val_47852 === (17))){
var inst_47837 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
if(cljs.core.truth_(inst_47837)){
var statearr_47862_49293 = state_47851__$1;
(statearr_47862_49293[(1)] = (19));

} else {
var statearr_47863_49295 = state_47851__$1;
(statearr_47863_49295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (3))){
var inst_47849 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47851__$1,inst_47849);
} else {
if((state_val_47852 === (12))){
var inst_47826 = (state_47851[(10)]);
var state_47851__$1 = state_47851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47851__$1,(14),inst_47826);
} else {
if((state_val_47852 === (2))){
var state_47851__$1 = state_47851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47851__$1,(4),results);
} else {
if((state_val_47852 === (19))){
var state_47851__$1 = state_47851;
var statearr_47864_49296 = state_47851__$1;
(statearr_47864_49296[(2)] = null);

(statearr_47864_49296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (11))){
var inst_47826 = (state_47851[(2)]);
var state_47851__$1 = (function (){var statearr_47865 = state_47851;
(statearr_47865[(10)] = inst_47826);

return statearr_47865;
})();
var statearr_47866_49297 = state_47851__$1;
(statearr_47866_49297[(2)] = null);

(statearr_47866_49297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (9))){
var state_47851__$1 = state_47851;
var statearr_47867_49298 = state_47851__$1;
(statearr_47867_49298[(2)] = null);

(statearr_47867_49298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (5))){
var state_47851__$1 = state_47851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47868_49299 = state_47851__$1;
(statearr_47868_49299[(1)] = (8));

} else {
var statearr_47869_49300 = state_47851__$1;
(statearr_47869_49300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (14))){
var inst_47829 = (state_47851[(8)]);
var inst_47829__$1 = (state_47851[(2)]);
var inst_47830 = (inst_47829__$1 == null);
var inst_47831 = cljs.core.not(inst_47830);
var state_47851__$1 = (function (){var statearr_47870 = state_47851;
(statearr_47870[(8)] = inst_47829__$1);

return statearr_47870;
})();
if(inst_47831){
var statearr_47871_49301 = state_47851__$1;
(statearr_47871_49301[(1)] = (15));

} else {
var statearr_47872_49302 = state_47851__$1;
(statearr_47872_49302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (16))){
var state_47851__$1 = state_47851;
var statearr_47873_49303 = state_47851__$1;
(statearr_47873_49303[(2)] = false);

(statearr_47873_49303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (10))){
var inst_47823 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
var statearr_47874_49304 = state_47851__$1;
(statearr_47874_49304[(2)] = inst_47823);

(statearr_47874_49304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (18))){
var inst_47834 = (state_47851[(2)]);
var state_47851__$1 = state_47851;
var statearr_47875_49305 = state_47851__$1;
(statearr_47875_49305[(2)] = inst_47834);

(statearr_47875_49305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47852 === (8))){
var inst_47820 = cljs.core.async.close_BANG_(to);
var state_47851__$1 = state_47851;
var statearr_47876_49310 = state_47851__$1;
(statearr_47876_49310[(2)] = inst_47820);

(statearr_47876_49310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_47877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__);

(statearr_47877[(1)] = (1));

return statearr_47877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1 = (function (state_47851){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47851);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47878){var ex__47540__auto__ = e47878;
var statearr_47879_49314 = state_47851;
(statearr_47879_49314[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47851[(4)]))){
var statearr_47880_49315 = state_47851;
(statearr_47880_49315[(1)] = cljs.core.first((state_47851[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49319 = state_47851;
state_47851 = G__49319;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__ = function(state_47851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1.call(this,state_47851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47881 = f__47573__auto__();
(statearr_47881[(6)] = c__47572__auto__);

return statearr_47881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

return c__47572__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47883 = arguments.length;
switch (G__47883) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47885 = arguments.length;
switch (G__47885) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47887 = arguments.length;
switch (G__47887) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47572__auto___49339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47913){
var state_val_47914 = (state_47913[(1)]);
if((state_val_47914 === (7))){
var inst_47909 = (state_47913[(2)]);
var state_47913__$1 = state_47913;
var statearr_47915_49343 = state_47913__$1;
(statearr_47915_49343[(2)] = inst_47909);

(statearr_47915_49343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (1))){
var state_47913__$1 = state_47913;
var statearr_47916_49344 = state_47913__$1;
(statearr_47916_49344[(2)] = null);

(statearr_47916_49344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (4))){
var inst_47890 = (state_47913[(7)]);
var inst_47890__$1 = (state_47913[(2)]);
var inst_47891 = (inst_47890__$1 == null);
var state_47913__$1 = (function (){var statearr_47917 = state_47913;
(statearr_47917[(7)] = inst_47890__$1);

return statearr_47917;
})();
if(cljs.core.truth_(inst_47891)){
var statearr_47918_49348 = state_47913__$1;
(statearr_47918_49348[(1)] = (5));

} else {
var statearr_47919_49349 = state_47913__$1;
(statearr_47919_49349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (13))){
var state_47913__$1 = state_47913;
var statearr_47920_49350 = state_47913__$1;
(statearr_47920_49350[(2)] = null);

(statearr_47920_49350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (6))){
var inst_47890 = (state_47913[(7)]);
var inst_47896 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47890) : p.call(null,inst_47890));
var state_47913__$1 = state_47913;
if(cljs.core.truth_(inst_47896)){
var statearr_47921_49351 = state_47913__$1;
(statearr_47921_49351[(1)] = (9));

} else {
var statearr_47922_49353 = state_47913__$1;
(statearr_47922_49353[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (3))){
var inst_47911 = (state_47913[(2)]);
var state_47913__$1 = state_47913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47913__$1,inst_47911);
} else {
if((state_val_47914 === (12))){
var state_47913__$1 = state_47913;
var statearr_47923_49354 = state_47913__$1;
(statearr_47923_49354[(2)] = null);

(statearr_47923_49354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (2))){
var state_47913__$1 = state_47913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47913__$1,(4),ch);
} else {
if((state_val_47914 === (11))){
var inst_47890 = (state_47913[(7)]);
var inst_47900 = (state_47913[(2)]);
var state_47913__$1 = state_47913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47913__$1,(8),inst_47900,inst_47890);
} else {
if((state_val_47914 === (9))){
var state_47913__$1 = state_47913;
var statearr_47924_49355 = state_47913__$1;
(statearr_47924_49355[(2)] = tc);

(statearr_47924_49355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (5))){
var inst_47893 = cljs.core.async.close_BANG_(tc);
var inst_47894 = cljs.core.async.close_BANG_(fc);
var state_47913__$1 = (function (){var statearr_47925 = state_47913;
(statearr_47925[(8)] = inst_47893);

return statearr_47925;
})();
var statearr_47926_49356 = state_47913__$1;
(statearr_47926_49356[(2)] = inst_47894);

(statearr_47926_49356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (14))){
var inst_47907 = (state_47913[(2)]);
var state_47913__$1 = state_47913;
var statearr_47927_49357 = state_47913__$1;
(statearr_47927_49357[(2)] = inst_47907);

(statearr_47927_49357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (10))){
var state_47913__$1 = state_47913;
var statearr_47928_49358 = state_47913__$1;
(statearr_47928_49358[(2)] = fc);

(statearr_47928_49358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47914 === (8))){
var inst_47902 = (state_47913[(2)]);
var state_47913__$1 = state_47913;
if(cljs.core.truth_(inst_47902)){
var statearr_47929_49359 = state_47913__$1;
(statearr_47929_49359[(1)] = (12));

} else {
var statearr_47930_49360 = state_47913__$1;
(statearr_47930_49360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_47931 = [null,null,null,null,null,null,null,null,null];
(statearr_47931[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_47931[(1)] = (1));

return statearr_47931;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_47913){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47913);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47932){var ex__47540__auto__ = e47932;
var statearr_47933_49361 = state_47913;
(statearr_47933_49361[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47913[(4)]))){
var statearr_47934_49362 = state_47913;
(statearr_47934_49362[(1)] = cljs.core.first((state_47913[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49363 = state_47913;
state_47913 = G__49363;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_47913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_47913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47935 = f__47573__auto__();
(statearr_47935[(6)] = c__47572__auto___49339);

return statearr_47935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47572__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47957){
var state_val_47958 = (state_47957[(1)]);
if((state_val_47958 === (7))){
var inst_47953 = (state_47957[(2)]);
var state_47957__$1 = state_47957;
var statearr_47959_49364 = state_47957__$1;
(statearr_47959_49364[(2)] = inst_47953);

(statearr_47959_49364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (1))){
var inst_47936 = init;
var inst_47937 = inst_47936;
var state_47957__$1 = (function (){var statearr_47960 = state_47957;
(statearr_47960[(7)] = inst_47937);

return statearr_47960;
})();
var statearr_47961_49365 = state_47957__$1;
(statearr_47961_49365[(2)] = null);

(statearr_47961_49365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (4))){
var inst_47940 = (state_47957[(8)]);
var inst_47940__$1 = (state_47957[(2)]);
var inst_47941 = (inst_47940__$1 == null);
var state_47957__$1 = (function (){var statearr_47962 = state_47957;
(statearr_47962[(8)] = inst_47940__$1);

return statearr_47962;
})();
if(cljs.core.truth_(inst_47941)){
var statearr_47963_49366 = state_47957__$1;
(statearr_47963_49366[(1)] = (5));

} else {
var statearr_47964_49367 = state_47957__$1;
(statearr_47964_49367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (6))){
var inst_47937 = (state_47957[(7)]);
var inst_47944 = (state_47957[(9)]);
var inst_47940 = (state_47957[(8)]);
var inst_47944__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47937,inst_47940) : f.call(null,inst_47937,inst_47940));
var inst_47945 = cljs.core.reduced_QMARK_(inst_47944__$1);
var state_47957__$1 = (function (){var statearr_47965 = state_47957;
(statearr_47965[(9)] = inst_47944__$1);

return statearr_47965;
})();
if(inst_47945){
var statearr_47966_49368 = state_47957__$1;
(statearr_47966_49368[(1)] = (8));

} else {
var statearr_47967_49369 = state_47957__$1;
(statearr_47967_49369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (3))){
var inst_47955 = (state_47957[(2)]);
var state_47957__$1 = state_47957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47957__$1,inst_47955);
} else {
if((state_val_47958 === (2))){
var state_47957__$1 = state_47957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47957__$1,(4),ch);
} else {
if((state_val_47958 === (9))){
var inst_47944 = (state_47957[(9)]);
var inst_47937 = inst_47944;
var state_47957__$1 = (function (){var statearr_47968 = state_47957;
(statearr_47968[(7)] = inst_47937);

return statearr_47968;
})();
var statearr_47969_49370 = state_47957__$1;
(statearr_47969_49370[(2)] = null);

(statearr_47969_49370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (5))){
var inst_47937 = (state_47957[(7)]);
var state_47957__$1 = state_47957;
var statearr_47970_49371 = state_47957__$1;
(statearr_47970_49371[(2)] = inst_47937);

(statearr_47970_49371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (10))){
var inst_47951 = (state_47957[(2)]);
var state_47957__$1 = state_47957;
var statearr_47971_49372 = state_47957__$1;
(statearr_47971_49372[(2)] = inst_47951);

(statearr_47971_49372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47958 === (8))){
var inst_47944 = (state_47957[(9)]);
var inst_47947 = cljs.core.deref(inst_47944);
var state_47957__$1 = state_47957;
var statearr_47972_49373 = state_47957__$1;
(statearr_47972_49373[(2)] = inst_47947);

(statearr_47972_49373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47537__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47537__auto____0 = (function (){
var statearr_47973 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47973[(0)] = cljs$core$async$reduce_$_state_machine__47537__auto__);

(statearr_47973[(1)] = (1));

return statearr_47973;
});
var cljs$core$async$reduce_$_state_machine__47537__auto____1 = (function (state_47957){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47957);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47974){var ex__47540__auto__ = e47974;
var statearr_47975_49377 = state_47957;
(statearr_47975_49377[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47957[(4)]))){
var statearr_47976_49378 = state_47957;
(statearr_47976_49378[(1)] = cljs.core.first((state_47957[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49379 = state_47957;
state_47957 = G__49379;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47537__auto__ = function(state_47957){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47537__auto____1.call(this,state_47957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47537__auto____0;
cljs$core$async$reduce_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47537__auto____1;
return cljs$core$async$reduce_$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47977 = f__47573__auto__();
(statearr_47977[(6)] = c__47572__auto__);

return statearr_47977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

return c__47572__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47572__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_47983){
var state_val_47984 = (state_47983[(1)]);
if((state_val_47984 === (1))){
var inst_47978 = cljs.core.async.reduce(f__$1,init,ch);
var state_47983__$1 = state_47983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47983__$1,(2),inst_47978);
} else {
if((state_val_47984 === (2))){
var inst_47980 = (state_47983[(2)]);
var inst_47981 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47980) : f__$1.call(null,inst_47980));
var state_47983__$1 = state_47983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47983__$1,inst_47981);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47537__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47537__auto____0 = (function (){
var statearr_47985 = [null,null,null,null,null,null,null];
(statearr_47985[(0)] = cljs$core$async$transduce_$_state_machine__47537__auto__);

(statearr_47985[(1)] = (1));

return statearr_47985;
});
var cljs$core$async$transduce_$_state_machine__47537__auto____1 = (function (state_47983){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_47983);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e47986){var ex__47540__auto__ = e47986;
var statearr_47987_49386 = state_47983;
(statearr_47987_49386[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_47983[(4)]))){
var statearr_47988_49387 = state_47983;
(statearr_47988_49387[(1)] = cljs.core.first((state_47983[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49388 = state_47983;
state_47983 = G__49388;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47537__auto__ = function(state_47983){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47537__auto____1.call(this,state_47983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47537__auto____0;
cljs$core$async$transduce_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47537__auto____1;
return cljs$core$async$transduce_$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_47989 = f__47573__auto__();
(statearr_47989[(6)] = c__47572__auto__);

return statearr_47989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

return c__47572__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47991 = arguments.length;
switch (G__47991) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47572__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48016){
var state_val_48017 = (state_48016[(1)]);
if((state_val_48017 === (7))){
var inst_47998 = (state_48016[(2)]);
var state_48016__$1 = state_48016;
var statearr_48018_49390 = state_48016__$1;
(statearr_48018_49390[(2)] = inst_47998);

(statearr_48018_49390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (1))){
var inst_47992 = cljs.core.seq(coll);
var inst_47993 = inst_47992;
var state_48016__$1 = (function (){var statearr_48019 = state_48016;
(statearr_48019[(7)] = inst_47993);

return statearr_48019;
})();
var statearr_48020_49395 = state_48016__$1;
(statearr_48020_49395[(2)] = null);

(statearr_48020_49395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (4))){
var inst_47993 = (state_48016[(7)]);
var inst_47996 = cljs.core.first(inst_47993);
var state_48016__$1 = state_48016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48016__$1,(7),ch,inst_47996);
} else {
if((state_val_48017 === (13))){
var inst_48010 = (state_48016[(2)]);
var state_48016__$1 = state_48016;
var statearr_48021_49398 = state_48016__$1;
(statearr_48021_49398[(2)] = inst_48010);

(statearr_48021_49398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (6))){
var inst_48001 = (state_48016[(2)]);
var state_48016__$1 = state_48016;
if(cljs.core.truth_(inst_48001)){
var statearr_48022_49401 = state_48016__$1;
(statearr_48022_49401[(1)] = (8));

} else {
var statearr_48023_49402 = state_48016__$1;
(statearr_48023_49402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (3))){
var inst_48014 = (state_48016[(2)]);
var state_48016__$1 = state_48016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48016__$1,inst_48014);
} else {
if((state_val_48017 === (12))){
var state_48016__$1 = state_48016;
var statearr_48024_49403 = state_48016__$1;
(statearr_48024_49403[(2)] = null);

(statearr_48024_49403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (2))){
var inst_47993 = (state_48016[(7)]);
var state_48016__$1 = state_48016;
if(cljs.core.truth_(inst_47993)){
var statearr_48025_49407 = state_48016__$1;
(statearr_48025_49407[(1)] = (4));

} else {
var statearr_48026_49408 = state_48016__$1;
(statearr_48026_49408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (11))){
var inst_48007 = cljs.core.async.close_BANG_(ch);
var state_48016__$1 = state_48016;
var statearr_48027_49413 = state_48016__$1;
(statearr_48027_49413[(2)] = inst_48007);

(statearr_48027_49413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (9))){
var state_48016__$1 = state_48016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48028_49414 = state_48016__$1;
(statearr_48028_49414[(1)] = (11));

} else {
var statearr_48029_49421 = state_48016__$1;
(statearr_48029_49421[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (5))){
var inst_47993 = (state_48016[(7)]);
var state_48016__$1 = state_48016;
var statearr_48030_49422 = state_48016__$1;
(statearr_48030_49422[(2)] = inst_47993);

(statearr_48030_49422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (10))){
var inst_48012 = (state_48016[(2)]);
var state_48016__$1 = state_48016;
var statearr_48031_49423 = state_48016__$1;
(statearr_48031_49423[(2)] = inst_48012);

(statearr_48031_49423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48017 === (8))){
var inst_47993 = (state_48016[(7)]);
var inst_48003 = cljs.core.next(inst_47993);
var inst_47993__$1 = inst_48003;
var state_48016__$1 = (function (){var statearr_48032 = state_48016;
(statearr_48032[(7)] = inst_47993__$1);

return statearr_48032;
})();
var statearr_48033_49424 = state_48016__$1;
(statearr_48033_49424[(2)] = null);

(statearr_48033_49424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48034 = [null,null,null,null,null,null,null,null];
(statearr_48034[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48034[(1)] = (1));

return statearr_48034;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48016){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48016);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48035){var ex__47540__auto__ = e48035;
var statearr_48036_49425 = state_48016;
(statearr_48036_49425[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48016[(4)]))){
var statearr_48037_49426 = state_48016;
(statearr_48037_49426[(1)] = cljs.core.first((state_48016[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49427 = state_48016;
state_48016 = G__49427;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48038 = f__47573__auto__();
(statearr_48038[(6)] = c__47572__auto__);

return statearr_48038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

return c__47572__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48039 = (function (ch,cs,meta48040){
this.ch = ch;
this.cs = cs;
this.meta48040 = meta48040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48041,meta48040__$1){
var self__ = this;
var _48041__$1 = this;
return (new cljs.core.async.t_cljs$core$async48039(self__.ch,self__.cs,meta48040__$1));
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48041){
var self__ = this;
var _48041__$1 = this;
return self__.meta48040;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48040","meta48040",-1053535648,null)], null);
}));

(cljs.core.async.t_cljs$core$async48039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48039");

(cljs.core.async.t_cljs$core$async48039.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48039.
 */
cljs.core.async.__GT_t_cljs$core$async48039 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48039(ch__$1,cs__$1,meta48040){
return (new cljs.core.async.t_cljs$core$async48039(ch__$1,cs__$1,meta48040));
});

}

return (new cljs.core.async.t_cljs$core$async48039(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47572__auto___49440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48174){
var state_val_48175 = (state_48174[(1)]);
if((state_val_48175 === (7))){
var inst_48170 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48176_49441 = state_48174__$1;
(statearr_48176_49441[(2)] = inst_48170);

(statearr_48176_49441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (20))){
var inst_48075 = (state_48174[(7)]);
var inst_48087 = cljs.core.first(inst_48075);
var inst_48088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48087,(0),null);
var inst_48089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48087,(1),null);
var state_48174__$1 = (function (){var statearr_48177 = state_48174;
(statearr_48177[(8)] = inst_48088);

return statearr_48177;
})();
if(cljs.core.truth_(inst_48089)){
var statearr_48178_49442 = state_48174__$1;
(statearr_48178_49442[(1)] = (22));

} else {
var statearr_48179_49443 = state_48174__$1;
(statearr_48179_49443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (27))){
var inst_48044 = (state_48174[(9)]);
var inst_48117 = (state_48174[(10)]);
var inst_48124 = (state_48174[(11)]);
var inst_48119 = (state_48174[(12)]);
var inst_48124__$1 = cljs.core._nth(inst_48117,inst_48119);
var inst_48125 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48124__$1,inst_48044,done);
var state_48174__$1 = (function (){var statearr_48180 = state_48174;
(statearr_48180[(11)] = inst_48124__$1);

return statearr_48180;
})();
if(cljs.core.truth_(inst_48125)){
var statearr_48181_49444 = state_48174__$1;
(statearr_48181_49444[(1)] = (30));

} else {
var statearr_48182_49445 = state_48174__$1;
(statearr_48182_49445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (1))){
var state_48174__$1 = state_48174;
var statearr_48183_49452 = state_48174__$1;
(statearr_48183_49452[(2)] = null);

(statearr_48183_49452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (24))){
var inst_48075 = (state_48174[(7)]);
var inst_48094 = (state_48174[(2)]);
var inst_48095 = cljs.core.next(inst_48075);
var inst_48053 = inst_48095;
var inst_48054 = null;
var inst_48055 = (0);
var inst_48056 = (0);
var state_48174__$1 = (function (){var statearr_48184 = state_48174;
(statearr_48184[(13)] = inst_48055);

(statearr_48184[(14)] = inst_48054);

(statearr_48184[(15)] = inst_48094);

(statearr_48184[(16)] = inst_48056);

(statearr_48184[(17)] = inst_48053);

return statearr_48184;
})();
var statearr_48185_49453 = state_48174__$1;
(statearr_48185_49453[(2)] = null);

(statearr_48185_49453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (39))){
var state_48174__$1 = state_48174;
var statearr_48189_49454 = state_48174__$1;
(statearr_48189_49454[(2)] = null);

(statearr_48189_49454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (4))){
var inst_48044 = (state_48174[(9)]);
var inst_48044__$1 = (state_48174[(2)]);
var inst_48045 = (inst_48044__$1 == null);
var state_48174__$1 = (function (){var statearr_48190 = state_48174;
(statearr_48190[(9)] = inst_48044__$1);

return statearr_48190;
})();
if(cljs.core.truth_(inst_48045)){
var statearr_48191_49455 = state_48174__$1;
(statearr_48191_49455[(1)] = (5));

} else {
var statearr_48192_49456 = state_48174__$1;
(statearr_48192_49456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (15))){
var inst_48055 = (state_48174[(13)]);
var inst_48054 = (state_48174[(14)]);
var inst_48056 = (state_48174[(16)]);
var inst_48053 = (state_48174[(17)]);
var inst_48071 = (state_48174[(2)]);
var inst_48072 = (inst_48056 + (1));
var tmp48186 = inst_48055;
var tmp48187 = inst_48054;
var tmp48188 = inst_48053;
var inst_48053__$1 = tmp48188;
var inst_48054__$1 = tmp48187;
var inst_48055__$1 = tmp48186;
var inst_48056__$1 = inst_48072;
var state_48174__$1 = (function (){var statearr_48193 = state_48174;
(statearr_48193[(18)] = inst_48071);

(statearr_48193[(13)] = inst_48055__$1);

(statearr_48193[(14)] = inst_48054__$1);

(statearr_48193[(16)] = inst_48056__$1);

(statearr_48193[(17)] = inst_48053__$1);

return statearr_48193;
})();
var statearr_48194_49457 = state_48174__$1;
(statearr_48194_49457[(2)] = null);

(statearr_48194_49457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (21))){
var inst_48098 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48198_49458 = state_48174__$1;
(statearr_48198_49458[(2)] = inst_48098);

(statearr_48198_49458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (31))){
var inst_48124 = (state_48174[(11)]);
var inst_48128 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48124);
var state_48174__$1 = state_48174;
var statearr_48199_49459 = state_48174__$1;
(statearr_48199_49459[(2)] = inst_48128);

(statearr_48199_49459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (32))){
var inst_48117 = (state_48174[(10)]);
var inst_48118 = (state_48174[(19)]);
var inst_48116 = (state_48174[(20)]);
var inst_48119 = (state_48174[(12)]);
var inst_48130 = (state_48174[(2)]);
var inst_48131 = (inst_48119 + (1));
var tmp48195 = inst_48117;
var tmp48196 = inst_48118;
var tmp48197 = inst_48116;
var inst_48116__$1 = tmp48197;
var inst_48117__$1 = tmp48195;
var inst_48118__$1 = tmp48196;
var inst_48119__$1 = inst_48131;
var state_48174__$1 = (function (){var statearr_48200 = state_48174;
(statearr_48200[(10)] = inst_48117__$1);

(statearr_48200[(19)] = inst_48118__$1);

(statearr_48200[(20)] = inst_48116__$1);

(statearr_48200[(21)] = inst_48130);

(statearr_48200[(12)] = inst_48119__$1);

return statearr_48200;
})();
var statearr_48201_49460 = state_48174__$1;
(statearr_48201_49460[(2)] = null);

(statearr_48201_49460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (40))){
var inst_48143 = (state_48174[(22)]);
var inst_48147 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48143);
var state_48174__$1 = state_48174;
var statearr_48202_49461 = state_48174__$1;
(statearr_48202_49461[(2)] = inst_48147);

(statearr_48202_49461[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (33))){
var inst_48134 = (state_48174[(23)]);
var inst_48136 = cljs.core.chunked_seq_QMARK_(inst_48134);
var state_48174__$1 = state_48174;
if(inst_48136){
var statearr_48203_49462 = state_48174__$1;
(statearr_48203_49462[(1)] = (36));

} else {
var statearr_48204_49463 = state_48174__$1;
(statearr_48204_49463[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (13))){
var inst_48065 = (state_48174[(24)]);
var inst_48068 = cljs.core.async.close_BANG_(inst_48065);
var state_48174__$1 = state_48174;
var statearr_48205_49464 = state_48174__$1;
(statearr_48205_49464[(2)] = inst_48068);

(statearr_48205_49464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (22))){
var inst_48088 = (state_48174[(8)]);
var inst_48091 = cljs.core.async.close_BANG_(inst_48088);
var state_48174__$1 = state_48174;
var statearr_48206_49465 = state_48174__$1;
(statearr_48206_49465[(2)] = inst_48091);

(statearr_48206_49465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (36))){
var inst_48134 = (state_48174[(23)]);
var inst_48138 = cljs.core.chunk_first(inst_48134);
var inst_48139 = cljs.core.chunk_rest(inst_48134);
var inst_48140 = cljs.core.count(inst_48138);
var inst_48116 = inst_48139;
var inst_48117 = inst_48138;
var inst_48118 = inst_48140;
var inst_48119 = (0);
var state_48174__$1 = (function (){var statearr_48207 = state_48174;
(statearr_48207[(10)] = inst_48117);

(statearr_48207[(19)] = inst_48118);

(statearr_48207[(20)] = inst_48116);

(statearr_48207[(12)] = inst_48119);

return statearr_48207;
})();
var statearr_48208_49466 = state_48174__$1;
(statearr_48208_49466[(2)] = null);

(statearr_48208_49466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (41))){
var inst_48134 = (state_48174[(23)]);
var inst_48149 = (state_48174[(2)]);
var inst_48150 = cljs.core.next(inst_48134);
var inst_48116 = inst_48150;
var inst_48117 = null;
var inst_48118 = (0);
var inst_48119 = (0);
var state_48174__$1 = (function (){var statearr_48209 = state_48174;
(statearr_48209[(10)] = inst_48117);

(statearr_48209[(19)] = inst_48118);

(statearr_48209[(20)] = inst_48116);

(statearr_48209[(25)] = inst_48149);

(statearr_48209[(12)] = inst_48119);

return statearr_48209;
})();
var statearr_48210_49472 = state_48174__$1;
(statearr_48210_49472[(2)] = null);

(statearr_48210_49472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (43))){
var state_48174__$1 = state_48174;
var statearr_48211_49473 = state_48174__$1;
(statearr_48211_49473[(2)] = null);

(statearr_48211_49473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (29))){
var inst_48158 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48212_49474 = state_48174__$1;
(statearr_48212_49474[(2)] = inst_48158);

(statearr_48212_49474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (44))){
var inst_48167 = (state_48174[(2)]);
var state_48174__$1 = (function (){var statearr_48213 = state_48174;
(statearr_48213[(26)] = inst_48167);

return statearr_48213;
})();
var statearr_48214_49475 = state_48174__$1;
(statearr_48214_49475[(2)] = null);

(statearr_48214_49475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (6))){
var inst_48108 = (state_48174[(27)]);
var inst_48107 = cljs.core.deref(cs);
var inst_48108__$1 = cljs.core.keys(inst_48107);
var inst_48109 = cljs.core.count(inst_48108__$1);
var inst_48110 = cljs.core.reset_BANG_(dctr,inst_48109);
var inst_48115 = cljs.core.seq(inst_48108__$1);
var inst_48116 = inst_48115;
var inst_48117 = null;
var inst_48118 = (0);
var inst_48119 = (0);
var state_48174__$1 = (function (){var statearr_48215 = state_48174;
(statearr_48215[(10)] = inst_48117);

(statearr_48215[(27)] = inst_48108__$1);

(statearr_48215[(19)] = inst_48118);

(statearr_48215[(20)] = inst_48116);

(statearr_48215[(12)] = inst_48119);

(statearr_48215[(28)] = inst_48110);

return statearr_48215;
})();
var statearr_48216_49476 = state_48174__$1;
(statearr_48216_49476[(2)] = null);

(statearr_48216_49476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (28))){
var inst_48134 = (state_48174[(23)]);
var inst_48116 = (state_48174[(20)]);
var inst_48134__$1 = cljs.core.seq(inst_48116);
var state_48174__$1 = (function (){var statearr_48217 = state_48174;
(statearr_48217[(23)] = inst_48134__$1);

return statearr_48217;
})();
if(inst_48134__$1){
var statearr_48218_49477 = state_48174__$1;
(statearr_48218_49477[(1)] = (33));

} else {
var statearr_48219_49478 = state_48174__$1;
(statearr_48219_49478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (25))){
var inst_48118 = (state_48174[(19)]);
var inst_48119 = (state_48174[(12)]);
var inst_48121 = (inst_48119 < inst_48118);
var inst_48122 = inst_48121;
var state_48174__$1 = state_48174;
if(cljs.core.truth_(inst_48122)){
var statearr_48220_49479 = state_48174__$1;
(statearr_48220_49479[(1)] = (27));

} else {
var statearr_48221_49480 = state_48174__$1;
(statearr_48221_49480[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (34))){
var state_48174__$1 = state_48174;
var statearr_48222_49482 = state_48174__$1;
(statearr_48222_49482[(2)] = null);

(statearr_48222_49482[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (17))){
var state_48174__$1 = state_48174;
var statearr_48223_49484 = state_48174__$1;
(statearr_48223_49484[(2)] = null);

(statearr_48223_49484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (3))){
var inst_48172 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48174__$1,inst_48172);
} else {
if((state_val_48175 === (12))){
var inst_48103 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48224_49485 = state_48174__$1;
(statearr_48224_49485[(2)] = inst_48103);

(statearr_48224_49485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (2))){
var state_48174__$1 = state_48174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48174__$1,(4),ch);
} else {
if((state_val_48175 === (23))){
var state_48174__$1 = state_48174;
var statearr_48225_49486 = state_48174__$1;
(statearr_48225_49486[(2)] = null);

(statearr_48225_49486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (35))){
var inst_48156 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48226_49487 = state_48174__$1;
(statearr_48226_49487[(2)] = inst_48156);

(statearr_48226_49487[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (19))){
var inst_48075 = (state_48174[(7)]);
var inst_48079 = cljs.core.chunk_first(inst_48075);
var inst_48080 = cljs.core.chunk_rest(inst_48075);
var inst_48081 = cljs.core.count(inst_48079);
var inst_48053 = inst_48080;
var inst_48054 = inst_48079;
var inst_48055 = inst_48081;
var inst_48056 = (0);
var state_48174__$1 = (function (){var statearr_48227 = state_48174;
(statearr_48227[(13)] = inst_48055);

(statearr_48227[(14)] = inst_48054);

(statearr_48227[(16)] = inst_48056);

(statearr_48227[(17)] = inst_48053);

return statearr_48227;
})();
var statearr_48228_49490 = state_48174__$1;
(statearr_48228_49490[(2)] = null);

(statearr_48228_49490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (11))){
var inst_48075 = (state_48174[(7)]);
var inst_48053 = (state_48174[(17)]);
var inst_48075__$1 = cljs.core.seq(inst_48053);
var state_48174__$1 = (function (){var statearr_48229 = state_48174;
(statearr_48229[(7)] = inst_48075__$1);

return statearr_48229;
})();
if(inst_48075__$1){
var statearr_48230_49491 = state_48174__$1;
(statearr_48230_49491[(1)] = (16));

} else {
var statearr_48231_49492 = state_48174__$1;
(statearr_48231_49492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (9))){
var inst_48105 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48232_49493 = state_48174__$1;
(statearr_48232_49493[(2)] = inst_48105);

(statearr_48232_49493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (5))){
var inst_48051 = cljs.core.deref(cs);
var inst_48052 = cljs.core.seq(inst_48051);
var inst_48053 = inst_48052;
var inst_48054 = null;
var inst_48055 = (0);
var inst_48056 = (0);
var state_48174__$1 = (function (){var statearr_48233 = state_48174;
(statearr_48233[(13)] = inst_48055);

(statearr_48233[(14)] = inst_48054);

(statearr_48233[(16)] = inst_48056);

(statearr_48233[(17)] = inst_48053);

return statearr_48233;
})();
var statearr_48234_49494 = state_48174__$1;
(statearr_48234_49494[(2)] = null);

(statearr_48234_49494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (14))){
var state_48174__$1 = state_48174;
var statearr_48235_49495 = state_48174__$1;
(statearr_48235_49495[(2)] = null);

(statearr_48235_49495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (45))){
var inst_48164 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48236_49496 = state_48174__$1;
(statearr_48236_49496[(2)] = inst_48164);

(statearr_48236_49496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (26))){
var inst_48108 = (state_48174[(27)]);
var inst_48160 = (state_48174[(2)]);
var inst_48161 = cljs.core.seq(inst_48108);
var state_48174__$1 = (function (){var statearr_48237 = state_48174;
(statearr_48237[(29)] = inst_48160);

return statearr_48237;
})();
if(inst_48161){
var statearr_48238_49497 = state_48174__$1;
(statearr_48238_49497[(1)] = (42));

} else {
var statearr_48239_49498 = state_48174__$1;
(statearr_48239_49498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (16))){
var inst_48075 = (state_48174[(7)]);
var inst_48077 = cljs.core.chunked_seq_QMARK_(inst_48075);
var state_48174__$1 = state_48174;
if(inst_48077){
var statearr_48240_49500 = state_48174__$1;
(statearr_48240_49500[(1)] = (19));

} else {
var statearr_48241_49501 = state_48174__$1;
(statearr_48241_49501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (38))){
var inst_48153 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48242_49503 = state_48174__$1;
(statearr_48242_49503[(2)] = inst_48153);

(statearr_48242_49503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (30))){
var state_48174__$1 = state_48174;
var statearr_48243_49504 = state_48174__$1;
(statearr_48243_49504[(2)] = null);

(statearr_48243_49504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (10))){
var inst_48054 = (state_48174[(14)]);
var inst_48056 = (state_48174[(16)]);
var inst_48064 = cljs.core._nth(inst_48054,inst_48056);
var inst_48065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48064,(0),null);
var inst_48066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48064,(1),null);
var state_48174__$1 = (function (){var statearr_48244 = state_48174;
(statearr_48244[(24)] = inst_48065);

return statearr_48244;
})();
if(cljs.core.truth_(inst_48066)){
var statearr_48245_49505 = state_48174__$1;
(statearr_48245_49505[(1)] = (13));

} else {
var statearr_48246_49506 = state_48174__$1;
(statearr_48246_49506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (18))){
var inst_48101 = (state_48174[(2)]);
var state_48174__$1 = state_48174;
var statearr_48247_49507 = state_48174__$1;
(statearr_48247_49507[(2)] = inst_48101);

(statearr_48247_49507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (42))){
var state_48174__$1 = state_48174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48174__$1,(45),dchan);
} else {
if((state_val_48175 === (37))){
var inst_48044 = (state_48174[(9)]);
var inst_48143 = (state_48174[(22)]);
var inst_48134 = (state_48174[(23)]);
var inst_48143__$1 = cljs.core.first(inst_48134);
var inst_48144 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48143__$1,inst_48044,done);
var state_48174__$1 = (function (){var statearr_48248 = state_48174;
(statearr_48248[(22)] = inst_48143__$1);

return statearr_48248;
})();
if(cljs.core.truth_(inst_48144)){
var statearr_48249_49508 = state_48174__$1;
(statearr_48249_49508[(1)] = (39));

} else {
var statearr_48250_49509 = state_48174__$1;
(statearr_48250_49509[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48175 === (8))){
var inst_48055 = (state_48174[(13)]);
var inst_48056 = (state_48174[(16)]);
var inst_48058 = (inst_48056 < inst_48055);
var inst_48059 = inst_48058;
var state_48174__$1 = state_48174;
if(cljs.core.truth_(inst_48059)){
var statearr_48251_49510 = state_48174__$1;
(statearr_48251_49510[(1)] = (10));

} else {
var statearr_48252_49511 = state_48174__$1;
(statearr_48252_49511[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__47537__auto__ = null;
var cljs$core$async$mult_$_state_machine__47537__auto____0 = (function (){
var statearr_48253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48253[(0)] = cljs$core$async$mult_$_state_machine__47537__auto__);

(statearr_48253[(1)] = (1));

return statearr_48253;
});
var cljs$core$async$mult_$_state_machine__47537__auto____1 = (function (state_48174){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48174);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48254){var ex__47540__auto__ = e48254;
var statearr_48255_49512 = state_48174;
(statearr_48255_49512[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48174[(4)]))){
var statearr_48256_49513 = state_48174;
(statearr_48256_49513[(1)] = cljs.core.first((state_48174[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49514 = state_48174;
state_48174 = G__49514;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47537__auto__ = function(state_48174){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47537__auto____1.call(this,state_48174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47537__auto____0;
cljs$core$async$mult_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47537__auto____1;
return cljs$core$async$mult_$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48257 = f__47573__auto__();
(statearr_48257[(6)] = c__47572__auto___49440);

return statearr_48257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48259 = arguments.length;
switch (G__48259) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49528 = arguments.length;
var i__4790__auto___49529 = (0);
while(true){
if((i__4790__auto___49529 < len__4789__auto___49528)){
args__4795__auto__.push((arguments[i__4790__auto___49529]));

var G__49530 = (i__4790__auto___49529 + (1));
i__4790__auto___49529 = G__49530;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48264){
var map__48265 = p__48264;
var map__48265__$1 = (((((!((map__48265 == null))))?(((((map__48265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48265):map__48265);
var opts = map__48265__$1;
var statearr_48267_49537 = state;
(statearr_48267_49537[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48268_49538 = state;
(statearr_48268_49538[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48269_49539 = state;
(statearr_48269_49539[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48260){
var G__48261 = cljs.core.first(seq48260);
var seq48260__$1 = cljs.core.next(seq48260);
var G__48262 = cljs.core.first(seq48260__$1);
var seq48260__$2 = cljs.core.next(seq48260__$1);
var G__48263 = cljs.core.first(seq48260__$2);
var seq48260__$3 = cljs.core.next(seq48260__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48261,G__48262,G__48263,seq48260__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48270 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48271){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48271 = meta48271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48272,meta48271__$1){
var self__ = this;
var _48272__$1 = this;
return (new cljs.core.async.t_cljs$core$async48270(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48271__$1));
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48272){
var self__ = this;
var _48272__$1 = this;
return self__.meta48271;
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48271","meta48271",-1787177964,null)], null);
}));

(cljs.core.async.t_cljs$core$async48270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48270");

(cljs.core.async.t_cljs$core$async48270.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48270.
 */
cljs.core.async.__GT_t_cljs$core$async48270 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48270(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48271){
return (new cljs.core.async.t_cljs$core$async48270(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48271));
});

}

return (new cljs.core.async.t_cljs$core$async48270(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47572__auto___49549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48374){
var state_val_48375 = (state_48374[(1)]);
if((state_val_48375 === (7))){
var inst_48289 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48376_49550 = state_48374__$1;
(statearr_48376_49550[(2)] = inst_48289);

(statearr_48376_49550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (20))){
var inst_48301 = (state_48374[(7)]);
var state_48374__$1 = state_48374;
var statearr_48377_49551 = state_48374__$1;
(statearr_48377_49551[(2)] = inst_48301);

(statearr_48377_49551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (27))){
var state_48374__$1 = state_48374;
var statearr_48378_49552 = state_48374__$1;
(statearr_48378_49552[(2)] = null);

(statearr_48378_49552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (1))){
var inst_48276 = (state_48374[(8)]);
var inst_48276__$1 = calc_state();
var inst_48278 = (inst_48276__$1 == null);
var inst_48279 = cljs.core.not(inst_48278);
var state_48374__$1 = (function (){var statearr_48379 = state_48374;
(statearr_48379[(8)] = inst_48276__$1);

return statearr_48379;
})();
if(inst_48279){
var statearr_48380_49553 = state_48374__$1;
(statearr_48380_49553[(1)] = (2));

} else {
var statearr_48381_49554 = state_48374__$1;
(statearr_48381_49554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (24))){
var inst_48334 = (state_48374[(9)]);
var inst_48325 = (state_48374[(10)]);
var inst_48348 = (state_48374[(11)]);
var inst_48348__$1 = (inst_48325.cljs$core$IFn$_invoke$arity$1 ? inst_48325.cljs$core$IFn$_invoke$arity$1(inst_48334) : inst_48325.call(null,inst_48334));
var state_48374__$1 = (function (){var statearr_48382 = state_48374;
(statearr_48382[(11)] = inst_48348__$1);

return statearr_48382;
})();
if(cljs.core.truth_(inst_48348__$1)){
var statearr_48383_49559 = state_48374__$1;
(statearr_48383_49559[(1)] = (29));

} else {
var statearr_48384_49560 = state_48374__$1;
(statearr_48384_49560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (4))){
var inst_48292 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48292)){
var statearr_48385_49561 = state_48374__$1;
(statearr_48385_49561[(1)] = (8));

} else {
var statearr_48386_49562 = state_48374__$1;
(statearr_48386_49562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (15))){
var inst_48319 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48319)){
var statearr_48387_49563 = state_48374__$1;
(statearr_48387_49563[(1)] = (19));

} else {
var statearr_48388_49564 = state_48374__$1;
(statearr_48388_49564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (21))){
var inst_48324 = (state_48374[(12)]);
var inst_48324__$1 = (state_48374[(2)]);
var inst_48325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48374__$1 = (function (){var statearr_48389 = state_48374;
(statearr_48389[(12)] = inst_48324__$1);

(statearr_48389[(10)] = inst_48325);

(statearr_48389[(13)] = inst_48326);

return statearr_48389;
})();
return cljs.core.async.ioc_alts_BANG_(state_48374__$1,(22),inst_48327);
} else {
if((state_val_48375 === (31))){
var inst_48356 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48356)){
var statearr_48390_49569 = state_48374__$1;
(statearr_48390_49569[(1)] = (32));

} else {
var statearr_48391_49571 = state_48374__$1;
(statearr_48391_49571[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (32))){
var inst_48333 = (state_48374[(14)]);
var state_48374__$1 = state_48374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48374__$1,(35),out,inst_48333);
} else {
if((state_val_48375 === (33))){
var inst_48324 = (state_48374[(12)]);
var inst_48301 = inst_48324;
var state_48374__$1 = (function (){var statearr_48392 = state_48374;
(statearr_48392[(7)] = inst_48301);

return statearr_48392;
})();
var statearr_48393_49572 = state_48374__$1;
(statearr_48393_49572[(2)] = null);

(statearr_48393_49572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (13))){
var inst_48301 = (state_48374[(7)]);
var inst_48308 = inst_48301.cljs$lang$protocol_mask$partition0$;
var inst_48309 = (inst_48308 & (64));
var inst_48310 = inst_48301.cljs$core$ISeq$;
var inst_48311 = (cljs.core.PROTOCOL_SENTINEL === inst_48310);
var inst_48312 = ((inst_48309) || (inst_48311));
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48312)){
var statearr_48394_49573 = state_48374__$1;
(statearr_48394_49573[(1)] = (16));

} else {
var statearr_48395_49574 = state_48374__$1;
(statearr_48395_49574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (22))){
var inst_48334 = (state_48374[(9)]);
var inst_48333 = (state_48374[(14)]);
var inst_48332 = (state_48374[(2)]);
var inst_48333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48332,(0),null);
var inst_48334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48332,(1),null);
var inst_48335 = (inst_48333__$1 == null);
var inst_48336 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48334__$1,change);
var inst_48337 = ((inst_48335) || (inst_48336));
var state_48374__$1 = (function (){var statearr_48396 = state_48374;
(statearr_48396[(9)] = inst_48334__$1);

(statearr_48396[(14)] = inst_48333__$1);

return statearr_48396;
})();
if(cljs.core.truth_(inst_48337)){
var statearr_48397_49576 = state_48374__$1;
(statearr_48397_49576[(1)] = (23));

} else {
var statearr_48398_49577 = state_48374__$1;
(statearr_48398_49577[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (36))){
var inst_48324 = (state_48374[(12)]);
var inst_48301 = inst_48324;
var state_48374__$1 = (function (){var statearr_48399 = state_48374;
(statearr_48399[(7)] = inst_48301);

return statearr_48399;
})();
var statearr_48400_49582 = state_48374__$1;
(statearr_48400_49582[(2)] = null);

(statearr_48400_49582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (29))){
var inst_48348 = (state_48374[(11)]);
var state_48374__$1 = state_48374;
var statearr_48401_49583 = state_48374__$1;
(statearr_48401_49583[(2)] = inst_48348);

(statearr_48401_49583[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (6))){
var state_48374__$1 = state_48374;
var statearr_48402_49584 = state_48374__$1;
(statearr_48402_49584[(2)] = false);

(statearr_48402_49584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (28))){
var inst_48344 = (state_48374[(2)]);
var inst_48345 = calc_state();
var inst_48301 = inst_48345;
var state_48374__$1 = (function (){var statearr_48403 = state_48374;
(statearr_48403[(7)] = inst_48301);

(statearr_48403[(15)] = inst_48344);

return statearr_48403;
})();
var statearr_48404_49585 = state_48374__$1;
(statearr_48404_49585[(2)] = null);

(statearr_48404_49585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (25))){
var inst_48370 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48405_49586 = state_48374__$1;
(statearr_48405_49586[(2)] = inst_48370);

(statearr_48405_49586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (34))){
var inst_48368 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48406_49587 = state_48374__$1;
(statearr_48406_49587[(2)] = inst_48368);

(statearr_48406_49587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (17))){
var state_48374__$1 = state_48374;
var statearr_48407_49588 = state_48374__$1;
(statearr_48407_49588[(2)] = false);

(statearr_48407_49588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (3))){
var state_48374__$1 = state_48374;
var statearr_48408_49589 = state_48374__$1;
(statearr_48408_49589[(2)] = false);

(statearr_48408_49589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (12))){
var inst_48372 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48374__$1,inst_48372);
} else {
if((state_val_48375 === (2))){
var inst_48276 = (state_48374[(8)]);
var inst_48281 = inst_48276.cljs$lang$protocol_mask$partition0$;
var inst_48282 = (inst_48281 & (64));
var inst_48283 = inst_48276.cljs$core$ISeq$;
var inst_48284 = (cljs.core.PROTOCOL_SENTINEL === inst_48283);
var inst_48285 = ((inst_48282) || (inst_48284));
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48285)){
var statearr_48409_49590 = state_48374__$1;
(statearr_48409_49590[(1)] = (5));

} else {
var statearr_48410_49591 = state_48374__$1;
(statearr_48410_49591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (23))){
var inst_48333 = (state_48374[(14)]);
var inst_48339 = (inst_48333 == null);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48339)){
var statearr_48411_49592 = state_48374__$1;
(statearr_48411_49592[(1)] = (26));

} else {
var statearr_48412_49593 = state_48374__$1;
(statearr_48412_49593[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (35))){
var inst_48359 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48359)){
var statearr_48413_49594 = state_48374__$1;
(statearr_48413_49594[(1)] = (36));

} else {
var statearr_48414_49595 = state_48374__$1;
(statearr_48414_49595[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (19))){
var inst_48301 = (state_48374[(7)]);
var inst_48321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48301);
var state_48374__$1 = state_48374;
var statearr_48415_49596 = state_48374__$1;
(statearr_48415_49596[(2)] = inst_48321);

(statearr_48415_49596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (11))){
var inst_48301 = (state_48374[(7)]);
var inst_48305 = (inst_48301 == null);
var inst_48306 = cljs.core.not(inst_48305);
var state_48374__$1 = state_48374;
if(inst_48306){
var statearr_48416_49597 = state_48374__$1;
(statearr_48416_49597[(1)] = (13));

} else {
var statearr_48417_49598 = state_48374__$1;
(statearr_48417_49598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (9))){
var inst_48276 = (state_48374[(8)]);
var state_48374__$1 = state_48374;
var statearr_48418_49599 = state_48374__$1;
(statearr_48418_49599[(2)] = inst_48276);

(statearr_48418_49599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (5))){
var state_48374__$1 = state_48374;
var statearr_48419_49600 = state_48374__$1;
(statearr_48419_49600[(2)] = true);

(statearr_48419_49600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (14))){
var state_48374__$1 = state_48374;
var statearr_48420_49604 = state_48374__$1;
(statearr_48420_49604[(2)] = false);

(statearr_48420_49604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (26))){
var inst_48334 = (state_48374[(9)]);
var inst_48341 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48334);
var state_48374__$1 = state_48374;
var statearr_48421_49605 = state_48374__$1;
(statearr_48421_49605[(2)] = inst_48341);

(statearr_48421_49605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (16))){
var state_48374__$1 = state_48374;
var statearr_48422_49606 = state_48374__$1;
(statearr_48422_49606[(2)] = true);

(statearr_48422_49606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (38))){
var inst_48364 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48423_49607 = state_48374__$1;
(statearr_48423_49607[(2)] = inst_48364);

(statearr_48423_49607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (30))){
var inst_48334 = (state_48374[(9)]);
var inst_48325 = (state_48374[(10)]);
var inst_48326 = (state_48374[(13)]);
var inst_48351 = cljs.core.empty_QMARK_(inst_48325);
var inst_48352 = (inst_48326.cljs$core$IFn$_invoke$arity$1 ? inst_48326.cljs$core$IFn$_invoke$arity$1(inst_48334) : inst_48326.call(null,inst_48334));
var inst_48353 = cljs.core.not(inst_48352);
var inst_48354 = ((inst_48351) && (inst_48353));
var state_48374__$1 = state_48374;
var statearr_48424_49608 = state_48374__$1;
(statearr_48424_49608[(2)] = inst_48354);

(statearr_48424_49608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (10))){
var inst_48276 = (state_48374[(8)]);
var inst_48297 = (state_48374[(2)]);
var inst_48298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48297,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48297,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48297,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48301 = inst_48276;
var state_48374__$1 = (function (){var statearr_48425 = state_48374;
(statearr_48425[(16)] = inst_48300);

(statearr_48425[(7)] = inst_48301);

(statearr_48425[(17)] = inst_48298);

(statearr_48425[(18)] = inst_48299);

return statearr_48425;
})();
var statearr_48426_49609 = state_48374__$1;
(statearr_48426_49609[(2)] = null);

(statearr_48426_49609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (18))){
var inst_48316 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48427_49610 = state_48374__$1;
(statearr_48427_49610[(2)] = inst_48316);

(statearr_48427_49610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (37))){
var state_48374__$1 = state_48374;
var statearr_48428_49611 = state_48374__$1;
(statearr_48428_49611[(2)] = null);

(statearr_48428_49611[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (8))){
var inst_48276 = (state_48374[(8)]);
var inst_48294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48276);
var state_48374__$1 = state_48374;
var statearr_48429_49613 = state_48374__$1;
(statearr_48429_49613[(2)] = inst_48294);

(statearr_48429_49613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__47537__auto__ = null;
var cljs$core$async$mix_$_state_machine__47537__auto____0 = (function (){
var statearr_48430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48430[(0)] = cljs$core$async$mix_$_state_machine__47537__auto__);

(statearr_48430[(1)] = (1));

return statearr_48430;
});
var cljs$core$async$mix_$_state_machine__47537__auto____1 = (function (state_48374){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48374);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48431){var ex__47540__auto__ = e48431;
var statearr_48432_49614 = state_48374;
(statearr_48432_49614[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48374[(4)]))){
var statearr_48433_49615 = state_48374;
(statearr_48433_49615[(1)] = cljs.core.first((state_48374[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49616 = state_48374;
state_48374 = G__49616;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47537__auto__ = function(state_48374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47537__auto____1.call(this,state_48374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47537__auto____0;
cljs$core$async$mix_$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47537__auto____1;
return cljs$core$async$mix_$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48434 = f__47573__auto__();
(statearr_48434[(6)] = c__47572__auto___49549);

return statearr_48434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48436 = arguments.length;
switch (G__48436) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48439 = arguments.length;
switch (G__48439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48437_SHARP_){
if(cljs.core.truth_((p1__48437_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48437_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48437_SHARP_.call(null,topic)))){
return p1__48437_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48437_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48441 = meta48441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48442,meta48441__$1){
var self__ = this;
var _48442__$1 = this;
return (new cljs.core.async.t_cljs$core$async48440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48441__$1));
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48442){
var self__ = this;
var _48442__$1 = this;
return self__.meta48441;
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48441","meta48441",-1530937095,null)], null);
}));

(cljs.core.async.t_cljs$core$async48440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48440");

(cljs.core.async.t_cljs$core$async48440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48440.
 */
cljs.core.async.__GT_t_cljs$core$async48440 = (function cljs$core$async$__GT_t_cljs$core$async48440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48441){
return (new cljs.core.async.t_cljs$core$async48440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48441));
});

}

return (new cljs.core.async.t_cljs$core$async48440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47572__auto___49629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48514){
var state_val_48515 = (state_48514[(1)]);
if((state_val_48515 === (7))){
var inst_48510 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48516_49633 = state_48514__$1;
(statearr_48516_49633[(2)] = inst_48510);

(statearr_48516_49633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (20))){
var state_48514__$1 = state_48514;
var statearr_48517_49634 = state_48514__$1;
(statearr_48517_49634[(2)] = null);

(statearr_48517_49634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (1))){
var state_48514__$1 = state_48514;
var statearr_48518_49635 = state_48514__$1;
(statearr_48518_49635[(2)] = null);

(statearr_48518_49635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (24))){
var inst_48493 = (state_48514[(7)]);
var inst_48502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48493);
var state_48514__$1 = state_48514;
var statearr_48519_49636 = state_48514__$1;
(statearr_48519_49636[(2)] = inst_48502);

(statearr_48519_49636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (4))){
var inst_48445 = (state_48514[(8)]);
var inst_48445__$1 = (state_48514[(2)]);
var inst_48446 = (inst_48445__$1 == null);
var state_48514__$1 = (function (){var statearr_48520 = state_48514;
(statearr_48520[(8)] = inst_48445__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48446)){
var statearr_48521_49637 = state_48514__$1;
(statearr_48521_49637[(1)] = (5));

} else {
var statearr_48522_49638 = state_48514__$1;
(statearr_48522_49638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (15))){
var inst_48487 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48523_49639 = state_48514__$1;
(statearr_48523_49639[(2)] = inst_48487);

(statearr_48523_49639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (21))){
var inst_48507 = (state_48514[(2)]);
var state_48514__$1 = (function (){var statearr_48524 = state_48514;
(statearr_48524[(9)] = inst_48507);

return statearr_48524;
})();
var statearr_48525_49640 = state_48514__$1;
(statearr_48525_49640[(2)] = null);

(statearr_48525_49640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (13))){
var inst_48469 = (state_48514[(10)]);
var inst_48471 = cljs.core.chunked_seq_QMARK_(inst_48469);
var state_48514__$1 = state_48514;
if(inst_48471){
var statearr_48526_49641 = state_48514__$1;
(statearr_48526_49641[(1)] = (16));

} else {
var statearr_48527_49642 = state_48514__$1;
(statearr_48527_49642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (22))){
var inst_48499 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48499)){
var statearr_48528_49643 = state_48514__$1;
(statearr_48528_49643[(1)] = (23));

} else {
var statearr_48529_49644 = state_48514__$1;
(statearr_48529_49644[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (6))){
var inst_48495 = (state_48514[(11)]);
var inst_48493 = (state_48514[(7)]);
var inst_48445 = (state_48514[(8)]);
var inst_48493__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48445) : topic_fn.call(null,inst_48445));
var inst_48494 = cljs.core.deref(mults);
var inst_48495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48494,inst_48493__$1);
var state_48514__$1 = (function (){var statearr_48530 = state_48514;
(statearr_48530[(11)] = inst_48495__$1);

(statearr_48530[(7)] = inst_48493__$1);

return statearr_48530;
})();
if(cljs.core.truth_(inst_48495__$1)){
var statearr_48531_49646 = state_48514__$1;
(statearr_48531_49646[(1)] = (19));

} else {
var statearr_48532_49647 = state_48514__$1;
(statearr_48532_49647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (25))){
var inst_48504 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48533_49648 = state_48514__$1;
(statearr_48533_49648[(2)] = inst_48504);

(statearr_48533_49648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (17))){
var inst_48469 = (state_48514[(10)]);
var inst_48478 = cljs.core.first(inst_48469);
var inst_48479 = cljs.core.async.muxch_STAR_(inst_48478);
var inst_48480 = cljs.core.async.close_BANG_(inst_48479);
var inst_48481 = cljs.core.next(inst_48469);
var inst_48455 = inst_48481;
var inst_48456 = null;
var inst_48457 = (0);
var inst_48458 = (0);
var state_48514__$1 = (function (){var statearr_48534 = state_48514;
(statearr_48534[(12)] = inst_48457);

(statearr_48534[(13)] = inst_48455);

(statearr_48534[(14)] = inst_48480);

(statearr_48534[(15)] = inst_48458);

(statearr_48534[(16)] = inst_48456);

return statearr_48534;
})();
var statearr_48535_49649 = state_48514__$1;
(statearr_48535_49649[(2)] = null);

(statearr_48535_49649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (3))){
var inst_48512 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48514__$1,inst_48512);
} else {
if((state_val_48515 === (12))){
var inst_48489 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48536_49650 = state_48514__$1;
(statearr_48536_49650[(2)] = inst_48489);

(statearr_48536_49650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (2))){
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48514__$1,(4),ch);
} else {
if((state_val_48515 === (23))){
var state_48514__$1 = state_48514;
var statearr_48537_49651 = state_48514__$1;
(statearr_48537_49651[(2)] = null);

(statearr_48537_49651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (19))){
var inst_48495 = (state_48514[(11)]);
var inst_48445 = (state_48514[(8)]);
var inst_48497 = cljs.core.async.muxch_STAR_(inst_48495);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48514__$1,(22),inst_48497,inst_48445);
} else {
if((state_val_48515 === (11))){
var inst_48455 = (state_48514[(13)]);
var inst_48469 = (state_48514[(10)]);
var inst_48469__$1 = cljs.core.seq(inst_48455);
var state_48514__$1 = (function (){var statearr_48538 = state_48514;
(statearr_48538[(10)] = inst_48469__$1);

return statearr_48538;
})();
if(inst_48469__$1){
var statearr_48539_49652 = state_48514__$1;
(statearr_48539_49652[(1)] = (13));

} else {
var statearr_48540_49653 = state_48514__$1;
(statearr_48540_49653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (9))){
var inst_48491 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48541_49654 = state_48514__$1;
(statearr_48541_49654[(2)] = inst_48491);

(statearr_48541_49654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (5))){
var inst_48452 = cljs.core.deref(mults);
var inst_48453 = cljs.core.vals(inst_48452);
var inst_48454 = cljs.core.seq(inst_48453);
var inst_48455 = inst_48454;
var inst_48456 = null;
var inst_48457 = (0);
var inst_48458 = (0);
var state_48514__$1 = (function (){var statearr_48542 = state_48514;
(statearr_48542[(12)] = inst_48457);

(statearr_48542[(13)] = inst_48455);

(statearr_48542[(15)] = inst_48458);

(statearr_48542[(16)] = inst_48456);

return statearr_48542;
})();
var statearr_48543_49655 = state_48514__$1;
(statearr_48543_49655[(2)] = null);

(statearr_48543_49655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (14))){
var state_48514__$1 = state_48514;
var statearr_48547_49656 = state_48514__$1;
(statearr_48547_49656[(2)] = null);

(statearr_48547_49656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (16))){
var inst_48469 = (state_48514[(10)]);
var inst_48473 = cljs.core.chunk_first(inst_48469);
var inst_48474 = cljs.core.chunk_rest(inst_48469);
var inst_48475 = cljs.core.count(inst_48473);
var inst_48455 = inst_48474;
var inst_48456 = inst_48473;
var inst_48457 = inst_48475;
var inst_48458 = (0);
var state_48514__$1 = (function (){var statearr_48548 = state_48514;
(statearr_48548[(12)] = inst_48457);

(statearr_48548[(13)] = inst_48455);

(statearr_48548[(15)] = inst_48458);

(statearr_48548[(16)] = inst_48456);

return statearr_48548;
})();
var statearr_48549_49661 = state_48514__$1;
(statearr_48549_49661[(2)] = null);

(statearr_48549_49661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (10))){
var inst_48457 = (state_48514[(12)]);
var inst_48455 = (state_48514[(13)]);
var inst_48458 = (state_48514[(15)]);
var inst_48456 = (state_48514[(16)]);
var inst_48463 = cljs.core._nth(inst_48456,inst_48458);
var inst_48464 = cljs.core.async.muxch_STAR_(inst_48463);
var inst_48465 = cljs.core.async.close_BANG_(inst_48464);
var inst_48466 = (inst_48458 + (1));
var tmp48544 = inst_48457;
var tmp48545 = inst_48455;
var tmp48546 = inst_48456;
var inst_48455__$1 = tmp48545;
var inst_48456__$1 = tmp48546;
var inst_48457__$1 = tmp48544;
var inst_48458__$1 = inst_48466;
var state_48514__$1 = (function (){var statearr_48550 = state_48514;
(statearr_48550[(17)] = inst_48465);

(statearr_48550[(12)] = inst_48457__$1);

(statearr_48550[(13)] = inst_48455__$1);

(statearr_48550[(15)] = inst_48458__$1);

(statearr_48550[(16)] = inst_48456__$1);

return statearr_48550;
})();
var statearr_48551_49666 = state_48514__$1;
(statearr_48551_49666[(2)] = null);

(statearr_48551_49666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (18))){
var inst_48484 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48552_49668 = state_48514__$1;
(statearr_48552_49668[(2)] = inst_48484);

(statearr_48552_49668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (8))){
var inst_48457 = (state_48514[(12)]);
var inst_48458 = (state_48514[(15)]);
var inst_48460 = (inst_48458 < inst_48457);
var inst_48461 = inst_48460;
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48461)){
var statearr_48553_49670 = state_48514__$1;
(statearr_48553_49670[(1)] = (10));

} else {
var statearr_48554_49671 = state_48514__$1;
(statearr_48554_49671[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48555[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48555[(1)] = (1));

return statearr_48555;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48514){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48514);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48556){var ex__47540__auto__ = e48556;
var statearr_48557_49672 = state_48514;
(statearr_48557_49672[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48514[(4)]))){
var statearr_48558_49673 = state_48514;
(statearr_48558_49673[(1)] = cljs.core.first((state_48514[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49674 = state_48514;
state_48514 = G__49674;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48559 = f__47573__auto__();
(statearr_48559[(6)] = c__47572__auto___49629);

return statearr_48559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48561 = arguments.length;
switch (G__48561) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48563 = arguments.length;
switch (G__48563) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48565 = arguments.length;
switch (G__48565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47572__auto___49678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48608){
var state_val_48609 = (state_48608[(1)]);
if((state_val_48609 === (7))){
var state_48608__$1 = state_48608;
var statearr_48610_49679 = state_48608__$1;
(statearr_48610_49679[(2)] = null);

(statearr_48610_49679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (1))){
var state_48608__$1 = state_48608;
var statearr_48611_49680 = state_48608__$1;
(statearr_48611_49680[(2)] = null);

(statearr_48611_49680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (4))){
var inst_48569 = (state_48608[(7)]);
var inst_48568 = (state_48608[(8)]);
var inst_48571 = (inst_48569 < inst_48568);
var state_48608__$1 = state_48608;
if(cljs.core.truth_(inst_48571)){
var statearr_48612_49681 = state_48608__$1;
(statearr_48612_49681[(1)] = (6));

} else {
var statearr_48613_49682 = state_48608__$1;
(statearr_48613_49682[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (15))){
var inst_48594 = (state_48608[(9)]);
var inst_48599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48594);
var state_48608__$1 = state_48608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48608__$1,(17),out,inst_48599);
} else {
if((state_val_48609 === (13))){
var inst_48594 = (state_48608[(9)]);
var inst_48594__$1 = (state_48608[(2)]);
var inst_48595 = cljs.core.some(cljs.core.nil_QMARK_,inst_48594__$1);
var state_48608__$1 = (function (){var statearr_48614 = state_48608;
(statearr_48614[(9)] = inst_48594__$1);

return statearr_48614;
})();
if(cljs.core.truth_(inst_48595)){
var statearr_48615_49683 = state_48608__$1;
(statearr_48615_49683[(1)] = (14));

} else {
var statearr_48616_49684 = state_48608__$1;
(statearr_48616_49684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (6))){
var state_48608__$1 = state_48608;
var statearr_48617_49685 = state_48608__$1;
(statearr_48617_49685[(2)] = null);

(statearr_48617_49685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (17))){
var inst_48601 = (state_48608[(2)]);
var state_48608__$1 = (function (){var statearr_48619 = state_48608;
(statearr_48619[(10)] = inst_48601);

return statearr_48619;
})();
var statearr_48620_49686 = state_48608__$1;
(statearr_48620_49686[(2)] = null);

(statearr_48620_49686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (3))){
var inst_48606 = (state_48608[(2)]);
var state_48608__$1 = state_48608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48608__$1,inst_48606);
} else {
if((state_val_48609 === (12))){
var _ = (function (){var statearr_48621 = state_48608;
(statearr_48621[(4)] = cljs.core.rest((state_48608[(4)])));

return statearr_48621;
})();
var state_48608__$1 = state_48608;
var ex48618 = (state_48608__$1[(2)]);
var statearr_48622_49690 = state_48608__$1;
(statearr_48622_49690[(5)] = ex48618);


if((ex48618 instanceof Object)){
var statearr_48623_49691 = state_48608__$1;
(statearr_48623_49691[(1)] = (11));

(statearr_48623_49691[(5)] = null);

} else {
throw ex48618;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (2))){
var inst_48567 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48568 = cnt;
var inst_48569 = (0);
var state_48608__$1 = (function (){var statearr_48624 = state_48608;
(statearr_48624[(7)] = inst_48569);

(statearr_48624[(11)] = inst_48567);

(statearr_48624[(8)] = inst_48568);

return statearr_48624;
})();
var statearr_48625_49696 = state_48608__$1;
(statearr_48625_49696[(2)] = null);

(statearr_48625_49696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (11))){
var inst_48573 = (state_48608[(2)]);
var inst_48574 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48608__$1 = (function (){var statearr_48626 = state_48608;
(statearr_48626[(12)] = inst_48573);

return statearr_48626;
})();
var statearr_48627_49700 = state_48608__$1;
(statearr_48627_49700[(2)] = inst_48574);

(statearr_48627_49700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (9))){
var inst_48569 = (state_48608[(7)]);
var _ = (function (){var statearr_48628 = state_48608;
(statearr_48628[(4)] = cljs.core.cons((12),(state_48608[(4)])));

return statearr_48628;
})();
var inst_48580 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48569) : chs__$1.call(null,inst_48569));
var inst_48581 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48569) : done.call(null,inst_48569));
var inst_48582 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48580,inst_48581);
var ___$1 = (function (){var statearr_48629 = state_48608;
(statearr_48629[(4)] = cljs.core.rest((state_48608[(4)])));

return statearr_48629;
})();
var state_48608__$1 = state_48608;
var statearr_48630_49704 = state_48608__$1;
(statearr_48630_49704[(2)] = inst_48582);

(statearr_48630_49704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (5))){
var inst_48592 = (state_48608[(2)]);
var state_48608__$1 = (function (){var statearr_48631 = state_48608;
(statearr_48631[(13)] = inst_48592);

return statearr_48631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48608__$1,(13),dchan);
} else {
if((state_val_48609 === (14))){
var inst_48597 = cljs.core.async.close_BANG_(out);
var state_48608__$1 = state_48608;
var statearr_48632_49705 = state_48608__$1;
(statearr_48632_49705[(2)] = inst_48597);

(statearr_48632_49705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (16))){
var inst_48604 = (state_48608[(2)]);
var state_48608__$1 = state_48608;
var statearr_48633_49709 = state_48608__$1;
(statearr_48633_49709[(2)] = inst_48604);

(statearr_48633_49709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (10))){
var inst_48569 = (state_48608[(7)]);
var inst_48585 = (state_48608[(2)]);
var inst_48586 = (inst_48569 + (1));
var inst_48569__$1 = inst_48586;
var state_48608__$1 = (function (){var statearr_48634 = state_48608;
(statearr_48634[(7)] = inst_48569__$1);

(statearr_48634[(14)] = inst_48585);

return statearr_48634;
})();
var statearr_48635_49710 = state_48608__$1;
(statearr_48635_49710[(2)] = null);

(statearr_48635_49710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48609 === (8))){
var inst_48590 = (state_48608[(2)]);
var state_48608__$1 = state_48608;
var statearr_48636_49711 = state_48608__$1;
(statearr_48636_49711[(2)] = inst_48590);

(statearr_48636_49711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48637[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48637[(1)] = (1));

return statearr_48637;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48608){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48608);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48638){var ex__47540__auto__ = e48638;
var statearr_48639_49715 = state_48608;
(statearr_48639_49715[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48608[(4)]))){
var statearr_48640_49716 = state_48608;
(statearr_48640_49716[(1)] = cljs.core.first((state_48608[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49718 = state_48608;
state_48608 = G__49718;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48641 = f__47573__auto__();
(statearr_48641[(6)] = c__47572__auto___49678);

return statearr_48641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48644 = arguments.length;
switch (G__48644) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___49723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48676){
var state_val_48677 = (state_48676[(1)]);
if((state_val_48677 === (7))){
var inst_48655 = (state_48676[(7)]);
var inst_48656 = (state_48676[(8)]);
var inst_48655__$1 = (state_48676[(2)]);
var inst_48656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48655__$1,(0),null);
var inst_48657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48655__$1,(1),null);
var inst_48658 = (inst_48656__$1 == null);
var state_48676__$1 = (function (){var statearr_48678 = state_48676;
(statearr_48678[(7)] = inst_48655__$1);

(statearr_48678[(8)] = inst_48656__$1);

(statearr_48678[(9)] = inst_48657);

return statearr_48678;
})();
if(cljs.core.truth_(inst_48658)){
var statearr_48679_49736 = state_48676__$1;
(statearr_48679_49736[(1)] = (8));

} else {
var statearr_48680_49737 = state_48676__$1;
(statearr_48680_49737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (1))){
var inst_48645 = cljs.core.vec(chs);
var inst_48646 = inst_48645;
var state_48676__$1 = (function (){var statearr_48681 = state_48676;
(statearr_48681[(10)] = inst_48646);

return statearr_48681;
})();
var statearr_48682_49738 = state_48676__$1;
(statearr_48682_49738[(2)] = null);

(statearr_48682_49738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (4))){
var inst_48646 = (state_48676[(10)]);
var state_48676__$1 = state_48676;
return cljs.core.async.ioc_alts_BANG_(state_48676__$1,(7),inst_48646);
} else {
if((state_val_48677 === (6))){
var inst_48672 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48683_49739 = state_48676__$1;
(statearr_48683_49739[(2)] = inst_48672);

(statearr_48683_49739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (3))){
var inst_48674 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48676__$1,inst_48674);
} else {
if((state_val_48677 === (2))){
var inst_48646 = (state_48676[(10)]);
var inst_48648 = cljs.core.count(inst_48646);
var inst_48649 = (inst_48648 > (0));
var state_48676__$1 = state_48676;
if(cljs.core.truth_(inst_48649)){
var statearr_48685_49740 = state_48676__$1;
(statearr_48685_49740[(1)] = (4));

} else {
var statearr_48686_49741 = state_48676__$1;
(statearr_48686_49741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (11))){
var inst_48646 = (state_48676[(10)]);
var inst_48665 = (state_48676[(2)]);
var tmp48684 = inst_48646;
var inst_48646__$1 = tmp48684;
var state_48676__$1 = (function (){var statearr_48687 = state_48676;
(statearr_48687[(10)] = inst_48646__$1);

(statearr_48687[(11)] = inst_48665);

return statearr_48687;
})();
var statearr_48688_49742 = state_48676__$1;
(statearr_48688_49742[(2)] = null);

(statearr_48688_49742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (9))){
var inst_48656 = (state_48676[(8)]);
var state_48676__$1 = state_48676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48676__$1,(11),out,inst_48656);
} else {
if((state_val_48677 === (5))){
var inst_48670 = cljs.core.async.close_BANG_(out);
var state_48676__$1 = state_48676;
var statearr_48689_49743 = state_48676__$1;
(statearr_48689_49743[(2)] = inst_48670);

(statearr_48689_49743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (10))){
var inst_48668 = (state_48676[(2)]);
var state_48676__$1 = state_48676;
var statearr_48690_49744 = state_48676__$1;
(statearr_48690_49744[(2)] = inst_48668);

(statearr_48690_49744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48677 === (8))){
var inst_48655 = (state_48676[(7)]);
var inst_48656 = (state_48676[(8)]);
var inst_48657 = (state_48676[(9)]);
var inst_48646 = (state_48676[(10)]);
var inst_48660 = (function (){var cs = inst_48646;
var vec__48651 = inst_48655;
var v = inst_48656;
var c = inst_48657;
return (function (p1__48642_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48642_SHARP_);
});
})();
var inst_48661 = cljs.core.filterv(inst_48660,inst_48646);
var inst_48646__$1 = inst_48661;
var state_48676__$1 = (function (){var statearr_48691 = state_48676;
(statearr_48691[(10)] = inst_48646__$1);

return statearr_48691;
})();
var statearr_48692_49751 = state_48676__$1;
(statearr_48692_49751[(2)] = null);

(statearr_48692_49751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48693[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48693[(1)] = (1));

return statearr_48693;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48676){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48676);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48694){var ex__47540__auto__ = e48694;
var statearr_48695_49752 = state_48676;
(statearr_48695_49752[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48676[(4)]))){
var statearr_48696_49753 = state_48676;
(statearr_48696_49753[(1)] = cljs.core.first((state_48676[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49754 = state_48676;
state_48676 = G__49754;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48697 = f__47573__auto__();
(statearr_48697[(6)] = c__47572__auto___49723);

return statearr_48697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48699 = arguments.length;
switch (G__48699) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___49756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48723){
var state_val_48724 = (state_48723[(1)]);
if((state_val_48724 === (7))){
var inst_48705 = (state_48723[(7)]);
var inst_48705__$1 = (state_48723[(2)]);
var inst_48706 = (inst_48705__$1 == null);
var inst_48707 = cljs.core.not(inst_48706);
var state_48723__$1 = (function (){var statearr_48725 = state_48723;
(statearr_48725[(7)] = inst_48705__$1);

return statearr_48725;
})();
if(inst_48707){
var statearr_48726_49763 = state_48723__$1;
(statearr_48726_49763[(1)] = (8));

} else {
var statearr_48727_49764 = state_48723__$1;
(statearr_48727_49764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (1))){
var inst_48700 = (0);
var state_48723__$1 = (function (){var statearr_48728 = state_48723;
(statearr_48728[(8)] = inst_48700);

return statearr_48728;
})();
var statearr_48729_49765 = state_48723__$1;
(statearr_48729_49765[(2)] = null);

(statearr_48729_49765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (4))){
var state_48723__$1 = state_48723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48723__$1,(7),ch);
} else {
if((state_val_48724 === (6))){
var inst_48718 = (state_48723[(2)]);
var state_48723__$1 = state_48723;
var statearr_48730_49766 = state_48723__$1;
(statearr_48730_49766[(2)] = inst_48718);

(statearr_48730_49766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (3))){
var inst_48720 = (state_48723[(2)]);
var inst_48721 = cljs.core.async.close_BANG_(out);
var state_48723__$1 = (function (){var statearr_48731 = state_48723;
(statearr_48731[(9)] = inst_48720);

return statearr_48731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48723__$1,inst_48721);
} else {
if((state_val_48724 === (2))){
var inst_48700 = (state_48723[(8)]);
var inst_48702 = (inst_48700 < n);
var state_48723__$1 = state_48723;
if(cljs.core.truth_(inst_48702)){
var statearr_48732_49772 = state_48723__$1;
(statearr_48732_49772[(1)] = (4));

} else {
var statearr_48733_49774 = state_48723__$1;
(statearr_48733_49774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (11))){
var inst_48700 = (state_48723[(8)]);
var inst_48710 = (state_48723[(2)]);
var inst_48711 = (inst_48700 + (1));
var inst_48700__$1 = inst_48711;
var state_48723__$1 = (function (){var statearr_48734 = state_48723;
(statearr_48734[(8)] = inst_48700__$1);

(statearr_48734[(10)] = inst_48710);

return statearr_48734;
})();
var statearr_48735_49775 = state_48723__$1;
(statearr_48735_49775[(2)] = null);

(statearr_48735_49775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (9))){
var state_48723__$1 = state_48723;
var statearr_48736_49783 = state_48723__$1;
(statearr_48736_49783[(2)] = null);

(statearr_48736_49783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (5))){
var state_48723__$1 = state_48723;
var statearr_48737_49787 = state_48723__$1;
(statearr_48737_49787[(2)] = null);

(statearr_48737_49787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (10))){
var inst_48715 = (state_48723[(2)]);
var state_48723__$1 = state_48723;
var statearr_48738_49788 = state_48723__$1;
(statearr_48738_49788[(2)] = inst_48715);

(statearr_48738_49788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48724 === (8))){
var inst_48705 = (state_48723[(7)]);
var state_48723__$1 = state_48723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48723__$1,(11),out,inst_48705);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48739[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48739[(1)] = (1));

return statearr_48739;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48723){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48723);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48740){var ex__47540__auto__ = e48740;
var statearr_48741_49794 = state_48723;
(statearr_48741_49794[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48723[(4)]))){
var statearr_48742_49795 = state_48723;
(statearr_48742_49795[(1)] = cljs.core.first((state_48723[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49796 = state_48723;
state_48723 = G__49796;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48743 = f__47573__auto__();
(statearr_48743[(6)] = c__47572__auto___49756);

return statearr_48743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48745 = (function (f,ch,meta48746){
this.f = f;
this.ch = ch;
this.meta48746 = meta48746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48747,meta48746__$1){
var self__ = this;
var _48747__$1 = this;
return (new cljs.core.async.t_cljs$core$async48745(self__.f,self__.ch,meta48746__$1));
}));

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48747){
var self__ = this;
var _48747__$1 = this;
return self__.meta48746;
}));

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48748 = (function (f,ch,meta48746,_,fn1,meta48749){
this.f = f;
this.ch = ch;
this.meta48746 = meta48746;
this._ = _;
this.fn1 = fn1;
this.meta48749 = meta48749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48750,meta48749__$1){
var self__ = this;
var _48750__$1 = this;
return (new cljs.core.async.t_cljs$core$async48748(self__.f,self__.ch,self__.meta48746,self__._,self__.fn1,meta48749__$1));
}));

(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48750){
var self__ = this;
var _48750__$1 = this;
return self__.meta48749;
}));

(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48744_SHARP_){
var G__48751 = (((p1__48744_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48744_SHARP_) : self__.f.call(null,p1__48744_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48751) : f1.call(null,G__48751));
});
}));

(cljs.core.async.t_cljs$core$async48748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48746","meta48746",340606027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48745","cljs.core.async/t_cljs$core$async48745",-1129970379,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48749","meta48749",-52155415,null)], null);
}));

(cljs.core.async.t_cljs$core$async48748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48748");

(cljs.core.async.t_cljs$core$async48748.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48748.
 */
cljs.core.async.__GT_t_cljs$core$async48748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48748(f__$1,ch__$1,meta48746__$1,___$2,fn1__$1,meta48749){
return (new cljs.core.async.t_cljs$core$async48748(f__$1,ch__$1,meta48746__$1,___$2,fn1__$1,meta48749));
});

}

return (new cljs.core.async.t_cljs$core$async48748(self__.f,self__.ch,self__.meta48746,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48752 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48752) : self__.f.call(null,G__48752));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48746","meta48746",340606027,null)], null);
}));

(cljs.core.async.t_cljs$core$async48745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48745");

(cljs.core.async.t_cljs$core$async48745.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48745.
 */
cljs.core.async.__GT_t_cljs$core$async48745 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48745(f__$1,ch__$1,meta48746){
return (new cljs.core.async.t_cljs$core$async48745(f__$1,ch__$1,meta48746));
});

}

return (new cljs.core.async.t_cljs$core$async48745(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48753 = (function (f,ch,meta48754){
this.f = f;
this.ch = ch;
this.meta48754 = meta48754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48755,meta48754__$1){
var self__ = this;
var _48755__$1 = this;
return (new cljs.core.async.t_cljs$core$async48753(self__.f,self__.ch,meta48754__$1));
}));

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48755){
var self__ = this;
var _48755__$1 = this;
return self__.meta48754;
}));

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48754","meta48754",-959237357,null)], null);
}));

(cljs.core.async.t_cljs$core$async48753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48753");

(cljs.core.async.t_cljs$core$async48753.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48753.
 */
cljs.core.async.__GT_t_cljs$core$async48753 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48753(f__$1,ch__$1,meta48754){
return (new cljs.core.async.t_cljs$core$async48753(f__$1,ch__$1,meta48754));
});

}

return (new cljs.core.async.t_cljs$core$async48753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48756 = (function (p,ch,meta48757){
this.p = p;
this.ch = ch;
this.meta48757 = meta48757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48758,meta48757__$1){
var self__ = this;
var _48758__$1 = this;
return (new cljs.core.async.t_cljs$core$async48756(self__.p,self__.ch,meta48757__$1));
}));

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48758){
var self__ = this;
var _48758__$1 = this;
return self__.meta48757;
}));

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48757","meta48757",1185712755,null)], null);
}));

(cljs.core.async.t_cljs$core$async48756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48756");

(cljs.core.async.t_cljs$core$async48756.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async48756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48756.
 */
cljs.core.async.__GT_t_cljs$core$async48756 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48756(p__$1,ch__$1,meta48757){
return (new cljs.core.async.t_cljs$core$async48756(p__$1,ch__$1,meta48757));
});

}

return (new cljs.core.async.t_cljs$core$async48756(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48760 = arguments.length;
switch (G__48760) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___49867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48781){
var state_val_48782 = (state_48781[(1)]);
if((state_val_48782 === (7))){
var inst_48777 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48783_49869 = state_48781__$1;
(statearr_48783_49869[(2)] = inst_48777);

(statearr_48783_49869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (1))){
var state_48781__$1 = state_48781;
var statearr_48784_49871 = state_48781__$1;
(statearr_48784_49871[(2)] = null);

(statearr_48784_49871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (4))){
var inst_48763 = (state_48781[(7)]);
var inst_48763__$1 = (state_48781[(2)]);
var inst_48764 = (inst_48763__$1 == null);
var state_48781__$1 = (function (){var statearr_48785 = state_48781;
(statearr_48785[(7)] = inst_48763__$1);

return statearr_48785;
})();
if(cljs.core.truth_(inst_48764)){
var statearr_48786_49875 = state_48781__$1;
(statearr_48786_49875[(1)] = (5));

} else {
var statearr_48787_49876 = state_48781__$1;
(statearr_48787_49876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (6))){
var inst_48763 = (state_48781[(7)]);
var inst_48768 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48763) : p.call(null,inst_48763));
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48768)){
var statearr_48788_49878 = state_48781__$1;
(statearr_48788_49878[(1)] = (8));

} else {
var statearr_48789_49879 = state_48781__$1;
(statearr_48789_49879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (3))){
var inst_48779 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48781__$1,inst_48779);
} else {
if((state_val_48782 === (2))){
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48781__$1,(4),ch);
} else {
if((state_val_48782 === (11))){
var inst_48771 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48790_49884 = state_48781__$1;
(statearr_48790_49884[(2)] = inst_48771);

(statearr_48790_49884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (9))){
var state_48781__$1 = state_48781;
var statearr_48791_49886 = state_48781__$1;
(statearr_48791_49886[(2)] = null);

(statearr_48791_49886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (5))){
var inst_48766 = cljs.core.async.close_BANG_(out);
var state_48781__$1 = state_48781;
var statearr_48792_49889 = state_48781__$1;
(statearr_48792_49889[(2)] = inst_48766);

(statearr_48792_49889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (10))){
var inst_48774 = (state_48781[(2)]);
var state_48781__$1 = (function (){var statearr_48793 = state_48781;
(statearr_48793[(8)] = inst_48774);

return statearr_48793;
})();
var statearr_48794_49892 = state_48781__$1;
(statearr_48794_49892[(2)] = null);

(statearr_48794_49892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (8))){
var inst_48763 = (state_48781[(7)]);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48781__$1,(11),out,inst_48763);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48795 = [null,null,null,null,null,null,null,null,null];
(statearr_48795[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48795[(1)] = (1));

return statearr_48795;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48781){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48781);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48796){var ex__47540__auto__ = e48796;
var statearr_48797_49893 = state_48781;
(statearr_48797_49893[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48781[(4)]))){
var statearr_48798_49894 = state_48781;
(statearr_48798_49894[(1)] = cljs.core.first((state_48781[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49895 = state_48781;
state_48781 = G__49895;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48799 = f__47573__auto__();
(statearr_48799[(6)] = c__47572__auto___49867);

return statearr_48799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48801 = arguments.length;
switch (G__48801) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47572__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48863){
var state_val_48864 = (state_48863[(1)]);
if((state_val_48864 === (7))){
var inst_48859 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
var statearr_48865_49900 = state_48863__$1;
(statearr_48865_49900[(2)] = inst_48859);

(statearr_48865_49900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (20))){
var inst_48829 = (state_48863[(7)]);
var inst_48840 = (state_48863[(2)]);
var inst_48841 = cljs.core.next(inst_48829);
var inst_48815 = inst_48841;
var inst_48816 = null;
var inst_48817 = (0);
var inst_48818 = (0);
var state_48863__$1 = (function (){var statearr_48866 = state_48863;
(statearr_48866[(8)] = inst_48815);

(statearr_48866[(9)] = inst_48818);

(statearr_48866[(10)] = inst_48817);

(statearr_48866[(11)] = inst_48816);

(statearr_48866[(12)] = inst_48840);

return statearr_48866;
})();
var statearr_48867_49906 = state_48863__$1;
(statearr_48867_49906[(2)] = null);

(statearr_48867_49906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (1))){
var state_48863__$1 = state_48863;
var statearr_48868_49907 = state_48863__$1;
(statearr_48868_49907[(2)] = null);

(statearr_48868_49907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (4))){
var inst_48804 = (state_48863[(13)]);
var inst_48804__$1 = (state_48863[(2)]);
var inst_48805 = (inst_48804__$1 == null);
var state_48863__$1 = (function (){var statearr_48869 = state_48863;
(statearr_48869[(13)] = inst_48804__$1);

return statearr_48869;
})();
if(cljs.core.truth_(inst_48805)){
var statearr_48870_49909 = state_48863__$1;
(statearr_48870_49909[(1)] = (5));

} else {
var statearr_48871_49910 = state_48863__$1;
(statearr_48871_49910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (15))){
var state_48863__$1 = state_48863;
var statearr_48875_49911 = state_48863__$1;
(statearr_48875_49911[(2)] = null);

(statearr_48875_49911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (21))){
var state_48863__$1 = state_48863;
var statearr_48876_49912 = state_48863__$1;
(statearr_48876_49912[(2)] = null);

(statearr_48876_49912[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (13))){
var inst_48815 = (state_48863[(8)]);
var inst_48818 = (state_48863[(9)]);
var inst_48817 = (state_48863[(10)]);
var inst_48816 = (state_48863[(11)]);
var inst_48825 = (state_48863[(2)]);
var inst_48826 = (inst_48818 + (1));
var tmp48872 = inst_48815;
var tmp48873 = inst_48817;
var tmp48874 = inst_48816;
var inst_48815__$1 = tmp48872;
var inst_48816__$1 = tmp48874;
var inst_48817__$1 = tmp48873;
var inst_48818__$1 = inst_48826;
var state_48863__$1 = (function (){var statearr_48877 = state_48863;
(statearr_48877[(8)] = inst_48815__$1);

(statearr_48877[(9)] = inst_48818__$1);

(statearr_48877[(14)] = inst_48825);

(statearr_48877[(10)] = inst_48817__$1);

(statearr_48877[(11)] = inst_48816__$1);

return statearr_48877;
})();
var statearr_48878_49914 = state_48863__$1;
(statearr_48878_49914[(2)] = null);

(statearr_48878_49914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (22))){
var state_48863__$1 = state_48863;
var statearr_48879_49916 = state_48863__$1;
(statearr_48879_49916[(2)] = null);

(statearr_48879_49916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (6))){
var inst_48804 = (state_48863[(13)]);
var inst_48813 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48804) : f.call(null,inst_48804));
var inst_48814 = cljs.core.seq(inst_48813);
var inst_48815 = inst_48814;
var inst_48816 = null;
var inst_48817 = (0);
var inst_48818 = (0);
var state_48863__$1 = (function (){var statearr_48880 = state_48863;
(statearr_48880[(8)] = inst_48815);

(statearr_48880[(9)] = inst_48818);

(statearr_48880[(10)] = inst_48817);

(statearr_48880[(11)] = inst_48816);

return statearr_48880;
})();
var statearr_48881_49917 = state_48863__$1;
(statearr_48881_49917[(2)] = null);

(statearr_48881_49917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (17))){
var inst_48829 = (state_48863[(7)]);
var inst_48833 = cljs.core.chunk_first(inst_48829);
var inst_48834 = cljs.core.chunk_rest(inst_48829);
var inst_48835 = cljs.core.count(inst_48833);
var inst_48815 = inst_48834;
var inst_48816 = inst_48833;
var inst_48817 = inst_48835;
var inst_48818 = (0);
var state_48863__$1 = (function (){var statearr_48882 = state_48863;
(statearr_48882[(8)] = inst_48815);

(statearr_48882[(9)] = inst_48818);

(statearr_48882[(10)] = inst_48817);

(statearr_48882[(11)] = inst_48816);

return statearr_48882;
})();
var statearr_48883_49919 = state_48863__$1;
(statearr_48883_49919[(2)] = null);

(statearr_48883_49919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (3))){
var inst_48861 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48863__$1,inst_48861);
} else {
if((state_val_48864 === (12))){
var inst_48849 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
var statearr_48884_49920 = state_48863__$1;
(statearr_48884_49920[(2)] = inst_48849);

(statearr_48884_49920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (2))){
var state_48863__$1 = state_48863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48863__$1,(4),in$);
} else {
if((state_val_48864 === (23))){
var inst_48857 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
var statearr_48885_49921 = state_48863__$1;
(statearr_48885_49921[(2)] = inst_48857);

(statearr_48885_49921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (19))){
var inst_48844 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
var statearr_48886_49922 = state_48863__$1;
(statearr_48886_49922[(2)] = inst_48844);

(statearr_48886_49922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (11))){
var inst_48815 = (state_48863[(8)]);
var inst_48829 = (state_48863[(7)]);
var inst_48829__$1 = cljs.core.seq(inst_48815);
var state_48863__$1 = (function (){var statearr_48887 = state_48863;
(statearr_48887[(7)] = inst_48829__$1);

return statearr_48887;
})();
if(inst_48829__$1){
var statearr_48888_49923 = state_48863__$1;
(statearr_48888_49923[(1)] = (14));

} else {
var statearr_48889_49925 = state_48863__$1;
(statearr_48889_49925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (9))){
var inst_48851 = (state_48863[(2)]);
var inst_48852 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48863__$1 = (function (){var statearr_48890 = state_48863;
(statearr_48890[(15)] = inst_48851);

return statearr_48890;
})();
if(cljs.core.truth_(inst_48852)){
var statearr_48891_49930 = state_48863__$1;
(statearr_48891_49930[(1)] = (21));

} else {
var statearr_48892_49935 = state_48863__$1;
(statearr_48892_49935[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (5))){
var inst_48807 = cljs.core.async.close_BANG_(out);
var state_48863__$1 = state_48863;
var statearr_48893_49937 = state_48863__$1;
(statearr_48893_49937[(2)] = inst_48807);

(statearr_48893_49937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (14))){
var inst_48829 = (state_48863[(7)]);
var inst_48831 = cljs.core.chunked_seq_QMARK_(inst_48829);
var state_48863__$1 = state_48863;
if(inst_48831){
var statearr_48894_49943 = state_48863__$1;
(statearr_48894_49943[(1)] = (17));

} else {
var statearr_48895_49944 = state_48863__$1;
(statearr_48895_49944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (16))){
var inst_48847 = (state_48863[(2)]);
var state_48863__$1 = state_48863;
var statearr_48896_49945 = state_48863__$1;
(statearr_48896_49945[(2)] = inst_48847);

(statearr_48896_49945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48864 === (10))){
var inst_48818 = (state_48863[(9)]);
var inst_48816 = (state_48863[(11)]);
var inst_48823 = cljs.core._nth(inst_48816,inst_48818);
var state_48863__$1 = state_48863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48863__$1,(13),out,inst_48823);
} else {
if((state_val_48864 === (18))){
var inst_48829 = (state_48863[(7)]);
var inst_48838 = cljs.core.first(inst_48829);
var state_48863__$1 = state_48863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48863__$1,(20),out,inst_48838);
} else {
if((state_val_48864 === (8))){
var inst_48818 = (state_48863[(9)]);
var inst_48817 = (state_48863[(10)]);
var inst_48820 = (inst_48818 < inst_48817);
var inst_48821 = inst_48820;
var state_48863__$1 = state_48863;
if(cljs.core.truth_(inst_48821)){
var statearr_48897_49948 = state_48863__$1;
(statearr_48897_49948[(1)] = (10));

} else {
var statearr_48898_49949 = state_48863__$1;
(statearr_48898_49949[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____0 = (function (){
var statearr_48899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48899[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__);

(statearr_48899[(1)] = (1));

return statearr_48899;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____1 = (function (state_48863){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48863);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48900){var ex__47540__auto__ = e48900;
var statearr_48901_49954 = state_48863;
(statearr_48901_49954[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48863[(4)]))){
var statearr_48902_49959 = state_48863;
(statearr_48902_49959[(1)] = cljs.core.first((state_48863[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49960 = state_48863;
state_48863 = G__49960;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__ = function(state_48863){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____1.call(this,state_48863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48903 = f__47573__auto__();
(statearr_48903[(6)] = c__47572__auto__);

return statearr_48903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));

return c__47572__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48905 = arguments.length;
switch (G__48905) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48907 = arguments.length;
switch (G__48907) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48909 = arguments.length;
switch (G__48909) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___49986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48933){
var state_val_48934 = (state_48933[(1)]);
if((state_val_48934 === (7))){
var inst_48928 = (state_48933[(2)]);
var state_48933__$1 = state_48933;
var statearr_48935_49988 = state_48933__$1;
(statearr_48935_49988[(2)] = inst_48928);

(statearr_48935_49988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (1))){
var inst_48910 = null;
var state_48933__$1 = (function (){var statearr_48936 = state_48933;
(statearr_48936[(7)] = inst_48910);

return statearr_48936;
})();
var statearr_48937_49993 = state_48933__$1;
(statearr_48937_49993[(2)] = null);

(statearr_48937_49993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (4))){
var inst_48913 = (state_48933[(8)]);
var inst_48913__$1 = (state_48933[(2)]);
var inst_48914 = (inst_48913__$1 == null);
var inst_48915 = cljs.core.not(inst_48914);
var state_48933__$1 = (function (){var statearr_48938 = state_48933;
(statearr_48938[(8)] = inst_48913__$1);

return statearr_48938;
})();
if(inst_48915){
var statearr_48939_49994 = state_48933__$1;
(statearr_48939_49994[(1)] = (5));

} else {
var statearr_48940_49998 = state_48933__$1;
(statearr_48940_49998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (6))){
var state_48933__$1 = state_48933;
var statearr_48941_49999 = state_48933__$1;
(statearr_48941_49999[(2)] = null);

(statearr_48941_49999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (3))){
var inst_48930 = (state_48933[(2)]);
var inst_48931 = cljs.core.async.close_BANG_(out);
var state_48933__$1 = (function (){var statearr_48942 = state_48933;
(statearr_48942[(9)] = inst_48930);

return statearr_48942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48933__$1,inst_48931);
} else {
if((state_val_48934 === (2))){
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48933__$1,(4),ch);
} else {
if((state_val_48934 === (11))){
var inst_48913 = (state_48933[(8)]);
var inst_48922 = (state_48933[(2)]);
var inst_48910 = inst_48913;
var state_48933__$1 = (function (){var statearr_48943 = state_48933;
(statearr_48943[(7)] = inst_48910);

(statearr_48943[(10)] = inst_48922);

return statearr_48943;
})();
var statearr_48944_50001 = state_48933__$1;
(statearr_48944_50001[(2)] = null);

(statearr_48944_50001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (9))){
var inst_48913 = (state_48933[(8)]);
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48933__$1,(11),out,inst_48913);
} else {
if((state_val_48934 === (5))){
var inst_48913 = (state_48933[(8)]);
var inst_48910 = (state_48933[(7)]);
var inst_48917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48913,inst_48910);
var state_48933__$1 = state_48933;
if(inst_48917){
var statearr_48946_50004 = state_48933__$1;
(statearr_48946_50004[(1)] = (8));

} else {
var statearr_48947_50005 = state_48933__$1;
(statearr_48947_50005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (10))){
var inst_48925 = (state_48933[(2)]);
var state_48933__$1 = state_48933;
var statearr_48948_50006 = state_48933__$1;
(statearr_48948_50006[(2)] = inst_48925);

(statearr_48948_50006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (8))){
var inst_48910 = (state_48933[(7)]);
var tmp48945 = inst_48910;
var inst_48910__$1 = tmp48945;
var state_48933__$1 = (function (){var statearr_48949 = state_48933;
(statearr_48949[(7)] = inst_48910__$1);

return statearr_48949;
})();
var statearr_48950_50007 = state_48933__$1;
(statearr_48950_50007[(2)] = null);

(statearr_48950_50007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_48951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48951[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_48951[(1)] = (1));

return statearr_48951;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48933){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48933);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e48952){var ex__47540__auto__ = e48952;
var statearr_48953_50012 = state_48933;
(statearr_48953_50012[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48933[(4)]))){
var statearr_48954_50014 = state_48933;
(statearr_48954_50014[(1)] = cljs.core.first((state_48933[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50016 = state_48933;
state_48933 = G__50016;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_48955 = f__47573__auto__();
(statearr_48955[(6)] = c__47572__auto___49986);

return statearr_48955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48957 = arguments.length;
switch (G__48957) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___50023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_48995){
var state_val_48996 = (state_48995[(1)]);
if((state_val_48996 === (7))){
var inst_48991 = (state_48995[(2)]);
var state_48995__$1 = state_48995;
var statearr_48997_50024 = state_48995__$1;
(statearr_48997_50024[(2)] = inst_48991);

(statearr_48997_50024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (1))){
var inst_48958 = (new Array(n));
var inst_48959 = inst_48958;
var inst_48960 = (0);
var state_48995__$1 = (function (){var statearr_48998 = state_48995;
(statearr_48998[(7)] = inst_48960);

(statearr_48998[(8)] = inst_48959);

return statearr_48998;
})();
var statearr_48999_50027 = state_48995__$1;
(statearr_48999_50027[(2)] = null);

(statearr_48999_50027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (4))){
var inst_48963 = (state_48995[(9)]);
var inst_48963__$1 = (state_48995[(2)]);
var inst_48964 = (inst_48963__$1 == null);
var inst_48965 = cljs.core.not(inst_48964);
var state_48995__$1 = (function (){var statearr_49000 = state_48995;
(statearr_49000[(9)] = inst_48963__$1);

return statearr_49000;
})();
if(inst_48965){
var statearr_49001_50036 = state_48995__$1;
(statearr_49001_50036[(1)] = (5));

} else {
var statearr_49002_50037 = state_48995__$1;
(statearr_49002_50037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (15))){
var inst_48985 = (state_48995[(2)]);
var state_48995__$1 = state_48995;
var statearr_49003_50043 = state_48995__$1;
(statearr_49003_50043[(2)] = inst_48985);

(statearr_49003_50043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (13))){
var state_48995__$1 = state_48995;
var statearr_49004_50045 = state_48995__$1;
(statearr_49004_50045[(2)] = null);

(statearr_49004_50045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (6))){
var inst_48960 = (state_48995[(7)]);
var inst_48981 = (inst_48960 > (0));
var state_48995__$1 = state_48995;
if(cljs.core.truth_(inst_48981)){
var statearr_49005_50050 = state_48995__$1;
(statearr_49005_50050[(1)] = (12));

} else {
var statearr_49006_50055 = state_48995__$1;
(statearr_49006_50055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (3))){
var inst_48993 = (state_48995[(2)]);
var state_48995__$1 = state_48995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48995__$1,inst_48993);
} else {
if((state_val_48996 === (12))){
var inst_48959 = (state_48995[(8)]);
var inst_48983 = cljs.core.vec(inst_48959);
var state_48995__$1 = state_48995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48995__$1,(15),out,inst_48983);
} else {
if((state_val_48996 === (2))){
var state_48995__$1 = state_48995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48995__$1,(4),ch);
} else {
if((state_val_48996 === (11))){
var inst_48975 = (state_48995[(2)]);
var inst_48976 = (new Array(n));
var inst_48959 = inst_48976;
var inst_48960 = (0);
var state_48995__$1 = (function (){var statearr_49007 = state_48995;
(statearr_49007[(10)] = inst_48975);

(statearr_49007[(7)] = inst_48960);

(statearr_49007[(8)] = inst_48959);

return statearr_49007;
})();
var statearr_49008_50068 = state_48995__$1;
(statearr_49008_50068[(2)] = null);

(statearr_49008_50068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (9))){
var inst_48959 = (state_48995[(8)]);
var inst_48973 = cljs.core.vec(inst_48959);
var state_48995__$1 = state_48995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48995__$1,(11),out,inst_48973);
} else {
if((state_val_48996 === (5))){
var inst_48963 = (state_48995[(9)]);
var inst_48960 = (state_48995[(7)]);
var inst_48959 = (state_48995[(8)]);
var inst_48968 = (state_48995[(11)]);
var inst_48967 = (inst_48959[inst_48960] = inst_48963);
var inst_48968__$1 = (inst_48960 + (1));
var inst_48969 = (inst_48968__$1 < n);
var state_48995__$1 = (function (){var statearr_49009 = state_48995;
(statearr_49009[(12)] = inst_48967);

(statearr_49009[(11)] = inst_48968__$1);

return statearr_49009;
})();
if(cljs.core.truth_(inst_48969)){
var statearr_49010_50093 = state_48995__$1;
(statearr_49010_50093[(1)] = (8));

} else {
var statearr_49011_50094 = state_48995__$1;
(statearr_49011_50094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (14))){
var inst_48988 = (state_48995[(2)]);
var inst_48989 = cljs.core.async.close_BANG_(out);
var state_48995__$1 = (function (){var statearr_49013 = state_48995;
(statearr_49013[(13)] = inst_48988);

return statearr_49013;
})();
var statearr_49014_50100 = state_48995__$1;
(statearr_49014_50100[(2)] = inst_48989);

(statearr_49014_50100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (10))){
var inst_48979 = (state_48995[(2)]);
var state_48995__$1 = state_48995;
var statearr_49015_50111 = state_48995__$1;
(statearr_49015_50111[(2)] = inst_48979);

(statearr_49015_50111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48996 === (8))){
var inst_48959 = (state_48995[(8)]);
var inst_48968 = (state_48995[(11)]);
var tmp49012 = inst_48959;
var inst_48959__$1 = tmp49012;
var inst_48960 = inst_48968;
var state_48995__$1 = (function (){var statearr_49016 = state_48995;
(statearr_49016[(7)] = inst_48960);

(statearr_49016[(8)] = inst_48959__$1);

return statearr_49016;
})();
var statearr_49017_50122 = state_48995__$1;
(statearr_49017_50122[(2)] = null);

(statearr_49017_50122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_49018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49018[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_49018[(1)] = (1));

return statearr_49018;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_48995){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_48995);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e49019){var ex__47540__auto__ = e49019;
var statearr_49020_50131 = state_48995;
(statearr_49020_50131[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_48995[(4)]))){
var statearr_49021_50132 = state_48995;
(statearr_49021_50132[(1)] = cljs.core.first((state_48995[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50133 = state_48995;
state_48995 = G__50133;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_48995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_48995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_49022 = f__47573__auto__();
(statearr_49022[(6)] = c__47572__auto___50023);

return statearr_49022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49024 = arguments.length;
switch (G__49024) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47572__auto___50143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47573__auto__ = (function (){var switch__47536__auto__ = (function (state_49066){
var state_val_49067 = (state_49066[(1)]);
if((state_val_49067 === (7))){
var inst_49062 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
var statearr_49068_50148 = state_49066__$1;
(statearr_49068_50148[(2)] = inst_49062);

(statearr_49068_50148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (1))){
var inst_49025 = [];
var inst_49026 = inst_49025;
var inst_49027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49066__$1 = (function (){var statearr_49069 = state_49066;
(statearr_49069[(7)] = inst_49026);

(statearr_49069[(8)] = inst_49027);

return statearr_49069;
})();
var statearr_49070_50150 = state_49066__$1;
(statearr_49070_50150[(2)] = null);

(statearr_49070_50150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (4))){
var inst_49030 = (state_49066[(9)]);
var inst_49030__$1 = (state_49066[(2)]);
var inst_49031 = (inst_49030__$1 == null);
var inst_49032 = cljs.core.not(inst_49031);
var state_49066__$1 = (function (){var statearr_49071 = state_49066;
(statearr_49071[(9)] = inst_49030__$1);

return statearr_49071;
})();
if(inst_49032){
var statearr_49072_50156 = state_49066__$1;
(statearr_49072_50156[(1)] = (5));

} else {
var statearr_49073_50157 = state_49066__$1;
(statearr_49073_50157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (15))){
var inst_49056 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
var statearr_49074_50158 = state_49066__$1;
(statearr_49074_50158[(2)] = inst_49056);

(statearr_49074_50158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (13))){
var state_49066__$1 = state_49066;
var statearr_49075_50159 = state_49066__$1;
(statearr_49075_50159[(2)] = null);

(statearr_49075_50159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (6))){
var inst_49026 = (state_49066[(7)]);
var inst_49051 = inst_49026.length;
var inst_49052 = (inst_49051 > (0));
var state_49066__$1 = state_49066;
if(cljs.core.truth_(inst_49052)){
var statearr_49076_50161 = state_49066__$1;
(statearr_49076_50161[(1)] = (12));

} else {
var statearr_49077_50162 = state_49066__$1;
(statearr_49077_50162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (3))){
var inst_49064 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49066__$1,inst_49064);
} else {
if((state_val_49067 === (12))){
var inst_49026 = (state_49066[(7)]);
var inst_49054 = cljs.core.vec(inst_49026);
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49066__$1,(15),out,inst_49054);
} else {
if((state_val_49067 === (2))){
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49066__$1,(4),ch);
} else {
if((state_val_49067 === (11))){
var inst_49034 = (state_49066[(10)]);
var inst_49030 = (state_49066[(9)]);
var inst_49044 = (state_49066[(2)]);
var inst_49045 = [];
var inst_49046 = inst_49045.push(inst_49030);
var inst_49026 = inst_49045;
var inst_49027 = inst_49034;
var state_49066__$1 = (function (){var statearr_49078 = state_49066;
(statearr_49078[(7)] = inst_49026);

(statearr_49078[(8)] = inst_49027);

(statearr_49078[(11)] = inst_49046);

(statearr_49078[(12)] = inst_49044);

return statearr_49078;
})();
var statearr_49079_50179 = state_49066__$1;
(statearr_49079_50179[(2)] = null);

(statearr_49079_50179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (9))){
var inst_49026 = (state_49066[(7)]);
var inst_49042 = cljs.core.vec(inst_49026);
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49066__$1,(11),out,inst_49042);
} else {
if((state_val_49067 === (5))){
var inst_49027 = (state_49066[(8)]);
var inst_49034 = (state_49066[(10)]);
var inst_49030 = (state_49066[(9)]);
var inst_49034__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49030) : f.call(null,inst_49030));
var inst_49035 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49034__$1,inst_49027);
var inst_49036 = cljs.core.keyword_identical_QMARK_(inst_49027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49037 = ((inst_49035) || (inst_49036));
var state_49066__$1 = (function (){var statearr_49080 = state_49066;
(statearr_49080[(10)] = inst_49034__$1);

return statearr_49080;
})();
if(cljs.core.truth_(inst_49037)){
var statearr_49081_50207 = state_49066__$1;
(statearr_49081_50207[(1)] = (8));

} else {
var statearr_49082_50213 = state_49066__$1;
(statearr_49082_50213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (14))){
var inst_49059 = (state_49066[(2)]);
var inst_49060 = cljs.core.async.close_BANG_(out);
var state_49066__$1 = (function (){var statearr_49084 = state_49066;
(statearr_49084[(13)] = inst_49059);

return statearr_49084;
})();
var statearr_49085_50221 = state_49066__$1;
(statearr_49085_50221[(2)] = inst_49060);

(statearr_49085_50221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (10))){
var inst_49049 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
var statearr_49086_50225 = state_49066__$1;
(statearr_49086_50225[(2)] = inst_49049);

(statearr_49086_50225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (8))){
var inst_49026 = (state_49066[(7)]);
var inst_49034 = (state_49066[(10)]);
var inst_49030 = (state_49066[(9)]);
var inst_49039 = inst_49026.push(inst_49030);
var tmp49083 = inst_49026;
var inst_49026__$1 = tmp49083;
var inst_49027 = inst_49034;
var state_49066__$1 = (function (){var statearr_49087 = state_49066;
(statearr_49087[(7)] = inst_49026__$1);

(statearr_49087[(8)] = inst_49027);

(statearr_49087[(14)] = inst_49039);

return statearr_49087;
})();
var statearr_49088_50227 = state_49066__$1;
(statearr_49088_50227[(2)] = null);

(statearr_49088_50227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47537__auto__ = null;
var cljs$core$async$state_machine__47537__auto____0 = (function (){
var statearr_49089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49089[(0)] = cljs$core$async$state_machine__47537__auto__);

(statearr_49089[(1)] = (1));

return statearr_49089;
});
var cljs$core$async$state_machine__47537__auto____1 = (function (state_49066){
while(true){
var ret_value__47538__auto__ = (function (){try{while(true){
var result__47539__auto__ = switch__47536__auto__(state_49066);
if(cljs.core.keyword_identical_QMARK_(result__47539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47539__auto__;
}
break;
}
}catch (e49090){var ex__47540__auto__ = e49090;
var statearr_49091_50228 = state_49066;
(statearr_49091_50228[(2)] = ex__47540__auto__);


if(cljs.core.seq((state_49066[(4)]))){
var statearr_49092_50229 = state_49066;
(statearr_49092_50229[(1)] = cljs.core.first((state_49066[(4)])));

} else {
throw ex__47540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50234 = state_49066;
state_49066 = G__50234;
continue;
} else {
return ret_value__47538__auto__;
}
break;
}
});
cljs$core$async$state_machine__47537__auto__ = function(state_49066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47537__auto____1.call(this,state_49066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47537__auto____0;
cljs$core$async$state_machine__47537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47537__auto____1;
return cljs$core$async$state_machine__47537__auto__;
})()
})();
var state__47574__auto__ = (function (){var statearr_49093 = f__47573__auto__();
(statearr_49093[(6)] = c__47572__auto___50143);

return statearr_49093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47574__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
