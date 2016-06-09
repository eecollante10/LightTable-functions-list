(ns lt.plugins.functions-list
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.editor :as e]
            [lt.objs.editor.pool :as pool]
            [lt.util.dom :as dom]
            [lt.util.js :as js]
            [clojure.string :as str])
  (:import (java.lang String))
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn dar-lista
  "Devuelve la lista de funciones"
  []
  (def lista [:ul {:style "overflow-y:scroll;"} [:hr]])
  (let[editor (pool/last-active)
        words (e/->cm-ed editor)
        count (if (nil? words) (def coun 0) (def coun (.lineCount words)) coun)]
       (dotimes [i count]
         (def linea (.getLine words i))
         (if (boolean (re-find #"^function" linea))
           (do (def spl (str/split linea #"ion " 2))
             (defui boton [this] [:li [:button.button {:type "button" :style "font-size: 140%;"} [:span {:style "color:purple;"} "function "] [:span (get spl 1)]]]
               :click (fn [](do (.scrollIntoView words (clj->js {:from {:line i :ch 0} :to {:line (+ i 20) :ch 0}}))
                              (.setSelection words (clj->js {:line i :ch 0}) (clj->js {:line i :ch 35})))))
             (def lista (into [] (concat lista [(boton this)])))))))
    (if (< (count lista) 3)
      (def lista (conj lista [:h3 "No functions"])))
    (defui funcs-list [this]
      [:div {:style "overflow-y:scroll"} [:h1 "JS Functions"] lista])
  funcs-list)

(object/object* ::functions-list.list
                :tags [:functions-list.list]
                :behaviors [::on-close-destroy]
                :name "functions-list"
                :init (fn [this]
                        ((dar-lista) this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "functions-list: Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def funcs (object/create ::functions-list.list))
(sidebar/add-item sidebar/rightbar funcs)

(cmd/command {:command :functions-list.show
              :desc "functions-list: js Functions"
              :exec (fn []
                      (do (dom/remove (get @funcs :content))
                        (reset! funcs (assoc @funcs :content ((dar-lista) this)))
                        (sidebar/add-item sidebar/rightbar funcs)
                      (object/raise sidebar/rightbar :toggle funcs {:transient? false})))})
