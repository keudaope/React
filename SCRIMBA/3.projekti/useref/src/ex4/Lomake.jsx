import React from "react";

const Lomake = () => {
  const lomakeRef = React.useRef(null);
  const [tulos, setTulos] = React.useState("");
  function tulosta(e) {
    e.preventDefault();
    const lomakeData = new FormData(lomakeRef.current);
    let tulosTeksti = "";
    for (const [nimi, arvo] of lomakeData) {
      tulosTeksti += `${nimi}: ${arvo} \n`;
      setTulos(tulosTeksti);
    }
  }
  return (
    <div>
      <form onSubmit={tulosta} ref={lomakeRef}>
        <input type="text" name="nimi" placeholder="Nimi" />
        <input type="email" name="email" placeholder="Sähköposti" />
        <input type="number" name="ika" placeholder="Ikä" />
        <button type="submit">Lähetä</button>
      </form>
      <h2 className="rivitys">{tulos}</h2>
    </div>
  );
};

export default Lomake;
