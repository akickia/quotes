import QuoteCard from './QuoteCard'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function QuotesContainer() {
  //get quotes from store
  const quotes = useSelector((state) => state.quotes)
  
  //State to declare how many quotes to render
  const [numberOfItems, setNumberOfItems] = useState(10)

  //Funktion for increasing number of quotes to render by 10
  function increaseNumberOfQuotes() {
    setNumberOfItems(numberOfItems + 10)
  }
  
  //Slice to only render as many as set in state. 
  //Map to generate cards
  return (
    <section className='container'>
      {
        quotes && 
        quotes.slice(0, numberOfItems).map((quote, i) => <QuoteCard key={quote.id} quote={quote} index={i}/>)
      }
      <section className='btns-container'>
        <button onClick={() => increaseNumberOfQuotes()}>More quotes</button>
      </section>
    </section>
  )
}
