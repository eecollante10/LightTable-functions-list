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
var editor_7059 = lt.objs.editor.pool.last_active.call(null);var words_7060 = lt.objs.editor.__GT_cm_ed.call(null,editor_7059);var count_7061 = (((words_7060 == null))?lt.plugins.functions_list.coun = 0:lt.plugins.functions_list.coun = words_7060.lineCount());var n__5732__auto___7062 = count_7061;var i_7063 = 0;while(true){
if((i_7063 < n__5732__auto___7062))
{lt.plugins.functions_list.linea = words_7060.getLine(i_7063);
if(cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/^\s*function\s+\w+\s*\(/,lt.plugins.functions_list.linea)))
{lt.plugins.functions_list.spl = clojure.string.split.call(null,lt.plugins.functions_list.linea,/nction /,2);
lt.plugins.functions_list.boton = ((function (i_7063,n__5732__auto___7062,editor_7059,words_7060,count_7061){
return (function boton(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1398701280),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"style","style",1123684643),"font-size: 140%;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"color:purple;"], null),"function "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.get.call(null,lt.plugins.functions_list.spl,1)], null)], null)], null));var seq__7041_7064 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (i_7063,e__6281__auto__,n__5732__auto___7062,editor_7059,words_7060,count_7061){
return (function (){words_7060.scrollIntoView(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7063,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(i_7063 + 20),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)], null)));
return words_7060.setSelection(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7063,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),i_7063,new cljs.core.Keyword(null,"ch","ch",1013907415),35], null)));
});})(i_7063,e__6281__auto__,n__5732__auto___7062,editor_7059,words_7060,count_7061))
], null)));var chunk__7042_7065 = null;var count__7043_7066 = 0;var i__7044_7067 = 0;while(true){
if((i__7044_7067 < count__7043_7066))
{var vec__7045_7068 = cljs.core._nth.call(null,chunk__7042_7065,i__7044_7067);var ev__6282__auto___7069 = cljs.core.nth.call(null,vec__7045_7068,0,null);var func__6283__auto___7070 = cljs.core.nth.call(null,vec__7045_7068,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7069,func__6283__auto___7070);
{
var G__7071 = seq__7041_7064;
var G__7072 = chunk__7042_7065;
var G__7073 = count__7043_7066;
var G__7074 = (i__7044_7067 + 1);
seq__7041_7064 = G__7071;
chunk__7042_7065 = G__7072;
count__7043_7066 = G__7073;
i__7044_7067 = G__7074;
continue;
}
} else
{var temp__4092__auto___7075 = cljs.core.seq.call(null,seq__7041_7064);if(temp__4092__auto___7075)
{var seq__7041_7076__$1 = temp__4092__auto___7075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7041_7076__$1))
{var c__5632__auto___7077 = cljs.core.chunk_first.call(null,seq__7041_7076__$1);{
var G__7078 = cljs.core.chunk_rest.call(null,seq__7041_7076__$1);
var G__7079 = c__5632__auto___7077;
var G__7080 = cljs.core.count.call(null,c__5632__auto___7077);
var G__7081 = 0;
seq__7041_7064 = G__7078;
chunk__7042_7065 = G__7079;
count__7043_7066 = G__7080;
i__7044_7067 = G__7081;
continue;
}
} else
{var vec__7046_7082 = cljs.core.first.call(null,seq__7041_7076__$1);var ev__6282__auto___7083 = cljs.core.nth.call(null,vec__7046_7082,0,null);var func__6283__auto___7084 = cljs.core.nth.call(null,vec__7046_7082,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7083,func__6283__auto___7084);
{
var G__7085 = cljs.core.next.call(null,seq__7041_7076__$1);
var G__7086 = null;
var G__7087 = 0;
var G__7088 = 0;
seq__7041_7064 = G__7085;
chunk__7042_7065 = G__7086;
count__7043_7066 = G__7087;
i__7044_7067 = G__7088;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});})(i_7063,n__5732__auto___7062,editor_7059,words_7060,count_7061))
;
lt.plugins.functions_list.lista = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lt.plugins.functions_list.lista,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.functions_list.boton.call(null,lt.plugins.functions_list.this$)], null)));
} else
{}
{
var G__7089 = (i_7063 + 1);
i_7063 = G__7089;
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
lt.plugins.functions_list.funcs_list = (function funcs_list(this$){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow-y:scroll"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"JS Functions"], null),lt.plugins.functions_list.lista], null));var seq__7053_7090 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7054_7091 = null;var count__7055_7092 = 0;var i__7056_7093 = 0;while(true){
if((i__7056_7093 < count__7055_7092))
{var vec__7057_7094 = cljs.core._nth.call(null,chunk__7054_7091,i__7056_7093);var ev__6282__auto___7095 = cljs.core.nth.call(null,vec__7057_7094,0,null);var func__6283__auto___7096 = cljs.core.nth.call(null,vec__7057_7094,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7095,func__6283__auto___7096);
{
var G__7097 = seq__7053_7090;
var G__7098 = chunk__7054_7091;
var G__7099 = count__7055_7092;
var G__7100 = (i__7056_7093 + 1);
seq__7053_7090 = G__7097;
chunk__7054_7091 = G__7098;
count__7055_7092 = G__7099;
i__7056_7093 = G__7100;
continue;
}
} else
{var temp__4092__auto___7101 = cljs.core.seq.call(null,seq__7053_7090);if(temp__4092__auto___7101)
{var seq__7053_7102__$1 = temp__4092__auto___7101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7053_7102__$1))
{var c__5632__auto___7103 = cljs.core.chunk_first.call(null,seq__7053_7102__$1);{
var G__7104 = cljs.core.chunk_rest.call(null,seq__7053_7102__$1);
var G__7105 = c__5632__auto___7103;
var G__7106 = cljs.core.count.call(null,c__5632__auto___7103);
var G__7107 = 0;
seq__7053_7090 = G__7104;
chunk__7054_7091 = G__7105;
count__7055_7092 = G__7106;
i__7056_7093 = G__7107;
continue;
}
} else
{var vec__7058_7108 = cljs.core.first.call(null,seq__7053_7102__$1);var ev__6282__auto___7109 = cljs.core.nth.call(null,vec__7058_7108,0,null);var func__6283__auto___7110 = cljs.core.nth.call(null,vec__7058_7108,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___7109,func__6283__auto___7110);
{
var G__7111 = cljs.core.next.call(null,seq__7053_7102__$1);
var G__7112 = null;
var G__7113 = 0;
var G__7114 = 0;
seq__7053_7090 = G__7111;
chunk__7054_7091 = G__7112;
count__7055_7092 = G__7113;
i__7056_7093 = G__7114;
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
lt.plugins.functions_list.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7115 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7115))
{var ts_7116 = temp__4092__auto___7115;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7116))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7116);
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