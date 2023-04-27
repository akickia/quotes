import React, { useState } from 'react'
import Form from '../Components/Form'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addQuote } from '../redux/actions/quoteActions'

//Refactor to component for add + edit

export default function AddQuote() {
  const dispatch = useDispatch()
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  function addNewQuote() {
    let newQuote = {
      author: author,
      text: quote
    }
    console.log("Adding new quote: " + newQuote)
    dispatch(addQuote(newQuote))
  }
  return (
    <article className='form-container add'>
      <h3>Add quote:</h3>
      <form>
      <section>
        <label htmlFor='author'>author:</label>
        <input onChange={(e) => {setAuthor(e.target.value)}} type="text" id="author" name='author'></input>
      </section>
      <section>
        <label htmlFor='quote'>quote:</label>
        <textarea onChange={(e) => {setQuote(e.target.value)}} type="text" id="quote" name='quote'></textarea>
      </section>
    </form>
      <section className='btns-container'>
        <Link to="/"><button onClick={() => addNewQuote()}>Add</button></Link>
        <Link to="/"><button>Cancel</button></Link>
      </section>
    </article>
  )
}
