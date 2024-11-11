import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        resizeObserver={false}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={(event) => openRecipeDetail(recipe, event)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
