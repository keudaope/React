import React from "react";

const Lomake_8 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    kommentti: "",
    onYstavallinen: true,
    tyollisyys: "",
  });

  console.log(lomakkeenTiedot.tyollisyys);
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
      <fieldset>
        <legend>Nykyinen työllisyystilanne</legend>
        <input
          type="radio"
          id="tyoton"
          name="tyollisyys"
          value="tyoton"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "tyoton"}
        />
        <label htmlFor="tyoton">Työtön</label>
        <br />
        <input
          type="radio"
          id="osa-aika"
          name="tyollisyys"
          value="osa-aika"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "osa-aika"}
        />
        <label htmlFor="osa-aika">Osa-aika töissä</label>
        <br />
        <input
          type="radio"
          id="taystyollisyys"
          name="tyollisyys"
          value="taystyollisyys"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "taystyollisyys"}
        />
        <label htmlFor="taystyollisyys">Kokoaika töissä</label>
        <br />
      </fieldset>
    </form>
  );
};

export default Lomake_8;
