import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const aineet = ingredients.map((aine) => {
    return <li key={aine}>{aine}</li>;
  });
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIng) => [...prevIng, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{aineet}</ul>
    </main>
  );
}
