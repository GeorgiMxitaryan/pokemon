import { combineReducers } from 'redux'

function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.pokemons

        default:
            return state;
    }
}

const offsetState = 0

function offsetChange(state = offsetState, action) {
    console.log(state)
    switch (action.type) {
        case 'OFFSET_CHANGE':
            return action.offset;

        default:
            return state;
    }
}



export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items,
  offsetChange,
})