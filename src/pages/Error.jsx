import { Link } from 'react-router-dom'

//Basic error page
export default function Error() {
  return (
    <article className='error'>
      <h3>Sorry, something went wrong</h3>
      <Link to="/"><button>Go back</button></Link>
    </article>
  )
}
