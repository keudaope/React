import ReactDom from "react-dom/client";

const navbar = (
  <nav>
    <h1>Jyrin Weppisaitti</h1>
    <ul>
      <li>Hinnasto</li>
      <li>Meistä</li>
      <li>Ota yhteyttä</li>
    </ul>
  </nav>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(navbar);
