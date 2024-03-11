import ReactDOM from "react-dom/client";
function Valikko() {
  return (
    <div>
      <ul>
        <li>Koti</li>
        <li>Meistä</li>
        <li>Ota yhteyttä</li>
      </ul>
    </div>
  );
}
function Sisalto() {
  return <h2>Sisältö</h2>;
}
function Alatunniste() {
  return (
    <footer>
      <p>Copyright ® Jyri Lindroos 2024</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Valikko />
    <Sisalto />
    <Alatunniste />
  </div>
);
