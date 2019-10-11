import { type as findCurrentItemType } from '../actions/findCurrentItem'
import item from '../../data/items'

const defaultState = {}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            return item.find(n => n.id === payload)
        }

        default:
            return state;
    }
}

export default reducer;
