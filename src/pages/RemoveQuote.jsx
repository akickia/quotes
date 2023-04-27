import { Link } from "react-router-dom"

export default function RemoveQuote() {
  return (
    <article className='form-container remove'>
    <h3>Are you sure you want to remove this quote?</h3>
    <section className='btns-container'>
      <button>Yes</button>
      <Link to="/"><button>No</button></Link>
    </section>
  </article>
  )
}
