import { useEffect, useState } from 'react'
import { useNavigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { editQuote } from '../redux/actions/quoteActions';
import Form from "../Components/Form"

export default function EditQuote() {
  //Use dispatch and navigate
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //Use selector to get quotes and params to get page id
  const state = useSelector((state) => state.quotes);
  const params = useParams();

  //States for setting current quote and to edit with new values
  const [quote, setQuote] = useState()
  const [newQuote, setNewQuote] = useState({ author: "", text: "" })

  //Use effect to update current quote by finding correct id
  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id)
    setQuote(currentQuote)
  }, [state, params.id])

  //Make sure page scrolls to top on render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Create new values for fields with using dispatch and navigate to start
  const handleEdit = (e) => {
    e.preventDefault();
    if (newQuote.author) {
      dispatch(editQuote(params.id, "author", newQuote.author));
    }
    if (newQuote.text) {
      dispatch(editQuote(params.id, "text", newQuote.text));
    }
    navigate("/")
  }
  
  return (
    <article className='form-container edit'>
      <h3>Edit quote:</h3>
      <Form quote={quote} action={(e) => handleEdit(e)} actionAuthor={(e) => setNewQuote({ ...newQuote, "author": e.target.value})} actionText={(e) => setNewQuote({ ...newQuote, "text": e.target.value})} />
    </article>
  )
}
