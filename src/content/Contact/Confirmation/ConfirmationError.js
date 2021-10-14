import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FaTimes } from 'react-icons/fa';

import { Title, Subtitle, ConfirmationWrapper } from './style';

import i18n from '../i18n';

import { Container, Row } from '../../../components/Layout';

const ConfirmationError = () => {
  const intl = useIntl();

  return (
    <Container>
      <Row>
        <ConfirmationWrapper layout={1}>
          <Title layout={1}>{intl.formatMessage(i18n.errorTitle)}</Title>
          <Subtitle layout={1}>{intl.formatMessage(i18n.errorSubtitle)}</Subtitle>

          <FaTimes size="7rem" color="red" />
        </ConfirmationWrapper>
      </Row>
    </Container>
  );
};

export default ConfirmationError;
