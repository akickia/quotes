
import { useState } from "react";
import Hero from "../Components/Hero";
import QuotesContainer from "../Components/QuotesContainer";
import { useSelector } from "react-redux";


//Landing page - renders hero + quotes
export default function start() {
  const quoteList = useSelector((state) => state.quotes)
  const [numberOfItems, setNumberOfItems] = useState(10)

  return (
    <>
    <Hero />
    <QuotesContainer quotes={quoteList}/>
    </>
  )
}
