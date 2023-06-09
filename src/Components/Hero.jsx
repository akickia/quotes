import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuoteCard from './QuoteCard'

export default function Hero() {
  //get quotes from store
  const quotes = useSelector((state) => state.quotes)

  //State for random quote in hero
  const [heroQuote, setHeroQuote] = useState()

  //Generate useEffect to render random quote
  useEffect(() => {
    generateQuote()
  }, [quotes])

  //Function for setting random index for quote
  const generateQuote = () => {
    let n = Math.floor(Math.random()*1000)
    setHeroQuote(quotes[n])
  }

  return (
    <section className='hero'>
      <QuoteCard quote={heroQuote} />
      <section className='btns-container'>
        <button onClick={() => generateQuote()}>Generate new quote</button>
        <Link to="/add"><button>Add new quote</button></Link>
      </section>
    </section>
  )
}
