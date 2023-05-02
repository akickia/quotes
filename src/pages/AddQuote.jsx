import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addQuote } from '../redux/actions/quoteActions';
import { v4 as uuid } from 'uuid';
import Form from "../Components/Form"


export default function AddQuote() {
  //Use dispatch and navigate
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //States for text and author to create new quote
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  //Make sure page scrolls to top on render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Create new object with new values + id, use dispatch to add to store. 
  //Navigate to start 
  const addNewQuote = (e) => {
    e.preventDefault();
    let newQuote = {
      text: text,
      author: author,
      id: uuid()
    }
    dispatch(addQuote(newQuote))
    navigate("/")
  }

  return (
    <article className='form-container add'>
      <h3>Add quote:</h3>
      <Form action={(e) => addNewQuote(e)} actionAuthor={(e) => {setAuthor(e.target.value)}} actionText={(e) => {setText(e.target.value)}} />
    </article>
  )
}
