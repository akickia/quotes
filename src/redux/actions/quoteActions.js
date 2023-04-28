export const fillQuotes = (quotes) => ({
  type: "FILL_QUOTES",
  payload: quotes
})

export const addQuote = (newQuote) => ({
  type: "ADD_QUOTE",
  payload: newQuote
});

export const editQuote = (id, field, newValue) => ({
  type: "EDIT_QUOTE",
  payload: {id, field, newValue}
});

export const removeQuote = (index) => ({
  type: "REMOVE_QUOTE",
  payload: index
});