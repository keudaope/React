import React from "react";

const Lomake_9 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    kommentti: "",
    onYstavallinen: true,
    tyollisyys: "",
    lempiVari: "",
  });

  console.log(lomakkeenTiedot.lempiVari);
  function kasitteleMuutos(event) {
    const { name, value, type, checked } = event.target;
    setLomakkeenTiedot((prevLomakkeenTiedot) => {
      return {
        ...prevLomakkeenTiedot,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function vieJonnekin(event) {
    event.preventDefault();
    //lahetaAPIlle(lomakkeenTiedot)
    console.log(lomakkeenTiedot);
  }
  return (
    <form onSubmit={vieJonnekin}>
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
      <br />
      <label htmlFor="lempiVari">Mikä on lempivärisi?</label>
      <br />
      <select
        name="lempiVari"
        id="lempiVari"
        value={lomakkeenTiedot.lempiVari}
        onChange={kasitteleMuutos}
      >
        <option value="">-- Valitse --</option>
        <option value="punainen">Punainen</option>
        <option value="oranssi">Oranssi</option>
        <option value="keltainen">Keltainen</option>
        <option value="vihrea">Vihreä</option>
        <option value="sininen">Sininen</option>
        <option value="indigo">Indigo</option>
        <option value="violetti">Violetti</option>
      </select>
      <br />
      <button>Lähetä</button>
    </form>
  );
};

export default Lomake_9;
