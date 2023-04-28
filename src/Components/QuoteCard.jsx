import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function QuoteCard(props) {
  //If quote exist - render card


  return (
    <section className='quote-card'>
      {props.quote ? <section><h3>{props.quote.text}</h3><p>{props.quote.author}</p></section> : <p></p>}
      <section>
        {props.quote && <Link to={`/edit/${props.quote.id}`}> <FontAwesomeIcon icon={faPen} className="icon"/></Link>}
        {props.quote && <Link to='/remove' state={{index: props.index}}> <FontAwesomeIcon icon={faTrashCan} className="icon"/></Link>}
      </section>
    </section>
  )
}
