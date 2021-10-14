import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { Heading, Paragraph } from '../../../../../components';
import i18n from '../i18n';
import { Container, Spacing } from '../../../../../components/Layout';

export const MainTitleDescription = ({ title, description }) => {
  const intl = useIntl();
  return (
    <MainTitleWrapper>
      <Container>
        <Heading type={2}>{title}</Heading>
        <Spacing height={42} />
        <Paragraph type={1}>{description}</Paragraph>
        <br />
      </Container>
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  div {
    width: 738px;
  }
`;
