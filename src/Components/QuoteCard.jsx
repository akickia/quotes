import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function QuoteCard({quote, index }) {
  //If quote exist - render card. 
  //Icons for edit and remove

  return (
    <section className='quote-card'>
      {quote ? <section><h3>{quote.text}</h3><p>{quote.author}</p></section> : <p></p>}
      <section>
        {quote && <Link to={`/edit/${quote.id}`}> <FontAwesomeIcon icon={faPen} className="icon"/></Link>}
        {quote && <Link to={`/remove/${quote.id}`}> <FontAwesomeIcon icon={faTrashCan} className="icon"/></Link>}
      </section>
    </section>
  )
}
