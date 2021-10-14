import { useIntl, navigate } from 'gatsby-plugin-intl';
import { FaEnvelope } from 'react-icons/fa';
import { ThreeDots } from 'svg-loaders-react';

import { useEffect, useState } from 'react';
import { Container, Row } from '../../../components/Layout';
import i18n from '../i18n';
import { Title, Subtitle, Phrase, ConfirmationWrapper, Mail } from './style';

const Confirmation = ({ email, response, location }) => {
  const intl = useIntl();
  const [emailValid, setEmailValid] = useState(false);

  useEffect(async () => {
    const unmounted = false;

    if (email === undefined) {
      setEmailValid(false);
      await navigate('/contact/', {
        state: {
          message: 'Something went wrong with your E-Mail. Please try again or register again.',
          type: 'error',
        },
      });
    } else {
      setEmailValid(true);
    }
    return () => {};
  }, []);

  return emailValid ? (
    <>
      <Container>
        <Row>
          <ConfirmationWrapper layout={1}>
            <Title layout={1}>{intl.formatMessage(i18n.title)}</Title>
            <Subtitle layout={1}>{intl.formatMessage(i18n.subtitle)}</Subtitle>

            <FaEnvelope size="7rem" color="var(--gray)" />

            <Phrase layout={1}>
              {intl.formatMessage(i18n.phrase)} <Mail>{email || ''}</Mail>
            </Phrase>
          </ConfirmationWrapper>
        </Row>
      </Container>
    </>
  ) : (
    <ThreeDots fill="var(--gray)" strokeWidth="2" width={50} height={100} />
  );
};

export default Confirmation;
