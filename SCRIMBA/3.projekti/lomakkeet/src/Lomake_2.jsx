import React from "react";

const Lomake_2 = () => {
  const [etunimi, setEtunimi] = React.useState("");
  const [sukunimi, setSukunimi] = React.useState("");
  console.log(etunimi, sukunimi);

  function kasitteleEnimiMuutos(event) {
    setEtunimi(event.target.value);
  }
  function kasitteleSnimiMuutos(event) {
    setSukunimi(event.target.value);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Etunimi"
        onChange={kasitteleEnimiMuutos}
      />
      <input
        type="text"
        placeholder="Sukunimi"
        onChange={kasitteleSnimiMuutos}
      />
    </form>
  );
};

export default Lomake_2;
