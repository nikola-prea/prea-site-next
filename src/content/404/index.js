import { navigate, useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import { useEffect, useState } from 'react';
import i18n from './i18n';
import { Button } from '../../components/Atoms/Button';
// import { Container, Row } from '../../components/Layout';
import { Container, MainTitle, SubTitle, ExplanationText, Uppercase } from './style';

const NotFound = ({ location }) => {
  const intl = useIntl();
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();
  const [render404, setRender404] = useState(false);
  const redirectWhiteList = [
    {
      pathName: '/transaction',
      to: '/services/real-estate-transaction',
    },
    {
      pathName: '/development',
      to: '/services/real-estate-development',
    },
    {
      pathName: '/financing',
      to: '/services/real-estate-financing',
    },
    {
      pathName: '/valuation',
      to: '/services//real-estate-evaluation',
    },
    {
      pathName: '/mercury',
      to: '/technologies/mercury',
    },
    {
      pathName: '/care',
      to: '/who-we-are/sustainability',
    },
    {
      pathName: '/principles',
      to: '/who-we-are/compliance',
    },
  ];

  const checkForPathName = () => {
    const urlFound = redirectWhiteList.find((item) => location?.pathname?.includes(item.pathName));
    if (urlFound) {
      return navigate(urlFound.to);
    }
    return setRender404(true);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // changeThemeSetting('light');
    }
    checkForPathName();
  }, []);

  return (
    <>
      {render404 && (
        <Container>
          <MainTitle>{intl.formatMessage(i18n.notFound)}</MainTitle>
          <SubTitle>{intl.formatMessage(i18n.notFoundSubTitle)}</SubTitle>
          <ExplanationText>{intl.formatMessage(i18n.explanationText)}</ExplanationText>
          <Uppercase>
            <Button round={100} onClick={() => navigate('/')}>
              {intl.formatMessage(i18n.returnButton)}
            </Button>
          </Uppercase>
          {/* <h1>{intl.formatMessage(i18n.notFound)}</h1> */}
          {/* <p>Not the page you are looking for ?</p> */}
        </Container>
      )}
    </>
  );
};

export default NotFound;
