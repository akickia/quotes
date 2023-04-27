
//Form for add/edit
export default function Form(props) {
  return (
    <form>
      <section>
        <label htmlFor='author'>author:</label>
        <input type="text" id="author" name='author' value={props.quote ? props.quote.author : ''}></input>
      </section>
      <section>
        <label htmlFor='quote'>quote:</label>
        <textarea type="text" id="quote" name='quote' value={props.quote ? props.quote.text : ''}></textarea>
      </section>
    </form>
  )
}
