import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.length > 0 && <p>Recettes réalisables</p>}
      {recipes.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)}
    </>
  );
}

RecipeList.defaultProps = {
    recipes: [],
};

RecipeList.propTypes = {
    recipes: PropTypes.array,
};

export default RecipeList;
