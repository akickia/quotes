export const addQuote = (quote) => ({
  type: "ADD_QUOTE",
  payload: quote
});

export const fillQuotes = (quotes) => ({
  type: "FILL_QUOTES",
  payload: quotes
})