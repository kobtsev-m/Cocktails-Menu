import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import { Container } from 'react-bootstrap';
import { getCocktails, getCocktailById } from 'api/api';
import {
  Background,
  TitleBlock,
  CocktailsBlock,
  TitleBlockBlur,
  TitleBlockHeading
} from './Gallery.elements';

export default function Gallery() {
  const [cocktails, setCocktails] = useState([]);
  const [activeCocktail, setActiveCocktail] = useState(null);
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);

  useEffect(() => {
    getCocktails(setCocktails);
  }, []);

  const handleMouseEnter = (cocktail) => {
    getCocktailById(cocktail.idDrink, setActiveCocktail);
  };

  const handleMouseLeave = () => {
    setActiveCocktail(null);
  };

  const isFavorite = (cocktail) => {
    return !!favoriteCocktails.filter(
      (favoriteCocktail) => favoriteCocktail.idDrink === cocktail.idDrink
    ).length;
  };

  const getNonFavoritesCocktails = () => {
    return cocktails.filter((cocktail) => !isFavorite(cocktail));
  };

  const handleFavoriteClick = (cocktail, i) => {
    if (isFavorite(cocktail)) {
      setFavoriteCocktails(
        favoriteCocktails.filter((c) => c.idDrink !== cocktail.idDrink)
      );
      const activeCocktailId =
        i !== favoriteCocktails.length - 1
          ? favoriteCocktails[i + 1].idDrink
          : getNonFavoritesCocktails()[0].idDrink;
      getCocktailById(activeCocktailId, setActiveCocktail);
    } else {
      setFavoriteCocktails([...favoriteCocktails, cocktail]);
      const activeCocktailId = cocktails[i > 0 ? i - 1 : 0].idDrink;
      getCocktailById(activeCocktailId, setActiveCocktail);
    }
  };

  return (
    <Background>
      <Container>
        <TitleBlock>
          <TitleBlockBlur>
            <TitleBlockHeading>Menu</TitleBlockHeading>
          </TitleBlockBlur>
        </TitleBlock>
        <CocktailsBlock>
          {favoriteCocktails.map((cocktail, i) => (
            <GalleryItem
              key={i}
              i={i}
              cocktail={cocktail}
              activeCocktail={activeCocktail}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
            />
          ))}
          {getNonFavoritesCocktails().map((cocktail, i) => (
            <GalleryItem
              key={i}
              i={i}
              cocktail={cocktail}
              activeCocktail={activeCocktail}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
            />
          ))}
        </CocktailsBlock>
      </Container>
    </Background>
  );
}
