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
      img = {items.coverImg}
      rating= {items.stats.rating}
      reviewCount={items.stats.reviewCount}
      country= {items.location}
      title= {items.title}
      price={items.price}
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
