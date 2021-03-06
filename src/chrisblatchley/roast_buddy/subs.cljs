(ns chrisblatchley.roast-buddy.subs
    (:require
     [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::current-roast
 (fn [db]
   (:current-roast db)))

(re-frame/reg-sub
 ::roasts
 (fn [db]
   (:roasts db)))