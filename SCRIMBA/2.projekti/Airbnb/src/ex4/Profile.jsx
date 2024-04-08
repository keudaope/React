import React from "react";
import Card from "./Card";
const Profile = ({
  profiiliTeksti,
  korttiTeksti,
  painikeTeksti,
  kasittelePainallus,
}) => {
  return (
    <div>
      <h1>{profiiliTeksti}</h1>

      <Card
        korttiTeksti={korttiTeksti}
        painikeTeksti={painikeTeksti}
        kasittelePainallus={kasittelePainallus}
      />
    </div>
  );
};

export default Profile;
