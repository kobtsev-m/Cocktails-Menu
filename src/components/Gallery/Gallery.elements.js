import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const TitleBlock = styled(Row)`
  position: relative;
  width: 100%;
  height: 11rem;
  background-image: url(/img/home.jpg);
  background-position: bottom bottom;
  background-size: cover;
  border-radius: 1.2em;
  margin: 3em 0;
`;

export const TitleBlockBlur = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 1.2em;
  backdrop-filter: blur(100px) brightness(0.8);
`;

export const TitleBlockHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.openSans};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.5rem;
  font-weight: 800;
  font-size: 3.2rem;
  text-transform: uppercase;
  padding: 0.6em 0;
`;

export const CocktailsBlock = styled(Row)``;

export const CocktailItem = styled.div`
  position: relative;
  min-height: 30em;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5em;
  cursor: pointer;
  margin-bottom: 1em;
`;

export const CocktailItemImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center top;
  background-size: 30em;
  border-radius: 1.5em;
  filter: brightness(0.7);
  width: 100%;
  height: 30em;
  transition: all ease-in-out 0.7s;
  ${CocktailItem}:hover & {
    filter: brightness(0.3);
  }
`;

export const CocktailItemInfo = styled.div`
  font-size: 1.2rem;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
  }
`;

export const CocktailItemTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-weight: 600;
  font-size: 1.4rem;
  padding-right: 1em;
`;

export const CocktailItemFavoriteButton = styled.button`
  background: ${(props) =>
      props.isFavorite
        ? 'url(/img/star-solid.svg)'
        : 'url(/img/star-regular.svg)'}
    center no-repeat;
  background-size: 2em;
  width: 2.2em;
  height: 2em;
  padding: 0.5em;
  border: none;
  transition: all ease-in-out 0.1s;
  &:hover {
    background: url(/img/star-solid.svg) center no-repeat;
  }
`;
