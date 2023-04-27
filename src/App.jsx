import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Start from "./pages/start"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillQuotes } from "./redux/actions/quoteActions";




function App() {
  const dispatch = useDispatch();
  const [quotes, setQuotes] = useState([])


  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => dispatch(fillQuotes(data.slice(0, 10))))
  }, []);


  return (
    <>
    <Header />
    <Start />
    <Footer />
     </>
  )
}

export default App
