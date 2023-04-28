import { useEffect, useState } from 'react'

import { Link, useNavigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { editQuote } from '../redux/actions/quoteActions';

export default function EditQuote() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const state = useSelector((state) => state.quotes);
  const [quote, setQuote] = useState()
  const params = useParams();
  const [newQuote, setNewQuote] = useState({ author: "", text: "" })





  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id)
    setQuote(currentQuote)
  }, [state, params.id])

  const handleEdit = (e) => {
    e.preventDefault();
    if (newQuote.author) {
      dispatch(editQuote(params.id, "author", newQuote.author));
    }
    if (newQuote.text) {
      dispatch(editQuote(params.id, "text", newQuote.text));
    }
    navigate("/")
  };

 
  
  return (
    <article className='form-container edit'>
      <h3>Edit quote:</h3>
      <form onSubmit={(e) => handleEdit(e)}>
      <section>
        <label htmlFor='author'>author:</label>
        <input type="text" id="author" name='author'  defaultValue={quote && quote.author} onChange={(e) => setNewQuote({ ...newQuote, "author": e.target.value})}></input>
      </section>
      <section>
        <label htmlFor='quote'>quote:</label>
        <textarea type="text" id="quote" name='quote'  defaultValue={quote && quote.text} onChange={(e) => setNewQuote({ ...newQuote, "text": e.target.value})}></textarea>
      </section>
    
      <section className='btns-container'>
       <button type="submit">Save</button>
        <Link to="/"><button>Cancel</button></Link>
      </section></form>
    </article>
  )
}
