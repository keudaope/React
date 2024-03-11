// const h1 = document.createElement("h1");
// h1.textContent = "Tämä on käskevä tapa toimia!";
// h1.className = "header";
// document.getElementById("root").append(h1);
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="header">Tämä on kuvaileva tapa toimia!</h1>
  </div>
);
