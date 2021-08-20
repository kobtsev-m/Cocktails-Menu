import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  background-image: url(/img/home.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const TitleBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(100px);
  border-radius: 1.2em;
  padding: 6em;
`;

export const TitleBlockHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-size: 3.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleBlockText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2em;
`;
