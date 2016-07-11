if(!lt.util.load.provided_QMARK_('lt.plugins.functions-list')) {
goog.provide('lt.plugins.functions_list');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('java.lang.String');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Devuelve la lista de funciones
*/
lt.plugins.functions_list.dar_lista = (function dar_lista(){lt.plugins.functions_list.lista = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow-y:scroll;"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null)], null);
var editor_7319 = lt.objs.editor.pool.last_active.call(null);var words_7320 = lt.objs.editor.__GT_cm_ed.call(null,editor_7319);var count_7321 = (((words_7320 == null))?lt.plugins.functions_list.coun = 0:lt.plugins.functions_list.coun = words_7320.lineCount());var n__5732__auto___7322 = count_7321;var i_7323 = 0;while(true){
if((i_7323 < n__5732__auto___7322))
{lt.plugins.functions_list.linea = words_7320.getLine(i_7323);
if(cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/^\s*function \w+\s*\(/,lt.plugins.functions_list.linea)))
{lt.plugins.functions_list.spl = clojure.string.split.call(null,lt.plugins.functions_list.linea,/nction /,2);
lt.plugins.functions_list.boton = ((function (i_7323,n__5732__auto___7322,editor_7319,words_7320,count_7321){
return (function boton(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1398701280),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"style","style",1123684643),"font-size: 140%;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"color:purple;"], null),"function "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.get.call(null,lt.plugins.functions_list.spl,1)], null)], null)], null));var seq__7301_7324 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (i_7323,e__6281__auto__,n__5732__auto___7322,editor_7319,words_7320,count_7321){
return (function (){words_7320.scrollIntoView(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7323,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(i_7323 + 20),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)], null)));
return words_7320.setSelection(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7323,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7323,new cljs.core.Keyword(null,"ch","ch",1013907415),35], null)));
});})(i_7323,e__6281__auto__,n__5732__auto___7322,editor_7319,words_7320,count_7321))
], null)));var chunk__7302_7325 = null;var count__7303_7326 = 0;var i__7304_7327 = 0;while(true){
if((i__7304_7327 < count__7303_7326))
{var vec__7305_7328 = cljs.core._nth.call(null,chunk__7302_7325,i__7304_7327);var ev__6282__auto___7329 = cljs.core.nth.call(null,vec__7305_7328,0,null);var func__6283__auto___7330 = cljs.core.nth.call(null,vec__7305_7328,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7329,func__6283__auto___7330);
{
var G__7331 = seq__7301_7324;
var G__7332 = chunk__7302_7325;
var G__7333 = count__7303_7326;
var G__7334 = (i__7304_7327 + 1);
seq__7301_7324 = G__7331;
chunk__7302_7325 = G__7332;
count__7303_7326 = G__7333;
i__7304_7327 = G__7334;
continue;
}
} else
{var temp__4092__auto___7335 = cljs.core.seq.call(null,seq__7301_7324);if(temp__4092__auto___7335)
{var seq__7301_7336__$1 = temp__4092__auto___7335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7301_7336__$1))
{var c__5632__auto___7337 = cljs.core.chunk_first.call(null,seq__7301_7336__$1);{
var G__7338 = cljs.core.chunk_rest.call(null,seq__7301_7336__$1);
var G__7339 = c__5632__auto___7337;
var G__7340 = cljs.core.count.call(null,c__5632__auto___7337);
var G__7341 = 0;
seq__7301_7324 = G__7338;
chunk__7302_7325 = G__7339;
count__7303_7326 = G__7340;
i__7304_7327 = G__7341;
continue;
}
} else
{var vec__7306_7342 = cljs.core.first.call(null,seq__7301_7336__$1);var ev__6282__auto___7343 = cljs.core.nth.call(null,vec__7306_7342,0,null);var func__6283__auto___7344 = cljs.core.nth.call(null,vec__7306_7342,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7343,func__6283__auto___7344);
{
var G__7345 = cljs.core.next.call(null,seq__7301_7336__$1);
var G__7346 = null;
var G__7347 = 0;
var G__7348 = 0;
seq__7301_7324 = G__7345;
chunk__7302_7325 = G__7346;
count__7303_7326 = G__7347;
i__7304_7327 = G__7348;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});})(i_7323,n__5732__auto___7322,editor_7319,words_7320,count_7321))
;
lt.plugins.functions_list.lista = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lt.plugins.functions_list.lista,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.functions_list.boton.call(null,lt.plugins.functions_list.this$)], null)));
} else
{}
{
var G__7349 = (i_7323 + 1);
i_7323 = G__7349;
continue;
}
} else
{}
break;
}
if((cljs.core.count.call(null,lt.plugins.functions_list.lista) < 3))
{lt.plugins.functions_list.lista = cljs.core.conj.call(null,lt.plugins.functions_list.lista,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"No functions"], null));
} else
{}
lt.plugins.functions_list.funcs_list = (function funcs_list(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow-y:scroll"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"JS Functions"], null),lt.plugins.functions_list.lista], null));var seq__7313_7350 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7314_7351 = null;var count__7315_7352 = 0;var i__7316_7353 = 0;while(true){
if((i__7316_7353 < count__7315_7352))
{var vec__7317_7354 = cljs.core._nth.call(null,chunk__7314_7351,i__7316_7353);var ev__6282__auto___7355 = cljs.core.nth.call(null,vec__7317_7354,0,null);var func__6283__auto___7356 = cljs.core.nth.call(null,vec__7317_7354,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7355,func__6283__auto___7356);
{
var G__7357 = seq__7313_7350;
var G__7358 = chunk__7314_7351;
var G__7359 = count__7315_7352;
var G__7360 = (i__7316_7353 + 1);
seq__7313_7350 = G__7357;
chunk__7314_7351 = G__7358;
count__7315_7352 = G__7359;
i__7316_7353 = G__7360;
continue;
}
} else
{var temp__4092__auto___7361 = cljs.core.seq.call(null,seq__7313_7350);if(temp__4092__auto___7361)
{var seq__7313_7362__$1 = temp__4092__auto___7361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7313_7362__$1))
{var c__5632__auto___7363 = cljs.core.chunk_first.call(null,seq__7313_7362__$1);{
var G__7364 = cljs.core.chunk_rest.call(null,seq__7313_7362__$1);
var G__7365 = c__5632__auto___7363;
var G__7366 = cljs.core.count.call(null,c__5632__auto___7363);
var G__7367 = 0;
seq__7313_7350 = G__7364;
chunk__7314_7351 = G__7365;
count__7315_7352 = G__7366;
i__7316_7353 = G__7367;
continue;
}
} else
{var vec__7318_7368 = cljs.core.first.call(null,seq__7313_7362__$1);var ev__6282__auto___7369 = cljs.core.nth.call(null,vec__7318_7368,0,null);var func__6283__auto___7370 = cljs.core.nth.call(null,vec__7318_7368,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7369,func__6283__auto___7370);
{
var G__7371 = cljs.core.next.call(null,seq__7313_7362__$1);
var G__7372 = null;
var G__7373 = 0;
var G__7374 = 0;
seq__7313_7350 = G__7371;
chunk__7314_7351 = G__7372;
count__7315_7352 = G__7373;
i__7316_7353 = G__7374;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});
return lt.plugins.functions_list.funcs_list;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.functions-list","functions-list.list","lt.plugins.functions-list/functions-list.list",2137887515),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"functions-list.list","functions-list.list",2246460334)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.functions-list","on-close-destroy","lt.plugins.functions-list/on-close-destroy",3098967454)], null),new cljs.core.Keyword(null,"name","name",1017277949),"functions-list",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.functions_list.dar_lista.call(null).call(null,this$);
}));
lt.plugins.functions_list.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7375 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7375))
{var ts_7376 = temp__4092__auto___7375;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7376))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7376);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.functions-list","on-close-destroy","lt.plugins.functions-list/on-close-destroy",3098967454),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.functions_list.__BEH__on_close_destroy,new cljs.core.Keyword(null,"desc","desc",1016984067),"functions-list: Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.functions_list.funcs = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.functions-list","functions-list.list","lt.plugins.functions-list/functions-list.list",2137887515));
lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.functions_list.funcs);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"functions-list.show","functions-list.show",2246667789),new cljs.core.Keyword(null,"desc","desc",1016984067),"functions-list: js Functions",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.util.dom.remove.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.functions_list.funcs),new cljs.core.Keyword(null,"content","content",1965434859)));
cljs.core.reset_BANG_.call(null,lt.plugins.functions_list.funcs,cljs.core.assoc.call(null,cljs.core.deref.call(null,lt.plugins.functions_list.funcs),new cljs.core.Keyword(null,"content","content",1965434859),lt.plugins.functions_list.dar_lista.call(null).call(null,lt.plugins.functions_list.this$)));
lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.functions_list.funcs);
return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.functions_list.funcs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transient?","transient?",3584270951),false], null));
})], null));
}

//# sourceMappingURL=functions_list_compiled.js.map