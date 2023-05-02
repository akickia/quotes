import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeQuote } from "../redux/actions/quoteActions"

export default function RemoveQuote() {
  //Use dispatch and select
  const dispatch = useDispatch()
  const state = useSelector((state) => state.quotes);
  //Use params to get page id
  const params = useParams();

  //set state to access current quote (to render)
  const [quote, setQuote] = useState()

  //Use effect to update current quote by finding correct id
  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id)
    setQuote(currentQuote)
  }, [state, params.id])

  //Make sure page scrolls to top on render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Delete quote
  function handleDelete() {
    dispatch(removeQuote(params.id))
  }

  return (
    <article className='form-container remove'>
      <h3>Are you sure you want to remove this quote?</h3>
      <section className="remove-quote">
        <p>{quote && quote.text}</p>
        <small>{quote && quote.author}</small>
      </section>
      <section className='btns-container'>
        <Link to="/"><button onClick={() => handleDelete()}>Yes</button></Link>
        <Link to="/"><button>No</button></Link>
      </section>
    </article>
  )
}
