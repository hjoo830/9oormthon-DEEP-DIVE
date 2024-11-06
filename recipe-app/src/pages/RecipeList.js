import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeList() {
  const navigate = useNavigate();

  const recipes = [
    { id: 1, name: "Recipe 1" },
    { id: 2, name: "Recipe 2" },
    { id: 3, name: "Recipe 3" },
  ];

  const goToDetail = (id) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            onClick={() => goToDetail(recipe.id)}
            style={{ cursor: "pointer" }}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
