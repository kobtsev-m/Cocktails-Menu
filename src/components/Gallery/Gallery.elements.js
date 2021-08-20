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
  backdrop-filter: blur(100px);
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
  transition: all ease-in-out 1s;
  ${CocktailItem}:hover & {
    background-position: left top;
    background-size: 200%;
    filter: brightness(0.3);
  }
`;

export const CocktailItemTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-weight: 600;
  font-size: 1.4rem;
`;
export const CocktailItemCircle = styled.div``;
