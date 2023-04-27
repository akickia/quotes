import QuoteCard from './QuoteCard'
import { useSelector } from 'react-redux'

export default function QuotesContainer() {
  const quotes = useSelector((state) => state.quotes);

  return (
    <article className='container'>
      {
        quotes && 
        quotes.map((quote, i) => <QuoteCard key={i} quote={quote} index={i}/>)
      }
    </article>
  )
}
