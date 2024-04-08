import "./App.css";
import Ihminen from "./Ihminen";
import data from "./data2";

function App() {
  const joukko = data.map((immeinen) => {
    return (
      <Ihminen
        name={immeinen.name}
        email={immeinen.email}
        address={immeinen.address}
        phone={immeinen.phone}
        website={immeinen.website}
      />
    );
  });
  return <div className="kortit">{joukko}</div>;
}

export default App;
