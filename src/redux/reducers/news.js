// Constants
const initialState = {
   news: []
}

// Reducer
export default function favoriteNewsReducer(state = initialState, action) {
   switch (action.type) {
      case 'SET_FAVORITE_NEWS':
         return { ...state, news: action.payload };
      default:
         return state
   }
}