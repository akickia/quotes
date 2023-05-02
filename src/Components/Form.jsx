import { Link} from "react-router-dom"

//Form for add/edit with destructured props
export default function Form({quote, action, actionAuthor, actionText}) {
  return (
    <form onSubmit={action}>
      <section>
        <label htmlFor='author'>author:</label>
        <input type="text" id="author" name='author'  defaultValue={quote && quote.author} onChange={actionAuthor}></input>
      </section>
      <section>
        <label htmlFor='quote'>quote:</label>
        <textarea type="text" id="quote" name='quote'  defaultValue={quote && quote.text} onChange={actionText}></textarea>
      </section>
      <section className='btns-container'>
        <button type="submit">Save</button>
        <Link to="/"><button>Cancel</button></Link>
      </section>
    </form>
  )
}
