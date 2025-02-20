import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const diataryData = formData.getAll("Dietaryrestrictions");
    const allData = {
      ...data,
      diataryData,
    };
    console.log(allData);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />
        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description"></textarea>
        <fieldset>
          <legend>Employment status:</legend>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" value="Unenployed" />
            Unemployed
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="employmentStatus"
              value="Part Time"
              defaultChecked={true}
            />
            Part Time
          </label>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" value="Full Time" />
            Full Time
          </label>
        </fieldset>{" "}
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label htmlFor="">
            <input type="checkbox" name="Dietaryrestrictions" value="Kosher" />
            Kosher
          </label>
          <label htmlFor="">
            <input type="checkbox" name="Dietaryrestrictions" value="Vegan" />
            Vegan
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="Dietaryrestrictions"
              value="Gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>
        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Violet">Violet</option>
        </select>
        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
