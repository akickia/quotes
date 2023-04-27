import React from 'react'

export default function QuoteCard(props) {
  

  return (
    <section className='quote-card'>
  
      {props.quote ? <div><h3>{props.quote.text}</h3><p>{props.quote.author}</p></div> : <p></p>}
      </section>
  )
}
