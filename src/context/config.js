export const initialState = {
  "version": "v1.0",
  "inital_data":{
    "promoMins": 1,
    "promoSec": 59,
    "isRunning": false,
    "config": {
      "view_options": ["Promodoro", "Short Break", "Long Break"],
      "initial_selection_id": 0,
      "current_selection_id": 0,
      "break_option_id": 1,
      "Short Break": {
        "promoMins": 0,
        "promoSec": 50
      },
      "Long Break":{
        "promoMins": 1,
        "promoSec": 0
      }
     
    },
    "tasks":["initail task"],
    "length": 1
  }
}