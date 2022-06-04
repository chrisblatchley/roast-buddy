(ns chrisblatchley.roast-buddy.events
  (:require
   [re-frame.core :as re-frame]
   [chrisblatchley.roast-buddy.db :as db]
   [chrisblatchley.roast-buddy.roasts :as roasts]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :record-temp
 (fn [db [_ temp]]
   (update-in db [:current-roast] #(roasts/record-temp % temp))))

(re-frame/reg-event-db
 :start-roast
 (fn [db [_ name]]
   (let [new-roast (roasts/create-roast name)]
     (-> db
         (assoc :current-roast new-roast)))))

(re-frame/reg-event-db
 :finish-roast
 (fn [db [_ _]]
   (let [finished-roast (roasts/finish-roast (:current-roast db))]
     (-> db
         (update-in [:roasts] conj finished-roast)
         (update-in [:current-roast] finished-roast)))))