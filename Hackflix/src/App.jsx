import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Movies from "./components/Movies";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <Header />
      <Filter setRating={setRating} />
      <Movies rating={rating} />
    </>
  );
}

export default App;
