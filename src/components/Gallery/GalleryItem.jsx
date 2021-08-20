import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Col } from 'react-bootstrap';
import { Flex } from 'styles/common/Flex';
import { AbsolutePosition } from 'styles/common/Position';
import {
  CocktailItem,
  CocktailItemFavoriteButton,
  CocktailItemImage,
  CocktailItemInfo,
  CocktailItemTitle
} from './Gallery.elements';

export default function GalleryItem(props) {
  const {
    i,
    cocktail,
    activeCocktail,
    handleMouseEnter,
    handleMouseLeave,
    handleFavoriteClick,
    isFavorite
  } = props;

  const getIngredientsList = (cocktail) => {
    let ingredients = [];
    for (let i = 1; i < 16; ++i) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (!ingredient) break;
      ingredients.push(ingredient);
    }
    return ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
  };

  return (
    <Col key={cocktail.idDrink} sm={6} md={4}>
      <CocktailItem
        onMouseEnter={() => handleMouseEnter(cocktail)}
        onMouseLeave={handleMouseLeave}
      >
        <CocktailItemImage src={cocktail.strDrinkThumb} alt='' />
        <AbsolutePosition bottom='1.5em' left='1.5em' right='1em'>
          {activeCocktail?.idDrink === cocktail.idDrink && (
            <CocktailItemInfo>
              <hr />
              <p>Ingridients:</p>
              <ul>{getIngredientsList(activeCocktail)}</ul>
              <hr />
              <p>Instructions:</p>
              <TextTruncate
                line={2}
                element='p'
                truncateText='…'
                text={activeCocktail.strInstructions}
              />
              <hr />
            </CocktailItemInfo>
          )}
          <Flex justify='space-between'>
            <CocktailItemTitle>{cocktail.strDrink}</CocktailItemTitle>
            <CocktailItemFavoriteButton
              isFavorite={isFavorite(cocktail)}
              onClick={() => handleFavoriteClick(cocktail, i)}
            />
          </Flex>
        </AbsolutePosition>
      </CocktailItem>
    </Col>
  );
}
