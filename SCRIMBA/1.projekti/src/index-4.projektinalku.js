import ReactDOM from "react-dom/client";
const navbar = (
  <nav>
    <h1>Jyrin sivu</h1>
    <ul>
      <li>Hinnasto</li>
      <li>Meistä</li>
      <li>Ota yhteytta</li>
    </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);
