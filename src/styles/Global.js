import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.montserrat};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  a, a:hover {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 991.98px) { :root { font-size: 15px; } }
  @media (max-width: 767.98px) { :root { font-size: 14px; } }
  @media (max-width: 575.98px) { :root { font-size: 12px; } }
`;
