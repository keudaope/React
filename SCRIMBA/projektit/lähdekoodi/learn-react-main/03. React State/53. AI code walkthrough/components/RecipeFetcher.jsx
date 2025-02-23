import React, { useState } from "react"; // React-kirjasto tilan hallintaan
import axios from "axios"; // Axios HTTP-pyyntöjen tekemiseen

const RecipeFetcher = () => {
  // Tilamuuttujat: Käyttäjän syöttämät ainesosat, haetut reseptit ja lataustila
  const [ingredients, setIngredients] = useState(""); // Käyttäjän syöttämä ainesosa
  const [recipes, setRecipes] = useState([]); // Haettujen reseptien lista
  const [loading, setLoading] = useState(false); // Lataustilan seuranta

  // Funktio hakee reseptejä TheMealDB API:sta käyttäjän syöttämillä ainesosilla
  const fetchRecipes = async () => {
    if (!ingredients) return; // Estää tyhjällä syötteellä haun
    setLoading(true); // Näytetään latausanimaatio tai estetään tuplaklikkaukset
    setRecipes([]); // Tyhjennetään vanhat hakutulokset ennen uuden haun tekemistä

    try {
      // Suoritetaan GET-pyyntö TheMealDB API:lle käyttäjän syöttämällä ainesosalla
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
      );
      setRecipes(response.data.meals || []); // Tallennetaan tulokset tai tyhjä lista jos ei löytynyt
    } catch (error) {
      console.error("Error fetching recipes:", error); // Konsoliin virheilmoitus, jos pyyntö epäonnistuu
    }

    setLoading(false); // Lopetetaan lataustila, kun pyyntö on käsitelty
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Recipe Finder</h1>
      {/* Syötekenttä ainesosien lisäämiseksi */}
      <input
        type="text"
        placeholder="Enter an ingredient (e.g., chicken)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)} // Päivitetään käyttäjän syöte
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      {/* Hakupainike, joka suorittaa API-haun */}
      <button
        onClick={fetchRecipes}
        disabled={loading}
        style={{ width: "100%", padding: "10px" }}
      >
        {loading ? "Fetching..." : "Get Recipes"}{" "}
        {/* Muutetaan napin teksti latauksen aikana */}
      </button>

      {/* Näytetään reseptit, jos niitä löytyy */}
      {recipes.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results:</h2>
          {recipes.map((recipe, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              <h3>{recipe.strMeal}</h3> {/* Reseptin nimi */}
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{ width: "100%", borderRadius: "5px" }}
              />{" "}
              {/* Reseptikuva */}
              <a
                href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe {/* Linkki koko reseptiin */}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeFetcher; // Viedään komponentti käytettäväksi muualla projektissa
