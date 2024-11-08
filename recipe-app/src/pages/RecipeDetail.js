import React from "react";
import "../styles/RecipeDetail.css";

function RecipeDetail({ recipe, onClose, clickPosition }) {
  if (!recipe) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        style={{
          top: `${clickPosition.y}px`,
          left: `${clickPosition.x}px`,
        }}
      >
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <img src={recipe.image} alt={recipe.name} className="recipeImg" />
        <h3>재료</h3>
        <p>{recipe.ingredients.join(", ")}</p>
        <p>조리 시간: {recipe.cookingTime}</p>
        <h3>조리 방법</h3>
        {recipe.instructions.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetail;
