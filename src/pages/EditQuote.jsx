import React, { useEffect, useState } from 'react'
import Form from '../Components/Form'
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { editQuote } from '../redux/actions/quoteActions';

export default function EditQuote() {
  const state = useSelector((state) => state.quotes);
  const [quote, setQuote] = useState()
  const [localQuote, setLocalQuote] = useState({author: quote.author, text: quote.text})
  const params = useParams();
  const dispatch = useDispatch()
  


  useEffect(() => {
    let currentQuote = state.quotes.find((q) => params.id == 0)
    setQuote(currentQuote)
  }, [])

  const handleInputChange = (e, field) => {
    setLocalQuote({ ...localQuote, [field]: e.target.value });
    console.log(localQuote)
  };

  const setEdit = (localQuote) => {
    dispatch(editQuote(localQuote))
  }
  
  return (
    <article className='form-container edit'>
      <h3>Edit quote:</h3>
      <form>
      <section>
        <label htmlFor='author'>author:</label>
        <input type="text" id="author" name='author' value={quote && quote.author} onChange={(e) => handleInputChange(e, 'author')}></input>
      </section>
      <section>
        <label htmlFor='quote'>quote:</label>
        <textarea type="text" id="quote" name='quote' value={quote && quote.text} onChange={(e) => handleInputChange(e, 'text')}></textarea>
      </section>
    </form>
      <section className='btns-container'>
        <button onClick={() => setEdit(localQuote)}>Edit</button>
        <Link to="/"><button>Cancel</button></Link>
      </section>
    </article>
  )
}
