export const fillQuotes = (quotes) => ({
  type: "FILL_QUOTES",
  payload: quotes
})

export const addQuote = (newQuote) => ({
  type: "ADD_QUOTE",
  payload: newQuote
});

export const editQuote = (newValue) => ({
  type: "EDIT_QUOTE",
  payload: newValue
});

export const removeQuote = (quote) => ({
  type: "REMOVE_QUOTE",
  payload: quote
});