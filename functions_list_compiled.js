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
var editor_6577 = lt.objs.editor.pool.last_active.call(null);var words_6578 = lt.objs.editor.__GT_cm_ed.call(null,editor_6577);var count_6579 = (((words_6578 == null))?lt.plugins.functions_list.coun = 0:lt.plugins.functions_list.coun = words_6578.lineCount());var n__5732__auto___6580 = count_6579;var i_6581 = 0;while(true){
if((i_6581 < n__5732__auto___6580))
{lt.plugins.functions_list.linea = words_6578.getLine(i_6581);
if(cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/^function/,lt.plugins.functions_list.linea)))
{lt.plugins.functions_list.spl = clojure.string.split.call(null,lt.plugins.functions_list.linea,/ion /,2);
lt.plugins.functions_list.boton = ((function (i_6581,n__5732__auto___6580,editor_6577,words_6578,count_6579){
return (function boton(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1398701280),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"style","style",1123684643),"font-size: 140%;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"color:purple;"], null),"function "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.get.call(null,lt.plugins.functions_list.spl,1)], null)], null)], null));var seq__6559_6582 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (i_6581,e__6281__auto__,n__5732__auto___6580,editor_6577,words_6578,count_6579){
return (function (){words_6578.scrollIntoView(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_6581,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(i_6581 + 20),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)], null)));
return words_6578.setSelection(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_6581,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_6581,new cljs.core.Keyword(null,"ch","ch",1013907415),35], null)));
});})(i_6581,e__6281__auto__,n__5732__auto___6580,editor_6577,words_6578,count_6579))
], null)));var chunk__6560_6583 = null;var count__6561_6584 = 0;var i__6562_6585 = 0;while(true){
if((i__6562_6585 < count__6561_6584))
{var vec__6563_6586 = cljs.core._nth.call(null,chunk__6560_6583,i__6562_6585);var ev__6282__auto___6587 = cljs.core.nth.call(null,vec__6563_6586,0,null);var func__6283__auto___6588 = cljs.core.nth.call(null,vec__6563_6586,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6587,func__6283__auto___6588);
{
var G__6589 = seq__6559_6582;
var G__6590 = chunk__6560_6583;
var G__6591 = count__6561_6584;
var G__6592 = (i__6562_6585 + 1);
seq__6559_6582 = G__6589;
chunk__6560_6583 = G__6590;
count__6561_6584 = G__6591;
i__6562_6585 = G__6592;
continue;
}
} else
{var temp__4092__auto___6593 = cljs.core.seq.call(null,seq__6559_6582);if(temp__4092__auto___6593)
{var seq__6559_6594__$1 = temp__4092__auto___6593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6559_6594__$1))
{var c__5632__auto___6595 = cljs.core.chunk_first.call(null,seq__6559_6594__$1);{
var G__6596 = cljs.core.chunk_rest.call(null,seq__6559_6594__$1);
var G__6597 = c__5632__auto___6595;
var G__6598 = cljs.core.count.call(null,c__5632__auto___6595);
var G__6599 = 0;
seq__6559_6582 = G__6596;
chunk__6560_6583 = G__6597;
count__6561_6584 = G__6598;
i__6562_6585 = G__6599;
continue;
}
} else
{var vec__6564_6600 = cljs.core.first.call(null,seq__6559_6594__$1);var ev__6282__auto___6601 = cljs.core.nth.call(null,vec__6564_6600,0,null);var func__6283__auto___6602 = cljs.core.nth.call(null,vec__6564_6600,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6601,func__6283__auto___6602);
{
var G__6603 = cljs.core.next.call(null,seq__6559_6594__$1);
var G__6604 = null;
var G__6605 = 0;
var G__6606 = 0;
seq__6559_6582 = G__6603;
chunk__6560_6583 = G__6604;
count__6561_6584 = G__6605;
i__6562_6585 = G__6606;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});})(i_6581,n__5732__auto___6580,editor_6577,words_6578,count_6579))
;
lt.plugins.functions_list.lista = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lt.plugins.functions_list.lista,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.functions_list.boton.call(null,lt.plugins.functions_list.this$)], null)));
} else
{}
{
var G__6607 = (i_6581 + 1);
i_6581 = G__6607;
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
lt.plugins.functions_list.funcs_list = (function funcs_list(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow-y:scroll"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"JS Functions"], null),lt.plugins.functions_list.lista], null));var seq__6571_6608 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6572_6609 = null;var count__6573_6610 = 0;var i__6574_6611 = 0;while(true){
if((i__6574_6611 < count__6573_6610))
{var vec__6575_6612 = cljs.core._nth.call(null,chunk__6572_6609,i__6574_6611);var ev__6282__auto___6613 = cljs.core.nth.call(null,vec__6575_6612,0,null);var func__6283__auto___6614 = cljs.core.nth.call(null,vec__6575_6612,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6613,func__6283__auto___6614);
{
var G__6615 = seq__6571_6608;
var G__6616 = chunk__6572_6609;
var G__6617 = count__6573_6610;
var G__6618 = (i__6574_6611 + 1);
seq__6571_6608 = G__6615;
chunk__6572_6609 = G__6616;
count__6573_6610 = G__6617;
i__6574_6611 = G__6618;
continue;
}
} else
{var temp__4092__auto___6619 = cljs.core.seq.call(null,seq__6571_6608);if(temp__4092__auto___6619)
{var seq__6571_6620__$1 = temp__4092__auto___6619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6571_6620__$1))
{var c__5632__auto___6621 = cljs.core.chunk_first.call(null,seq__6571_6620__$1);{
var G__6622 = cljs.core.chunk_rest.call(null,seq__6571_6620__$1);
var G__6623 = c__5632__auto___6621;
var G__6624 = cljs.core.count.call(null,c__5632__auto___6621);
var G__6625 = 0;
seq__6571_6608 = G__6622;
chunk__6572_6609 = G__6623;
count__6573_6610 = G__6624;
i__6574_6611 = G__6625;
continue;
}
} else
{var vec__6576_6626 = cljs.core.first.call(null,seq__6571_6620__$1);var ev__6282__auto___6627 = cljs.core.nth.call(null,vec__6576_6626,0,null);var func__6283__auto___6628 = cljs.core.nth.call(null,vec__6576_6626,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6627,func__6283__auto___6628);
{
var G__6629 = cljs.core.next.call(null,seq__6571_6620__$1);
var G__6630 = null;
var G__6631 = 0;
var G__6632 = 0;
seq__6571_6608 = G__6629;
chunk__6572_6609 = G__6630;
count__6573_6610 = G__6631;
i__6574_6611 = G__6632;
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
lt.plugins.functions_list.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___6633 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___6633))
{var ts_6634 = temp__4092__auto___6633;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_6634))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_6634);
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