import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
    switch (action.type) {
            case "FILL_QUOTES":
            return {
                ...state,
                quotes: [...action.payload]
            }
            case "ADD_QUOTE":
            return {
                ...state,
                quotes: [action.payload, ...state.quotes ]
            }
            case "EDIT_QUOTE":
                return {
                    ...state,
                quotes: [action.payload.field], newValue,
                  };
            case "REMOVE_QUOTE":
                return state.map(quote => {
                    if (quote[i] === action.index) {
                      return { ...state.quotes,  };
                    }
                    return dog;
                  })
        default:
            return state
    }
}
export default quoteReducer;