// Huomaa funktion return komento
function NaviPalkki() {
    return (
        <ul>
            <li>Koti</li>
            <li>Meistä</li>
            <li>Ota yhteyttä</li>
        </ul>);
}
// Funktiota kutsutaan hakasulkeissa ilman loppusulkuja
// Alla uusi, React 18 -tapa
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NaviPalkki />);

// Lisää yllä olevaan koodiin sisältö-funktio, joka palauttaa
// viestin: "Olen opiskelemassa Reactiä"