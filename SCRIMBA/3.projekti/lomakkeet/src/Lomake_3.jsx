import React from "react";

const Lomake_3 = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    etunimi: "",
    sukunimi: "",
  });

  console.log(lomakkeenTiedot);
  function kasitteleMuutos(event) {
    //console.log(event.target.value);
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
      />
      <input
        type="text"
        placeholder="Sukunimi"
        name="sukunimi"
        onChange={kasitteleMuutos}
      />
    </form>
  );
};

export default Lomake_3;
