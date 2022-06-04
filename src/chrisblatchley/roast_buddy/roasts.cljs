(ns chrisblatchley.roast-buddy.roasts)

(defn create-roast
  [name]
  {:name name
   :data []
   :started-at (js/Date.)})

(defn record-temp
  [roast current-temp]
  (let [{:keys [time temp]} (-> roast :data last)
        now (.now js/Date)
        d-time (/ (- now time) 1000)
        d-temp (- current-temp temp)
        ror (/ d-temp d-time)
        seconds-elapsed (int (/ (- now (:started-at roast)) 1000))]
    (update-in roast [:data] conj {:time seconds-elapsed :temp current-temp :ror ror})))

(defn roasting?
  [roast]
  (and (not (nil? (:started-at roast)))
       (nil? (:finished-at roast))))

(defn finish-roast
  [roast]
  (assoc roast :finished-at (js/Date.)))