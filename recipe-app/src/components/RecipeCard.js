import React from "react";
import "../styles/RecipeCard.css";

function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipeCard" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} className="recipeCardImage" />
      <div className="recipeCardContent">
        <h2 className="recipeCardTitle">{recipe.name}</h2>
        <p className="recipeCardDescription">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
