import React, { useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import { getCocktails } from 'api/api';
import { AbsolutePosition } from 'styles/common/Position';
import {
  Background,
  TitleBlock,
  CocktailsBlock,
  CocktailItem,
  TitleBlockBlur,
  TitleBlockHeading,
  CocktailItemTitle,
  CocktailItemCircle,
  CocktailItemImage
} from './Gallery.elements';

export default function Gallery() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktails(setCocktails);
  }, []);

  return (
    <Background>
      <Container>
        <TitleBlock>
          <TitleBlockBlur>
            <TitleBlockHeading>Menu</TitleBlockHeading>
          </TitleBlockBlur>
        </TitleBlock>
        <CocktailsBlock>
          {cocktails.map((cocktail, i) => (
            <Col key={i} sm={6} md={4}>
              <CocktailItem>
                <CocktailItemImage src={cocktail.strDrinkThumb} alt='' />
                <AbsolutePosition bottom='1em' left='1em' right='1em'>
                  <CocktailItemTitle>{cocktail.strDrink}</CocktailItemTitle>
                  <CocktailItemCircle />
                </AbsolutePosition>
              </CocktailItem>
            </Col>
          ))}
        </CocktailsBlock>
      </Container>
    </Background>
  );
}
