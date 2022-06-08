(ns chrisblatchley.roast-buddy.views
    (:require
     [re-frame.core :as re-frame]
     [chrisblatchley.roast-buddy.subs :as subs]
     [chrisblatchley.roast-buddy.roasts :as roasts]
     ))

(defn past-roasts []
  (let [roasts (re-frame/subscribe [::subs/roasts])]
    [:section
     [:h2 "my roasts"]
     (if (empty? @roasts)
       [:h3 "nothing yet!"]
       [:ul (map (fn [{:keys [name] :as roast}]
                   [:a {:href "#" :on-click #(re-frame/dispatch [:load-roast roast])} [:li name]]) @roasts)])]))

(defn- data-rows
  [{:keys [data]}]
  [:table
   [:tbody
    [:tr
     [:th "time"]
     [:th "temp"]
     [:th "RoR"]]
    (map (fn [{:keys [time temp ror]}]
           [:tr
            [:td time]
            [:td temp]
            [:td ror]]) data)]])

(defn- temperature-component []
  (let [temperature (atom 0)]
    [:div
     [:input {:type "number"
              :on-change #(reset! temperature (-> % .-target .-value))}]
     [:button {:on-click #(re-frame/dispatch [:record-temp @temperature])}
      "record temp"]]))

(defn current-roast []
  (let [roast (re-frame/subscribe [::subs/current-roast])]
    [:section
     [:h2 "current roast: "
      [:input {:type "text"
               :on-change #(re-frame/dispatch [:update-name, (-> % .-target .-value)])
               :placeholder (:name @roast)}]]
     [:h3 (case (roasts/status @roast)
            :ready [:button {:on-click #(re-frame/dispatch [:start-roast (:name @roast)])} "start"]
            :started [:button {:on-click #(re-frame/dispatch [:finish-roast :done])} "stop"]
            :finished [:button {:on-click #(re-frame/dispatch [:new-roast :default])} "new"])]            
     (data-rows @roast)
     (temperature-component)]))

(defn main-panel []
  [:div
   [:h1 "Welcome to Roast-buddy!"]
   [:div {:style {:display "flex"}}
    (past-roasts)
    (current-roast)]])

;; (:roasts @re-frame.db/app-db)