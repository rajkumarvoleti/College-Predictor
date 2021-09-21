import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --blue: #383E4D;
    --darkblue: #1C1F22;
    --black: #1C1F22;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 100vw;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--blue);
    color: #e1e1e1;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
  textarea:focus, input:focus{
    outline:none;
}
`;

const InnerStyles = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 1rem 5rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
