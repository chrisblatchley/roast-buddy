(ns chrisblatchley.roast-buddy.events
  (:require
   [re-frame.core :as re-frame]
   [chrisblatchley.roast-buddy.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :roast-name
 (fn [db [_ name]]
   (assoc-in db [:current-roast :name] name)))

(re-frame/reg-event-db
 :record-temp
 (fn [db [_ temp]]
   (let [time (get-in db [:current-roast :started-at])
         prev (last (get-in db [:current-roast :data]))]
     (update-in db [:current-roast :data] conj {:time (/ (- (.now js/Date) time) 1000)
                                                :temp temp
                                                :ror (- temp (:temp prev))}))))

(re-frame/reg-event-db
 :start-roast
 (fn [db [_ _]]
   (assoc-in db [:current-roast :started-at] (js/Date.))))