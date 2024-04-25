import React from "react";

const Lomake_6 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    kommentti: "",
  });

  console.log(lomakkeenTiedot);
  function kasitteleMuutos(event) {
    setLomakkeenTiedot((prevLomakkeenTiedot) => {
      return {
        ...prevLomakkeenTiedot,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Etunimi"
        name="etunimi"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.etunimi} // kontrolloitu komponentti
      />
      <input
        type="text"
        placeholder="Sukunimi"
        name="sukunimi"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sukunimi} // kontrolloitu komponentti
      />
      <input
        type="email"
        placeholder="Sähköposti"
        name="sahkoposti"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sahkoposti} // kontrolloitu komponentti
      />
      <textarea
        name="kommentti"
        value={lomakkeenTiedot.kommentti}
        onChange={kasitteleMuutos}
      />
    </form>
  );
};

export default Lomake_6;
