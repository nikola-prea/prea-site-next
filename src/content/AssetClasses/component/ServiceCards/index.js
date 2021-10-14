/**
 * Created by tolga.kara on 08.09.21
 * src/content/AssetClasses/component/ServiceCards
 */

import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import ServiceCard from '../../../../components/Modules/Card/ServiceCard';
import { Row } from '../../../../components/Layout';
import * as S from './style';
import i18n from '../../i18n';

export default function ServiceCards({ height, isDark, padding }) {
  const intl = useIntl();
  const serviceCards = [
    <ServiceCard
      isDark={isDark}
      height={height}
      title={intl.formatMessage(i18n.transaction)}
      path="/services/real-estate-transaction"
      layout={1 / 2}
    />,
    <ServiceCard
      isDark={isDark}
      height={height}
      title={intl.formatMessage(i18n.evaluation)}
      path="/services/real-estate-evaluation"
      layout={1 / 2}
    />,
    <ServiceCard
      isDark={isDark}
      height={height}
      title={intl.formatMessage(i18n.development)}
      path="/services/real-estate-development"
      layout={1 / 2}
    />,
    <ServiceCard
      isDark={isDark}
      height={height}
      title={intl.formatMessage(i18n.financing)}
      path="/services/real-estate-financing"
      layout={1 / 2}
    />,
  ];

  return (
    <S.CardsWrapper padding={padding}>
      <Row>{serviceCards.map((serviceCard) => serviceCard)}</Row>
    </S.CardsWrapper>
  );
}
