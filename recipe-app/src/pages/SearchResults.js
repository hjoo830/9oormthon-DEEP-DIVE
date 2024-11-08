import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "./RecipeDetail";
import "../styles/SearchResults.css";

function SearchResults() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.includes(query) || recipe.description.includes(query)
  );

  const openRecipeDetail = (recipe, event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="searchResults">
      <h1 className="searchResultTitle">"{query}"에 대한 검색 결과</h1>
      {filteredRecipes.length > 0 ? (
        <div className="recipeGrid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={(event) => openRecipeDetail(recipe, event)}
            />
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={closeRecipeDetail}
          clickPosition={clickPosition}
        />
      )}
    </div>
  );
}

export default SearchResults;
