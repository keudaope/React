import './App.css';
import Henkilo from './Henkilo'
import kuva1 from './images/face1.jpeg'
import kuva2 from './images/face2.jpeg'
import kuva3 from './images/face3.jpeg'
import kuva4 from './images/face4.jpeg'
export default function App() {
  return (
    <div className="App">
      
      <Henkilo 
        img= {kuva1}
        nimi = "Heikki Virtanen"
        osoite = "Kaalikuja 1"
        postit="04200 Kerava"/>
      <Henkilo
        img = {kuva2}
        nimi = "Jaana Joukahainen"
        osoite = "Lehtisaarentie 13"
        postit="00300 Helsinki"/>
      <Henkilo 
        img = {kuva3}
        nimi = "Matti Matikainen"
        osoite = "Markuntie 3"
        postit = "01400 Vantaa"/>
      <Henkilo 
        img = {kuva4}
        nimi = "Tuija Tuppurainen"
        osoite = "Turuntie 134"
        postit="40200 Tampere"/>
    </div>
  );
}

