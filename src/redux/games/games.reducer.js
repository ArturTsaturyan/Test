import { CURRENT_GAMES_LIST, PROVIDERS, CURRENCY } from './games.type';
import games from '../../games.json'

const initialState = {
  games: games,
  currentGamesList: [],
  providers: [],
  currency: [],
}
export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_GAMES_LIST: {
      return {
        ...state,
        currentGamesList:
          action.payload?.provider && !action.payload?.currency ?
            Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).filter((item) => item.provider === action.payload?.provider).sort((a, b) => b.collections.popularity - a.collections.popularity)
            :
            !action.payload?.provider && action.payload?.currency ?
              Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).filter((item) => item.real.hasOwnProperty(action.payload?.currency)).sort((a, b) => b.collections.popularity - a.collections.popularity)
              :
              action.payload?.provider && action.payload?.currency ?
                Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).filter((item) => item?.provider === action?.payload?.provider && item.real.hasOwnProperty(action.payload?.currency)).sort((a, b) => b.collections.popularity - a.collections.popularity)
                :
                Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).sort((a, b) => b.collections.popularity - a.collections.popularity)
      };
    }
    case PROVIDERS: {
      return {
        ...state,
        providers:
          action.payload ?
            [...new Set(Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).sort((a, b) => b.collections.popularity - a.collections.popularity).map((e) => e.real.hasOwnProperty(action.payload) && e.provider))]
            :
            [...new Set(Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).sort((a, b) => b.collections.popularity - a.collections.popularity).map((e) => e.provider))]
      };
    }
    case CURRENCY: {
      return {
        ...state,
        currency:
          action.payload ?
            [...new Set(Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).sort((a, b) => b.collections.popularity - a.collections.popularity).map((e) => e.provider === action.payload && (Object.keys(e?.real))).flatMap(innerArr => innerArr))]
            :
            [...new Set(Object.keys(state.games).map((e) => ({ ...state.games[e], img: e })).sort((a, b) => b.collections.popularity - a.collections.popularity).map((e) => (Object.keys(e?.real))).flatMap(innerArr => innerArr))]
      };
    }
    default: return state;
  }
}