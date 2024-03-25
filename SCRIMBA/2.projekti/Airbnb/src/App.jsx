import React from "react";
import Navbar from "../components/Navbar";
import Paasisalto from "../components/Paasisalto";
import Kortti from "../components/Kortti";
import Data from "./Data";
import "./style.css";
export default function App() {
  const kortit = Data.map((item) => {
    return (
      <Kortti
        key={item.id} // Jotta virheviesti poistuu
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots} // jotta saadaan "Myyty loppuun" -teksti
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Paasisalto />
      <section className="card-list">
        <div className="flexContainer">{kortit}</div>
      </section>
    </div>
  );
}
