import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
    switch (action.type) {
        case "ADD_QUOTE":
            // då vill vi returnera det nya statet efter att vi har utfört vad kunden vill
            return {
                ...state,
                quotes: [...state.quotes, action.payload]
            }
        case "FILL_QUOTES":
            return {
                ...state,
                quotes: [...action.payload]
            }
        default:
            return state
    }
}
export default quoteReducer;