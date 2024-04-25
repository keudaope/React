import React from "react";

const ArvaaNumero = () => {
  const arvattava = React.useRef(null);
  const syottoRef = React.useRef(null);
  const [tulosTeksti, setTulosTeksti] = React.useState("");
  function kasitteleArvaus() {
    console.log(arvattava.current);
    if (syottoRef.current.value == arvattava.current) {
      console.log("Voitit");
      setTulosTeksti("Voitit");
    } else if (syottoRef.current.value >= arvattava.current) {
      console.log("Arvasit liian suuren numeron");
      setTulosTeksti("Arvasit liian suuren numeron");
    } else {
      console.log("Arvasit liian pienen numeron");
      setTulosTeksti("Arvasit liian pienen numeron");
    }
  }

  React.useEffect(() => {
    arvattava.current = Math.floor(Math.random() * 10);
  }, []);

  return (
    <div>
      <input type="text" ref={syottoRef} />
      <button onClick={kasitteleArvaus}>Arvaa</button>
      <p>{tulosTeksti}</p>
    </div>
  );
};

export default ArvaaNumero;
