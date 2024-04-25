import React from "react";

const Lomake_tehtava = () => {
  const [lomakkeenTiedot, setLomakkeenTiedot] = React.useState({
    email: "",
    password: "",
    passwordAgain: "",
    subscribe: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
    if (lomakkeenTiedot.password === lomakkeenTiedot.passwordAgain) {
      console.log("Salasanat ovat samat");
    } else {
      console.log("Salasanat eivät ole samat");
      return;
    }
    if (lomakkeenTiedot.subscribe) {
      console.log("Kiitos tilauksesta");
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setLomakkeenTiedot((prevTiedot) => {
      return {
        ...prevTiedot,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={lomakkeenTiedot.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={lomakkeenTiedot.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordAgain"
          onChange={handleChange}
          value={lomakkeenTiedot.passwordAgain}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="subscribe"
            onChange={handleChange}
            checked={lomakkeenTiedot.subscribe}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
};

export default Lomake_tehtava;
