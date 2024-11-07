import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoSearch } from "react-icons/io5";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import "../styles/RecipeList.css";

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  const goToDetail = (id) => {
    navigate(`/recipes/${id}`);
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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
