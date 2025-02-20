// import "./cats.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
// import Contact from "./components/Contact";
// import Whis from "./images/mr-whiskerson.png";
// import Fluf from "./images/fluffykins.png";
// import Fex from "./images/felix.png";
// import Pkn from "./images/pumpkin.png";
import Data from "./data";

function App() {
  const travelElements = Data.map((entry) => {
    return (
      <Entry
        // src={entry.img.src}
        // alt={entry.img.alt}
        key={entry.id}
        entry={entry}
        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // map={entry.googleMapsLink}
        // dates={entry.dates}
        // text={entry.text}
      />
    );
  });
  return (
    <div className="contacts">
      <Header />
      <div className="container">{travelElements}</div>
    </div>
  );
}

/* <Contact
        img={Whis}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />

      <Contact
        img={Fluf}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Fex}
        name="Felix"
        phone="(212) 555 4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Pkn}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      /> */
export default App;
