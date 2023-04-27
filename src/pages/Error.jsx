import React from 'react'
import { Link } from 'react-router-dom'

//Error page
export default function Error() {
  return (
    <article className='error'>
      <h3>Something went wrong</h3>
      <Link to="/"><button>Go back</button></Link>
    </article>
  )
}
