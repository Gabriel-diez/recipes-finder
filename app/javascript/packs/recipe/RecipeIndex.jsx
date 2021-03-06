import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CreatableSelect from 'react-select/creatable';
import RecipeApi from '../../api/recipeApi';
import { makeStyles } from '@material-ui/core/styles';
import RecipeList from './RecipeList';

const RecipeIndex = () => {
  const classes = useStyles();
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (values) => {
    const formattedValues = values && values.map((i) => i.label.trim()) || [];
    setIngredients(formattedValues);
  };

  useEffect(() => {
    if (ingredients.length !== 0) {
      RecipeApi.search(ingredients)
        .then((res) => {
          if (res.success && res.data) {
            setRecipes(res.data);
            setError('');
          }
        })
        .catch((e) => {
          setError('Une erreur est survenue. Veuillez réessayer plus tard merci.');
        });
    } else {
      setRecipes([]);
    }
}, [ingredients]);

  return (
    <div className={classes.root}>
      <p>
        Taper des ingrédients pour trouver quelle recette est disponible
      </p>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        options={[]}
        className={classes.select}
      />
      <RecipeList
        recipes={recipes}
      />
      {error && (<p>{error}</p>)}
    </div>
  );
}

RecipeIndex.defaultProps = {
}

RecipeIndex.propTypes = {
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    minHeight: '100vh',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    width: '50%',
    minWidth: 300
  },
}));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RecipeIndex />,
    document.body.appendChild(document.createElement('div')),
  )
})
