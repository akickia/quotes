import QuoteCard from './QuoteCard'
import { useState } from 'react'

export default function QuotesContainer({quotes}) {
  const [numberOfItems, setNumberOfItems] = useState(10)
  function increaseNumberOfQuotes() {
    setNumberOfItems(numberOfItems + 10)
  }
  
  //Map to generate cards
  return (
    <article className='container'>
      {
        quotes && 
        quotes.slice(0, numberOfItems).map((quote, i) => <QuoteCard key={quote.id} quote={quote} index={i}/>)
      }
      <section className='btns-container'>
        <button onClick={() => increaseNumberOfQuotes()}>More quotes</button>
      </section>
    </article>
  )
}
