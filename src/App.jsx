import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { fillQuotes } from "./redux/actions/quoteActions";
import { v4 as uuid } from 'uuid';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Start from "./pages/Start"
import AddQuote from "./pages/AddQuote";
import RemoveQuote from "./pages/RemoveQuote";
import EditQuote from "./pages/EditQuote";
import Error from "./pages/Error";
import "./style/main.scss";

function App() {
  const dispatch = useDispatch();

  //Fetch quotes from api and set to store with dispatch
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {const dataWithIds = data.map(quote => ({ ...quote, id: uuid() }))
    dispatch(fillQuotes(dataWithIds))})
    .catch(error => console.log(error))
  }, []);

  return (
    //Routing
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/remove/:id" element={<RemoveQuote />}></Route>
        <Route path="/edit/:id" element={<EditQuote />}></Route>
        <Route path="/add" element={<AddQuote />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/" element={<Start />}></Route>
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
