import React from "react";

const Lomake_10 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    kommentti: "",
    onYstavallinen: true,
    tyollisyys: "",
    lempiVari: "",
  });
  const id = React.useId();

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
      <label htmlFor={id + "-etunimi"}>Etunimi: </label>
      <input
        type="text"
        name="etunimi"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.etunimi} // kontrolloitu komponentti
        id={id + "-etunimi"}
      />
      <br />
      <label htmlFor={id + "-sukunimi"}>Sukunimi: </label>
      <input
        type="text"
        name="sukunimi"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sukunimi} // kontrolloitu komponentti
        id={id + "-sukunimi"}
      />
      <br />
      <label htmlFor={id + "-email"}>Sähköposti: </label>
      <input
        type="email"
        name="sahkoposti"
        onChange={kasitteleMuutos}
        value={lomakkeenTiedot.sahkoposti} // kontrolloitu komponentti
        id={id + "-email"}
      />
      <br />
      <label htmlFor={id + "-kommentti"}>Kommentti: </label>
      <textarea
        name="kommentti"
        value={lomakkeenTiedot.kommentti}
        onChange={kasitteleMuutos}
        id={id + "-kommentti"}
      />
      <br />
      <input
        type="checkbox"
        id={id + "onYstavallinen"}
        checked={lomakkeenTiedot.onYstavallinen}
        onChange={kasitteleMuutos}
        name="onYstavallinen"
      />
      <label htmlFor="onYstavallinen"> Oletko ystävällinen</label>
      <fieldset>
        <legend>Nykyinen työllisyystilanne</legend>
        <input
          type="radio"
          id={id + "tyoton"}
          name="tyollisyys"
          value="tyoton"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "tyoton"}
        />
        <label htmlFor="tyoton">Työtön</label>
        <br />
        <input
          type="radio"
          id={id + "osa-aika"}
          name="tyollisyys"
          value="osa-aika"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "osa-aika"}
        />
        <label htmlFor="osa-aika">Osa-aika töissä</label>
        <br />
        <input
          type="radio"
          id={id + "taystyollisyys"}
          name="tyollisyys"
          value="taystyollisyys"
          onChange={kasitteleMuutos}
          checked={lomakkeenTiedot.tyollisyys === "taystyollisyys"}
        />
        <label htmlFor="taystyollisyys">Kokoaika töissä</label>
        <br />
      </fieldset>
      <br />
      <label htmlFor={id + "-lempiVari"}>Mikä on lempivärisi?</label>
      <br />
      <select
        name="lempiVari"
        id={id + "-lempiVari"}
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

export default Lomake_10;
