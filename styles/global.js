import { createGlobalStyle } from 'styled-components';
// import CSSOverride from './overrides';

/**
 *
 * Define the global style:
 * - Import CSS variables from the theme (see gatsby-config.js)
 * - Override CSS from external libraries / plugins
 */
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    &:after {
      box-sizing: border-box;
    }
    &:before {
      box-sizing: border-box;
    }

    .grecaptcha-badge {
      z-index:1000;
      @media (max-width: 768px) and (min-width: 0px) {
        margin-bottom:7.8rem;
      }
    }
  }
  // Set your CSS Variables here
  :root{
  
    white-space: pre-line;

    --bg-main: ${({ theme }) => theme.global.bgMain};
    --color-main: ${({ theme }) => theme.global.colorMain};
    --sub-color: ${({ theme }) => theme.global.subColor};
    --bg-navbar: ${({ theme }) => theme.global.bgNavbar};
    --bg-breadcrumb-icon-color: ${({ theme }) => theme.global.breadcrumbIconColor};
    --copy-text-color: ${({ theme }) => theme.global.copyTextColor};
    --header-bg-color: ${({ theme }) => theme.global.headerBgColor};
    --svg-fill: ${({ theme }) => theme.global.svgFill};
    --svg-stroke: ${({ theme }) => theme.global.svgStroke};
    --footer-text-color: ${({ theme }) => theme.global.footerTextColor};
    --social-bg: ${({ theme }) => theme.global.socialBG};
    --footer-hr-color: ${({ theme }) => theme.global.footerHRColor};
    --footerLinkColor: ${({ theme }) => theme.global.footerLinkColor};
    --footer-link-hr:${({ theme }) => theme.global.footerLinkHR};
    --salutation-text:${({ theme }) => theme.global.salutationText};


    
    --hero-container-width:1920px;
    --archive-text-color:#212121;
    --black-out-content: #222224;
    --text-white:#fff;
    --text-dark:#222224;
    --bg-white:#fff;
    --brand-color: #ba134f;
    --red: #EC3200;
    --blue:#1D79DD;
    --green: #0B9E43;
    --gray:#707070;
    --btn-blue: #0069C1;
    --gradient-card: linear-gradient(100deg, #222224 0% rgba(255, 255,255,0) 100%);
    --bg-light-black: #222224;
    --copy-link-color:#808080;
    --footer-link-color:#707070;
    --darkmode-icon:#c4c4c4;
    --darkmode-icon-active:#fbdf52;
    --darkmode-switch-label:#808080;
    --quicklink-color:#666;
    --placeholder-search-color:#666;
    --search-close-color:#666;
    --search-hover-color:#f5f5f5;
    --search-input-bg:#1D1D1F;
    --footer-hover-link: #808080;
    --sub-link: #808080;
    --sub-link-hover: #949494;
    --breadcrumb-link:#808080;

    
    /* New Concept */
    /* Globals */
/*    --body-bgColor: ${({ theme }) => theme.global.bodyBgColor};*/
    --paragraph-color: ${({ theme }) => theme.global.paragraphColor};
    --small-color: ${({ theme }) => theme.global.smallColor};
    --heading-color: ${({ theme }) => theme.global.headingColor};
    --link-color: ${({ theme }) => theme.global.linkColor};
    --button-disabled-background: ${({ theme }) => theme.global.buttonDisabledBackground};
    --footer-bg: ${({ theme }) => theme.global.footerBG};
    --card-bg: ${({ theme }) => theme.global.cardBG};
    --menu-text-color:${({ theme }) => theme.global.menuTextColor};
    
    
    
    
    
    
    
    /* Color */
    --moon-B:#0B0D0F;
    --moon-W:#FFFFFF;
    --moon-S1:#262728;
    --moon-S2: #161A1E;


    --moon-D6:#0B0D0F;
    --moon-D5:#373839;
    --moon-D4:#4A4B4C;
    --moon-D3:#5C5D5E;
    --moon-D2:#6E7071;
    --moon-D1:#818284;
    --moon-M:#939597;
    --moon-L1:#A2A4A6;
    --moon-L2:#B2B3B5;
    --moon-L3:#C1C2C3;
    --moon-L4:#D0D1D2;
    --moon-L5:#E0E0E1;
    --moon-L6:#EFEFEF;
    
    --space-D6:#4B2B49;
    --space-D5:#583255;
    --space-D4:#643961;
    --space-D3:#71406D;
    --space-D2:#7D4779;
    --space-D1:#8A4E85;
    --space-M:#965591;
    --space-L1:#A56DA1;
    --space-L2:#B485B0;
    --space-L3:#C39DC0;
    --space-L4:#D2B5CF;
    --space-L5:#E0CDDF;
    --space-L6:#EFE6EF;

    --sun-D6:#B09135;
    --sun-D5:#BC9D38;
    --sun-D4:#C9AA3C;
    --sun-D3:#C9AA3C;
    --sun-D2:#E2C344;
    --sun-D1:#EED147;
    --sun-M:#F8DD57;
    --sun-L1:#FCE365;
    --sun-L2:#FCE77E;
    --sun-L3:#FDEC98;
    --sun-L4:#FDF1B1;
    --sun-L5:#FEF5CB;
    --sun-L6:#FEFAE4;

    --sky-D6:#234D6D;
    --sky-D5:#27587C;
    --sky-D4:#2C628B;
    --sky-D3:#316D9A;
    --sky-D2:#3677A8;
    --sky-D1:#3A82B7;
    --sky-M:#3F8CC6;
    --sky-L1:#5A9CCE;
    --sky-L2:#75ADD6;
    --sky-L3:#91BDDE;
    --sky-L4:#ACCDE6;
    --sky-L5:#C7DEEE;
    --sky-L6:#E2EEF7;

    --love-D6:#721F29;
    --love-D5:#84242F;
    --love-D4:#972936;
    --love-D3:#B23040;
    --love-D2:#BD3344;
    --love-D1:#D0384A;
    --love-M:#E33D51;
    --love-L1:#E7596A;
    --love-L2:#EB7482;
    --love-L3:#EF8F9B;
    --love-L4:#F3ABB4;
    --love-L5:#F7C6CC;
    --love-L6:#FBE2E5;
   
    --earth-D6:#44672F;
    --earth-D5:#4F7636;
    --earth-D4:#5A843C;
    --earth-D3:#669243;
    --earth-D2:#72A049;
    --earth-D1:#7FAE50;
    --earth-M:#8CBC56;
    --earth-L1:#9CC66E;
    --earth-L2:#ADCF86;
    --earth-L3:#BDD99E;
    --earth-L4:#CDE2B6;
    --earth-L5:#DEECCE;
    --earth-L6:#EEF5E6;

    --fire-D6:#865128;
    --fire-D5:#995D2D;
    --fire-D4:#AB6832;
    --fire-D3:#BD7438;
    --fire-D2:#CF803D;
    --fire-D1:#E28D43;
    --fire-M:#F49948;
    --fire-L1:#F6A862;
    --fire-L2:#F7B67C;
    --fire-L3:#F9C496;
    --fire-L4:#FAD3B0;
    --fire-L5:#FCE1CA;
    --fire-L6:#FDF0E4;
    
    /*Spacing*/
    --card-radius:10px;
    --card-gap: 24px;
    --card-shadow: drop-shadow(0px 4px 4px rgba(199, 199, 199, 0.25));
    /*TODO in the design it is 1000 px but this looks awkward*/
    --container-width: 1420px;
    --card-container-width:1200px;
    
  }

  body, html {
    margin: 0;
    padding: 0;
    background: var(--bg-main);
    color: var(--color-main);
    font-size:16px;
    position: relative;
    height:100%;
    max-height: 100%;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  h3,h2 {
    line-height: 1.05;
    font-weight: 600;
    letter-spacing: -.01em;
    font-size: 2.2rem;
  }

  // Import your CSS overrides here
  `;
  // ${CSSOverride}

export default GlobalStyle;
