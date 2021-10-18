import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --lightblue: #30647D;
    --blue: #255057;
    --darkblue: #2C3E50;
    --green: #42ba96;
    --red: 	#df4759;
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
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2C3E50;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top,  var(--blue) 20%, var(--darkblue) 80%);
    background: linear-gradient(to top, var(--blue) 20%, var(--darkblue) 80%);
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
  button,p {
    font-family: 'Hind', sans-serif;
    font-size: 16px;
  }
  ::placeholder
  {
    color: var(--offWhite);
    font-weight: 200;
    opacity: 60%;
  }
  textarea:focus, input:focus{
    outline:none;
  }
  .neonText {
    font-family: 'Allura';
    font-size: 60px;
    font-weight: normal;
    letter-spacing: 2px;
    animation: flicker 1.5s infinite alternate;
    color: #fff;
    @media only screen and (max-width:600px){
      font-size: 45px;
    }
  }
  @keyframes flicker {
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #0fa,
        0 0 80px #0fa,
        0 0 90px #0fa,
        0 0 100px #0fa,
        0 0 150px #0fa;
    
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
  }
  .success{
    box-shadow: 0px 0px 15px 4px var(--green);
    -webkit-box-shadow: 0px 0px 15px 4px var(--green);
    -moz-box-shadow: 0px 0px 15px 4px var(--green);
  }
  .failure{
    box-shadow: 1px 0px 25px 5px var(--red);
    -webkit-box-shadow: 1px 0px 25px 5px var(--red);
    -moz-box-shadow: 1px 0px 25px 5px var(--red);
  }
`;

const InnerStyles = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 1rem 5rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
