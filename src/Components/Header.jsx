import { Link } from "react-router-dom"
import "../style/header.scss"

//Simple header
export default function Header() {
  return (
    <header>
      <Link to="/"> <h2>Inspirational quotes</h2></Link>
    </header>
  )
}
