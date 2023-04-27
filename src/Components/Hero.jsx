import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [heroQuote, setHeroQuote] = useState()
  const quotes = useSelector((state) => state.quotes);

  //Generate random quote for hero, set to state: heroQuote
  useEffect(() => {
    let n = Math.floor(Math.random()*15)
    setHeroQuote(quotes[n])
  }, [quotes])

  return (
    <article className='hero'>
      <QuoteCard quote={heroQuote} />
      <section className='btns-container'>
        <button>More quotes</button>
        <Link to="/add"><button>Add quotes</button></Link>
      </section>
    </article>
  )
}
