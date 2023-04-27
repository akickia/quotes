import { Link } from "react-router-dom";

export default function QuoteCard(props) {
  //If quote exist - render card
  
  return (
    <section className='quote-card' id={props.index}>
      {props.quote ? <div><h3>{props.quote.text}</h3><p>{props.quote.author}</p></div> : <p></p>}
      <Link to={`/edit/${props.index}`}> <button>Edit</button></Link>
      <Link to="/remove"> <button>Remove</button></Link>
    </section>
  )
}
