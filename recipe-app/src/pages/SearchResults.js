import React from "react";
import { useLocation } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import "../styles/SearchResults.css";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.includes(query) || recipe.description.includes(query)
  );

  return (
    <div className="searchResults">
      <h1 className="searchResultTitle">"{query}"에 대한 검색 결과</h1>
      {filteredRecipes.length > 0 ? (
        <div className="recipeGrid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchResults;
