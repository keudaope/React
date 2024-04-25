import React from "react";

const Lomake_1 = () => {
  const [etunimi, setEtunimi] = React.useState("");

  console.log(etunimi);

  function kasitteleMuutos(event) {
    setEtunimi(event.target.value);
  }
  return (
    <form>
      <input type="text" placeholder="Etunimi" onChange={kasitteleMuutos} />
    </form>
  );
};

export default Lomake_1;
