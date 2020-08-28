import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const RecipeItem = ({ recipe }) => {
  return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Recipe img" src={recipe.img_url} />
        </ListItemAvatar>
        <ListItemText
          primary={recipe.name}
          secondary={
            <Fragment>
                <Typography
                component="span"
                variant="body2"
                color="textPrimary"
                >
                    {`${recipe['people_quantity']} personnes - `}
                </Typography>
                {
                    recipe.ingredients.map((ingredient, index) => (
                        index === recipe.ingredients.length - 1 ? ingredient : `${ingredient} - `
                    ))
                }
            </Fragment>
          }
        />
      </ListItem>
  );
}

RecipeItem.defaultProps = {
    recipe: {
        name: '',
        img_url: '',
        ingredients: [],
    },
};

RecipeItem.propTypes = {
    recipe: PropTypes.object,
};

export default RecipeItem;
