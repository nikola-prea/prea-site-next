import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FaCheck } from 'react-icons/fa';

import { Title, Subtitle, ConfirmationWrapper } from './style';

import i18n from '../i18n';

import { Container, Row } from '../../../components/Layout';

const ConfirmationSuccess = ({ type }) => {
  const intl = useIntl();

  return type == 'datacenter' ? (
    <Container>
      <Row>
        <ConfirmationWrapper layout={1}>
          <Title layout={1}>{intl.formatMessage(i18n.successTitle)}</Title>
          <Subtitle layout={1}>
            {type == 'datacenter'
              ? intl.formatMessage(i18n.successSubtitleDownload)
              : intl.formatMessage(i18n.successSubtitle)}
          </Subtitle>
          <FaCheck size="7rem" color="green" />
        </ConfirmationWrapper>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <ConfirmationWrapper layout={1}>
          <Title layout={1}>{intl.formatMessage(i18n.successTitle)}</Title>
          <Subtitle layout={1}>
            {intl.formatMessage(i18n.successSubtitleContact)} {intl.formatMessage(i18n.successDescriptionContact)}
          </Subtitle>
          <FaCheck size="7rem" color="green" />
        </ConfirmationWrapper>
      </Row>
    </Container>
  );
};

export default ConfirmationSuccess;
