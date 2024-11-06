import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  return <h1>Recipe Detail: {id}번 레시피</h1>;
}

export default RecipeDetail;
