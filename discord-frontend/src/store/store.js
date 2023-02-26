
import {combineReducers,legacy_createStore as createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";



import reducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";
import roomReducer from "./reducers/roomReducer";


const rootReducer = combineReducers({
    auth: reducer,
    alert: alertReducer,
    friends: friendReducer,
    chat : chatReducer,
    room: roomReducer,
    
});


const store = createStore  (
    rootReducer,
    
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;