import { PROVIDERS, CURRENT_GAMES_LIST, CURRENCY } from './games.type';

export function setCurrentGamesList(action) {
    return {
        type: CURRENT_GAMES_LIST,
        payload: action
    }
}
export function setProviders(action) {
    return {
        type: PROVIDERS,
        payload: action
    }
}
export function setCurrency(action) {
    return {
        type: CURRENCY,
        payload: action
    }
}