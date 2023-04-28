import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeQuote } from "../redux/actions/quoteActions"

export default function RemoveQuote() {
  const location = useLocation()
  const index = location.state.index

  console.log("this " + index)
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(removeQuote(index))
    // console.log(index)
  }



  return (
    <article className='form-container remove'>
    <h3>Are you sure you want to remove this quote?</h3>
    <section className='btns-container'>
      <Link to="/"><button onClick={() => handleDelete()}>Yes</button></Link>
      <Link to="/"><button>No</button></Link>
    </section>
  </article>
  )
}
