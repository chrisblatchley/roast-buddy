(ns chrisblatchley.roast-buddy.views
    (:require
     [re-frame.core :as re-frame]
     [chrisblatchley.roast-buddy.subs :as subs]
     ))

(defn past-roasts []
  [:section
   [:h2 "my roasts"
    [:ul
     [:li "ethiopia guji"]
     [:li "colombia san rafael"]
     [:li "kenya kerogi AA"]]]])

(defn- data-rows
  [{:keys [data]}]
  (map (fn [{:keys [time temp ror]}]
         [:tr
          [:td time]
          [:td temp]
          [:td ror]]) data))

(defn current-roast []
  (let [roast (re-frame/subscribe [::subs/current-roast])
        temp-value (atom 0)]
    [:section
     [:h2 "current roast: "
      [:input {:type "text"
               :on-change #(re-frame/dispatch [:roast-name (-> % .-target .-value)])}]]
     [:h3 (if (nil? (:started-at @roast))
            [:button {:on-click #(re-frame/dispatch [:start-roast :started])} "begin"]
            (str "started at: " (:started-at @roast)))]
     [:table
      [:tr
       [:th "time"]
       [:th "temp"]
       [:th "RoR"]]
      (data-rows @roast)]
     [:div
      [:input {:type "number" 
               :on-change #(reset! temp-value (-> % .-target .-value))}]
      [:button {:on-click #(re-frame/dispatch [:record-temp @temp-value])}
       "record temp"]]]))

(defn main-panel []
  [:div
   [:h1 "Welcome to Roast-buddy!"]
   [:div {:style {:display "flex"}}
    (past-roasts)
    (current-roast)]])
