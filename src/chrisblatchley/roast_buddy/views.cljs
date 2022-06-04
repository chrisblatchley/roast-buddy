(ns chrisblatchley.roast-buddy.views
    (:require
     [re-frame.core :as re-frame]
     [chrisblatchley.roast-buddy.subs :as subs]
     [chrisblatchley.roast-buddy.roasts :as roasts]
     ))

(defn past-roasts []
  (let [roasts (re-frame/subscribe [::subs/roasts])]
    [:section
     [:h2 "my roasts"
      (if (empty? @roasts)
        [:h3 "nothing yet!"]
        [:ul (map (fn [{:keys [name]}] [:li name]) @roasts)])]]))

(defn- data-rows
  [{:keys [data]}]
  (map (fn [{:keys [time temp ror]}]
         [:tr
          [:td time]
          [:td temp]
          [:td ror]]) data))

(defn current-roast []
  (let [roast (re-frame/subscribe [::subs/current-roast])
        temp-value (atom 0)
        roast-name (atom "")]
    [:section
     [:h2 "current roast: "
      [:input {:type "text"
               :on-change #(reset! roast-name (-> % .-target .-value))}]]
     [:h3 (if (roasts/roasting? @roast)
            [:button {:on-click #(re-frame/dispatch [:finish-roast :done])} "stop"]
            [:button {:on-click #(re-frame/dispatch [:start-roast @roast-name])} "start"])]
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
