import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
    switch (action.type) {
            //Add quotes to store
            case "FILL_QUOTES":
            return {
                ...state,
                quotes: [...action.payload]
            }
            //Add one new quote (newQuote) at top list in store
            case "ADD_QUOTE":
                return {
                  ...state,
                  quotes: [action.payload.newQuote, ...state.quotes]
                }
            //Find correct id and change fields in that object in store
            case "EDIT_QUOTE":
                return {
                  ...state,
                  quotes: state.quotes.map((quote) =>
                    quote.id === action.payload.id
                      ? { ...quote, [action.payload.field]: action.payload.newValue }
                      : quote
                  ),
                };
            //Filter on id and return all but that object in store
            case "REMOVE_QUOTE":
                return {
                    ...state,
                quotes: state.quotes.filter((quote) => quote.id !== action.payload.id)
                }
        default:
            return state
    }
}
export default quoteReducer;