// import { Media } from 'gatsby-plugin-fresnel';
import { useState } from 'react';
import { FooterRow, HeaderRow, MainRow, SiteContainer, MobileFooterHeaderRow, MobileFooterRow } from './style';
// import { MobileHeader, TabletHeader, DesktopHeader } from '../HeaderNavigation';
// import MobileMenu from '../HeaderNavigation/component/MobileMenu';
// import Footer from '../Modules/Footer';
// import { TabletSubHeader, DesktopSubHeader, MobileSubHeader, BlogSubDesktopHeader } from '../SubHeader';
// import useChangeColor from '../../hooks/useChangeColor';

const DefaultLayoutMobile = ({ children }) => {
  const [activeUrl, setActiveUrl] = useState('');

  return (
    <SiteContainer>
      <MainRow type="mobile">{children}</MainRow>
      <MobileFooterRow>
        {/* <Footer device="mobile" /> */}
      </MobileFooterRow>

      <MobileFooterHeaderRow>
        {/* <MobileHeader state={activeUrl} setActiveUrl={setActiveUrl} /> */}
        {/* <MobileSubHeader currentUrl={activeUrl} /> */}
      </MobileFooterHeaderRow>
    </SiteContainer>
  );
};

const DefaultLayoutTablet = ({ children }) => {
  const [activeUrl, setActiveUrl] = useState('');
  // const { bgColor, linkColor } = useChangeColor();
  const bgColor ="var(--moon-B)"
  return (
    <SiteContainer>
      <HeaderRow>
        {/* <TabletHeader isFixed state={activeUrl} setActiveUrl={setActiveUrl} /> */}
        {/* <TabletSubHeader currentUrl={activeUrl} /> */}
      </HeaderRow>
      <MainRow type="tablet">{children}</MainRow>

      <FooterRow bgColor={bgColor}>
        {/* <Footer device="tablet" bgColor={bgColor} linkColor={linkColor} /> */}
      </FooterRow>
    </SiteContainer>
  );
};

const DefaultLayoutDesktop = ({ children, location, isHardCoded = false }) => {
  const [activeUrl, setActiveUrl] = useState('');
  // const { bgColor, linkColor } = useChangeColor();
  const bgColor ="var(--moon-B)"
  return (
    <SiteContainer>
      <HeaderRow>
        {/* <DesktopHeader isFixed={isHardCoded} state={activeUrl} setActiveUrl={setActiveUrl} /> */}
        {/* <DesktopSubHeader currentUrl={activeUrl} /> */}
      </HeaderRow>
      <MainRow type="desktop" bgColor={bgColor}>
        {children}
      </MainRow>

      <FooterRow bgColor={bgColor}>
        {/* <Footer device="desktop" bgColor={bgColor} linkColor={linkColor} /> */}
      </FooterRow>
    </SiteContainer>
  );
};
/* Default Layout with only Navbar */
const DefaultLayout = ({ children, isFixedHeader }) => (
  <>
    {/* <Media at="sm">
      <DefaultLayoutMobile>{children}</DefaultLayoutMobile>
    </Media>
    <Media at="md">
      <DefaultLayoutTablet>{children}</DefaultLayoutTablet>
    </Media> */}
      <DefaultLayoutDesktop isHardCoded={isFixedHeader}>{children}</DefaultLayoutDesktop>
    {/* <Media greaterThanOrEqual="lg">
    </Media> */}
  </>
);
export const HardSubLayout = ({ children }) => (
  <>
    {/* <Media at="sm">
      <DefaultLayoutMobile>{children}</DefaultLayoutMobile>
    </Media>
    <Media at="md">
      <DefaultLayoutTablet>{children}</DefaultLayoutTablet>
    </Media>
    <Media greaterThanOrEqual="lg">
    </Media> */}
      <DefaultLayoutDesktop isHardCoded>{children}</DefaultLayoutDesktop>
  </>
);

const BlogLayoutMobile = ({ children }) => {
  // const [activeUrl, setActiveUrl] = useState('');

  return (
    <SiteContainer>
      <MainRow type="mobile">{children}</MainRow>
      <MobileFooterRow>
        {/* <Footer device="mobile" /> */}
      </MobileFooterRow>

      <MobileFooterHeaderRow>
        {/* <MobileHeader state={activeUrl} setActiveUrl={setActiveUrl} /> */}
        {/* <MobileSubHeader currentUrl={activeUrl} /> */}
      </MobileFooterHeaderRow>
    </SiteContainer>
  );
};

const BlogLayoutTablet = ({ children }) => {
  // const [activeUrl, setActiveUrl] = useState('');

  return (
    <SiteContainer>
      <HeaderRow>
        {/* <TabletHeader state={activeUrl} setActiveUrl={setActiveUrl} /> */}
        {/* <TabletSubHeader currentUrl={activeUrl} /> */}
      </HeaderRow>
      <MainRow type="tablet">{children}</MainRow>

      <FooterRow>
        {/* <Footer device="tablet" /> */}
      </FooterRow>
    </SiteContainer>
  );
};

const BlogLayoutDesktop = ({ children, location }) => {
  // const [activeUrl, setActiveUrl] = useState('');

  return (
    <SiteContainer hidden={false}>
      <HeaderRow flexDirection="column">
        {/* <DesktopHeader state={activeUrl} setActiveUrl={setActiveUrl} isFixed={false} /> */}
      </HeaderRow>
      <MainRow type="desktop">{children}</MainRow>

      <FooterRow>
        {/* <Footer device="desktop" /> */}
      </FooterRow>
    </SiteContainer>
  );
};

export const BlogLayout = ({ children }) => (
  <>
    {/* <Media at="sm">
      <BlogLayoutMobile>{children}</BlogLayoutMobile>
    </Media>
    <Media at="md">
      <BlogLayoutTablet>{children}</BlogLayoutTablet>
    </Media>
    <Media greaterThanOrEqual="lg">
    </Media> */}
      <BlogLayoutDesktop>{children}</BlogLayoutDesktop>
  </>
);

export default DefaultLayout;
