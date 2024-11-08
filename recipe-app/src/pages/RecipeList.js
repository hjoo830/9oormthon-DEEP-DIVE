import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoSearch } from "react-icons/io5";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "./RecipeDetail";
import "../styles/RecipeList.css";

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  const openRecipeDetail = (recipe, event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipeList">
      <div className="searchContainer">
        <SearchBar onSearch={setSearchTerm} />
        <IoSearch onClick={handleSearch} className="searchIcon" />
      </div>
      <h1>Recipe List</h1>
      <div className="recipeGrid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={(event) => openRecipeDetail(recipe, event)}
          />
        ))}
      </div>

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

export default RecipeList;
