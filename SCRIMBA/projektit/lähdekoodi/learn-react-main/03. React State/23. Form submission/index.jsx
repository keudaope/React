import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(formData) {
    // event.preventDefault();
    // const formEl = event.currentTarget;
    // const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email + " " + password);

    // formEl.reset();
  }
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
