import { combineReducers } from "redux";
import gamesReducer from "./games/games.reducer";

const rootReducer = combineReducers({
    currentGamesList: gamesReducer,
    providers: gamesReducer,
    currency: gamesReducer,
});

export default rootReducer;