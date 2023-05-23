// Tee nyt muuttuja, jonka pääelementti on nav ja
// jonka sisällä on h1-otsikko, jossa on websivusi nimi
// sekä navigointipalkki (ul), jossa on seuraavat
// listaobjektit: koti, meistä, ota yhteyttä

const muuttuja = (
    <nav>
        <h1>Jyrin kotisivut</h1>
        <ul>
            <li>Koti</li>
            <li>Meistä</li>
            <li>Ota yhteyttä</li>
        </ul>
    </nav>)
// Vanhalla tavalla: voit ottaa kommentit pois, mutta kommentoi sitten uusi tapa
//ReactDOM.render(muuttuja, document.getElementById("root"));

// Tai uudella tavalla
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(muuttuja);