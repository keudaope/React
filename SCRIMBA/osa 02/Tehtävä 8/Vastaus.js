/* Korjaa alla oleva JavaScript-koodi, että se toimii React-tyylisesti */
const sivu = (
    <div>
        <h1>Tietoa Reactista</h1>
        <ul>
            <li>Julkaistiin ensimmäisen kerran 2013</li>
            <li>Alunperin Jordan Walken luomus</li>
            <li>Reactilla on yli 100K tähteä Gitissä</li>
            <li>On Facebookin ylläpitämä</li>
            <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
        </ul>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sivu)
//document.getElementById('root').append(JSON.stringify(sivu))