import Kortti from "./komponentit/Kortti";
import Ylatunniste from "./komponentit/Ylatunniste";
import Alatunniste from "./komponentit/Alatunniste";
import data from "./data";
import "./style.css";

function App() {
  const kortit = data.map((kortti) => {
    return <Kortti key={kortti.key} {...kortti} />;
  });
  return (
    <>
      <Ylatunniste />
      {kortit}
      <Alatunniste />
    </>
  );
}

export default App;
