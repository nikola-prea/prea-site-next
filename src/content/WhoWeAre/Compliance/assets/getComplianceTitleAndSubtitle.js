import i18n from '../../i18n';

const getComplianceTitleAndSubtitle = (intl) => {
  const data = [
    {
      title: intl.formatMessage(i18n.compliancedataFirstTitle),
      subTitle: intl.formatMessage(i18n.compliancedataFirstSubTitle),
    },
    {
      title: intl.formatMessage(i18n.compliancedataSecondTitle),
      subTitle: intl.formatMessage(i18n.compliancedataSecondSubTitle),
    },
    {
      title: intl.formatMessage(i18n.compliancedataThirdTitle),
      subTitle: intl.formatMessage(i18n.compliancedataThirdSubTitle),
    },
    {
      title: intl.formatMessage(i18n.compliancedataFourthTitle),
      subTitle: intl.formatMessage(i18n.compliancedataFourthSubTitle),
    },
    {
      title: intl.formatMessage(i18n.compliancedataFifthTitle),
      subTitle: intl.formatMessage(i18n.compliancedataFifthSubTitle),
    },
    {
      title: intl.formatMessage(i18n.compliancedataSixTitle),
      subTitle: intl.formatMessage(i18n.compliancedataSixSubTitle),
    },
  ];

  return data;
};

export default getComplianceTitleAndSubtitle;
