(ns chrisblatchley.roast-buddy.events
    (:require
     [re-frame.core :as re-frame]
     [chrisblatchley.roast-buddy.db :as db]
     ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
