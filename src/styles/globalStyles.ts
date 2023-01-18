import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    --theme: #f26224;
    --green: #24a148;
    --orange: #ff832b;
    --error: #ff3500;
    --disabled: #aaaaaa;
    --success: #0088ff;
    --placeholder: #999999;
    --payment-success: #198038;
    --payment-fail: #da1e28;

    --black: #000000;
    --black-text: #161616;
    --black-0: rgba(0, 0, 0, 0);
    --black-10: rgba(0, 0, 0, 0.1);
    --black-20: rgba(0, 0, 0, 0.2);
    --black-60: rgba(0, 0, 0, 0.6);
    --black-70: rgba(0, 0, 0, 0.7);
    --black-80: rgba(0, 0, 0, 0.8);

    --white: #ffffff;
    --white-10: rgba(255, 255, 255, 0.1);
    --white-20: rgba(255, 255, 255, 0.2);
    --white-30: rgba(255, 255, 255, 0.3);
    --white-40: rgba(255, 255, 255, 0.4);
    --white-50: rgba(255, 255, 255, 0.5);
    --white-60: rgba(255, 255, 255, 0.6);
    --white-70: rgba(255, 255, 255, 0.7);
    --white-80: rgba(255, 255, 255, 0.8);
    --white-90: rgba(255, 255, 255, 0.9);

    --grayscale: #171414;
    --grayscale-10: #272525;
    --grayscale-20: #3c3838;
    --grayscale-30: #565151;
    --grayscale-40: #726e6e;
    --grayscale-50: #ada8a8;
    --grayscale-60: #cac5c4;
    --grayscale-70: #f7f3f2;
    --grayscale-80: #e5e0df;

    --ivory: #f7f3f2;
    --gray: #e5e0df;
    
    --white-gradient: linear-gradient(135deg, #ffffff 0%, #e5e0df 100%);
    --black-gradient: linear-gradient(135deg, #3c3838 0%, #171414 100%);  

    --box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
    --header-shadow: 0px 2px 2px 0px rgba(var(--black), 0.1);
    --button-shadow: 0px 2px 4px 0px rgba(var(--black), 0.25);
    --input-shadow: 0px 2px 4px 0px inset rgba(var(--black), 0.07);
    --layer-shadow: 0px 0px 2px 0px rgba($black,0.14), 0px 2px 2px 0px rgba(var(--black),0.12), 0px 1px 3px 0px rgba(var(--black),0.2);
    --no-shadow: none;

    background-color: var(--ivory);
  }
`;

export default GlobalStyles;
