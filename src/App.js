import React, { useCallback } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './index.css'
import data from "./components/data"


function App() {
  const cards = data.map(items =>{

  return (
      <Card
      key={items.id}
      item={items}
      />
  )
})
return(
  <div>
    <Navbar/>
    <Hero/>
    <section className="card-list">
      {cards}
      </section>

  </div>
)
}
export default App;
