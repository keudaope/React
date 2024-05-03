import { useState } from "react";
import Review from "./Review";
import "./App.css";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
        </div>
        <Review />
      </section>
    </>
  );
}

export default App;
