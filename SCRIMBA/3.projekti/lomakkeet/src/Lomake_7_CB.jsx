import React from "react";

const Lomake_7 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    kommentti: "",
    onYstavallinen: true,
  });

  console.log(lomakkeenTiedot);
  function kasitteleMuutos(event) {
    const { name, value, type, checked } = event.target;
    setLomakkeenTiedot((prevLomakkeenTiedot) => {
      return {
        ...prevLomakkeenTiedot,
        [name]: type === "checkbox" ? checked : value,
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
      <br />
      <input
        type="text"
        placeholder="Sukunimi"
        name="sukunimi"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sukunimi} // kontrolloitu komponentti
      />
      <br />
      <input
        type="email"
        placeholder="Sähköposti"
        name="sahkoposti"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sahkoposti} // kontrolloitu komponentti
      />
      <br />
      <textarea
        name="kommentti"
        value={lomakkeenTiedot.kommentti}
        onChange={kasitteleMuutos}
      />
      <br />
      <input
        type="checkbox"
        id="onYstavallinen"
        checked={lomakkeenTiedot.onYstavallinen}
        onChange={kasitteleMuutos}
        name="onYstavallinen"
      />
      <label htmlFor="onYstavallinen"> Oletko ystävällinen</label>
    </form>
  );
};

export default Lomake_7;
