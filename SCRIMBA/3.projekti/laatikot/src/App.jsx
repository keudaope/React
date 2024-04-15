import React from "react";
import boxes from "./boxes";
import Laatikko from "./Laatikko";
import "./style.css";

function App(props) {
  const [laatikot, setLaatikot] = React.useState(boxes);

  const laatikkoElementit = laatikot.map((laatikko) => (
    <Laatikko on={laatikko.on} key={laatikko.id} />
  ));
  return <>{laatikkoElementit}</>;
}

export default App;
