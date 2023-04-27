import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'
import { useSelector } from 'react-redux';

export default function Hero() {
  const [heroQuote, setHeroQuote] = useState()
  const quotes = useSelector((state) => state.quotes);

  useEffect(() => {
    let n = Math.floor(Math.random()*10)
    setHeroQuote(quotes[n])
    console.log(heroQuote)
  }, [quotes])

  return (
    <article className='hero'>
      <QuoteCard quote={heroQuote} />
      <section className='btns-container'>
        <button>More quotes</button>
        <button>Add quotes</button>
      </section>
    </article>
  )
}
